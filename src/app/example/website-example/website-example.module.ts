import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WebsiteRoutingModule } from "./website-example-routing.module";
import { MojWebsiteModule } from "../../moj-ng/elements/website/moj-website.module";
import { AutoCompleteExampleModule } from "../autocomplete/autocomplete-example.module";
import { MultiSelectExampleModule } from "../multiselect/multiselect-example.module";
import { GridExampleModule } from "../grid-example/grid-example.module";
import { WizardExampleModule } from "../wizard/wizard-example.module";
import { FormExampleModule } from "../form-example/form-example.module";
import { WebsiteExampleComponent } from "./website-example.component";
import { DatepickerExampleComponent } from "../datepicker-example/datepicker-example.component";
import { MojInputModule } from "../../moj-ng/elements/input.module";
import { MojSharedModule } from "../../moj-ng/shared/moj.shared.module";
import { DialogExampleComponent } from "../dialog-example/dialog-example.component";
import { RecaptchaExampleModule } from "../recaptcha-example/recaptcha-example.module";
import { FileUploadExampleModule } from "../file-upload-example/file-upload-example.module";
import { ButtonsExampleModule } from "../buttons/buttons-example.module";
import { EditorExampleModule } from "../editor/editor-example.module";
import { ContentWithTabsModule } from "./content-with-tabs/content-with-tabs.module";
import { MojTabsModule } from "../../moj-ng";
import { StoreService } from "../common/services/store.service";
import { GridExampleGuard } from "../common/guards/grid-example-guard";

@NgModule({
    imports: [
        CommonModule,
        WebsiteRoutingModule,
        MojWebsiteModule,
        AutoCompleteExampleModule,
        MultiSelectExampleModule,
        GridExampleModule,
        WizardExampleModule,
        FormExampleModule, MojSharedModule, MojInputModule, RecaptchaExampleModule,
        FileUploadExampleModule,
        ButtonsExampleModule,
        EditorExampleModule,
        ContentWithTabsModule
    ],
    exports: [WebsiteExampleComponent],
    declarations: [
        WebsiteExampleComponent,
        DatepickerExampleComponent,
        DialogExampleComponent,
    ],
    providers:[StoreService, GridExampleGuard]
})
export class WebsiteExampleModule { }