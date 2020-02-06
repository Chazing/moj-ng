import { Component, OnInit } from '@angular/core';
import { MojTab, MojTabsService } from '../../../../moj-ng';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-main-tab5',
  template: `
    <p>
      main-tab3 works!
    </p>
  `
})
export class MainTab5Component implements OnInit {

  tab: MojTab;
  
  constructor(private translate: TranslateService, private mojTabsService: MojTabsService) {
    this.initMainTab();
  }

  initMainTab() {
    this.tab = new MojTab("/bo-example/root/tab5", of('טאב 5'));
    this.tab = this.mojTabsService.addOrGetTab(this.tab);
  }

  ngOnInit() {
  }

}
