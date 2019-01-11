// IMPORTS -----------------------------------------------------
  // ANGULAR ---------
  import { Injectable }                 from '@angular/core';
  import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
  import { Observable }                 from 'rxjs';

  // OWNER ---------
  import { About }                      from '@r-about/about.model';
  import { FirestoreService }           from '@r-services/firestore.service';




@Injectable()
export class AboutService {
// DECLARATIONS --------------------------------------------------
  private PATH:                         string = 'about/';
  private entity:                       string = 'about';
  private aboutCollection:              AngularFirestoreCollection<any>;
  private aboutList:                    Observable<any[]>;
  



// METHODS -------------------------------------------------------
  /**
   * Get a list
   *
   * @returns {Observable<About[]>}
   * @memberof AboutService
   */
  public query(): Observable<About[]> {
    return this.fs.colWithIds$(this.entity);
  }
  
  /**
   * Get a specific object
   *
   * @param {string} id
   * @returns {Observable<About>}
   * @memberof AboutService
   */
  public get(id: string): Observable<About> {
    return this.fs.docWithIds$(`${this.entity}/${id}`);
  }

  /**
   * Get a list with subcollections
   *
   * @param {string[]} subcollections
   * @param {*} [queryFn]
   * @returns {Observable<any[]>}
   * @memberof AboutService
   */
  public colWithSubcollections(subcollections: string[],  queryFn?): Observable<any[]> {
    return this.fs.colWithSubcollections(this.entity, subcollections, ref => ref.orderBy('index', 'desc'));
  }

  /**
   * Get a specific object with subcollections
   *
   * @param {string} id
   * @param {string[]} subcollections
   * @returns {Observable<any>}
   * @memberof AboutService
   */
  public docWithSubcollections(id: string, subcollections: string[]): Observable<any> {
    return this.fs.docWithSubcollections(`${this.entity}/${id}`, subcollections);    
  }




// OTHERS ---------------------------------------------------------
  /**
   *Creates an instance of AboutService.
   * @param {AngularFirestore} db
   * @param {FirestoreService} fs
   * @memberof AboutService
   */
  constructor(private db: AngularFirestore,
  private fs: FirestoreService) {    
    this.aboutCollection = this.db.collection<About>(this.entity);
  }

}