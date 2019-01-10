// IMPORTS -----------------------------------------------------
  import { Injectable }                 from '@angular/core';
  import { AngularFirestore, AngularFirestoreCollection, DocumentSnapshot } from '@angular/fire/firestore';
  import { Observable, combineLatest }  from 'rxjs';
  import { map, switchMap }             from 'rxjs/operators';

  // import { any, AboutImages }         from './about.model';
  import { FirestoreService }           from '../common/services/firestore.service';


@Injectable()
export class AboutService {
// DECLARATIONS --------------------------------------------------
  private PATH:                         string = 'about/';
  private entity:                       string = 'about';
  private aboutCollection:              AngularFirestoreCollection<any>;
  private aboutList:                    Observable<any[]>;  
  varExtractor = new RegExp("return (.*);");
  


// METHODS -------------------------------------------------------
  public query(): Observable<Array<any>> {
    return this.fs.colWithIds$(this.entity);
  }
  
  public get(id: string): Observable<any> {
    return this.fs.docWithIds$(`${this.entity}/${id}`);
  }

  public colWithSubcollections(subcollections: string[],  queryFn?): Observable<any[]> {
    return this.fs.colWithSubcollections(this.entity, subcollections, ref => ref.orderBy('index', 'desc'));    
  }

  public docWithSubcollections(id: string, subcollections: string[]): Observable<any> {
    return this.fs.docWithSubcollections(`${this.entity}/${id}`, subcollections);    
  }



// OTHERS ---------------------------------------------------------
  constructor(private db: AngularFirestore,
  private fs: FirestoreService) {    
    this.aboutCollection = this.db.collection<any>(this.entity);
  }

}