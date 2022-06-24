import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerFormComponent } from './owner-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyFormModule } from '../company-form/company-form.module';

@NgModule({
  declarations: [OwnerFormComponent],
  imports: [CompanyFormModule, ReactiveFormsModule, CommonModule],
  exports: [OwnerFormComponent],
})
export class OwnerFormModule {}
