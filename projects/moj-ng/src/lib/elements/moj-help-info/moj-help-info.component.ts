import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation, HostListener } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

/**
 * Example
  ```html
  <moj-dynamic-label [textKey]="'מגיש הבקשה הכוללת'" [fontStyle]="Enums.FontStyle.SBold"></moj-dynamic-label>
  <moj-help-info style="margin-right: 5px;" [text]="'כאן יבוא טקסט עזרה'"></moj-help-info>
  ```
 */
@Component({
    selector: 'moj-help-info',
    templateUrl: './moj-help-info.component.html',
    styleUrls: ['./moj-help-info.component.scss'],
    host: { '[class.help-near-input]': 'nearInput' },
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojHelpInfoComponent implements OnInit {
    @Input() public text: string = "";
    @Input() public nearInput: boolean = false;
    isOpened: boolean;
    constructor() { }

    ngOnInit() {
    }

}
