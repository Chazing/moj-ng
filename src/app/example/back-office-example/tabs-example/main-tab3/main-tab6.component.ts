import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { MojTab, MojTabsService } from '@moj/moj-ng';

@Component({
  selector: 'app-main-tab6',
  template: `
    <p>
      main-tab3 works!
    </p>
  `
})
export class MainTab6Component implements OnInit {

  tab: MojTab;
  
  constructor(private translate: TranslateService, private mojTabsService: MojTabsService) {
    this.initMainTab();
  }

  initMainTab() {
    this.tab = new MojTab("/bo-example/root/tab6", of('טאב 6'));
    this.tab = this.mojTabsService.addOrGetTab(this.tab);
  }

  ngOnInit() {
  }

}
