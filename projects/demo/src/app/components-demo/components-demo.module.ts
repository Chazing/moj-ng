import { DemoSiteInternalModule } from './../demo-site-internal/demo-site-internal.module';
import { EditorDemoModule } from './editor-demo/editor-demo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { AutocompleteDemoComponent } from './autocomplete-demo/autocomplete-demo.component';
import { CheckboxDemoComponent } from './checkbox-demo/checkbox-demo.component';
import { DatepickerDemoComponent } from './datepicker-demo/datepicker-demo.component';
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';
import { LabelsDemoComponent } from './labels-demo/labels-demo.component';
import { RadiobuttonDemoComponent } from './radiobutton-demo/radiobutton-demo.component';
import { TextAreaDemoComponent } from './text-area-demo/text-area-demo.component';
import { TextboxDemoComponent } from './textbox-demo/textbox-demo.component';
import { MojSliderDemoComponent } from './moj-slider-demo/moj-slider-demo.component';
import { MultiselectDemoComponent } from './multiselect-demo/multiselect-demo.component';
import { OnOffSwitchDemoComponent } from './on-off-switch-demo/on-off-switch-demo.component';
import { MojSharedModule, MojInputModule, MojWebsiteModule, MojGridModule, MojFilterModule, MojSlidingMenuModule, MojProgressModule, MojWizardModule } from '@moj/moj-ng';
import { TranslateModule } from '@ngx-translate/core';
import { TabViewModule } from "primeng/primeng";
import { TextsDemoComponent } from './texts-demo/texts-demo.component';
import { FileUploadDemoComponent } from './file-upload-demo/file-upload-demo.component';
import { MojFileUploadModule, MojResizableModule } from '@moj/moj-ng';
import { EditorDemoComponent } from './editor-demo/editor-demo.component';
import { FilterDemoComponent } from './filter-demo/filter-demo-component';
import { SelectionCardDemoComponent } from './selection-card-demo/selection-card-demo.component';



@NgModule({
    imports: [
        CommonModule,
        MojResizableModule,
        MojWebsiteModule,
        TranslateModule,
        TabViewModule,
        MojSharedModule,
        MojInputModule,
        MojFileUploadModule,
        MojWizardModule,
        MojProgressModule,
        MojSlidingMenuModule,
        MojFilterModule,
        MojGridModule,
        MojInputModule,
        EditorDemoModule,
        DemoSiteInternalModule,
        RouterModule.forChild([

            { path: 'autocomplete-demo', component: AutocompleteDemoComponent },
            { path: 'checkbox-demo', component: CheckboxDemoComponent },
            { path: 'moj-on-off-switch', component: OnOffSwitchDemoComponent },
            { path: 'radiobutton-demo', component: RadiobuttonDemoComponent },
            { path: 'datepicker-demo', component: DatepickerDemoComponent },
            { path: 'dropdown-demo', component: DropdownDemoComponent },
            { path: 'labels-demo', component: LabelsDemoComponent },
            { path: 'texts-demo', component: TextsDemoComponent },
            { path: 'moj-slider-demo', component: MojSliderDemoComponent },
            { path: 'multiselect-demo', component: MultiselectDemoComponent },
            { path: 'text-area-demo', component: TextAreaDemoComponent },
            { path: 'textbox-demo', component: TextboxDemoComponent },
            { path: 'filter-demo', component: FilterDemoComponent },
            { path: 'fileupload-demo', component: FileUploadDemoComponent },
            { path: 'editor-demo', component: EditorDemoComponent },
            { path: 'selection-card-demo', component: SelectionCardDemoComponent }

        ])

    ],
    exports: [],
    declarations: [AutocompleteDemoComponent,
        CheckboxDemoComponent,
        DatepickerDemoComponent,
        DropdownDemoComponent,
        LabelsDemoComponent,
        RadiobuttonDemoComponent,
        TextAreaDemoComponent,
        TextboxDemoComponent,
        MojSliderDemoComponent,
        MultiselectDemoComponent,
        OnOffSwitchDemoComponent,
        TextsDemoComponent,
        FileUploadDemoComponent,
        FilterDemoComponent,
        SelectionCardDemoComponent

    ],

    providers: [],

})
export class ComponentsDemoModule { }