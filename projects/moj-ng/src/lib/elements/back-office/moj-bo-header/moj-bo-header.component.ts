import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MojBoHeaderSearchComponent } from '../moj-bo-header-search/moj-bo-header-search.component';
import { PermissionService } from '../../../permissions/permission.service';
import { SelectItem } from 'primeng/components/common/api';

@Component({
    selector: 'moj-bo-header',
    templateUrl: './moj-bo-header.component.html',
    styleUrls: ['./moj-bo-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojBoHeaderComponent implements OnInit {
    @Input() addLogin: boolean = true;
    @Input() username: string;
    @Input() areaName: string;
    @Input() mainTitle: string;
    @Input() subTitle: string;
    @Input() envType: eEnvType;
    @Input() version: string;
    @Input() appLogoClass: string;
    @Input() hideJusticeLogo: boolean;
    @Input() logoutText: string;
    @Input() welcomeText: string;
    @Input() moreMenuItems: BOHeaderMenuItem[];
    @Input() showLogout: boolean = true;
    @Output() logoutClick: EventEmitter<any> = new EventEmitter<any>();
    @Output() advancedSearchClicked: EventEmitter<any> = new EventEmitter<any>();

    // search in header
    @Input() searchItems: SelectItem[];
    @Input() addSearch: boolean = true;
    @Input() searchPlaceholder: string;
    @Input() selectedSearch: SelectItem;
    @Input() disabledSearch: boolean = false;
    @Input() disabledSearchText: boolean = false;
    @Output() searchClick: EventEmitter<any> = new EventEmitter<any>();
    @Output() searchComboChanged: EventEmitter<any> = new EventEmitter<any>();
    @ViewChild("headerSearch", { static: true }) headerSearch: MojBoHeaderSearchComponent;


    appEnvTitle: string;
    envClass: string;
    isLogout: boolean;

    constructor(private translateService: TranslateService, private permissionService: PermissionService) { }

    ngOnInit() {
        this.initEnvironment();
        this.initMoreMenuItems();

    }

    private initEnvironment() {
        this.logoutText = this.logoutText || this.translateService.instant('MojTexts.logout');
        this.welcomeText = this.welcomeText || this.translateService.instant('MojTexts.welcome');
        this.envClass = eEnvType[this.envType];
        switch (this.envType) {
            case eEnvType.Dev: {
                this.appEnvTitle = this.translateService.instant('AppEnvironments.Dev');
                break;
            }
            case eEnvType.QA: {
                this.appEnvTitle = this.translateService.instant('AppEnvironments.QA');
                break;
            }
            case eEnvType.Production: {
                this.appEnvTitle = this.translateService.instant('AppEnvironments.Production');
                break;
            }
            case eEnvType.Customers: {
                this.appEnvTitle = this.translateService.instant('AppEnvironments.Customers');
                break;
            }
            case eEnvType.Integration: {
                this.appEnvTitle = this.translateService.instant('AppEnvironments.Integration');
                break;
            }
            default:
                break;
        }
        if (this.appEnvTitle && this.version) this.appEnvTitle = `${this.appEnvTitle} - ${this.version}`;
    }

    handleLogoutClick(e) {
        this.isLogout = !this.isLogout;
        console.log('Logout clicked!');
        if (this.logoutClick) {
            this.logoutClick.emit(e);
        }
    }

    initMoreMenuItems() {
        if (this.moreMenuItems) {
            this.moreMenuItems.forEach((element, i) => {
                if (element.name) {
                    let permissionResult = this.permissionService.getControllerPermission(element.name);
                    this.moreMenuItems[i].disabled = !permissionResult.enable;
                    this.moreMenuItems[i].visible = permissionResult.visible;
                }
            })

            this.moreMenuItems = this.moreMenuItems.filter(x => x.visible == true);
        }

    }

    advancedSearchClick(e) {
        this.advancedSearchClicked.emit(event)
    }
}

export enum eEnvType {
    Dev,
    QA,
    Production,
    Customers,
    Integration
}

export interface BOHeaderMenuItem {
    text: string;
    command: (event?: any) => void;
    name?: string;
    disabled?: boolean;
    visible?: boolean;
}
