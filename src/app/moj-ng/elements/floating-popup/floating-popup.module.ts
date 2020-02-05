import { NgModule } from "@angular/core";
import { FloatingPopupComponent } from "./floating-popup.component";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { MojSharedModule } from "../../shared/moj.shared.module";
// import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
    imports: [CommonModule, TranslateModule,MojSharedModule],
    exports: [FloatingPopupComponent],
    declarations: [FloatingPopupComponent]
})
export class MojFloatingPopupModule {

    
 }