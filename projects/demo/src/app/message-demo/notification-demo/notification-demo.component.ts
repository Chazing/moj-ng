import { Component } from '@angular/core';
import { MojNotificationType } from 'projects/moj-ng';

@Component({
    selector: "moj-notification-demo",
    templateUrl: "notification-demo.component.html"
})
export class NotificationDemoComponent {
    mojNotificationType = MojNotificationType;
}