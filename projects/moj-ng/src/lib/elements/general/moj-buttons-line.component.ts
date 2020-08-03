import { Alignment } from './general.enum';
import { Component, Input, ElementRef, Optional, ChangeDetectorRef } from '@angular/core';
import { MojFormService } from '../../directives/moj-form.service';

/**
 * ```html
 * <moj-buttons-line>
              <moj-cancel-button (click)="onCancel($event)"></moj-cancel-button>
</moj-buttons-line>
```
 * <example-url>../screenshots/buttonLine.JPG</example-url>
 */
@Component({
    selector: 'moj-buttons-line',
    template: `<moj-line [ngClass]="{'dialog-bottom': isInDialogFooter}" *ngIf=isShow><div class="div-buttons" [ngClass]="{'buttons-right': buttonsAlign==buttonsAlignList.right,'buttons-center': buttonsAlign==buttonsAlignList.center}"><ng-content></ng-content></div></moj-line>`
})
export class MojButtonsLineComponent {
    @Input() hideOnGridEdit: boolean = true;
    @Input() isInDialogFooter: boolean;
    @Input() buttonsAlign: Alignment = Alignment.left;
    public buttonsAlignList = Alignment;
    isShow: boolean = true;
    constructor(public el: ElementRef, @Optional() private mojFormService: MojFormService, private cdr: ChangeDetectorRef) {
        if (mojFormService) {
            mojFormService.isGridEditOpen.subscribe(res => {
                if (this.hideOnGridEdit)
                    this.isShow = !res;
                // this.cdr.detectChanges();
            })
        }
    }
}