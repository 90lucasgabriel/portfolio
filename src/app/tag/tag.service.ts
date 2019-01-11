// IMPORTS -----------------------------------------------------
  // ANGULAR ---------
  import { Injectable }                 from '@angular/core';
  import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
  import { Observable }                 from 'rxjs';
  import { map }                        from 'rxjs/operators';

  // OWNER -----------
  import { Tag }                        from '@r-tag/tag.model';
  import { FirestoreService }           from '@r-services/firestore.service';




/**
 * Tag Service
 *
 * @export
 * @class TagService
 */
@Injectable()
export class TagService {
// DECLARATIONS --------------------------------------------------
  private PATH:                         string = 'tags/';
  private entity:                       string = 'tags';
  private tagCollection:                AngularFirestoreCollection<Tag>;
  private tagList:                      Observable<Tag[]>;
  



// METHODS -------------------------------------------------------
  /**
   * Get a list
   *
   * @returns {Observable<Tag[]>}
   * @memberof TagService
   */
  public query(): Observable<Tag[]> {
    return this.fs.colWithIds$(this.entity);
  }

  /**
   * Get a list with 'featured' property
   *
   * @returns {Observable<Tag[]>}
   * @memberof TagService
   */
  public queryFeatured(): Observable<Tag[]> {
    return this.fs.colWithIds$(this.entity).pipe(
      map( 
        tag => {
          return tag.filter( t => t.featured);
        }
    ));
  }
  
  /**
   * Get a specific object
   *
   * @param {string} id
   * @returns {Observable<Tag>}
   * @memberof TagService
   */
  public get(id: string): Observable<Tag> {
    return this.fs.docWithIds$(`${this.entity}/${id}`);
  }

  /**
   * Get a list with subcollections
   *
   * @param {string[]} subcollections
   * @param {*} [queryFn]
   * @returns {Observable<Tag[]>}
   * @memberof TagService
   */
  public colWithSubcollections(subcollections: string[],  queryFn?): Observable<Tag[]> {
    return this.fs.colWithSubcollections(this.entity, subcollections, ref => ref.orderBy('index', 'desc'));    
  }

  /**
   * Get a specific object with subcollections
   *
   * @param {string} id
   * @param {string[]} subcollections
   * @returns {Observable<any>}
   * @memberof TagService
   */
  public docWithSubcollections(id: string, subcollections: string[]): Observable<any> {
    return this.fs.docWithSubcollections(`${this.entity}/${id}`, subcollections);    
  }


// OTHERS ---------------------------------------------------------
  /**
   * Creates an instance of TagService.
   * @param {AngularFirestore} db
   * @param {FirestoreService} fs
   * @memberof TagService
   */
  constructor(private db: AngularFirestore,
  private fs: FirestoreService) {    
    this.tagCollection = this.db.collection<Tag>(this.entity);
  }

}