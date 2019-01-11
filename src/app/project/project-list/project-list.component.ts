// IMPORTS --------------------------------------
  // ANGULAR ----------
  import { Component, OnInit, ViewEncapsulation } from '@angular/core';
  import { Router }                       from '@angular/router';
  import { Location }                     from '@angular/common';
  import { Observable }                   from 'rxjs/Observable';

  // OWNER ------------
  import { Project, ProjectImages }       from '@r-project/project.model';
  import { ProjectService }               from '@r-project/project.service';




/**
 * Project List Component
 *
 * @export
 * @class ProjectListComponent
 * @implements {OnInit}
 */
@Component({
  selector:           'app-project-list',
  templateUrl:        './project-list.component.html',
  styleUrls:          ['./project-list.component.css'],
  encapsulation:      ViewEncapsulation.None
})
export class ProjectListComponent implements OnInit {
// DECLARATIONS --------------------------
  projectList:        Observable<Project[]>;




// MAIN ----------------------------------
  /**
   * Execute before onInit
   *
   * @private
   * @memberof ProjectListComponent
   */
  private start() {    
    this.projectList    = this.service.colWithSubcollections(['images','videos', 'tags', 'links']);
  }




// OTHERS --------------------------------
  /**
   * Creates an instance of ProjectListComponent.
   * @param {Router} router
   * @param {Location} location
   * @param {ProjectService} service
   * @memberof ProjectListComponent
   */
  constructor(
    private router:           Router,
    private location:         Location,
    private service:          ProjectService
  ) { }

  /**
   * Go to details
   *
   * @param {number} company_id
   * @param {number} id
   * @memberof ProjectListComponent
   */
  public goDetails(company_id: number, id: number) {
    this.router.navigate(['/company', company_id, 'project', id]);
  }
  
  /**
   * Go to latest route
   *
   * @memberof ProjectListComponent
   */
  public goBack() {
    this.location.back();
  }

  /**
   * Execute onInit
   *
   * @memberof ProjectListComponent
   */
  public ngOnInit(): void {
    this.start();
  }
}