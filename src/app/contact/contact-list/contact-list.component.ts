// IMPORTS ---------------------------------------------
  // ANGULAR ------------
  import { Component, ChangeDetectorRef, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
  import { FormControl, FormGroupDirective, FormBuilder, FormGroup, Validators }  from '@angular/forms';
  import { MediaMatcher }           from '@angular/cdk/layout';
  import { Location }               from '@angular/common';
  import { MatSnackBarVerticalPosition } from '@angular/material';
  import { Observable }             from 'rxjs';

  // OWNER --------------
  import { About }                  from '@r-about/about.model';
  import { Contact }                from '@r-contact/contact.model';
  import { ContactService }         from '@r-contact/contact.service';
  import { MaterialService }        from '@r-material/material.service';
  import { AboutService }           from '@r-about/about.service';




/**
 * Contact List Component
 *
 * @export
 * @class ContactListComponent
 * @implements {OnInit}
 */
@Component({
  selector:           'app-contact-list',
  templateUrl:        './contact-list.component.html',
  styleUrls:          ['./contact-list.component.css'],
  encapsulation:      ViewEncapsulation.None
})
export class ContactListComponent implements OnInit {
// DECLARATIONS --------------------------
  @ViewChild(FormGroupDirective) myForm;
  public loading:               boolean;
  public recaptcha:             boolean;
  public contactForm:           FormGroup;
  public validationMessages:    any; 
  public aboutList:             Observable<About[]>;

  private mobileQuery:          MediaQueryList;
  private _mobileQueryListener: () => void;




// MAIN ----------------------------------
  /**
   * Execute before onInit
   *
   * @private
   * @memberof ContactListComponent
   */
  private start() {
    this.aboutList      = this.aboutService.colWithSubcollections(['social']);
    this.verifyMobile(this.changeDetectorRef, this.media);
    this.contactForm        = this.createForm();    
  }  

  /**
   * Save form on Firestore 'contacts' collection
   *
   * @param {FormGroup} contactForm
   * @memberof ContactListComponent
   */
  public sendForm(contactForm: FormGroup) {
    if (this.contactForm.status == 'VALID') {
      this.service.add(`contacts`, contactForm.value)
        .then(success => {
          this.openSnackBar(`Sua mensagem foi enviada.`, 'OK');
          if (this.myForm) {
            this.myForm.resetForm();
          }
        })
        .catch(error => {
          this.openSnackBar(`Erro ao enviar a mensagem. ${error}`, 'OK');
        });
    }
  }




// OTHERS --------------------------------
  /**
   * Creates an instance of ContactListComponent.
   * @param {ChangeDetectorRef} changeDetectorRef
   * @param {MediaMatcher} media
   * @param {Location} location
   * @param {FormBuilder} fb
   * @param {MaterialService} material
   * @param {ContactService} service
   * @memberof ContactListComponent
   */
  constructor(
    private changeDetectorRef:  ChangeDetectorRef,
    private media:              MediaMatcher,
    private location:           Location,
    private fb:                 FormBuilder,
    private material:           MaterialService,
    private service:            ContactService,
    private aboutService:       AboutService,
  ) { }

  /**
   * Create validations and FormControls
   *
   * @private
   * @returns {FormGroup}
   * @memberof ContactListComponent
   */
  private createForm(): FormGroup {
    this.validationMessages = {
      'name': [
        { type: 'required',       message: 'Nome é obrigatório' }
      ],
      'email': [
        { type: 'required',       message: 'Email é obrigatório' },
        { type: 'email',          message: 'Insira um email válido' }
      ],
      'message': [
        { type: 'required',       message: 'Mensagem é obrigatória' }
      ]
    }

    return this.fb.group({
      name:               new FormControl('',   [Validators.required]),
      email:              new FormControl('',   [Validators.required, Validators.email]),
      phone:              new FormControl(''),
      message:            new FormControl('',   [Validators.required]),
      recaptcha:          new FormControl(null, [Validators.required])
    });
  }

  /**
   * Show snackbar
   * @param {string} message
   * @param {string} action
   */
  private openSnackBar(message: string, action: string): void {
    let position: MatSnackBarVerticalPosition = 'bottom';
    if (this.mobileQuery.matches) {
      position = 'top'
    }
    this.material.snackBar(message, action, position);
  }

  /**
   * Check the screen size
   *
   * @private
   * @param {ChangeDetectorRef} changeDetectorRef
   * @param {MediaMatcher} media
   * @memberof ContactListComponent
   */
  private verifyMobile(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher): void {
    this.mobileQuery          = media.matchMedia('(max-width: 1279px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  /**
   * Go to latest route
   *
   * @memberof ContactListComponent
   */
  public goBack(): void {
    this.location.back();
  }
  
  /**
   * Execute on init
   *
   * @memberof ContactListComponent
   */
  public ngOnInit(): void {
    this.start();
   }

}