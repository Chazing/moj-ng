import { NgModule } from '@angular/core';
import { RouterModule, Routes, LoadChildren } from '@angular/router';
import { MultiSelectExampleComponent } from '../multiselect/multiselect-example.component';
import { AutocompleteExampleComponent } from '../autocomplete/autocomplete-example.component';
import { FileUploadExampleComponent } from '../file-upload-example/file-upload-example.component';
import { GridExampleComponent } from '../grid-example/grid-example.component';
import { WebsiteExampleComponent } from './website-example.component';
import { WizardExampleComponent } from '../wizard/wizard-example.component';
import { FormExampleComponent } from '../form-example/form-example.component';
import { DatepickerExampleComponent } from "../datepicker-example/datepicker-example.component";
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { RecaptchaExampleComponent } from '../recaptcha-example/recaptcha-example.component';
import { ReactiveFormExampleComponent } from '../form-example/reactive-form-example/reactive-form-example.component';
import { GridEditInlineExampleComponent } from '../grid-example/grid-edit-inline-example.component';
import { ButtonsExampleComponent } from '../buttons/buttons-example.component';
import { GridServerSideExample } from '../grid-example/grid-server-side/grid-server-side-example.component';
import { EditorExampleComponent } from '../editor/editor-example.component';
import { EntityLayoutComponent } from './content-with-tabs/entity-layout/entity-layout.component';
import { EntityFilesComponent } from './content-with-tabs/entity-files/entity-files.component';
import { EntityDocsComponent } from './content-with-tabs/entity-docs/entity-docs.component';
import { EntityRequestsComponent } from './content-with-tabs/entity-requests/entity-requests.component';
import { ContentWithTabsModule } from './content-with-tabs/content-with-tabs.module';
import { GridExampleGuard } from '../common/guards/grid-example-guard';

const websiteRoutes: Routes = [
    {
        path: '',
        component: WebsiteExampleComponent,
        children: [
            { path: 'autocomplete', component: AutocompleteExampleComponent },
            { path: 'multiselect', component: MultiSelectExampleComponent },
            { path: 'file-upload', component: FileUploadExampleComponent },
            { path: 'grid', component: GridExampleComponent, canDeactivate: [GridExampleGuard] },
            { path: 'grid-edit-inline', component: GridEditInlineExampleComponent },
            { path: 'grid-server-side', component: GridServerSideExample },
            { path: 'wizard', component: WizardExampleComponent },
            { path: 'form', component: FormExampleComponent },
            { path: 'reactiveform', component: ReactiveFormExampleComponent },
            { path: 'datepicker', component: DatepickerExampleComponent },
            { path: 'dialog', component: DialogExampleComponent },
            { path: 'recaptcha', component: RecaptchaExampleComponent },
            { path: 'buttons', component: ButtonsExampleComponent },
            { path: 'editor', component: EditorExampleComponent },          
            { path: "entity", loadChildren: () => ContentWithTabsModule }
        // "./content-with-tabs/content-with-tabs.module#ContentWithTabsModule"}          
            // {
            //     path: "entity-layout", component: EntityLayoutComponent, 
            //     children: [
            //         { path: "", pathMatch: "full", redirectTo: "entityFiles" },
            //         { path: "entityFiles", component: EntityFilesComponent},
            //         { path: "entityDocs", component: EntityDocsComponent},
            //         { path: "entityRequests", component: EntityRequestsComponent}
            //     ]
            // }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(websiteRoutes)
    ],
    exports: [RouterModule]
})
export class WebsiteRoutingModule { }
