import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.module-routing';
import { CompanyOwnerPageModule } from './features/company-owner-page/company-owner-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CompanyOwnerPageModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
