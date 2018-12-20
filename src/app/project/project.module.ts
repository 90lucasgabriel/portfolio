// IMPORTS ---------------------------------------
  import { NgModule }                 from '@angular/core';
  import { CommonModule }             from '@angular/common';
  import { HttpClientModule }         from '@angular/common/http';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { MaterialModule }           from '../material/material.module';
  import { GalleryModule }            from '@ngx-gallery/core';
  import { LightboxModule }           from '@ngx-gallery/lightbox';
  import { GallerizeModule }          from '@ngx-gallery/gallerize';
  import { DragScrollModule }         from 'ngx-drag-scroll';

  import { ProjectRoutingModule }     from './project-routing.module';
  import { ProjectService }           from './project.service';

  import { ProjectListComponent }     from './project-list/project-list.component';
  import { ProjectDetailsComponent }  from './project-details/project-details.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    GalleryModule.forRoot(),
    LightboxModule.forRoot(),
    GallerizeModule,
    DragScrollModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectRoutingModule 
  ],
  declarations: [ProjectListComponent, ProjectDetailsComponent],
  providers:    [ProjectService]
})
export class ProjectModule {}