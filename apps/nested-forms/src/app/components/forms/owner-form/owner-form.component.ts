import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
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
      this.companys.push(new FormControl());
    });
    this.formGroup.patchValue(owner as never);
  }
  public formGroup = new FormGroup({
    name: new FormControl(),
    companys: new FormArray([]),
  });
  public get companys(): FormArray {
    return this.formGroup.controls.companys as unknown as FormArray;
  }

  public isShowJson = false;

  constructor() {
    super();
  }

  onShowJson(): void {
    this.isShowJson = !this.isShowJson;
  }

  onAddCompany(): void {
    this.companys.push(new FormControl({ name: '', departments: [] }));
  }

  onRemoveCompany(index: number): void {
    this.companys.removeAt(index);
  }
}
