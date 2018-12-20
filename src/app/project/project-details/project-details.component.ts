// IMPORTS -------------------------------
  // CORE ------
  import { Component, OnInit, OnDestroy, ViewEncapsulation, AfterViewInit, ViewChild, Host, Inject } from '@angular/core';
  import { ActivatedRoute }               from '@angular/router';
  import { Location }                     from '@angular/common';
  import { Observable }                   from 'rxjs';

  // PROJECT ------
  import { Project, ProjectImages }       from '../project.model';
  import { Category }                     from '../../category/category.model';

  import { ProjectService }               from '../project.service';
  import { CategoryService }              from '../../category/category.service';
  
  // THIRD ------
  import { GalleryItem, ImageItem }       from '@ngx-gallery/core';
  import { Lightbox }                     from '@ngx-gallery/lightbox';  
  import { DragScrollComponent }                   from 'ngx-drag-scroll';
  

/**
 * List Project
 *
 * @export
 * @class ProjectDetailsComponent
 * @implements {OnInit}
 */
@Component({
  selector:                   'app-project-details',
  templateUrl:                './project-details.component.html',
  styleUrls:                  ['./project-details.component.css'],
  encapsulation:              ViewEncapsulation.None
})
export class ProjectDetailsComponent {
// DECLARATIONS --------------------------
  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;
  public project:             Observable<Project>;
  public projectList:         Observable<Project[]>;
  public category:            Observable<Category> | Observable<Category[]>;
  public images:              GalleryItem[];




// MAIN ----------------------------------
  /**
   * Execute before onInit
   */
  private start() {
    this.route.params.subscribe((params) => {
      this.project        = this.service.docWithSubcollections(params['id'], ['images', 'videos', 'links', 'tags']);
      this.projectList    = this.service.colWithSubcollections(['images','tags']);
      this.loadGallery();
    });
    
    this.category         = this.categoryService.query();
  }

  private loadGallery() {
    this.project.subscribe(item => {
        this.images = item.images.map(item => new ImageItem({ src: item.url, thumb: item.url }));
      });
  }




// OTHERS --------------------------------
  /**
   * Creates an instance of ProjectListComponent.
   * @param {Router} router
   * @param {ProjectService} service
   * @memberof ProjectListComponent
   */
  constructor(
    private route:            ActivatedRoute,
    private location:         Location,
    private service:          ProjectService,
    private categoryService:  CategoryService
  ) {
    this.start();
  }

  /**
   * Go to latest route
   */
  public goBack() {
    this.location.back();
  }

  
  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
}