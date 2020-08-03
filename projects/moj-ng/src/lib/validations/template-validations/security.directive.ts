import { Directive, Input } from '@angular/core';
import { Validator } from '@angular/forms';

import { NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[security][ngModel]',
  providers: [{ provide: NG_VALIDATORS, useExisting: SecurityValidator, multi: true }]
})
export class SecurityValidator implements Validator {
  private _onChange: () => void;
   @Input() security : RegExp ;

  registerOnValidatorChange(fn: () => void): void {
    this._onChange = fn;
  }
  validate(control: AbstractControl): { [validator: string]: any } {
    if (!control.value || !this.security) {
      return null;
    }
    if (this.security.test(control.value)) return null;

    return { security: false };
  }
}


