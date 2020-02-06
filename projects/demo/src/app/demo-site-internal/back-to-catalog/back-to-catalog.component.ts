import { Component, OnInit } from '@angular/core';
import { demoMenuItem, DemoSharedService } from '../../common/services/demo-shared.service';

@Component({
  selector: 'back-to-catalog',
  templateUrl: './back-to-catalog.component.html',
  styleUrls: ['./back-to-catalog.component.css']
})
export class BackToCatalogComponent implements OnInit {
  currentItem: demoMenuItem;

  constructor(private demoSharedService: DemoSharedService) {
    demoSharedService.currentItem.subscribe((value) => {
      this.currentItem = value;
    });
  }

  ngOnInit() {
  }

}
