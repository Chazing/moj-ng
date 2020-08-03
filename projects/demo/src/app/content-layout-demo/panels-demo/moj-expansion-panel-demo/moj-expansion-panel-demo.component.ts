import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Enums, ENUMS } from '../../../enums';

@Component({
  selector: 'app-moj-expansion-panel-demo',
  templateUrl: './moj-expansion-panel-demo.component.html',
  styleUrls: ['./moj-expansion-panel-demo.component.css'],

})
export class MojExpansionPanelDemoComponent implements OnInit {
enums:Enums=ENUMS;
field1:number;
field2:number;
field3:number;
field4:number;
field5:number;
keywords:any;
processTypeList = [{ key: 1, value: 'פתיחת הליך' }, { key: 2, value: "בקשה לצילום מסמכים" }];
  constructor() { }

  ngOnInit() {
  }
  getSum() {
    return ((this.field1 + this.field2 + this.field3 + this.field4 + this.field5) > 0 ?
      this.field1 + this.field2 + this.field3 + this.field4 + this.field5 : "")
  }

}
