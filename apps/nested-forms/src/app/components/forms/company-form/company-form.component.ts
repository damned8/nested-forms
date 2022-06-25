import {
  ChangeDetectionStrategy,
  Component,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  AbstractControl,
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
    val.departments.forEach(() =>
      this.getDepartments().push(new FormControl())
    );
  };

  constructor() {
    super();
  }

  onAddDepartment(): void {
    (this.formGroup.controls.departments as unknown as FormArray).push(
      new FormControl({ name: '', employers: [] })
    );
  }

  onRemoveDepartment(index: number): void {
    (this.formGroup.controls.departments as unknown as FormArray).removeAt(
      index
    );
  }

  getDepartments(): AbstractControl[] {
    return (this.formGroup.controls.departments as unknown as FormArray)
      .controls;
  }
}
