// IMPORTS -----------------------------------------------------
  import { Injectable }                 from '@angular/core';
  import { AngularFirestore, AngularFirestoreCollection, DocumentSnapshot } from '@angular/fire/firestore';
  import { Observable, combineLatest }  from 'rxjs';
  import { map, switchMap }             from 'rxjs/operators';

  import { Project, ProjectImages }     from './project.model';
  import { FirestoreService }           from '../common/services/firestore.service';


@Injectable()
export class ProjectService {
// DECLARATIONS --------------------------------------------------
  private PATH:                         string = 'projects/';
  private entity:                       string = 'projects';
  private projectCollection:            AngularFirestoreCollection<Project>;
  private projectList:                  Observable<Project[]>;  
  varExtractor = new RegExp("return (.*);");
  


// METHODS -------------------------------------------------------
  public query(): Observable<Array<Project>> {
    return this.fs.colWithIds$(this.entity);
  }
  
  public get(id: string): Observable<Project> {
    return this.fs.docWithIds$(`${this.entity}/${id}`);
  }

  public colWithSubcollections(subcollections: string[],  queryFn?): Observable<Project[]> {
    return this.fs.colWithSubcollections(this.entity, subcollections, ref => ref.orderBy('index', 'desc'));    
  }

  public docWithSubcollections(id: string, subcollections: string[]): Observable<any> {
    return this.fs.docWithSubcollections(`${this.entity}/${id}`, subcollections);    
  }

  /*public querySubcollections(): Observable<Array<Project>> {    
    
    return this.query()
    .pipe(
      switchMap(list => {
        const res = this.getImages(list as Array<Project>); // returns [Observable, Observable, Observable]
        return combineLatest(...res);
      })
    )
    .pipe(
      switchMap(list => {
        const res = this.getVideos(list as Array<Project>); // returns [Observable, Observable, Observable]
        return combineLatest(...res);
      })
    );
  }

  public getSubcollections(id: string): Observable<Project> {
    return this.fs.docWithIds$(`${this.entity}/${id}`)
    .pipe(switchMap((item) => {
        const res = this.getImages([item] as Array<Project>); // returns [Observable, Observable, Observable]
        return combineLatest(...res);
      })
    )
  }

  public getImages(list: Array<Project> | Project) {
    if (list instanceof Array) {
      return list.map(item => {
        return this.fs
          .col$(`${this.entity}/${item.id}/images`)
          .pipe(
            map(images => Object.assign(item, {images}))    // map(images => {return {images, ...item}})
          );
      });
    } else {
      return this.fs
        .col$(`${this.entity}/${list.id}/images`)
        .pipe(
          map(images => Object.assign(list, {images}))    // map(images => {return {images, ...item}})
        );
    }
    
  }

  public getVideos(list: Array<Project> | Project) {
    if (list instanceof Array) {
      return list.map(item => {
          return this.fs
            .col$(`${this.entity}/${item.id}/videos`)
            .pipe(
              map(videos => Object.assign(item, {videos}))    // map(images => {return {images, ...item}})
            );
        });
    } else {
      return this.fs
        .col$(`${this.entity}/${list.id}/videos`)
        .pipe(
          map(videos => Object.assign(list, {videos}))    // map(images => {return {images, ...item}})
        );
    }
  }*/


// OTHERS ---------------------------------------------------------
  constructor(private db: AngularFirestore,
  private fs: FirestoreService) {    
    this.projectCollection = this.db.collection<Project>(this.entity);
  }

}