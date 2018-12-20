// IMPORTS ---------------------------
  import { Component, ChangeDetectorRef, OnInit, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
  import { FormControl, FormGroupDirective, FormBuilder, FormGroup, Validators }  from '@angular/forms';
  import { MediaMatcher }           from '@angular/cdk/layout';
  import { SelectionModel }         from '@angular/cdk/collections';
  import { Router }                 from '@angular/router';
  import { Location }               from '@angular/common';
  import { MatSnackBar, MatSnackBarVerticalPosition } from '@angular/material';

  import { Contact }                from '../contact.model';
  import { ContactService }         from '../contact.service';




/**
 * List Contact
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
export class ContactListComponent implements OnInit, OnDestroy {
// DECLARATIONS --------------------------
  @ViewChild(FormGroupDirective) myForm;
  public loading:               boolean;
  public recaptcha:             boolean;
  public contactForm:           FormGroup;
  public validationMessages:    any;  

  private mobileQuery:          MediaQueryList;
  private _mobileQueryListener: () => void;




// MAIN ----------------------------------
  /**
   * Execute before onInit
   */
  private start() {
    this.verifyMobile(this.changeDetectorRef, this.media);
    this.contactForm        = this.createForm();    
  }  

  /**
   * Save form on Firestore 'contacts' collection
   * @param {FormGroup} contactForm
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
   * @param {Router} router
   * @param {MatSnackBar} snackbar
   * @param {ContactService} service
   * @param {FormBuilder} fb
   * @memberof ContactListComponent
   */
  constructor(
    private changeDetectorRef:  ChangeDetectorRef,
    private media:              MediaMatcher,
    private location:           Location,
    private router:             Router,
    private snackBar:           MatSnackBar,
    private service:            ContactService,
    private fb:                 FormBuilder
  ) {
    this.start();
  }

  /**
   * Create validations and FormControls
   * @returns FormGroup
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
    this.snackBar.open(message, action, {
        duration: 5000,
        verticalPosition: position
      });
  }

  /**
   * Check the screen size
   * @param {ChangeDetectorRef} changeDetectorRef
   * @param {MediaMatcher} media
   */
  private verifyMobile(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher): void {
    this.mobileQuery          = media.matchMedia('(max-width: 1279px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  /**
   * Go to latest route
   */
  public goBack() {
    this.location.back();
  }
  /**
   * Execute on init
   */
  public ngOnInit() { }

  /**
   * Execute on destroy
   */
  public ngOnDestroy() { }
}