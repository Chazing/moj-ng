import { Component, ElementRef, Injector, forwardRef, Input } from "@angular/core";
import { ElementBase } from "../base/element.base";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
/**
 * Usage example
 * ```html
<moj-on-off-switch [(ngModel)]="checkBoxValue" name="checkBoxValue" [textKeyOff]="'Texts.exampleTextOff'" [textKeyOn]="'Texts.exampleTextOn'" 
                [controlWidthColumns]="3" [labelWidthColumns]="2"></moj-on-off-switch>
```
 */
@Component({
  selector: 'moj-on-off-switch',
  templateUrl: './moj-on-off-switch.component.html',
  styleUrls: ['./moj-on-off-switch.component.css'],
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

  constructor(el: ElementRef, _injector: Injector) {
    super(el, _injector);
  }
  

}
