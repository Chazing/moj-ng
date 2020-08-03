import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { DocFontSize } from '../../../directives/dynamic-font-size.directive';


/**
 * ```typescript
 * <moj-accessible-menu></moj-accessible-menu>
 * ```
 * <example-url>../screenshots/accessiblMenu.JPG</example-url>
 */
@Component({
    selector: 'moj-accessible-menu',
    templateUrl: "moj-accessible-menu.component.html",
    styleUrls: ["./moj-accessible-menu.component.scss"],
    encapsulation: ViewEncapsulation.None
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
        var element = document.querySelector('main');
        if (element) {
            element.scrollIntoView();
            (<HTMLElement>element).focus();
        }
    }
}