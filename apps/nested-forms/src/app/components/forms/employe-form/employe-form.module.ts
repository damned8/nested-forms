import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeFormComponent } from './employe-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeFormComponent],
  imports: [ReactiveFormsModule, CommonModule],
  exports: [EmployeFormComponent],
})
export class EmployeFormModule {}
