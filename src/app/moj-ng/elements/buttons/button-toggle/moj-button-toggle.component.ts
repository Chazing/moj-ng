import { Component, Input, Output,EventEmitter } from "@angular/core";
import { ButtonToggleItem } from "./button-toggle.model";
import { ValueAccessorBase } from "../../base/value-accessor.base";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

/**
  * Usage example
  ```html
  <moj-button-toggle
        [items]="buttonToggleItems"
        (onChange)="onToggleChange($event)"
        [(ngModel)]="toggleValue">
  </moj-button-toggle> 
  ```
  ```typescript
  import { ButtonToggleItem } from '../../moj-ng/elements/buttons/button-toggle/button-toggle.model';
  ...
  export class ButtonsToggleExampleComponent {
    buttonToggleItems:ButtonToggleItem[] = [
        {id:1, text:'Bold'},
        {id:2, text:'Italic', },
        {id:3, text:'Underline'},
        {id:4, iconClass:'fas fa-plus'}
    ]

    toggleValue:number;

    onToggleChange(value){
        alert(value);
    }
  }
  ```
 */

@Component({
    selector:'moj-button-toggle',
    templateUrl:'moj-button-toggle.component.html',
    styleUrls:['moj-button-toggle.component.css'],
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: MojButtonToggleComponent,
          multi: true
        }
      ]
})
export class MojButtonToggleComponent extends ValueAccessorBase{
    @Input() items:ButtonToggleItem[];
    @Input() buttonCssClasses:string = '';
    @Output() onChange = new EventEmitter();

    onClick(item){
        this.value = item.id;//value of valueAccessor ( Affect ng classes: dirty, touched...)
        this.onChange.emit(this.value);
    }
}