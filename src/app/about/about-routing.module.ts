// IMPORTS ---------------------------------------
  // ANGULAR ---------
  import { NgModule }               from '@angular/core';
  import { RouterModule, Routes }   from '@angular/router';

  // OWNER ---------
  import { AboutListComponent }     from '@r-about/about-list/about-list.component';




const aboutRoutes: Routes = [
  { path: 'about',       component: AboutListComponent,  pathMatch: 'full' },
  { path: '',            component: AboutListComponent,  pathMatch: 'full' } 
];




/**
 * AboutRouting Module
 *
 * @export
 * @class AboutRoutingModule
 */
@NgModule({
  imports: [
    RouterModule.forChild(aboutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule {}