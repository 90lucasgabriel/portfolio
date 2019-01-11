// IMPORTS ---------------------------------------
  // ANGULAR -------------
  import { NgModule }                 from '@angular/core';
  import { CommonModule }             from '@angular/common';
  import { HttpClientModule }         from '@angular/common/http';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  
  // OWNER ---------------
  import { MaterialModule }           from '@r-material/material.module';
  import { ProjectRoutingModule }     from '@r-project/project-routing.module';
  import { ProjectService }           from '@r-project/project.service';

  import { ProjectListComponent }     from '@r-project/project-list/project-list.component';
  import { ProjectDetailsComponent }  from '@r-project/project-details/project-details.component';


  // THIRD ---------------
  import { GalleryModule }            from '@ngx-gallery/core';
  import { LightboxModule }           from '@ngx-gallery/lightbox';
  import { GallerizeModule }          from '@ngx-gallery/gallerize';
  import { DragScrollModule }         from 'ngx-drag-scroll';



/**
 * Project module
 *
 * @export
 * @class ProjectModule
 */
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