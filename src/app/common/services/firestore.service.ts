  import { Injectable } from '@angular/core';
  import * as firebase from 'firebase/app';
  import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
  import { Observable, combineLatest }  from 'rxjs';
  import { map, tap, take, switchMap, mergeMap, expand, takeWhile }                  from 'rxjs/operators';


type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;

@Injectable()
export class FirestoreService {

  constructor(private db: AngularFirestore) { }

  /// **************
  /// Get a Reference
  /// **************
  public col<T>(ref: CollectionPredicate<T>, queryFn?): AngularFirestoreCollection<T> {
    return typeof ref === 'string' ? this.db.collection<T>(ref, queryFn) : ref;
  }

  public doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === 'string' ? this.db.doc<T>(ref) : ref;
  }

  /// **************
  /// Get Data
  /// **************
  public doc$<T>(ref: DocPredicate<T>): Observable<T> {
    return this.doc(ref).snapshotChanges().pipe(map(doc => {
      return doc.payload.data() as T;
    }));
  }

  public col$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<T[]> {
    return this.col(ref, queryFn).snapshotChanges().pipe(map(docs => {
      return docs.map(a => a.payload.doc.data()) as T[];
    }));
  }

  /// with Ids
  public colWithIds$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<any[]> {
    return this.col(ref, queryFn).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return Object.assign({id: id}, data);
      });
    }));
  }

  /// with Ids
  public docWithIds$<T>(ref: DocPredicate<T>): Observable<any> {
    return this.doc(ref).snapshotChanges().pipe(map(a => {
      // return actions.map(a => {

      // });
      const data = a.payload.data();
      const id = a.payload.id;
      return Object.assign({id: id}, data);
    }));
  }
  

//  public getSubcollection

  public colWithSubcollections<T>(ref: CollectionPredicate<T>, subcollections: string[],  queryFn?): Observable<any[]> {
    let col = this.colWithIds$(ref, queryFn);
    
    subcollections.forEach(sub => {
      col = col.pipe(
      switchMap(list => {
        const res = this.getSubcollection(ref, sub, list as Array<any>); 
        return combineLatest(...res);
      })
      );
    });    

    return col;
  }

  public docWithSubcollections<T>(ref: string, subcollections: string[],  queryFn?): Observable<any[]> {
    let doc = this.docWithIds$(ref);
    
    subcollections.forEach(sub => {
      doc = doc.pipe(
      switchMap(item => {
        const res = this.getDocSubcollection(ref, sub, item as any);
        return res;
      })
      );
    });    

    return doc;
  }

  private getSubcollection<T>(ref: CollectionPredicate<T>, name: string, list: any[]) {
    return list.map(item => {
        return this
          .col$(`${ref}/${item.id}/${name}`)
          .pipe(
            map((items) => {
              if (items.length > 0) {
                return Object.assign(item, {[name]: items});  
              }
              return item;
            })
          );
      });
  }

  private getDocSubcollection<T>(ref: DocPredicate<T>, name: string, item: any) {
    return this
      .col$(`${ref}/${name}`)
      .pipe(
        map((items) => {
          if (items.length > 0) {
            return Object.assign(item, {[name]: items});  
          }
          return item;
        })
      );
  }

  /// **************
  /// Write Data
  /// **************
  /// Firebase Server Timestamp
  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  set<T>(ref: DocPredicate<T>, data: any) {
    const timestamp = this.timestamp;
    return this.doc(ref).set({
      ...data,
      updated_at: timestamp,
      created_at: timestamp
    });
  }

  update<T>(ref: DocPredicate<T>, data: any) {
    return this.doc(ref).update({
      ...data,
      updated_at: this.timestamp
    });
  }

  delete<T>(ref: DocPredicate<T>) {
    return this.doc(ref).delete();
  }

  public add<T>(ref: CollectionPredicate<T>, data) {
    const timestamp = this.timestamp;
    return this.col(ref).add({
      ...data,
      updated_at: timestamp,
      created_at: timestamp
    });
  }

  geopoint(lat: number, lng: number) {
    return new firebase.firestore.GeoPoint(lat, lng);
  }

  /// If doc exists update, otherwise set
  upsert<T>(ref: DocPredicate<T>, data: any) {
    const doc = this.doc(ref).snapshotChanges().pipe(take(1)).toPromise();
    return doc.then(snap => {
      return snap.payload.exists ? this.update(ref, data) : this.set(ref, data);
    });
  }

  /// **************
  /// Inspect Data
  /// **************
  inspectDoc(ref: DocPredicate<any>): void {
    const tick = new Date().getTime();
    this.doc(ref).snapshotChanges()
      .pipe(take(1))
      .pipe(
      tap(d => {
        const tock = new Date().getTime() - tick;
        console.log(`Loaded Document in ${tock}ms`, d);
      }))
      .subscribe();
  }

  inspectCol(ref: CollectionPredicate<any>): void {
    const tick = new Date().getTime();
    this.col(ref).snapshotChanges()
      .pipe(take(1))
      .pipe(
      tap(c => {
        const tock = new Date().getTime() - tick;
        console.log(`Loaded Collection in ${tock}ms`, c);
      }))
      .subscribe();
  }
  /// **************
  /// Create and read doc references
  /// **************
  /// create a reference between two documents
  connect(host: DocPredicate<any>, key: string, doc: DocPredicate<any>) {
    return this.doc(host).update({ [key]: this.doc(doc).ref });
  }
  /// returns a documents references mapped to AngularFirestoreDocument
  docWithRefs$<T>(ref: DocPredicate<T>) {
    return this.doc$(ref).pipe(map(doc => {
      for (const k of Object.keys(doc)) {
        if (doc[k] instanceof firebase.firestore.DocumentReference) {
          doc[k] = this.doc(doc[k].path);
        }
      }
      return doc;
    }));
  }
  /// **************
  /// Atomic batch example
  /// **************
  /// Just an example, you will need to customize this method.
  atomic() {
    const batch = firebase.firestore().batch();
    /// add your operations here
    const itemDoc = firebase.firestore().doc('items/myCoolItem');
    const userDoc = firebase.firestore().doc('users/userId');
    const currentTime = this.timestamp;
    batch.update(itemDoc, { timestamp: currentTime });
    batch.update(userDoc, { timestamp: currentTime });
    /// commit operations
    return batch.commit();
  }

}