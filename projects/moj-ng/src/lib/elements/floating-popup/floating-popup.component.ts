import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'floating-popup',
    templateUrl: 'floating-popup.component.html',
    styleUrls: ['floating-popup.component.scss'],
    encapsulation:ViewEncapsulation.None
})
export class FloatingPopupComponent {
    @Input() items:any[];
    @Input() popupTitle: string;
    @Input() titleIcon: string ="fal fa-star";
    @Input() popupDir:popupDir=popupDir.bottomRight;
    @Input() headerColor:string ="#fff";
    popupDirection = popupDir;
    isExpended:boolean=false;
    navigate(url: string){
      
    }

    constructor(){

    }
}
export enum popupDir
{
    topLeft,
    topRight,
    bottomLeft,
    bottomRight
}