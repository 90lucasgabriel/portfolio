// IMPORTS -----------------------------------------------------
  // ANGULAR -----------
  import { Injectable }                 from '@angular/core';
  import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
  import { Observable }                 from 'rxjs';

  // OWNER -------------
  import { Project, ProjectImages }     from '@r-project/project.model';
  import { FirestoreService }           from '@r-services/firestore.service';




/**
 * Project Service
 *
 * @export
 * @class ProjectService
 */
@Injectable()
export class ProjectService {
// DECLARATIONS --------------------------------------------------
  private PATH:                         string = 'projects/';
  private entity:                       string = 'projects';
  private projectCollection:            AngularFirestoreCollection<Project>;
  private projectList:                  Observable<Project[]>; 
  


// METHODS -------------------------------------------------------
  /**
   * Get a list
   *
   * @returns {Observable<Project[]>}
   * @memberof ProjectService
   */
  public query(): Observable<Project[]> {
    return this.fs.colWithIds$(this.entity);
  }
  
  /**
   * Get a specific object
   *
   * @param {string} id
   * @returns {Observable<Project>}
   * @memberof ProjectService
   */
  public get(id: string): Observable<Project> {
    return this.fs.docWithIds$(`${this.entity}/${id}`);
  }

  /**
   * Get a list with subcollections
   *
   * @param {string[]} subcollections
   * @param {*} [queryFn]
   * @returns {Observable<Project[]>}
   * @memberof ProjectService
   */
  public colWithSubcollections(subcollections: string[],  queryFn?): Observable<Project[]> {
    return this.fs.colWithSubcollections(this.entity, subcollections, ref => ref.orderBy('index', 'desc'));    
  }

  /**
   * Get a specific object with subcollections
   *
   * @param {string} id
   * @param {string[]} subcollections
   * @returns {Observable<any>}
   * @memberof ProjectService
   */
  public docWithSubcollections(id: string, subcollections: string[]): Observable<any> {
    return this.fs.docWithSubcollections(`${this.entity}/${id}`, subcollections);    
  }




// OTHERS ---------------------------------------------------------
  /**
   * Creates an instance of ProjectService.
   * @param {AngularFirestore} db
   * @param {FirestoreService} fs
   * @memberof ProjectService
   */
  constructor(private db: AngularFirestore,
  private fs: FirestoreService) {    
    this.projectCollection = this.db.collection<Project>(this.entity);
  }

}