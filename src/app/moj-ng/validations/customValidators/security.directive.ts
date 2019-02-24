import { Directive, Input } from '@angular/core';
import { Validator } from "@angular/forms"

import {
    NG_VALIDATORS,
    AbstractControl
} from '@angular/forms';


@Directive({
    selector: '[security][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: SecurityValidator, multi: true }
    ]
})
export class SecurityValidator implements Validator {
    private _condition: boolean = true;
    private _onChange: () => void;
    protected pattern = securityPatterns.regular;

    @Input()
    get security(): boolean { return this._condition; }

    set security(condition: boolean) {
        this._condition = condition != null && condition !== false;
        if (this._onChange) this._onChange();
    }

    registerOnValidatorChange(fn: () => void): void {
        this._onChange = fn;
    }
    validate(control: AbstractControl): { [validator: string]: any } {
        if (!control.value || !this.security) {
            return null;
        }
        if (this.pattern.test(control.value))
            return null;

        return { security: false };
    }
}

export class securityPatterns {
    public static regular = new RegExp(/^([A-Za-zא-ת0-9\.\-\s\,\"\'\/\!\_\'\(\)\:\@\[\]\`\{\}\^\–\~\—\;\’\\]*)$/i);
    public static note = new RegExp(/^([A-Za-zא-ת0-9\.\-\s\,\"\'\/\\\!\_\'\(\)\:\?\@\[\]\`\{\}\-\^\–\~\—\;\’]*)$/i);
}