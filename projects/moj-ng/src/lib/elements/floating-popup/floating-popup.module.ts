import { NgModule } from "@angular/core";
import { FloatingPopupComponent } from "./floating-popup.component";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { MojSharedModule } from "../../shared/moj.shared.module";
import { MojDirectiveModule } from "../../directives/moj-directive.module";

@NgModule({
    imports: [CommonModule, TranslateModule,MojSharedModule,MojDirectiveModule],
    exports: [FloatingPopupComponent],
    declarations: [FloatingPopupComponent]
})
export class MojFloatingPopupModule {

    
 }