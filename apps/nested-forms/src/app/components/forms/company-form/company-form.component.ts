import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { FormControlValueAccessorAdapter } from '../../../common/classes/form-control-value-accessor-adapter';
import { CompanyModel } from '../../../models/company.model';

@Component({
  selector: 'monorepo-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CompanyFormComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: CompanyFormComponent,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyFormComponent extends FormControlValueAccessorAdapter {
  @Output() removeCompany = new EventEmitter();
  formGroup = new FormGroup({
    name: new FormControl(),
    departments: new FormArray([]),
  });
  override beforeWriteValue = (val: CompanyModel) => {
    val.departments.forEach(() => this.departments.push(new FormControl()));
  };
  public get departments(): FormArray {
    return this.formGroup.controls.departments as unknown as FormArray;
  }

  constructor() {
    super();
  }

  onAddDepartment(): void {
    this.departments.push(new FormControl({ name: '', employers: [] }));
  }

  onRemoveDepartment(index: number): void {
    this.departments.removeAt(index);
  }
}
