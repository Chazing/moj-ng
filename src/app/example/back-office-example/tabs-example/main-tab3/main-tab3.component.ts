import { Component, OnInit } from '@angular/core';
import { MojTab, MojTabsService } from '../../../../moj-ng';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-tab3',
  template: `
    <p>
      main-tab3 works!
    </p>
  `
})
export class MainTab3Component implements OnInit {

  tab: MojTab;
  
  constructor(private translate: TranslateService, private mojTabsService: MojTabsService) {
    this.initMainTab();
  }

  initMainTab() {
    this.tab = new MojTab("/bo-example/root/tab3", this.translate.get("Menu.mainTab"));
    this.tab = this.mojTabsService.addOrGetTab(this.tab);
  }

  ngOnInit() {
  }

}
