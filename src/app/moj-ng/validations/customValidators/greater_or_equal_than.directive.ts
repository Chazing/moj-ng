import { Directive, Input, DoCheck } from '@angular/core';
import { Validator, NgModel } from "@angular/forms"
import {NG_VALIDATORS,AbstractControl} from '@angular/forms';
import { MojUtilsService } from '../../shared/utils';


@Directive({
    selector: '[greaterOrEqualThan][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: GreaterOrEqualThanValidator, multi: true }
    ]
})
export class GreaterOrEqualThanValidator  implements Validator, DoCheck {
    @Input() greaterOrEqualThan: NgModel;
    private greaterOrEqualThanValue: any;
    private _onChange: () => void;

    ngDoCheck() {
        if (this.greaterOrEqualThanValue != this.greaterOrEqualThan.value) {
            this.greaterOrEqualThanValue = this.greaterOrEqualThan.value;
            if (this._onChange) { this._onChange() }
        }

    }

    constructor(private mojUtils:MojUtilsService){

    }

    validate(control: AbstractControl): { [validator: string]: any } {
        if (control.value != undefined && (control.value != undefined && control.value.getDate != undefined)) {
            let fromDate: Date = new Date(this.greaterOrEqualThan.value);
            let toDate: Date = new Date(control.value);
            if (fromDate > toDate)
                return { greaterOrEqualThan: this.mojUtils.getElementName(this.greaterOrEqualThan.valueAccessor) };
            else
                return null;
        }
        else if ((control.value != undefined && control.value != undefined) && this.isOnlyNumber(this.greaterOrEqualThan.value)) {
            let fromNum: number;
            let toNum: number;

            fromNum = parseInt(this.greaterOrEqualThan.value);
            toNum = parseInt(control.value);

            if (fromNum < toNum)
                return { greaterOrEqualThan: this.mojUtils.getElementName(this.greaterOrEqualThan.valueAccessor) };
            else
                return null;
        }
        else {
            if (!control.value || !this.greaterOrEqualThan.value) {
                return null;
            }
            if (control.value >= this.greaterOrEqualThan.value) {
                return null;
            }
        }
        return { greaterOrEqualThan: this.mojUtils.getElementName(this.greaterOrEqualThan.valueAccessor) };
    }

    registerOnValidatorChange(fn: () => void): void {
        this._onChange = fn;
    }


    isOnlyNumber(str) {
        var reg = new RegExp(/^\d+$/);
        return reg.test(str);
    }
}