import { NgModule } from "@angular/core";
import { EditorExampleComponent } from "./editor-example.component";
import { MojEditorModule } from "../../moj-ng/elements/editor/moj-editor.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        FormsModule,
        MojEditorModule
        ],
    exports: [EditorExampleComponent],
    declarations: [
        EditorExampleComponent
    ]
})
export class EditorExampleModule { }