import { Component, Input, Output, EventEmitter, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { MojUtilsService } from '../../shared/utils';
import { MojDirection } from '../website/language';

@Component({
    selector: 'sliding-menu',
    templateUrl: 'sliding-menu.component.html',
    styleUrls: ['sliding-menu.component.scss'],

})

export class SlidingMenuComponent implements OnInit{
    expanded = false;
    pinOn = false;
    @Input() timeout: number = 3000;
    @Input() title: string = "";
    @Input() btnTitle: string;
    @Input() btnIcon: string = "fa fa-check-circle";
    @Input() titleIcon :string =  "fa fa-check-circle";
    @Input() hideOkBtn: boolean = false;
    @Output() okBtnClick: EventEmitter<any> = new EventEmitter();
    @Input()  rtl:boolean= true;
    @HostBinding('style.top') @Input() top: string = '150px';
    @HostBinding('class.slide-ltr') private isLtr: boolean = false;
    @HostBinding('class.slide-rtl') private isrtl: boolean = false;
    @Input() width: number = 302;

    constructor(private _util: MojUtilsService)
    {

    }
    ngOnInit()
    {
        if( this._util.currentLang.dir == MojDirection.ltr )
            this.rtl= !this.rtl;
            this.isLtr=!this.rtl;
            this.isrtl=this.rtl;
    }

    toggleMenu() {
        this.expanded = !this.expanded;
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