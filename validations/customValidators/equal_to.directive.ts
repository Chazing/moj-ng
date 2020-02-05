import { Directive, Input } from '@angular/core';
import { Validator } from "@angular/forms"

import {
    NG_VALIDATORS,
    AbstractControl
} from '@angular/forms';


@Directive({
    selector: '[eequalTo][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: EqualToValidator, multi: true }
    ]
})
export class EqualToValidator implements Validator {
    private _valueToCompare: any;
    private _onChange: () => void;

    @Input()
    set eequalTo(value: any) {
        this._valueToCompare = value;
        if (this._onChange) { this._onChange() };
    }

    validate(control: AbstractControl): { [validator: string]: any } {
        if (!control.value) {
            return null;
        }
        if (control.value == this._valueToCompare) {
            return null;
        }

        return { equalTo: this._valueToCompare };
    }

    registerOnValidatorChange(fn: () => void): void {
        this._onChange = fn;
    }
}