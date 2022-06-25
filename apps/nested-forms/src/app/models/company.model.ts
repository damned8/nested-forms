import { DepartmentModel } from './department.model';

export interface CompanyModel {
  name: string;
  departments: DepartmentModel[];
  id?: string;
}
