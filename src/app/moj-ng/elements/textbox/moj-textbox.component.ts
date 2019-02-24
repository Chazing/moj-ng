import {
  Component,
  ElementRef,
  forwardRef,
  Injector,
  Input,
  Host,
  SkipSelf,
  Output,
  EventEmitter
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlContainer } from "@angular/forms";

import { ElementBase } from "../base/element.base";

/**
  * Usage example
  * ```html
  * <moj-textbox [(ngModel)]="formModel.title1" name="title1" minlength="3" labelWidthColumns="1"
            controlWidthColumns="2" labelTextKey="Texts.textField">
  *</moj-textbox>
  * ```
  * <example-url>../screenshots/textbox.JPG</example-url>
 */
@Component({
  selector: "moj-textbox",
  templateUrl: "moj-textbox.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MojTextboxComponent),
      multi: true
    },
    {provide: ElementBase, useExisting: forwardRef(() => MojTextboxComponent)}
  ]
})
export class MojTextboxComponent extends ElementBase<string>{
  @Input() placeholder: string = "";
  @Input() inputType: string = "";
  @Input() maxlength: number;
  @Input() max: number;
  @Input() min: number;
  @Input() pattern:string ="";
  @Output() onChange = new EventEmitter();
  isBlured: boolean = false;
  constructor(el: ElementRef, _injector: Injector) {
    super(el, _injector);
  }

  get showValidationMsg() {
    return this.control.invalid && ((this.control.touched && this.isBlured) || this.control.submitted);
  }

  onFocusIn($event?: any) {
    $event.target.select();
    super.onFocusIn($event);
  }

  onchange(value) {
    this.isBlured = true;
    this.onChange.emit(value);
  }
}
