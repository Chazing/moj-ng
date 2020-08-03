import { NgModule } from '@angular/core';
import { MojDialogModule } from '../../../../moj-ng';
import { RouterModule } from '@angular/router';
import { NotificationDemoComponent } from './notification-demo/notification-demo.component';
import { DemoSiteInternalModule } from '../demo-site-internal/demo-site-internal.module';

@NgModule({
    declarations: [NotificationDemoComponent ],
    imports: [MojDialogModule,
            DemoSiteInternalModule,
            RouterModule.forChild([
                { path: "notification", component: NotificationDemoComponent }
            ])
    ]
})
export class MessageDemoModule { }