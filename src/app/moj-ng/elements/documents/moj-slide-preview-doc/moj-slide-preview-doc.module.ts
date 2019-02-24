import { MojSlidePreviewDocComponent } from "../../../../moj-ng/elements/documents/moj-slide-preview-doc/moj-slide-preview-doc.component";
import { MojResizableModule } from "../../../../moj-ng/directives/moj-resizable/moj-resizable-module";
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