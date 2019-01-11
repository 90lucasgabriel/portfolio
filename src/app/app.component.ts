// IMPORTS -----------------------------------------------------
  import { Component }                from '@angular/core';
  import { AppConfig }                from './app.config';
  
  import { LoaderService }            from './common/services/loader.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
// DECLARATIONS -------------------------------------------------
  public progressBarVisible: boolean = false;
  name        = 'Angular';
  themeList   = AppConfig.THEME_LIST;  
  background  = '';

  menus       = [{
      name: 'Projetos',
      icon: 'computer',
      link: `project`
    },{
      name: 'Sobre',
      icon: 'account_circle',
      link: `about`
    },{
      name: 'Contato',
      icon: 'question_answer',
      link: `contact`
    }
  ];




// METHODS ------------------------------------------------------
  /**
   * Creates an instance of AppComponent.
   * @param {LoaderService} loader
   * @memberof AppComponent
   */
  constructor(
    private loader:             LoaderService) {
    // change isLoading status whenever notified    
    loader
      .onLoadingChanged
      .subscribe(isLoading => {
        this.progressBarVisible = isLoading;
      });

  }

  /**
   * Execute on activate view
   *
   * @param {*} event
   * @memberof AppComponent
   */
  public onActivate(event) {
    //window.scroll(0,0);
    //or document.body.scrollTop = 0;
    //document.querySelector('main-content').scrollTo(0,0)
    document.getElementById('main-content').scrollTo(0,0);
  }

  /**
   * Change background color
   *
   * @memberof AppComponent
   */
  public toggleBackground() {
    this.background = this.background ? '' : 'primary';
  }

  /**
   * Change application themes
   *
   * @param {*} theme
   * @memberof AppComponent
   */
  public selectTheme(theme) {
    document.body.className = '';
    document.body.classList.add(theme, 'mat-app-background');
  }
}
