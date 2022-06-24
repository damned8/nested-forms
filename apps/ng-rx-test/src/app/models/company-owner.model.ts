import { CompanyModel } from './company.model';

export interface CompanyOwnerModel {
  name: string
  companys: CompanyModel[];
  id?: string
}
