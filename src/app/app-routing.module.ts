import { NgModule }             from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules
  }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }