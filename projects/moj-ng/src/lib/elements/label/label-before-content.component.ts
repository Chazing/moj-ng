import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LabelBase } from "./label-base";

@Component({
  selector: "label-for-content",
  template: `<label *ngIf="isDisplayLabel" class="{{labelClasses}}" [ngStyle]="{display: isLabelAboveControl? 'block' : ''}" [attr.for]="forId">{{ getLabelText }}<span class="star" *ngIf="isRequiredIndication">*</span>
             </label>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelForContentComponent extends LabelBase implements OnInit {
  @Input() isDisplayLabel: boolean;
  constructor(protected translateService: TranslateService) {
    super(translateService);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.isDisplayLabel = this.isDisplayLabel || this.textKey !== '';
  }
}
