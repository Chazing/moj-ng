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
            <span *ngSwitchCase="'span'" [class]="cssClasses">{{ textKey | translate }}<ng-content></ng-content></span>
            <h1 *ngSwitchCase="'h1'" [class]="cssClasses">{{ textKey | translate }}</h1>
            <h2 *ngSwitchCase="'h2'" [class]="cssClasses">{{ textKey | translate }}</h2>
            <h3 *ngSwitchCase="'h3'" [class]="cssClasses">{{ textKey | translate }}</h3>
            <h4 *ngSwitchCase="'h4'" [class]="cssClasses">{{ textKey | translate }}</h4>
        </span>`,
        changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojDynamicLabelComponent {
    @Input() textKey: string = "";
    @Input() captionType: CaptionType = CaptionType.default;
    @Input() fontSize: FontSize = FontSize.font14;
    @Input() fontWeight: FontWeight = FontWeight.normal;
    @Input() color: MojColor = MojColor.default;

    cssClasses: string = "";

    get getCaptionType(){
        this.cssClasses = this.fontSize.toString();
        if(this.color != MojColor.default)
            this.cssClasses += " " + this.color.toString();
        if(this.fontWeight == FontWeight.bold)
            this.cssClasses += " bold";
        

        var tagName = "span";
        if(this.captionType!=CaptionType.default)
            tagName = this.captionType.toString();
        else
            {
                if (this.fontSize == FontSize.font20 && this.color == MojColor.anotherBlue1 && this.fontWeight == FontWeight.bold)
                    tagName = "h1";
                else if (this.fontSize == FontSize.font16 && ((this.color == MojColor.brightBlue && this.fontWeight == FontWeight.bold) || this.color == MojColor.black))
                    tagName = "h2";
                else if (this.fontSize == FontSize.font14 && (((this.color == MojColor.lightBlue || this.color == MojColor.green) && this.fontWeight == FontWeight.bold) || this.color == MojColor.black || this.color == MojColor.darkOrange))
                    tagName = "h3";
                else if (this.fontSize == FontSize.font12 && (this.color == MojColor.black || this.color == MojColor.darkOrange) && this.fontWeight == FontWeight.normal)
                    tagName = "h4";
            }
        return tagName;
    }
}

export enum MojColor
{
    default,
    lightBlue = "blue1",
    darkBlue = "blue2",
    blue = "blue3",
    anotherBlue1 = "blue4",
    brightBlue = "blue6",
    lightOrange = "orange1",
    darkOrange = "orange2",
    orange = "orange3",
    anotherOrange1 = "orange4",
    red = "red1",
    redEarth = "red2",
    green = "green1",
    grey = "grey",
    black = "black"
}

export enum FontSize
{
    font12 = "font-12",
    font14 = "font-14",
    font16 = "font-16",
    font18 = "font-18",
    font20 = "font-20",
    font22 = "font-22",
    font24 = "font-24"
}

export enum FontWeight
{
    bold,
    normal
}