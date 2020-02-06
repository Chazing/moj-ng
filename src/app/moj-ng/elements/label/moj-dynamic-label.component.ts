import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CaptionType } from '../general/general.enum';

/**
 * ```html
 * <moj-dynamic-label [textKey]="'Texts.mainItem1'" [fontSize]="fontSize.font16" [color]="mojColor.brightBlue" [fontWeight]="fontWeight.bold"></moj-dynamic-label>
 * 
```
 */
@Component({
    selector: 'moj-dynamic-label',
    template: `
        <span [ngSwitch]="getCaptionType">
            <span *ngSwitchCase="'span'" style="position:inherit" [class]="cssClasses" [attr.data-tooltip]="tooltip | translate">{{ textKey | translate }}<ng-content></ng-content></span>
            <h1 *ngSwitchCase="'h1'" [class]="cssClasses">{{ textKey | translate }}</h1>
            <h2 *ngSwitchCase="'h2'" [class]="cssClasses">{{ textKey | translate }}</h2>
            <h3 *ngSwitchCase="'h3'" [class]="cssClasses">{{ textKey | translate }}</h3>
            <h4 *ngSwitchCase="'h4'" [class]="cssClasses">{{ textKey | translate }}</h4>
        </span>`,
    // styleUrls: ['./moj-dynamic-label.component.css'] ,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojDynamicLabelComponent {
    @Input() textKey: string = "";
    @Input() captionType: CaptionType = CaptionType.default;
    @Input() fontSize: FontSize = FontSize.font14;
    @Input() fontWeight: FontWeight = FontWeight.normal;
    @Input() color: MojColor = MojColor.Default;
    @Input() tooltip: string;
    cssClasses: string = "";

    get getCaptionType() {
        this.cssClasses = this.fontSize.toString();
        if (this.color != MojColor.Default)
            this.cssClasses += " " + this.color.toString();
        this.cssClasses += " " + this.fontWeight.toString();


        var tagName = "span";
        if (this.captionType != CaptionType.default)
            tagName = this.captionType.toString();
        else {
            if (this.fontSize == FontSize.font22 && this.color == MojColor.Primary && this.fontWeight == FontWeight.bold)
                tagName = "h1";
            else if (this.fontSize == FontSize.font18 && this.color == MojColor.Secondary && this.fontWeight == FontWeight.bold)
                tagName = "h2";
            else if (this.fontSize == FontSize.font16 && (this.color == MojColor.Orange || this.color == MojColor.Purple) && this.fontWeight == FontWeight.bold)
                tagName = "h3";

        }
        return tagName;
    }
}

export enum MojColor {
    Default,
    Primary = "moj-primary-text-color",
    Secondary = "moj-secondary-text-color",
    Danger = "moj-danger-text-color",
    Orange = "moj-orange-text-color",
    Purple = "moj-purple-text-color",
    White = "moj-white-text-color"
}

export enum FontSize {
    font12 = "font-12",
    font14 = "font-14",
    font16 = "font-16",
    font18 = "font-18",
    font20 = "font-20",
    font22 = "font-22",
    font24 = "font-24"
}

export enum FontWeight {
    bold = "moj-bold",
    normal = ""
}