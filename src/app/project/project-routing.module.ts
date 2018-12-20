import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { ProjectDetailsComponent }     from './project-details/project-details.component';
import { ProjectListComponent }     from './project-list/project-list.component';

const projectRoutes: Routes = [  
  { path: 'project/:id',    component: ProjectDetailsComponent, pathMatch: 'full' },
  { path: 'project',        component: ProjectListComponent,    pathMatch: 'full' } 
];

@NgModule({
  imports: [
    RouterModule.forChild(projectRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectRoutingModule {}