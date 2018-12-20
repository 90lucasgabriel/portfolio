import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { HttpClientModule }       from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule }         from '../material/material.module';

import { AboutRoutingModule }    from './about-routing.module';
/*import { AboutService }          from './about.service';
import { AboutDao }              from './about.dao';*/
import { AboutListComponent }    from './about-list/about-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AboutRoutingModule
  ],
  declarations: [AboutListComponent],
  providers:    [/*AboutService, AboutDao*/]
})
export class AboutModule {}