import { Directive, Input, DoCheck } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS, NgModel } from "@angular/forms"
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
    private _onChange: () => void;

    ngDoCheck() {
        if (this.greaterThanValue != this.greaterThan.value) {
            this.greaterThanValue = this.greaterThan.value;
            if (this._onChange) { this._onChange() }
        }

    }

    constructor(private mojUtils:MojUtilsService){

    }

    validate(control: AbstractControl): { [validator: string]: any } {
        if (control.value != undefined && (control.value != undefined && control.value.getDate != undefined)) {
            let fromDate: Date = new Date(this.greaterThan.value);
            let toDate: Date = new Date(control.value);
            if (fromDate > toDate)
                return { greaterThan: this.mojUtils.getElementName(this.greaterThan.valueAccessor) };
            else
                return null;
        }
        else if ((control.value != undefined && control.value != undefined) && this.isOnlyNumber(this.greaterThan.value)) {
            let fromNum: number;
            let toNum: number;

            fromNum = parseInt(this.greaterThan.value);
            toNum = parseInt(control.value);

            if (fromNum > toNum)
                return { greaterThan: this.mojUtils.getElementName(this.greaterThan.valueAccessor) };
            else
                return null;
        }
        else {
            if (!control.value || !this.greaterThan.value) {
                return null;
            }
            if (control.value >= this.greaterThan.value) {
                return null;
            }
        }
        return { greaterThan: this.mojUtils.getElementName(this.greaterThan.valueAccessor) };
    }

    registerOnValidatorChange(fn: () => void): void {
        this._onChange = fn;
    }


    isOnlyNumber(str) {
        var reg = new RegExp(/^\d+$/);
        return reg.test(str);
    }
}