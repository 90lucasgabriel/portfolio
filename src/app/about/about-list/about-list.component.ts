import { Component, OnInit, OnDestroy, ViewEncapsulation, AfterViewInit, ViewChild, Host, Inject } from '@angular/core';
import { trigger, state, style, animate, transition }   from '@angular/animations';
import { SelectionModel }         from '@angular/cdk/collections';
import { Router }                 from '@angular/router';
  import { Location }             from '@angular/common';
import { Observable, from }             from 'rxjs';
import { AboutService }           from '../about.service';
import * as moment from 'moment';
import { TagService } from '@r-app/tag/tag.service';
import { Tag } from '@r-app/tag/tag.model';
import { filter, map } from 'rxjs/operators';
//import { ANIMATION }              from '../material/material-animation';

//import { MaterialService }        from '../material/material.service';
//import { AppComponent }           from '@r-app/app.component';

//import { AboutService }        from './about.service';

//import { Observable } from 'rxjs';


/**
 * List About
 *
 * @export
 * @class AboutListComponent
 * @implements {OnInit}
 */
@Component({
  selector:           'app-about-list',
  templateUrl:        './about-list.component.html',
  styleUrls:          ['./about-list.component.css'],
  encapsulation:      ViewEncapsulation.None,
  //animations:         [ ANIMATION ]
})
export class AboutListComponent implements OnInit {
// DECLARATIONS --------------------------
  private sub:        any;
  loading:            boolean;
  aboutList:          Observable<any[]>;
  tagList:            Observable<Tag[]>;



  
// MAIN ----------------------------------
  /**
   * Execute before onInit
   */
  private start() {
    this.aboutList      = this.service.colWithSubcollections(['courses', 'education', 'work', 'social']);
    this.tagList        = this.tagService.queryFeatured();
  }
  



// OTHERS --------------------------------
  /**
   *Creates an instance of AboutListComponent.
   * @param {Router} router
   * @param {Location} location
   * @param {AboutService} service
   * @param {TagService} tagService
   * @memberof AboutListComponent
   */
  constructor(
    //@Inject(AppComponent) private parent: AppComponent,
    private router:           Router,
    private location:         Location,
    private service:          AboutService,
    private tagService:       TagService
  ) {
    this.start();
  }

  /**
   * Go to latest route
   */
  public goBack() {
    this.location.back();
  }


  /**
   * Execute on init
   */
  public ngOnInit() {

  }
}