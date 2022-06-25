import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyFormComponent } from './company-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentFormModule } from '../department-form/department-form.module';

@NgModule({
  declarations: [CompanyFormComponent],
  imports: [
    DepartmentFormModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [CompanyFormComponent],
})
export class CompanyFormModule {}
