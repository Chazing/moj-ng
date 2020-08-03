import { MojLanguageService } from './../../shared/moj-language.service';
import { Component, Input, Output, EventEmitter, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { MojDirection } from '../website/language';
import { trigger, state, transition, animate, style } from '@angular/animations';
const EXPANSION_PANEL_ANIMATION_TIMING = '400ms cubic-bezier(0.4,0.0,0.2,1)';


/**
  * Usage example
  * ```html
  * <div class="moj-sliding-menu-container">
  * <sliding-menu  [title]="'חיפוש'" [isSliding]="false"  [titleIcon]="'myClass'" [constrictedTitleIcon]="'myClassUn'" [rtl]="true">
     filter from right to left
    </sliding-menu>
  * <div style="display: inline-block">
כאשר החלון לא צף class שימוש ב
    </div>
    <sliding-menu  [title]="'חיפוש'" [isSliding]="false"  [titleIcon]="'myClass'" [constrictedTitleIcon]="'myClassUn'" [rtl]="false">
      filter from left to right
    </sliding-menu>
  * </div>
  /////
  <sliding-menu-wrapper>  
  <sliding-menu  [title]="'חיפוש'" [isSliding]="false"  [titleIcon]="'myClass'" [constrictedTitleIcon]="'myClassUn'" [rtl]="true">
     filter from right to left
    </sliding-menu>
  * <div style="display: inline-block">
          שימוש בקומפוננטה עוטפת כאשר החלון לא צף
    </div>
    <sliding-menu  [title]="'חיפוש'" [isSliding]="false"  [titleIcon]="'myClass'" [constrictedTitleIcon]="'myClassUn'" [rtl]="false">
      filter from left to right
    </sliding-menu>
  </sliding-menu-wrapper>

<sliding-menu  [title]="'חיפוש'" [isSliding]="true"  [titleIcon]="'myClass'" [constrictedTitleIcon]="'myClassUn'" [rtl]="false" [top]="'150px'">
     חלון צף
    </sliding-menu>
 */
@Component({
    selector: 'sliding-menu',
    templateUrl: 'sliding-menu.component.html',
    styleUrls: ['sliding-menu.component.scss'],
    animations: [
        trigger('bodyExpansion', [
            state('collapsed', style({ width: '0px' })),
            state('expanded', style({ width: '*' })),
            transition('expanded => collapsed', [animate("0.2s")]),
            transition('collapsed => expanded', [animate("0.2s")])
        ]),
        trigger('conentExpansion', [
            state('fade', style({ opacity: '0' })),
            state('displayed', style({ opacity: '1' })),
            transition('displayed => fade', [animate("0.22s")]),
            transition('fade => displayed', [animate("0.22s")])
        ])
    ],
    // encapsulation:ViewEncapsulation.None
})

export class SlidingMenuComponent implements OnInit {
    @Input() expanded = false;
    pinOn = false;
    @Input() isSliding: boolean = false;
    @Input() timeout: number = 3000;
    @Input() title: string = "";
    @Input() btnTitle: string;
    @Input() btnIcon: string = "fa fa-check-circle";
    @Input() titleIcon: string = "fa fa-check-circle";
    @Input() constrictedTitleIcon: string = "fa fa-check-circle";
    @Input() hideOkBtn: boolean = false;
    @Output() okBtnClick: EventEmitter<any> = new EventEmitter();
    @Output() onExpand: EventEmitter<any> = new EventEmitter();
    @Input() rtl: boolean = true;
    @Input() bgColor:string="#fff";
    @HostBinding('style.top') @Input() top: string = '150px';
    @HostBinding('class.slide-ltr') public isLtr: boolean = false;
    @HostBinding('class.slide-rtl') public isrtl: boolean = false;
    //@HostBinding('class.slide-rtl-expanded') public isrtlExpanded: boolean = false;
    //@HostBinding('style.position') private position="fixed";

    constructor(private languageService: MojLanguageService) {

    }

    ngOnInit() {
        if (this.languageService.currentLang.dir == MojDirection.ltr)
            this.rtl = !this.rtl;
        this.isLtr = !this.rtl;
        this.isrtl = this.rtl;
        if (this.isSliding) {
            this.top = this.top;
        }
        else {
            this.top = "initial"
        }
    }

    toggleMenu() {
        this.expanded = !this.expanded;
        this.onExpand.emit(this.expanded);
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