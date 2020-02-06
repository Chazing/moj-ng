import { ENUMS } from './../../enums';
import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.css']
})
export class DemoContainerComponent implements OnInit {
  enums = ENUMS;
  @Input() title: string;
  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle("Moj Demo | " + this.title);
  }
}
