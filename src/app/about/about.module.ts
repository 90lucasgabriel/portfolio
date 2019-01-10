import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { HttpClientModule }         from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule }           from '../material/material.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AboutRoutingModule }       from './about-routing.module';
import { AboutListComponent }       from './about-list/about-list.component';
import { AgePipe }                  from '@r-app/common/pipes/age.pipe';
import { TimestampToDatePipe }      from '@r-app/common/pipes/timestamp-to-date.pipe';
import { OrderModule }              from 'ngx-order-pipe';
import { AboutService }             from './about.service';
import { TagService }               from '@r-app/tag/tag.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    AboutRoutingModule,
    OrderModule
  ],
  declarations: [
    AboutListComponent, 
    AgePipe,
    TimestampToDatePipe
  ],
  providers:    [AboutService, TagService]
})
export class AboutModule {}