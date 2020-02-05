import { AfterContentInit, Directive, ContentChild, ContentChildren, ElementRef } from '@angular/core';
import { MojAccessibleMenuComponent } from './moj-accessible-menu/moj-accessible-menu.component';

export enum DocFontSize { Large, Normal, Small };

@Directive({
    selector: "[moj-dynamic-fontsize]",
})
export class MojDynamicFontsize implements AfterContentInit {
    constructor(private el: ElementRef) {
    }

    @ContentChild(MojAccessibleMenuComponent, { static: true }) accessibleMenu: MojAccessibleMenuComponent;

    ngAfterContentInit() {
        if (this.accessibleMenu != undefined) {
            this.accessibleMenu.changeFontSizeClick.subscribe(docFontSize => {
                this.changeFontSize(docFontSize);
            });
        }
    }

    changeFontSize(docFontSize: DocFontSize) {
        switch (docFontSize) {
            case 0: this.el.nativeElement.style.fontSize = '18px'; break;
            case 1: this.el.nativeElement.style.fontSize = '16px'; break;
            case 2: this.el.nativeElement.style.fontSize = '14px'; break;
        }
    }
}
