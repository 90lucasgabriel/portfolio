// IMPORTS -------------------------------------
  import { NgModule }                   from '@angular/core';
  import { BrowserModule }              from '@angular/platform-browser';
  import { BrowserAnimationsModule }    from '@angular/platform-browser/animations';
  import { AngularFireModule }          from '@angular/fire';
  import { AngularFirestoreModule }     from '@angular/fire/firestore';
  import { HttpClientModule, HTTP_INTERCEPTORS }  from '@angular/common/http';
  import { FormsModule, ReactiveFormsModule }     from '@angular/forms';
  import { environment }                from '../environments/environment';

  import { AppConfig }                  from './app.config';
  import { AppRoutingModule }           from './app-routing.module';
  import { MaterialModule }             from './material/material.module';
  import { GalleryModule }              from '@ngx-gallery/core';
  import { LightboxModule }             from '@ngx-gallery/lightbox';
  import { GallerizeModule }            from '@ngx-gallery/gallerize';
  import { RecaptchaModule }            from 'ng-recaptcha';
  import { RecaptchaFormsModule }       from 'ng-recaptcha/forms';
  import { DragScrollModule }           from 'ngx-drag-scroll';
  import { AngularFontAwesomeModule }   from 'angular-font-awesome';
  import { OrderModule }                from 'ngx-order-pipe';


  import { FirestoreService }           from './common/services/firestore.service';
  import { LoaderService }              from './common/services/loader.service';
  import { LoaderInterceptor }          from './common/interceptors/loader.interceptor';
  import { HeaderInterceptor }          from './common/interceptors/header.interceptor';

  import { AboutModule }                from './about/about.module';
  import { ContactModule }              from './contact/contact.module';
  import { ProjectModule }              from './project/project.module';
  import { CategoryModule }             from './category/category.module'; 

  import { AppComponent }               from './app.component';
  import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  imports:      [     
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,    

    AppRoutingModule,
    MaterialModule,
    GalleryModule.forRoot(),
    LightboxModule.forRoot(),
    GallerizeModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    DragScrollModule,
    AngularFontAwesomeModule,
    OrderModule,

    AboutModule,
    ContactModule,
    ProjectModule,
    CategoryModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,    
    DragScrollModule,
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ FirestoreService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      useFactory: (service: LoaderService) => new LoaderInterceptor(service),
      multi: true,
      deps: [LoaderService]
    } 
  ]
})
export class AppModule { }
