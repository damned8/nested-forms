import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyOwnerPageComponent } from './components/company-owner-page/company-owner-page.component';

const routes: Routes = [{ path: '', component: CompanyOwnerPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyOwnerPageRoutingModule {}
