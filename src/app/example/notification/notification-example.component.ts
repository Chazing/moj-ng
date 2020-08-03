import { Component } from '@angular/core';
import { MojNotificationType } from 'projects/moj-ng';

@Component({
    selector:'moj-notification-example',
    templateUrl:'notification-example.component.html'
})
export class NotificationExampleComponent{
    mojNotificationType = MojNotificationType;
}