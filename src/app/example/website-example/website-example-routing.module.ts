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
import { GridExampleGuard } from '../common/guards/grid-example-guard';
import { DynamicFormExampleComponent } from '../dynamic-form/dynamic-form-example.component';
import { MojGuard } from '../../moj-ng/permissions/moj-guard';

const websiteRoutes: Routes = [
    {
        path: '',
        component: WebsiteExampleComponent,
        children: [
            { path: 'autocomplete', component: AutocompleteExampleComponent,canActivate: [MojGuard],data:{routerID:'#autocomplete'}  },
            { path: 'multiselect', component: MultiSelectExampleComponent ,canActivate: [MojGuard],data:{routerID:'#multiselect'}},
            { path: 'file-upload', component: FileUploadExampleComponent ,canActivate: [MojGuard],data:{routerID:'#file-upload'} },
            { path: 'grid', component: GridExampleComponent, canDeactivate: [GridExampleGuard] ,data:{routerID:'#grid'} },
            { path: 'grid-edit-inline', component: GridEditInlineExampleComponent ,canActivate: [MojGuard] ,data:{routerID:'gridEdit'}},
            { path: 'grid-server-side', component: GridServerSideExample ,canActivate: [MojGuard] },
            { path: 'wizard', component: WizardExampleComponent ,canActivate: [MojGuard] },
            { path: 'form', component: FormExampleComponent,canActivate: [MojGuard] ,data:{routerID:'#form'} },
            { path: 'reactiveform', component: ReactiveFormExampleComponent,canActivate: [MojGuard]  },
            { path: 'datepicker', component: DatepickerExampleComponent,canActivate: [MojGuard]  },
            { path: 'dialog', component: DialogExampleComponent,canActivate: [MojGuard]  },
            { path: 'recaptcha', component: RecaptchaExampleComponent,canActivate: [MojGuard]  },
            { path: 'buttons', component: ButtonsExampleComponent,canActivate: [MojGuard] ,data:{routerID:'#Button'} },
            { path: 'editor', component: EditorExampleComponent,canActivate: [MojGuard]  },     
            // { path: 'on-off-switch', component: OnOffSwitchComponent  },     
            { path: "entity", loadChildren: () => import('./content-with-tabs/content-with-tabs.module').then(m => m.ContentWithTabsModule) }
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
