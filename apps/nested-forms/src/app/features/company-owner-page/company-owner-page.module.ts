import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CompanyOwnerPageRoutingModule } from './company-owner-page-routing.module';
import { CompanyOwnerPageComponent } from './components/company-owner-page/company-owner-page.component';
import { CompanyOwnerService } from '../../services/company-owner-api/company-owner-api.service';
import { OwnerFormModule } from '../../components/forms/owner-form/owner-form.module';

@NgModule({
  declarations: [CompanyOwnerPageComponent],
  imports: [
    OwnerFormModule,
    HttpClientModule,
    CommonModule,
    CompanyOwnerPageRoutingModule,
  ],
  providers: [CompanyOwnerService],
  exports: [CompanyOwnerPageComponent]
})
export class CompanyOwnerPageModule {}
