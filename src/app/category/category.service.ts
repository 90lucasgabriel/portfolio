// IMPORTS -----------------------------------------------------
  // ANGULAR ----------
  import { Injectable }                 from '@angular/core';
  import { AngularFirestoreCollection } from '@angular/fire/firestore';
  import { Observable }                 from 'rxjs';

  // OWNER ------------
  import { Category }                   from '@r-category/category.model';
  import { FirestoreService }           from '@r-services/firestore.service';




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