// IMPORTS -----------------------------------------------------
  // ANGULAR ----------
  import { Injectable }                 from '@angular/core';
  import { AngularFirestoreCollection } from '@angular/fire/firestore';
  import { Observable }                 from 'rxjs';

  // OWNER ------------
  import { Contact }                    from '@r-contact/contact.model';
  import { FirestoreService }           from '@r-services/firestore.service';



/**
 * Contact Service
 *
 * @export
 * @class ContactService
 */
@Injectable()
export class ContactService {
// DECLARATIONS --------------------------------------------------
  private PATH:                         string = 'contacts/';
  private entity:                       string = 'contacts';
  private contactCollection:            AngularFirestoreCollection<Contact>;
  private contactList:                  Observable<Contact[]>;




// METHODS -------------------------------------------------------
  /**
   * Insert item into collection
   *
   * @param {string} ref
   * @param {Contact} data
   * @returns
   * @memberof ContactService
   */
  public add(ref: string, data: Contact) {
    return this.fs.add(ref, data);
  }




// OTHERS ---------------------------------------------------------
  /**
   * Creates an instance of ContactService.
   * @param {FirestoreService} fs
   * @memberof ContactService
   */
  constructor(private fs: FirestoreService) { }

}