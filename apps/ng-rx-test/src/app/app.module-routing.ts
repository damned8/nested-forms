import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'company-owner-page' },
  {
    path: 'company-owner-page',
    loadChildren: () =>
      import('./features/company-owner-page/company-owner-page.module').then(
        (m) => m.CompanyOwnerPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
