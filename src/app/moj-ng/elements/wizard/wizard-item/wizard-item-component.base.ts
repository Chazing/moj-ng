import { ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { WizardItemModel } from "../service/moj-wizard.service";

export class WizardItemComponentBase {
    data: any;//send data to the component

    wizardItemModel: string; //to store data in wizard process

    @ViewChild(NgForm) ngForm: NgForm;
    
    methodBeforeExit(): boolean {
        return true;
    }

    methodAfterExit(): void {
    }
}