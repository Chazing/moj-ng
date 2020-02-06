import { Component, OnInit } from '@angular/core';
import { Enums, ENUMS } from '../../enums';

@Component({
  selector: 'app-comming-soon',
  templateUrl: './comming-soon.component.html',
  styleUrls: ['./comming-soon.component.css']
})
export class CommingSoonComponent implements OnInit {
  Enums : Enums = ENUMS;
  constructor() { }

  ngOnInit() {
  }

}
