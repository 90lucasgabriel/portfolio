// IMPORTS ----------------------------------
  import { NgModule }                   from '@angular/core';
  import { CommonModule }               from '@angular/common';
  import { HttpClientModule }           from '@angular/common/http';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { MaterialModule }             from '../material/material.module';
  import { RecaptchaModule }            from 'ng-recaptcha';
  import { RecaptchaFormsModule }       from 'ng-recaptcha/forms';

  import { ContactRoutingModule }       from './contact-routing.module';
  import { ContactService }             from './contact.service';
  import { ContactListComponent }       from './contact-list/contact-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    
    ContactRoutingModule
  ],
  declarations: [ContactListComponent],
  providers:    [ContactService]
})
export class ContactModule {}