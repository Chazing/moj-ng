import { NgModule } from "@angular/core";
import { ButtonsExampleComponent } from "./buttons-example.component";
import { CommonModule } from "@angular/common";
import { MojSharedModule, MojBottonModule } from '@moj/moj-ng';

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