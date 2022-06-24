import { EmployeModel } from './employe.model';

export interface DepartmentModel {
  name: string;
  employers: EmployeModel[];
  id?: string;
}
