import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  AbstractControl,
} from '@angular/forms';
import { FormControlValueAccessorAdapter } from '../../../common/classes/form-control-value-accessor-adapter';
import { CompanyOwnerModel } from '../../../models/company-owner.model';

@Component({
  selector: 'monorepo-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OwnerFormComponent extends FormControlValueAccessorAdapter {
  @Input() set owner(owner: CompanyOwnerModel) {
    owner.companys.forEach(() => {
      this.getCompanys().push(new FormControl());
    });
    this.formGroup.patchValue(owner as never);
    console.log(this.formGroup);
  }
  public formGroup = new FormGroup({
    name: new FormControl(),
    companys: new FormArray([]),
  });

  public isShowJson = false;

  constructor() {
    super();
  }

  public onSaveForm(): void {
    console.log(this.formGroup);
    this.isShowJson = true;
  }

  public onAddCompany(): void {
    (this.formGroup.controls.companys as unknown as FormArray).push(
      new FormControl({ name: '', departments: [] })
    );
  }

  public onRemoveCompany(index: number): void {
    (this.formGroup.controls.companys as unknown as FormArray).removeAt(index);
  }

  public getCompanys(): AbstractControl[] {
    return (this.formGroup.controls.companys as unknown as FormArray).controls;
  }
}
