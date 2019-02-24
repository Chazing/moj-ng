import { Component, OnInit, ElementRef, Injector, Input, forwardRef, ChangeDetectionStrategy, SkipSelf, Host, Optional } from '@angular/core';
import { ElementBase } from '../base/element.base';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
  * Usage example
  * ```html
  * <moj-textarea [(ngModel)]="stringFrom" name="stringFrom" labelWidthColumns="2" 
  *              controlWidthColumns="4" [maxTextLength]="5">
  * </moj-textarea>
  * ```
  * <example-url>../screenshots/textarea.JPG</example-url>
 */
@Component({
  selector: 'moj-textarea',
  templateUrl: './text-area.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MojTextAreaComponent),
    multi: true
  },
  {provide: ElementBase, useExisting: forwardRef(() => MojTextAreaComponent)}],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojTextAreaComponent extends ElementBase<string>{
  @Input() maxTextLength: number;
  @Input() rows: number = 3;
  @Input() placeholder: string = '';
  isBlured: boolean = false;
  constructor(el: ElementRef, _injector: Injector) {
    super(el, _injector);
  }

  get showValidationMsg() {
    return this.control.invalid && ((this.control.touched && this.isBlured) || this.control.submitted)
  }

  onChange() {
    this.isBlured = true;
  }
}
