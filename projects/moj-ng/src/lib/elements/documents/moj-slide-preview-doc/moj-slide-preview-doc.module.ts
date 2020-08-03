import { MojSlidePreviewDocComponent } from './moj-slide-preview-doc.component';
import { MojResizableModule } from './../../../directives/moj-resizable/moj-resizable-module';
import { DocIframeComponent } from "./doc-iframe.component";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [CommonModule, MojResizableModule, TranslateModule],
    exports: [MojResizableModule, MojSlidePreviewDocComponent, DocIframeComponent],
    declarations: [MojSlidePreviewDocComponent, DocIframeComponent]
})
export class MojSlidePreviewDocModule {

}