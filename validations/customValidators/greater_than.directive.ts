import { MojValidators } from './validators';
import { Directive, Input, DoCheck, SimpleChanges } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS, NgModel, ValidatorFn } from "@angular/forms"
import { MojUtilsService } from '../../shared/utils';

@Directive({
    selector: '[greaterThan][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: GreaterThanValidator, multi: true }
    ]
})
export class GreaterThanValidator implements Validator, DoCheck {
    @Input() greaterThan: NgModel;
    private greaterThanValue: any;
    private _validator: ValidatorFn;
    private _onChange: () => void;

    ngDoCheck() {
        if (this.greaterThanValue != this.greaterThan.value) {
            this.greaterThanValue = this.greaterThan.value;
            if (this._onChange) { this._onChange() }
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('greaterThan' in changes) {
            this._createValidator();
            if (this._onChange) this._onChange();
        }
    }

    constructor() {
    }

    validate(control: AbstractControl): { [validator: string]: any } {
        return this.greaterThan == null ? null : this._validator(control)
    }

    registerOnValidatorChange(fn: () => void): void {
        this._onChange = fn;
    }

    private _createValidator(): void {
        this._validator = MojValidators.greaterThen(this.greaterThan);
    }
}