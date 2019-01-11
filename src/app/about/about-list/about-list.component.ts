// IMPORTS ---------------------------------
  // ANGULAR -----
  import { Component, OnInit, ViewEncapsulation } from '@angular/core';
  import { Router }                       from '@angular/router';
  import { Location }                     from '@angular/common';
  import { Observable }                   from 'rxjs';
  
  // OWNER -----
  import { About }                        from '@r-about/about.model';
  import { Tag }                          from '@r-tag/tag.model';
  import { AboutService }                 from '@r-about/about.service';
  import { TagService }                   from '@r-app/tag/tag.service';




/**
 * About List Component
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
})
export class AboutListComponent implements OnInit {
// DECLARATIONS --------------------------
  public loading:            boolean;
  public aboutList:          Observable<About[]>;
  public tagList:            Observable<Tag[]>;



  
// MAIN ----------------------------------
  /**
   * Execute before onInit
   *
   * @private
   * @memberof AboutListComponent
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
  }

  /**
   * Execute on init
   *
   * @memberof AboutListComponent
   */
  public ngOnInit() {
    this.start();
  }
  
  /**
   * Go to latest route
   *
   * @memberof AboutListComponent
   */
  public goBack() {
    this.location.back();
  }
}