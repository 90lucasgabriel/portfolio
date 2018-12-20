import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { ContactListComponent }    from './contact-list/contact-list.component';

const contactRoutes: Routes = [
  { path: 'contact',       component: ContactListComponent,  pathMatch: 'full' } 
];

@NgModule({
  imports: [
    RouterModule.forChild(contactRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule {}