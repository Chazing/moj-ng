import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CaptionType, FontStyle, MojColor } from '../general/general.enum';

/**
 * ```html
 *     <moj-dynamic-label [textKey]="'כל הפעולות במקום אחד'" [fontStyle]="enums.FontStyle.XXLBold" [captionType]="enums.CaptionType.H1"></moj-dynamic-label>
 *        
 * 
```
 */
@Component({
    selector: 'moj-dynamic-label',
    template: `
        <span [ngSwitch]="captionType" class="moj-dynamic-label {{fontStyle +' '+ color}}" >
            <span *ngSwitchCase="'span'" style="font:inherit" [attr.data-tooltip]="tooltip | translate">{{ textKey | translate }}<ng-content></ng-content></span>
            <h1 *ngSwitchCase="'h1'" style="font:inherit" [attr.data-tooltip]="tooltip | translate">{{ textKey | translate }}</h1>
            <h2 *ngSwitchCase="'h2'" style="font:inherit" [attr.data-tooltip]="tooltip | translate">{{ textKey | translate }}</h2>
            <h3 *ngSwitchCase="'h3'" style="font:inherit" [attr.data-tooltip]="tooltip | translate">{{ textKey | translate }}</h3>
            <h4 *ngSwitchCase="'h4'" style="font:inherit"[attr.data-tooltip]="tooltip | translate">{{ textKey | translate }}</h4>
            <h5 *ngSwitchCase="'h5'" style="font:inherit"[attr.data-tooltip]="tooltip | translate">{{ textKey | translate }}</h5>
            <span *ngSwitchCase="'default'" style="font:inherit" [attr.data-tooltip]="tooltip | translate">{{ textKey | translate }}</span>
        </span>`,
    styleUrls: ['./moj-dynamic-label.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojDynamicLabelComponent {
    @Input() textKey: string = "";
    @Input() captionType: CaptionType = CaptionType.default;
    @Input() color: MojColor = MojColor.Default;
    @Input() tooltip: string;
    @Input() fontStyle: FontStyle = FontStyle.Default;
    mojFontStyle = FontStyle;
}

