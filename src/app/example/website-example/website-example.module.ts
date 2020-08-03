import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WebsiteRoutingModule } from "./website-example-routing.module";
import { AutoCompleteExampleModule } from "../autocomplete/autocomplete-example.module";
import { MultiSelectExampleModule } from "../multiselect/multiselect-example.module";
import { GridExampleModule } from "../grid-example/grid-example.module";
import { WizardExampleModule } from "../wizard/wizard-example.module";
import { FormExampleModule } from "../form-example/form-example.module";
import { WebsiteExampleComponent } from "./website-example.component";
import { DatepickerExampleComponent } from "../datepicker-example/datepicker-example.component";
import { RecaptchaExampleModule } from "../recaptcha-example/recaptcha-example.module";
import { FileUploadExampleModule } from "../file-upload-example/file-upload-example.module";
import { ButtonsExampleModule } from "../buttons/buttons-example.module";
import { EditorExampleModule } from "../editor/editor-example.module";
import { ContentWithTabsModule } from "./content-with-tabs/content-with-tabs.module";
import { StoreService } from "../common/services/store.service";
import { GridExampleGuard } from "../common/guards/grid-example-guard";
import { DynamicFormExampleModule } from "../dynamic-form/dynamic-form-example.module";
import { TranslateModule } from "@ngx-translate/core";
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { StoreExampleModule } from '../store/store-example.module';
import { GuidelinesExampleModule } from '../guidelines/guidelines-example.module';
import { MojWebsiteModule, MojSharedModule, MojInputModule, MojProgressModule, MojSlidingMenuModule, MojFilterModule, MojFloatingPopupModule, MojDirectiveModule } from '@moj/moj-ng';
import { SortExampleModule } from '../sort/sort-example.module';
import { NotificationExampleModule } from '../notification/notification-example.module';


@NgModule({
    imports: [
        TranslateModule,
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
        StoreExampleModule,
        ContentWithTabsModule,
        DynamicFormExampleModule,
        MojProgressModule,
        MojSlidingMenuModule,
        MojFilterModule,
        MojFloatingPopupModule,
        MojDirectiveModule,
        GuidelinesExampleModule,
        SortExampleModule,
        NotificationExampleModule
    ],
    exports: [WebsiteExampleComponent],
    declarations: [
        WebsiteExampleComponent,
        DatepickerExampleComponent,
       DialogExampleComponent
    ],
    providers:[StoreService, GridExampleGuard]
})
export class WebsiteExampleModule { }