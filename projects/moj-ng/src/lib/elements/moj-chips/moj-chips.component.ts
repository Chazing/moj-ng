import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessorBase } from '../base/value-accessor.base';
import { MojColor } from '../general/general.enum';

/**
 * Example
  ```html
   <moj-chips [(ngModel)]="items"></moj-chips>
  ```
 */

@Component({
  selector: 'moj-chips',
  templateUrl: './moj-chips.component.html',
  styleUrls: ['./moj-chips.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MojChipsComponent,
    multi: true
  }]
})
export class MojChipsComponent extends ValueAccessorBase {
  @Output() onItemRemoved: EventEmitter<any> = new EventEmitter<any>();
  @Input() fieldName: string = 'value';
  @Input() fieldID: string = 'key';
 // @Input() chipColor:MojColor;

  removeChip(chip: any) {
    (<any[]>this.value).splice((<any[]>this.value).indexOf(chip), 1);
    this.onItemRemoved.emit(chip)
  }

  // getColorClass(){
  //   if(this.chipColor){

  //   }
  // }
  constructor(private _injector: Injector) {
    super(_injector)
  }
}
