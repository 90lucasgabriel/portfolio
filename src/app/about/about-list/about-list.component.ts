import { Component, OnInit, OnDestroy, ViewEncapsulation, AfterViewInit, ViewChild, Host, Inject } from '@angular/core';
import { trigger, state, style, animate, transition }   from '@angular/animations';
import { SelectionModel }         from '@angular/cdk/collections';
import { Router }                 from '@angular/router';
  import { Location }             from '@angular/common';
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
export class AboutListComponent implements OnInit, OnDestroy, AfterViewInit {
// DECLARATIONS --------------------------
  private sub:        any;
  loading:            boolean;
  showFilter:         boolean;
  actionClick:        boolean;
  centerContent:      boolean;




// MAIN ----------------------------------
  /**
   * Execute before onInit
   */
  private start() {
    this.actionClick    = false;
    this.centerContent  = false;
    this.showFilter     = false;
  }

  /**
   * Execute after load all components
   */
  public ngAfterViewInit() {
    /* Verify if sidenav is opened
    Observable.merge(this.parent.sidenav.openedChange)
      .subscribe(data => {
        this.centerContent = !data;
      });*/

  }



// OTHERS --------------------------------
  /**
   * Creates an instance of AboutListComponent.
   * @param {AppComponent} parent
   * @param {Router} router
   * @param {AboutService} service
   * @param {MaterialService} material
   * @param {LoaderService} loader
   * @memberof AboutListComponent
   */
  constructor(
    //@Inject(AppComponent) private parent: AppComponent,
    private router:           Router,
    private location:         Location,
    //private service:    AboutService,
    //private material:   MaterialService
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

  /**
   * Execute on destroy
   */
  public ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}