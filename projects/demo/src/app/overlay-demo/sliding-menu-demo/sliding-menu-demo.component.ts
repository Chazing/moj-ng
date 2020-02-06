import { Component, OnInit } from '@angular/core';
import { onOffSwitchType, MojCategoryFilter, MojDynamicCheckboxComponent } from 'src/app/moj-ng';


@Component({
  selector: 'app-sliding-menu-demo',
  templateUrl: './sliding-menu-demo.component.html',
 
})
export class SlidingMenuDemoComponent implements OnInit {
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
  filterMyData()
  {

  }
  
}
