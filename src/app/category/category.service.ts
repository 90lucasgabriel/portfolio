// IMPORTS -----------------------------------------------------
  import { Injectable }                 from '@angular/core';
  import { AngularFirestore, AngularFirestoreCollection, DocumentSnapshot } from '@angular/fire/firestore';
  import { Observable, combineLatest }  from 'rxjs';
  import { map, switchMap }             from 'rxjs/operators';

  import { Category }                   from './category.model';
  import { Project, ProjectImages }     from '../project/project.model';
  import { FirestoreService }           from '../common/services/firestore.service';




@Injectable()
export class CategoryService {
// DECLARATIONS --------------------------------------------------
  private PATH:               string = 'categories/';
  private entity:             string = 'categories';
  private categoryCollection: AngularFirestoreCollection<Category>;
  private categoryList:       Observable<Category[]>;

  


// METHODS -------------------------------------------------------
  public query(): Observable<Array<Category>> {
    return this.fs.colWithIds$(this.entity);
  }
  
  public get(docPredicate: string): Observable<Category> {
    return this.fs.docWithIds$(docPredicate);
  }




// OTHERS ---------------------------------------------------------
  constructor(private fs: FirestoreService) { }
}