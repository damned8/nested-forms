import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentFormComponent } from './department-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeFormModule } from '../employe-form/employe-form.module';

@NgModule({
  declarations: [DepartmentFormComponent],
  imports: [EmployeFormModule, ReactiveFormsModule, CommonModule],
  exports: [DepartmentFormComponent],
})
export class DepartmentFormModule {}
