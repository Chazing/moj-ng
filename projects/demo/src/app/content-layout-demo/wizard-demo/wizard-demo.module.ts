import { NgModule } from "@angular/core";
import { WizardDemoComponent } from "./wizard-demo.component";
import { Step1Component } from "./step1/step1.component";
import { Step2Component } from "./step2/step2.component";
import { Step3Component } from "./step3/step3.component";
import { Step4Component } from "./step4/step4.component";
import { CommonModule } from "@angular/common";
import { MojWizardModule, MojInputModule, MojSharedModule } from "@moj/moj-ng";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [WizardDemoComponent, Step1Component, Step2Component, Step3Component, Step4Component],
    imports: [CommonModule, MojWizardModule, MojInputModule, MojSharedModule, RouterModule.forChild([
        {path: "", pathMatch: "full", component: WizardDemoComponent}
    ])],
    entryComponents: [Step1Component, Step2Component, Step3Component, Step4Component]
})
export class WizardDemoModule  {

}