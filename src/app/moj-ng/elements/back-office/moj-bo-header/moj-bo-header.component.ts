import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'moj-bo-header',
  templateUrl: './moj-bo-header.component.html',
  styleUrls: ['./moj-bo-header.component.css'],
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
  @Output() logoutClick: EventEmitter<any> = new EventEmitter<any>();

  appEnvTitle: string;
  envClass: string;
  isLogout: boolean;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.initEnvironment();
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
}
