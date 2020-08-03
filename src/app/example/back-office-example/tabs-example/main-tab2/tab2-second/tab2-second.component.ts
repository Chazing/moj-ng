import { Component, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { DocsliderService } from "./DocsliderService";
import { MojSlidePreviewDocComponent, MojTabsService, MojTab } from '@moj/moj-ng';

@Component({
  selector: 'app-tab2-second',
  templateUrl: './tab2-second.component.html',
  styleUrls: ['./tab2-second.component.css']
})
export class Tab2SecondComponent implements OnInit {
  tab;
  mystyle;
  @ViewChild('slidePreviewDoc', { static: true}) slidePreviewDoc: MojSlidePreviewDocComponent;
  constructor(private mojTabsService: MojTabsService,private docsliderService:DocsliderService) {
    this.initTab() 
  }

  ngOnInit() {
    this.mystyle =this.docsliderService.getSliderSize ();
  }

  initTab() {
     this.tab = new MojTab('/bo-example/root/tab2/hello-tab2-second', of('module 2 second'));
    this.tab = this.mojTabsService.addOrGetTab(this.tab, null, this.closeTab);
  }

  closeTab(t: MojTab) {
      console.log("tab2 closed");
  }
  ngOnDestroy()
  {
    this.docsliderService.saveSliderSize ( this.slidePreviewDoc.getSliderSize());
  }
}
