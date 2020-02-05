import { Component, Input } from '@angular/core';
import { ActionPopUpItem } from './action-popup.model';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'actions-popup',
    templateUrl: 'actions-popup.component.html',
    styleUrls: ['actions-popup.component.css'],
})
export class ActionsPopupComponent {
    @Input() items: ActionPopUpItem[];

    navigate(url: string){
        this.router.navigate([url]);
    }

    constructor(private router: Router){

    }
}

