import { Component, Input } from "@angular/core";
import { MojNotificationType } from './moj-notification.enum';

@Component({
    selector: 'moj-notification',
    templateUrl: './moj-notification.component.html',
    styleUrls:['./moj-notification.component.scss']
})
export class MojNotificationComponent{
    @Input()
    message:string;

    @Input()
    type:MojNotificationType;

    @Input()
    iconClass:string;
    @Input()
    closable:boolean=false;
    notificationClass:string;
    isOpen:boolean=true;

    ngOnInit(){
        //this.notificationClass = 
    }
    
    closwNotification()
    {
      this.isOpen=false;
    }
}