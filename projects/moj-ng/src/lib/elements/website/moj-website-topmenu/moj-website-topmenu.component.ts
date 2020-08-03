import { Component, Input, ContentChild, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { MojTopMenuService } from './moj-website-topmenu.service';
import { MojTopMenuItem } from './moj-website-topmenu-item.model';
import { Observable } from 'rxjs';

export class MojWebsiteTopmenuItemComponent {
    @Input()
    textKey: string = "";
    
    @Input()
    internalLink: string;

    @Input()
    externalLink: string;

    @Input() linkTarget: string;

    constructor(protected mojTopMenuService: MojTopMenuService) {
    }

    linkClick() {
        this.mojTopMenuService.navigateItem({ internalLink: this.internalLink, externalLink: this.externalLink ,linkTarget:this.linkTarget });
    }
}

/**
 * ```html
 *  <moj-website-topmenu>
        <main-item [textKey]="'Texts.mainItem1'">
            <sub-item [textKey]="'Texts.subItem1'" [internalLink]="'/website-example/grid'" [isSecure]="true"></sub-item>
            <sub-item [textKey]="'קישור נפתח בדף נפרד'" [internalLink]="'/website-example/form'" [linkTarget]="'_blank'"></sub-item>
        </main-item>
        <main-item [textKey]="'Texts.mainItem2'" [externalLink]="'http://www.d.co.il'"></main-item>
        <main-item [textKey]="'Texts.mainItem1'">
            <sub-item [textKey]="'Texts.subItem1'" [externalLink]="'http://www.d.co.il'"></sub-item>
            <sub-item [textKey]="'Texts.subItem2'"></sub-item>
        </main-item>
    </moj-website-topmenu>
```
 * 
 */
@Component({
    selector: 'moj-website-topmenu sub-item',
    template: `<li role="menuitem">
                <a [class.secure]="isSecure" href="javascript:void(0)" (click)="linkClick()">{{ textKey | translate }}</a>
            </li>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojWebsiteTopmenuSubItemComponent extends MojWebsiteTopmenuItemComponent {
    @Input()
    isSecure: boolean = false;

    ngOnInit() {
        this.topmenuService.addSubItem({ internalLink: this.internalLink, externalLink: this.externalLink, textKey: this.textKey });
    }

    constructor(protected topmenuService: MojTopMenuService) {
        super(topmenuService);
    }
}

/**
 * ```html
 *  <moj-website-topmenu>
        <main-item [textKey]="'Texts.mainItem1'">
            <sub-item [textKey]="'Texts.subItem1'" [internalLink]="'/website-example/grid'" [isSecure]="true"></sub-item>
            <sub-item [textKey]="'Texts.subItem2'" [internalLink]="'/website-example/form'"></sub-item>
        </main-item>
        <main-item [textKey]="'Texts.mainItem2'" [externalLink]="'http://www.d.co.il'"></main-item>
        <main-item [textKey]="'Texts.mainItem1'">
            <sub-item [textKey]="'Texts.subItem1'" [externalLink]="'http://www.d.co.il'"></sub-item>
            <sub-item [textKey]="'Texts.subItem2'"></sub-item>
        </main-item>
    </moj-website-topmenu>
```
 * 
 */
@Component({
    selector: 'moj-website-topmenu main-item',
    template: `
            <li role="menuitem" ngbDropdown>
                <a ngbDropdownToggle href="javascript:void(0)" (click)="linkClick()" [class.active]="id == (activeId | async)"><span class="item-text">{{ textKey | translate }}</span><span class="fas fa-chevron-down arrow" *ngIf="isSubMenu"></span></a>    
                <ul role="menubar" ngbDropdownMenu *ngIf="isSubMenu">
                    <li class="go-back"><a>Menu</a></li>
                    <li class="see-all"><a goBackToggle href="javascript:void(0)">{{textKey | translate }}</a></li>
                    <ng-content></ng-content>
                </ul>
            </li>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojWebsiteTopmenuMainItemComponent extends MojWebsiteTopmenuItemComponent {
    @ContentChild(MojWebsiteTopmenuSubItemComponent, { static: true })
    private _submenu: MojWebsiteTopmenuSubItemComponent;

    isSubMenu: boolean = false;
    
    id: number;

    activeId: Observable<number>;

    ngOnInit() {
        if (this._submenu) {
            this.isSubMenu = true;
        }
        this.id = this.mojTopMenuService.addMainItem({ internalLink: this.internalLink, externalLink: this.externalLink, textKey: this.textKey });
        this.activeId = this.mojTopMenuService.mainActiveId$;
    }

    constructor(protected mojTopMenuService: MojTopMenuService) {
        super(mojTopMenuService);
    }
}

/**
 * ```html
 *  <moj-website-topmenu>
        <main-item [textKey]="'Texts.mainItem1'">
            <sub-item [textKey]="'Texts.subItem1'" [internalLink]="'/website-example/grid'" [isSecure]="true"></sub-item>
            <sub-item [textKey]="'Texts.subItem2'" [internalLink]="'/website-example/form'"></sub-item>
        </main-item>
        <main-item [textKey]="'Texts.mainItem2'" [externalLink]="'http://www.d.co.il'"></main-item>
        <main-item [textKey]="'Texts.mainItem1'">
            <sub-item [textKey]="'Texts.subItem1'" [externalLink]="'http://www.d.co.il'"></sub-item>
            <sub-item [textKey]="'Texts.subItem2'"></sub-item>
        </main-item>
    </moj-website-topmenu>
```
 *  <example-url>../screenshots/top-menu.png</example-url>
 */
@Component({
    selector: 'moj-website-topmenu',
    templateUrl: "moj-website-topmenu.component.html",
    styleUrls: ["./moj-website-topmenu.component.scss"],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojWebsiteTopmenuComponent {
    breadcrumbsArr: Observable<MojTopMenuItem[]>;
    active: boolean = false;
    active2: boolean = false;
    menuActive: boolean = true;

    menuInAction: boolean;

    constructor(protected mojTopMenuService: MojTopMenuService) {
        this.breadcrumbsArr = mojTopMenuService.breadcrumbs$;
        mojTopMenuService.menuInAction$.subscribe(data => {
            this.menuInAction = data;
            this.active = data;
        });
    }

    linkClick(item: MojTopMenuItem) {
        this.mojTopMenuService.navigateItem(item);
    }

    menuClick(fromButton: boolean) {
        if (fromButton) {
            this.active2 = false;
            this.active = !this.active;
            this.mojTopMenuService.menuStateChange(this.active);
        }
        else {
            this.active2 = !this.active2;
            this.active = false;
            this.mojTopMenuService.menuStateChange(false);
        }
    }

    ngAfterViewInit() {
        setTimeout(() => {
            var locationPath = this.mojTopMenuService.lastLocation;
            if (locationPath != '') {
                this.mojTopMenuService.handleActiveItem(locationPath);
            }
        });
    }

}
