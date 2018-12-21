import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { HttpClientModule }         from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule }           from '../material/material.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AboutRoutingModule }       from './about-routing.module';
import { AboutListComponent }       from './about-list/about-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    AboutRoutingModule
  ],
  declarations: [AboutListComponent],
  providers:    []
})
export class AboutModule {}