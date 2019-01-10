// IMPORTS -----------------------------------------------------
  import { Injectable }                 from '@angular/core';
  import { AngularFirestore, AngularFirestoreCollection, DocumentSnapshot } from '@angular/fire/firestore';
  import { Observable }                 from 'rxjs';

  import { Tag }                        from './tag.model';
  import { FirestoreService }           from '../common/services/firestore.service';
import { map } from 'rxjs/operators';


@Injectable()
export class TagService {
// DECLARATIONS --------------------------------------------------
  private PATH:                         string = 'tags/';
  private entity:                       string = 'tags';
  private tagCollection:                AngularFirestoreCollection<Tag>;
  private tagList:                      Observable<Tag[]>;
  


// METHODS -------------------------------------------------------
  public query(): Observable<Tag[]> {
    return this.fs.colWithIds$(this.entity);
  }

  public queryFeatured(): Observable<Tag[]> {
    return this.fs.colWithIds$(this.entity).pipe(
      map( 
        tag => {
          return tag.filter( t => t.featured);
        }
    ));
  }
  
  public get(id: string): Observable<Tag> {
    return this.fs.docWithIds$(`${this.entity}/${id}`);
  }

  public colWithSubcollections(subcollections: string[],  queryFn?): Observable<Tag[]> {
    return this.fs.colWithSubcollections(this.entity, subcollections, ref => ref.orderBy('index', 'desc'));    
  }

  public docWithSubcollections(id: string, subcollections: string[]): Observable<any> {
    return this.fs.docWithSubcollections(`${this.entity}/${id}`, subcollections);    
  }


// OTHERS ---------------------------------------------------------
  constructor(private db: AngularFirestore,
  private fs: FirestoreService) {    
    this.tagCollection = this.db.collection<Tag>(this.entity);
  }

}