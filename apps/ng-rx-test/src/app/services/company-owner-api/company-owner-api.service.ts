import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { COMPANY_OWNER_MOCK } from '../../mocks/company-owner.mock';
import { CompanyOwnerModel } from '../../models/company-owner.model';

@Injectable()
export class CompanyOwnerService {
  constructor(private httpClient: HttpClient) {}

  getOne(args: Pick<CompanyOwnerModel, 'id'>): Observable<CompanyOwnerModel> {
    // return this.httpClient.get<CompanyOwnerModel>('api/' + `${args.id}`);
    return of(COMPANY_OWNER_MOCK[0])
  }
}
