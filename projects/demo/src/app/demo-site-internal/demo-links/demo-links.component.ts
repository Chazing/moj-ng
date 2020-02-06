
import { ButtonStyle, MojConfigService } from '@moj/moj-ng';
import { Component, OnInit } from '@angular/core';
import { DemoSharedService, demoMenuItem } from '../../common/services/demo-shared.service';

@Component({
  selector: 'demo-links',
  templateUrl: './demo-links.component.html',
  styleUrls: ['./demo-links.component.css']
})
export class DemoLinksComponent implements OnInit {
  buttonStyle = ButtonStyle;
  currentItem: demoMenuItem;

  constructor(private demoSharedService: DemoSharedService, private config: MojConfigService) {
    demoSharedService.currentItem.subscribe((value) => {
      this.currentItem = value;
    });
  }


  ngOnInit() {
  }

  onCodeClick() {
    window.open((<any>this.config.configuration).tfsUrl + this.currentItem.tfsLink, '_blank');
  }

  onCompodocClick() {
    window.open((<any>this.config.configuration).compodocUrl + this.currentItem.compodocLink, '_blank');
   
  }
}
