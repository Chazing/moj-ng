import { DemoSiteInternalModule } from './../../demo-site-internal/demo-site-internal.module';
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { EditorDemoComponent } from "./editor-demo.component";
import { MojEditorModule } from '@moj/moj-ng';

@NgModule({
    imports: [
        FormsModule,
        MojEditorModule,
        DemoSiteInternalModule
        ],
    exports: [EditorDemoComponent],
    declarations: [
        EditorDemoComponent
    ]
})
export class EditorDemoModule { }