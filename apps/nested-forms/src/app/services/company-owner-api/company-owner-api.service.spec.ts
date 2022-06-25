import { TestBed } from '@angular/core/testing';

import { CompanyOwnerService } from './company-owner-api.service';

describe('CompanyOwnerService', () => {
  let service: CompanyOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
