import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LabelBase } from "./label-base";

@Component({
  selector: "label-before-content",
  template: `<div class="{{labelClasses}}" [ngClass]="styleClass" *ngIf="widthColumns > 0 || isAutoWidth" [ngClass]="{'margin-top':isLabelAboveControl}">
                    <label [attr.for]="forId">{{ getLabelText }}<span class="star" *ngIf="isRequiredIndication">*</span>
                    </label>
               </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelBeforContentComponent extends LabelBase implements OnInit {
  constructor(protected translateService: TranslateService) {
    super(translateService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
