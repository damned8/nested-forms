import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS,
  FormGroup,
  AbstractControl,
  FormArray,
  FormControl,
} from '@angular/forms';
import { FormControlValueAccessorAdapter } from '../../../common/classes/form-control-value-accessor-adapter';
import { DepartmentModel } from '../../../models/department.model';

@Component({
  selector: 'monorepo-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DepartmentFormComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: DepartmentFormComponent,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DepartmentFormComponent extends FormControlValueAccessorAdapter {
  formGroup = new FormGroup({
    name: new FormControl(),
    employers: new FormArray([]),
  });
  override beforeWriteValue = (val: DepartmentModel) => {
    val.employers.forEach(() => this.getEmployers().push(new FormControl()));
  };

  constructor() {
    super();
  }

  onAddEmploye(): void {
    (this.formGroup.controls.employers as unknown as FormArray).push(
      new FormControl({ name: '' })
    );
  }

  onRemoveEmploye(index: number): void {
    (this.formGroup.controls.employers as unknown as FormArray).removeAt(index);
  }

  getEmployers(): AbstractControl[] {
    return (this.formGroup.controls.employers as unknown as FormArray).controls;
  }
}
