import { NgModule } from "@angular/core";
import { ButtonsExampleComponent } from "./buttons-example.component";
import { MojBottonModule } from "../../moj-ng/elements/buttons/moj-button.module";
import { CommonModule } from "@angular/common";
import { MojSharedModule } from "../../moj-ng/shared/moj.shared.module";

@NgModule({
    imports: [ CommonModule,
        MojSharedModule,
        MojBottonModule
        ],
    exports: [ButtonsExampleComponent],
    declarations: [
        ButtonsExampleComponent
    ]
})
export class ButtonsExampleModule { }