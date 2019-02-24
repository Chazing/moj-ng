import { Directive } from "@angular/core";
import { NG_VALIDATORS } from "@angular/forms";
import { SecurityValidator, securityPatterns } from "./security.directive";

@Directive({
    selector: '[securityNote][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: SecurityNoteValidator, multi: true }
    ]
})
export class SecurityNoteValidator extends SecurityValidator {
    constructor() {
        super();
        this.pattern = securityPatterns.note;
    }
}