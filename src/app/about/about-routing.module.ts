import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { AboutListComponent }    from './about-list/about-list.component';

const aboutRoutes: Routes = [
  { path: 'about',       component: AboutListComponent,  pathMatch: 'full' },
  { path: '',            component: AboutListComponent,  pathMatch: 'full' } 
];

@NgModule({
  imports: [
    RouterModule.forChild(aboutRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule {}