
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { MojTab, MojTabsService } from '@moj/moj-ng';

@Component({
  selector: 'app-main-tab4',
  template: `
    <p>
      main-tab3 works!
    </p>
  `
})
export class MainTab4Component implements OnInit {

  tab: MojTab;
  
  constructor(private translate: TranslateService, private mojTabsService: MojTabsService) {
    this.initMainTab();
  }

  initMainTab() {
    this.tab = new MojTab("/bo-example/root/tab4", of('טאב 4'));
    this.tab = this.mojTabsService.addOrGetTab(this.tab, null, ()=> { console.log("tab4 closed")});
  }

  ngOnInit() {
  }

}
