import { Component, OnInit } from '@angular/core';
import { Enums, ENUMS } from '@moj/moj-ng';


@Component({
  selector: 'app-moj-chips-demo',
  templateUrl: './moj-chips-demo.component.html',
  styleUrls: ['./moj-chips-demo.component.css']
})
export class MojChipsDemoComponent implements OnInit {
  Enums: Enums = ENUMS;
  items: any[] = [{ key: 0, value: 'סיווג' + 0 }];
  items2: any[] = [{ key: 0, value: 'סיווג' + 0 }];
  colors = Object.keys(this.Enums.MojColor);
  currentIndex = 0;
  currentIndex2 = 0;
  constructor() { }

  ngOnInit() {
  }

  addItem(listid) {
    switch (listid) {
      case 1:
        this.items.push({ key: this.currentIndex, value: 'סיווג' + (this.currentIndex + 1) });
        this.currentIndex++;
        break;
      case 2:
        this.items2.push({ key: this.currentIndex2, value: 'סיווג' + (this.currentIndex2 + 1), chipColor: this.Enums.MojColor[this.colors[this.currentIndex2]] });
        this.currentIndex2++;
        break
    }

  }

  modelChange(){
    alert('modelChanged');
  }
}
