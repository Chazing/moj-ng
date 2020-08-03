import { Component, ElementRef, Injector, forwardRef, Input, ViewEncapsulation } from "@angular/core";
import { ElementBase } from "../base/element.base";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { PermissionService } from "../../permissions/permission.service";
/**
 * Usage example
 * ```html
<moj-on-off-switch [(ngModel)]="checkBoxValue" name="checkBoxValue" [textKeyOff]="'Texts.exampleTextOff'" [textKeyOn]="'Texts.exampleTextOn'" 
                [controlWidthColumns]="3"></moj-on-off-switch>
```
 */
@Component({
    selector: 'moj-on-off-switch',
    templateUrl: './moj-on-off-switch.component.html',
    styleUrls: ['./moj-on-off-switch.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => MojOnOffSwitchComponent),
            multi: true
        }
    ]
})





export class MojOnOffSwitchComponent extends ElementBase<boolean> {
    @Input() textKeyOff: string;
    @Input() textKeyOn: string;
    @Input() switchType:onOffSwitchType=onOffSwitchType.backoffice;
    onOffSwitchType=onOffSwitchType;

    constructor(el: ElementRef, _injector: Injector, permissionService: PermissionService) {
        super(el, _injector, permissionService);
    }


}


export enum onOffSwitchType
{
    backoffice,
    text,
    icon
}