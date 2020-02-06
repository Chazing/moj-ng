import { ControlContainer } from "@angular/forms";
import { NgForm } from "@angular/forms";
import { Directive } from "@angular/core";

@Directive({
    selector: '[provide-parent-form]',
    providers: [
        {
            provide: ControlContainer,
            useFactory: getForm,
            deps: [NgForm]
        }
    ]
})
export class ProvideParentForm {}

export function getForm(form: NgForm) {
    return form;
}
