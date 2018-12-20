import { Component, OnInit, OnDestroy, ViewEncapsulation, AfterViewInit, ViewChild, Host, Inject } from '@angular/core';
import { trigger, state, style, animate, transition }   from '@angular/animations';
import { SelectionModel }               from '@angular/cdk/collections';
import { Router }                       from '@angular/router';

import { Project, ProjectImages }       from '../project.model';
import { Category }                     from '../../category/category.model';

import { ProjectService }               from '../project.service';
import { CategoryService }              from '../../category/category.service';

import { Observable }                   from 'rxjs/Observable';
import { Location }                     from '@angular/common';
import { HttpClient }                   from '@angular/common/http';


/**
 * List Project
 *
 * @export
 * @class ProjectListComponent
 * @implements {OnInit}
 */
@Component({
  selector:           'app-project-list',
  templateUrl:        './project-list.component.html',
  styleUrls:          ['./project-list.component.css'],
  encapsulation:      ViewEncapsulation.None,
  //animations:         [ ANIMATION ]
})
export class ProjectListComponent {
// DECLARATIONS --------------------------
  private sub:        any;
  showFilter:         boolean;
  actionClick:        boolean;
  centerContent:      boolean;
  projectList:        Observable<Project[]>;
  categoryList:       Observable<Category>;




// MAIN ----------------------------------
  /**
   * Execute before onInit
   */
  private start() {
    this.actionClick    = false;
    this.centerContent  = false;
    this.showFilter     = false;   
    
    this.projectList    = this.service.colWithSubcollections(['images','videos', 'tags', 'links']);
    // this.categoryList   = this.categoryService.query();
  }



// OTHERS --------------------------------
  /**
   * Creates an instance of ProjectListComponent.
   * @param {AppComponent} parent
   * @param {Router} router
   * @param {ProjectService} service
   * @param {MaterialService} material
   * @param {LoaderService} loader
   * @memberof ProjectListComponent
   */
  constructor(
    //@Inject(AppComponent) private parent: AppComponent,
    private router:           Router,
    private location:         Location,
    private service:          ProjectService,
    private categoryService:  CategoryService,
    //private http: HttpClient
    //private material:   MaterialService
  ) {
    
    //this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(a => console.log('a',a));
    this.start();
  }

  /**
   * Go to details
   * @param {number} company_id
   * @param {number} id
   * @memberof ProjectListComponent
   */
  public goDetails(company_id: number, id: number) {
    if (!this.actionClick) {
      this.router.navigate(['/company', company_id, 'project', id]);
    }
  }

  
  /**
   * Go to latest route
   */
  public goBack() {
    this.location.back();
  }
}