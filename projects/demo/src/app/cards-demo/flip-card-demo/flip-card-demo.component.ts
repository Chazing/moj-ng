import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ENUMS, Enums } from '../../enums';

@Component({
  selector: 'app-flip-card-demo',
  templateUrl: './flip-card-demo.component.html',
  styleUrls: ['./flip-card-demo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlipCardDemoComponent implements OnInit {
  fileNumber: number;
  isEditMode: boolean;
  Enums: Enums = ENUMS;

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.isEditMode=false;
  }
}
