import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyFormComponent } from './company-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MackLikeButtonsModule } from '../../others/mack-like-buttons/mack-like-buttons.module';
import { DepartmentFormModule } from '../department-form/department-form.module';

@NgModule({
  declarations: [CompanyFormComponent],
  imports: [
    DepartmentFormModule,
    CommonModule,
    ReactiveFormsModule,
    MackLikeButtonsModule,
  ],
  exports: [CompanyFormComponent],
})
export class CompanyFormModule {}
