import { Component, OnInit, Input, ContentChildren, QueryList } from '@angular/core';
import { MojFlipCardComponent } from '../flip-card.component';

@Component({
  selector: 'moj-flip-card-container',
  templateUrl: './flip-card-container.component.html',
  styleUrls: ['./flip-card-container.component.scss']
})
export class FlipCardContainerComponent implements OnInit {
  @Input() rows: number;
  @ContentChildren(MojFlipCardComponent) cards: QueryList<MojFlipCardComponent>;;
  style;
  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    this.style = {
      "grid-template-rows": `repeat(${this.rows}, auto)`,
      "grid-template-columns": `repeat(${this.cards.length}, 1fr)`,
    };
  }
}
