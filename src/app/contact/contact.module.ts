// IMPORTS ----------------------------------
  // ANGULAR --------
  import { NgModule }                   from '@angular/core';
  import { CommonModule }               from '@angular/common';
  import { HttpClientModule }           from '@angular/common/http';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { MaterialModule }             from '@r-material/material.module';
  
  // OWNER --------
  import { ContactRoutingModule }       from '@r-contact/contact-routing.module';
  import { ContactService }             from '@r-contact/contact.service';
  import { ContactListComponent }       from '@r-contact/contact-list/contact-list.component';

  // THIRD -----------
  import { RecaptchaModule }            from 'ng-recaptcha';
  import { RecaptchaFormsModule }       from 'ng-recaptcha/forms';
  import { AngularFontAwesomeModule }   from 'angular-font-awesome';



/**
 * Contact module
 *
 * @export
 * @class ContactModule
 */
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    AngularFontAwesomeModule,
    
    ContactRoutingModule
  ],
  declarations: [ContactListComponent],
  providers:    [ContactService]
})
export class ContactModule {}