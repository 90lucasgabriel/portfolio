// IMPORTS -----------------------------------------------------
  import { Injectable }                 from '@angular/core';
  import { AngularFirestore, AngularFirestoreCollection, DocumentSnapshot } from '@angular/fire/firestore';
  import { Observable, combineLatest }  from 'rxjs';
  import { map, switchMap }             from 'rxjs/operators';

  import { Contact }                    from './contact.model';
  import { FirestoreService }           from '../common/services/firestore.service';




@Injectable()
export class ContactService {
// DECLARATIONS --------------------------------------------------
  private PATH:                         string = 'contacts/';
  private entity:                       string = 'contacts';
  private contactCollection:            AngularFirestoreCollection<Contact>;
  private contactList:                  Observable<Contact[]>;




// METHODS -------------------------------------------------------
  public add(ref: string, data: Contact) {
    console.log('ref', ref);
    console.log('data', data);
    return this.fs.add(ref, data);
  }




// OTHERS ---------------------------------------------------------
  constructor(private fs: FirestoreService) { }

}