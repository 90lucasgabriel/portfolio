// IMPORTS --------------------------------------------
  // ANGULAR ---------
  import { NgModule }                 from '@angular/core';
  import { CommonModule }             from '@angular/common';
  import { HttpClientModule }         from '@angular/common/http';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { MaterialModule }           from '@r-material/material.module';

  // OWNER ---------
  import { CategoryService }          from '@r-category/category.service';




/**
 * Category Module
 *
 * @export
 * @class CategoryModule
 */
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [],
  providers:    [CategoryService]
})
export class CategoryModule {}