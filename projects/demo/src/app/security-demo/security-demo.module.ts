import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { MojSharedModule, MojInputModule, MojGuard} from '@moj/moj-ng';
import { TranslateModule} from '@ngx-translate/core';
import { TabViewModule} from "primeng/primeng";
import { PermissionsDemoComponent } from './permissions-demo/permissions-demo.component';




@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        TabViewModule,
        MojSharedModule,
        MojInputModule,
        RouterModule.forChild([
            { path: 'permissions-demo', component: PermissionsDemoComponent ,data:{routerID:"#permissionsDemo"}},
            { path: 'blocked-page-demo', component: PermissionsDemoComponent ,canActivate:[MojGuard],data:{routerID:"#blockedPage"}}
            
        ])

    ],
    exports: [],
    declarations: [PermissionsDemoComponent],

    providers: []
})
export class SecurityDemoModule { }
