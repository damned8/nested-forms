/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CompanyOwnerModel } from 'apps/nested-forms/src/app/models/company-owner.model';
import { CompanyOwnerService } from 'apps/nested-forms/src/app/services/company-owner-api/company-owner-api.service';
import { delay, Observable } from 'rxjs';

@Component({
  selector: 'monorepo-company-owner-page',
  templateUrl: './company-owner-page.component.html',
  styleUrls: ['./company-owner-page.component.scss'],
})
export class CompanyOwnerPageComponent implements OnInit {
  isLoading = true;
  owner$!: Observable<CompanyOwnerModel>;

  constructor(
    private companyOwnerService: CompanyOwnerService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.owner$ =  this.companyOwnerService
      .getOne({ id: '1' })
      .pipe(delay(2000))
  }
}
