import {
  Component,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  Output,
  OnInit
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { ElementBase } from "../base/element.base";
import { LabelAlign } from "../label/label.enum";
import { isInternetExplorer, isEdge } from "../../scripts/browser-supported";

/**
 * ```html
 * <moj-radiobutton [controlWidthColumns]="2" [(ngModel)]="radioOptions" [radiovalue]="1" name="radioOptions" [labelTextKey]="'Texts.option1'"></moj-radiobutton>
   <moj-radiobutton [controlWidthColumns]="2" [(ngModel)]="radioOptions" [radiovalue]="2" name="radioOptions" [labelTextKey]="'Texts.option2'"></moj-radiobutton>
 * ```
 * If action is required after changing the radio checked
 * ```html
 * (checkedChange)="onRadioChanged($event)
 * ```
 * ```typescript
 * onRadioChanged(value) {
    if (value == 1) {
    }
  }
 * ```
 */
@Component({
  selector: "moj-radiobutton",
  templateUrl: "moj-radiobutton.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MojRadiobuttonComponent,
      multi: true
    }
  ]
})
export class MojRadiobuttonComponent extends ElementBase<number>
  implements OnInit {
  @Output() checkedChange = new EventEmitter();
  @Input() radiovalue;
  @Input() name: string;
  labelAlignEnum = LabelAlign;
  isIE: boolean = false;

  constructor(
    el: ElementRef,
    _injector: Injector,
    protected translateService: TranslateService
  ) {
    super(el, _injector);
  }

  onCheckedChange(event: any) {
    this.checkedChange.emit(this.radiovalue);
  }

  ngOnInit() {
    super.ngOnInit();
    this.identifier = this.identifier + "_" + this.radiovalue;
    this.isIE = !!isInternetExplorer() || isEdge();
  }
}
