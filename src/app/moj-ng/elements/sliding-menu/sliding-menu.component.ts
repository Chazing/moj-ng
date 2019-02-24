import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
    selector: 'sliding-menu',
    templateUrl: 'sliding-menu.component.html',
    styleUrls: ['sliding-menu.component.css'],
})

export class SlidingMenuComponent {
    expanded = false;
    pinOn = false;
    @Input() timeout: number = 3000;
    @Input() title: string = "";
    @Input() btnTitle: string;
    @Input() btnIcon: string = "fa fa-check-circle";
    @Input() hideOkBtn: boolean = false;
    @Output() okBtnClick: EventEmitter<any> = new EventEmitter();
    @HostBinding('style.left') @Input() left: string = '10px';
    @HostBinding('style.top') @Input() top: string = '10px';
    @Input() width: number = 220;    

    toggleMenu() {
        this.expanded = !this.expanded;

        if (this.expanded) {
            setTimeout(() => {
                if (!this.pinOn) {
                    this.expanded = false;
                }
            }, this.timeout);
        }
    }

    togglePin() {
        this.pinOn = !this.pinOn;

        if (this.expanded && !this.pinOn) {
            this.expanded = false;
        }
    }

    okClick(event) {
        setTimeout(() => {
            this.okBtnClick.emit(event);
        }, 50);
    }
}