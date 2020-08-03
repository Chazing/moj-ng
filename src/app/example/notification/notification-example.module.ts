import { NgModule } from '@angular/core';
import { MojSharedModule } from 'projects/moj-ng';
import { NotificationExampleComponent } from './notification-example.component';

@NgModule({
    imports: [
        MojSharedModule
    ],
    declarations: [
        NotificationExampleComponent
    ]
})
export class NotificationExampleModule { }
