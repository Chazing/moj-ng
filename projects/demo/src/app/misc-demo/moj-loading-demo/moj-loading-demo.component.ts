import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MojLoadingService, ButtonStyle, MojPanelComponent } from '@moj/moj-ng';
import { Enums, ENUMS } from '../../enums';

@Component({
  selector: 'app-moj-loading-demo',
  templateUrl: './moj-loading-demo.component.html',
  styleUrls: ['./moj-loading-demo.component.css']
})
export class MojLoadingDemoComponent implements OnInit {
  buttonStyle = ButtonStyle;
  Enums : Enums = ENUMS;
  model = {
    date: new Date(),
    description: "יצוא קבצים",
    type: "לילי"
  }
  @ViewChild(MojPanelComponent, { static: true, read: ViewContainerRef }) panel;
  constructor(private loadingService: MojLoadingService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.loadingService.show(this.panel);
    }, 0);
  }

  start() {
    this.loadingService.show(this.panel);
  }

  end() {
    this.loadingService.hide(this.panel);
  }
}
