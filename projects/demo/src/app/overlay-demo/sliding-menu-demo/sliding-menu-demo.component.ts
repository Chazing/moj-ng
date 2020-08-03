import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { onOffSwitchType, MojCategoryFilter, MojDynamicCheckboxComponent, Enums } from '@moj/moj-ng';
import { ENUMS } from '../../enums';


@Component({
  selector: 'app-sliding-menu-demo',
  
  templateUrl: './sliding-menu-demo.component.html',
  encapsulation:ViewEncapsulation.None
 
})
export class SlidingMenuDemoComponent implements OnInit {
  enums: Enums = ENUMS;
  filterConfig={
    categories: [
        new MojCategoryFilter(
            "תיקים", null, [
                new MojCategoryFilter("תיקי בית משפט מחוזי", null, [
                        new MojCategoryFilter(
                            "בימ\"ש", [
                                [{ name: "fld1", type: MojDynamicCheckboxComponent, value: true, labelTextKey: "חיפה"}],
                                [{ name: "fld2", type: MojDynamicCheckboxComponent, labelTextKey: "ירושלים" }]
                            ]
                        )
                ]
                )])]              
};

  constructor() { }

  ngOnInit() {
  }

  filterMyData(){

  }
  
}
