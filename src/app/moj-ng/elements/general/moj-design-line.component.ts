import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

/**
 * ```html
 * <moj-design-line widthColumns="8" [lineStyle]="lineStyle.Dots"></moj-design-line>
```
 * 
 */
@Component({
    selector: 'moj-design-line',
    template: `<div class="moj-design-line {{lineStyle}} col-sm-{{widthColumns}}"></div>`,
    styleUrls: ["moj-design-line.component.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojDesignLineComponent {
    @Input() widthColumns: number = 12;
    @Input() lineStyle: LineStyle = LineStyle.Default;
}

export enum LineStyle {
    Default = "",
    Dots = "dots"
}

