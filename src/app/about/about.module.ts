// IMPORTS ------------------------------------
  // ANGULAR -------------
  import { NgModule }                 from '@angular/core';
  import { CommonModule }             from '@angular/common';
  import { HttpClientModule }         from '@angular/common/http';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { MaterialModule }           from '@r-material/material.module';
  import { AngularFontAwesomeModule } from 'angular-font-awesome';

  // OTHERS -------------
  import { AgePipe }                  from '@r-pipes/age.pipe';
  import { TimestampToDatePipe }      from '@r-pipes/timestamp-to-date.pipe';

  // OWNER ------------
  import { AboutRoutingModule }       from '@r-about/about-routing.module';
  import { AboutListComponent }       from '@r-about/about-list/about-list.component';
  import { AboutService }             from '@r-about/about.service';
  import { TagService }               from '@r-tag/tag.service';
  
  // THIRD --------------
  import { OrderModule }              from 'ngx-order-pipe';



/**
 * About Module
 *
 * @export
 * @class AboutModule
 */
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