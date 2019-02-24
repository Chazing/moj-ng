import { Component } from '@angular/core';
import { MojTab } from '../../../moj-ng/elements/tabs/models/moj-tabs.models';
import { TranslateService } from '../../../../../node_modules/@ngx-translate/core';
import { MojTabsService } from '../../../moj-ng/elements/tabs/services/moj-tabs.service';
import { NavigationService } from '../../../moj-ng/elements/tabs/services/navigation.service';
import { eEnvType, BOHeaderMenuItem } from '../../../moj-ng/elements/back-office/moj-bo-header/moj-bo-header.component';
import { of } from 'rxjs';

@Component({
  templateUrl: './bo-example.component.html'
})
export class BOExampleComponent {
  tab: MojTab;
  barItems;
  currentEnvType = eEnvType.Dev;
  searchItems = [{ label: 'פניה', value: 1 }, { label: 'בקשה', value: 2 }];
  moreMenuItems: BOHeaderMenuItem[];
  searchPlaceholder: string;

  constructor(
    private translate: TranslateService,
    private mojTabsService: MojTabsService,
    private navigationService: NavigationService
  ) {
    this.initMainTab();
    this.moreMenuItems = [{ text: 'עדכון פרטים אישיים', command: this.onUpdateDetails }];
  }

  ngOnInit() {
    // this.initMainTab();
  }

  searchComboChanged(e) {
    this.searchPlaceholder =`חיפוש ${e.value.label}`;
  }

  onUpdateDetails(e: any) {
    alert('עדכון פרטים אישיים נלחץ');
  }

  initMainTab(): any {
    this.tab = new MojTab('', this.translate.get('Menu.mainTab'));
    this.tab.appMainTab = true;
    this.tab.removable = false;
    this.tab.selected = true;
    this.tab.sideMenuItems = [
      { url: '/bo-example/root/main/sub-tab1', title$: this.translate.get('grid'), imgUrl: '/assets/indicators.png' },
      {
        url: '/bo-example/root/main/sub-tab2',
        title$: this.translate.get('autocomplete'),
        imgUrl: '/assets/Icn_NewPniyaSmall.png'
      }
    ];

    this.tab = this.mojTabsService.addOrGetTab(this.tab);
    // this.mojTabsService.addOrGetTab(new MojTab("/fff", of("sdfsfsf")));
    // this.mojTabsService.addOrGetTab(new MojTab("/ddd", of("sdfsfsf")));
  }

  openNewTab() {
    this.navigationService.navigate('/bo-example/root/tab2');
  }

  searchClick(e) {}
}
