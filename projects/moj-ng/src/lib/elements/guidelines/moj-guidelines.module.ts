import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MojGuidelinesComponent } from "./moj-guidelines.component";
import { MojGuidelineComponent } from "./guideline/moj-guideline.component";

@NgModule ({
    imports: [CommonModule],
    declarations: [MojGuidelinesComponent, MojGuidelineComponent],
    exports: [MojGuidelinesComponent]
})
export class MojGuidelinesModule {
}