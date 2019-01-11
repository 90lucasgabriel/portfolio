// IMPORTS ----------------------------------------
  // ANGULAR ---------
  import { NgModule }               from '@angular/core';
  import { RouterModule, Routes }   from '@angular/router';

  // OWNER -----------
  import { ContactListComponent }    from './contact-list/contact-list.component';




const contactRoutes: Routes = [
  { path: 'contact',       component: ContactListComponent,  pathMatch: 'full' } 
];




/**
 * Contact Routing Module
 *
 * @export
 * @class ContactRoutingModule
 */
@NgModule({
  imports: [
    RouterModule.forChild(contactRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ContactRoutingModule {}