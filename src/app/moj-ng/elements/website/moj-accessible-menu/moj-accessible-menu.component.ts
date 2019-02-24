import { Component, Output, EventEmitter } from '@angular/core';
import { DocFontSize } from '../dynamic-font-size.directive';


/**
 * ```typescript
 * <moj-accessible-menu></moj-accessible-menu>
 * ```
 * <example-url>../screenshots/accessiblMenu.JPG</example-url>
 */
@Component({
    selector: 'moj-accessible-menu',
    templateUrl: "moj-accessible-menu.component.html",
})
export class MojAccessibleMenuComponent {
    @Output()
    changeFontSizeClick: EventEmitter<DocFontSize> = new EventEmitter<DocFontSize>();
    state;

    changeFontSize(docFontSize: DocFontSize) {
        this.changeFontSizeClick.emit(docFontSize);
    }

    goToContent() {
        this.state = 'out';
        var element = document.querySelector('.container-fluid');
        if (element) {
            element.scrollIntoView();
            (<HTMLElement>element).focus();
        }
    }
}