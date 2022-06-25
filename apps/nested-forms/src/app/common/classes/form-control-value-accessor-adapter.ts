import {
  ControlValueAccessor,
  Validator,
  FormGroup,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

export abstract class FormControlValueAccessorAdapter
  implements ControlValueAccessor, Validator
{
  abstract formGroup: FormGroup;

  onTouched: () => void = () => {};
  beforeWriteValue: (val: any) => void = () => {};

  writeValue(val: any): void {
    if (val) {
      this.beforeWriteValue(val);
      this.formGroup.setValue(val, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.formGroup.valueChanges.pipe().subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.formGroup.disable() : this.formGroup.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.formGroup.valid
      ? null
      : {
          invalidForm: {
            value: this.formGroup.value,
            message: `Nested form is invalid`,
          },
        };
  }
}
