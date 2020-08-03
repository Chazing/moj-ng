import { Component, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';

@Component({
    selector: 'moj-bo-menubar',
    templateUrl: './moj-bo-menubar.component.html',
    styleUrls: ['./moj-bo-menubar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MojBoMenubarComponent {
    @Input() barItems: MenuItem[];
 
    constructor(private elRef: ElementRef) { }

    onclick(event) {
        let elements = this.elRef.nativeElement.querySelectorAll('.ui-state-active');

        for (var i = 0; elements != null && i < elements.length; i++) {
            elements[i].classList.remove('ui-state-active');
        }
        if (event.target.parentElement.classList.contains('ui-menuitem-link')) {
            event.target.parentElement.classList.add('ui-state-active');
        }  
}
}
