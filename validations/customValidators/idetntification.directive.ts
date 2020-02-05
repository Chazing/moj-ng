import { Directive, Input } from '@angular/core';
import { Validator } from "@angular/forms"

import {
    NG_VALIDATORS,
    AbstractControl
} from '@angular/forms';


@Directive({
    selector: '[identification][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: IdentificationValidator, multi: true }
    ]
})
export class IdentificationValidator implements Validator {
    private _condition: boolean = true;
    private _onChange: () => void;

    @Input()
    get identification(): boolean { return this._condition; }

    set identification(condition: boolean) {
        this._condition = condition != null && condition !== false;
        if (this._onChange) this._onChange();
    }

    registerOnValidatorChange(fn: () => void): void {
        this._onChange = fn;
    }

    validate(control: AbstractControl): { [validator: string]: any } {
        if (!this.identification) return null; //[identification]=false

        if (!control.value) { return null }

        let str: string;
        let value: string = control.value;

        if (value.length != 9) {
            str = "000000000" + control.value;
            str = str.substr(control.value.length, 9);
            value = str;
        }

        if (value == "000000000")
            return { identification: false };

        if (/^\d+$/.test(value) == false) {
            return { identification: false };
        }
        else {
            var idnum1 = parseInt(value.substr(0, 1)) * 1;
            var idnum2 = parseInt(value.substr(1, 1)) * 2;
            var idnum3 = parseInt(value.substr(2, 1)) * 1;
            var idnum4 = parseInt(value.substr(3, 1)) * 2;
            var idnum5 = parseInt(value.substr(4, 1)) * 1;
            var idnum6 = parseInt(value.substr(5, 1)) * 2;
            var idnum7 = parseInt(value.substr(6, 1)) * 1;
            var idnum8 = parseInt(value.substr(7, 1)) * 2;
            var idnum9 = parseInt(value.substr(8, 1)) * 1;

            if (idnum1 > 9) idnum1 = (idnum1 % 10) + 1;
            if (idnum2 > 9) idnum2 = (idnum2 % 10) + 1;
            if (idnum3 > 9) idnum3 = (idnum3 % 10) + 1;
            if (idnum4 > 9) idnum4 = (idnum4 % 10) + 1;
            if (idnum5 > 9) idnum5 = (idnum5 % 10) + 1;
            if (idnum6 > 9) idnum6 = (idnum6 % 10) + 1;
            if (idnum7 > 9) idnum7 = (idnum7 % 10) + 1;
            if (idnum8 > 9) idnum8 = (idnum8 % 10) + 1;
            if (idnum9 > 9) idnum9 = (idnum9 % 10) + 1;

            var sumval = idnum1 + idnum2 + idnum3 + idnum4 + idnum5 + idnum6 + idnum7 + idnum8 + idnum9;

            sumval = sumval % 10;
            if (sumval > 0) {
                return { identification: false };
            }
            else
                return null;
        }
    }
}