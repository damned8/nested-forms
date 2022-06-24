/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CompanyOwnerModel } from 'apps/ng-rx-test/src/app/models/company-owner.model';
import { CompanyOwnerService } from 'apps/ng-rx-test/src/app/services/company-owner-api/company-owner-api.service';
import { delay } from 'rxjs';

@Component({
  selector: 'monorepo-company-owner-page',
  templateUrl: './company-owner-page.component.html',
  styleUrls: ['./company-owner-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyOwnerPageComponent implements OnInit {
  isLoading = true;
  owner!: CompanyOwnerModel;

  constructor(
    private companyOwnerService: CompanyOwnerService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.companyOwnerService
      .getOne({ id: '1' })
      .pipe(delay(0))
      .subscribe((owner) => {
        this.owner = owner;
        this.isLoading = false;
        this.cdr.markForCheck();
      });
  }
}
