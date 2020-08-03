import { MojAccessibleMenuComponent } from './../elements/website/moj-accessible-menu/moj-accessible-menu.component';
import { AfterContentInit, Directive, ContentChild, ContentChildren, ElementRef } from '@angular/core';

export enum DocFontSize { Large, Normal, Small };

@Directive({
    selector: "[moj-dynamic-fontsize]",
})
export class MojDynamicFontsize implements AfterContentInit {
    constructor(private el: ElementRef) {
    }

    @ContentChild(MojAccessibleMenuComponent, { static: true }) accessibleMenu: MojAccessibleMenuComponent;

    ngAfterContentInit() {
         document.getElementsByTagName("html")[0].style.fontSize = '16px';

        if (this.accessibleMenu != undefined) {
            this.accessibleMenu.changeFontSizeClick.subscribe(docFontSize => {
                this.changeFontSize(docFontSize);
            });
        }
    }

    changeFontSize(docFontSize: DocFontSize) {
        switch (docFontSize) {
            case 0: { document.getElementsByTagName("html")[0].style.fontSize = '20px'; break; }
            case 1: { document.getElementsByTagName("html")[0].style.fontSize = '16px'; break; }
            case 2: { document.getElementsByTagName("html")[0].style.fontSize = '12px'; break; }
        }
    }
}
