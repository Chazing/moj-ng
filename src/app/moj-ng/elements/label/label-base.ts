import { OnInit, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LabelAlign, LabelStyle } from "./label.enum";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

export abstract class LabelBase implements OnInit {
  @Input() textKey: string = "";
  @Input() widthColumns: number;
  @Input() isLabelAboveControl: boolean;
  @Input() labelAlign: LabelAlign = LabelAlign.Left;
  @Input() labelStyle: LabelStyle = LabelStyle.Standard;
  @Input() isAutoWidth: boolean;
  @Input() isRequiredIndication: boolean = false;
  @Input() forId: string;
  @Input() styleClass: string;

  labelClasses: string;

  get getLabelText(): string {
    if (this.textKey || this.forId) {
      let res = this.translateService.instant(this.textKey ? this.textKey : "Texts." + this.forId);
      return res.indexOf("Texts.") == 0 ? res.substr(6) : res;
    }
    return '';
  }

  constructor(protected translateService: TranslateService) { }

  ngOnInit(): void {
    this.labelClasses =
      this.labelStyle +
      " moj-label-content " +
      (this.isLabelAboveControl || this.isAutoWidth ? "" : "col-sm-" + this.widthColumns) +
      (this.labelAlign == LabelAlign.Left && !this.isLabelAboveControl
        ? " txt-left"
        : "") +
      (this.isAutoWidth ? ' label-auto-width' : '');
  }
}
