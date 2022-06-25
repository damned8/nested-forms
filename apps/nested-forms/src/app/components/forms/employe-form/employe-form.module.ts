import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeFormComponent } from './employe-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MackLikeButtonsModule } from '../../others/mack-like-buttons/mack-like-buttons.module';

@NgModule({
  declarations: [EmployeFormComponent],
  imports: [MackLikeButtonsModule, ReactiveFormsModule, CommonModule],
  exports: [EmployeFormComponent],
})
export class EmployeFormModule {}
