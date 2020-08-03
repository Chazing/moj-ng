import { ViewChild } from "@angular/core";
import { NgForm, FormGroup } from "@angular/forms";
import { WizardItemModel } from "../service/moj-wizard.service";

export class WizardItemComponentBase {
    data: any;//send data to the component

    wizardItemModel: string; //to store data in wizard process

    @ViewChild(NgForm, { static: true }) ngForm: NgForm;
     formGroup: FormGroup;

    methodBeforeExit(): boolean {
        return true;
    }

    methodAfterExit(): void {
    }
}