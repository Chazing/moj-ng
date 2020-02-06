import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class MojValidators {
    static greaterThen(greaterThan: any): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (typeof (greaterThan) == 'string') {
                if (control.parent)
                    greaterThan = control.parent.get(greaterThan);
            }
            if (control.value != undefined && (control.value != undefined && control.value.getDate != undefined)) {
                let fromDate: Date = new Date(greaterThan.value);
                let toDate: Date = new Date(control.value);
                if (fromDate > toDate)
                    return { greaterThan: this.getElementName(greaterThan.valueAccessor) };
                else
                    return null;
            }
            else if ((control.value != undefined && control.value != undefined) && !isNaN(Number(greaterThan.value))) {
                let fromNum: number;
                let toNum: number;

                fromNum = parseInt(greaterThan.value);
                toNum = parseInt(control.value);

                if (fromNum > toNum)
                    return { greaterThan: this.getElementName(greaterThan.valueAccessor) };
                else
                    return null;
            }
            else {
                if (!control.value || !greaterThan.value) {
                    return null;
                }
                if (control.value >= greaterThan.value) {
                    return null;
                }
            }
            return { greaterThan: this.getElementName(greaterThan.valueAccessor) };
        }
    }
    private static getElementName(element: any /*ElementBase<any>*/): string {
        return element.labelTextKey ? element.labelTextKey : 'Texts.' + element.identifier;
    }
}