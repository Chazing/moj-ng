import { Directive } from "@angular/core";
import { NG_VALIDATORS } from "@angular/forms";
import { SecurityValidator } from "./security.directive";
import { ValidationPatterns } from "../validations-utils/validation-patterns";

@Directive({
    selector: '[securityNote][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: SecurityNoteValidator, multi: true }
    ]
})
export class SecurityNoteValidator extends SecurityValidator {
    constructor() {
        super();
        this.security =  new RegExp(ValidationPatterns.note);
    }
}