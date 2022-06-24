import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { FormControlValueAccessorAdapter } from '../../../common/classes/form-control-value-accessor-adapter';

@Component({
  selector: 'monorepo-employe-form',
  templateUrl: './employe-form.component.html',
  styleUrls: ['./employe-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: EmployeFormComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: EmployeFormComponent,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeFormComponent extends FormControlValueAccessorAdapter {
  formGroup = new FormGroup({
    name: new FormControl(),
  });

  constructor() {
    super();
  }
}
