import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'permissions-demo',
  templateUrl: './permissions-demo.component.html',
  styleUrls: ['./permissions-demo.component.css']
})
export class PermissionsDemoComponent implements OnInit {
  autocompleteValue;
  textval;
  ddValue = {key:0,value:""};
  public listItems = [
      { value: "ישראל", key: 1 },
      { value: "אלבניה", key: 2 },
      { value: "אמריקה", key: 3 },
      { value: "אוסטריה", key: 4 },
      { value: "רוסיה", key: 5 },
      { value: "בריטניה", key: 6 },
      { value: "גרמניה", key: 7 },
      { value: "דנמרק", key: 8 },
      { value: "טורקיה", key: 9 },
      { value: "ארצות הברית", key: 10 },
      { value: "מצרים", key: 11 },
      { value: "לוב", key: 12 },
      { value: "אוזבקיסטן", key: 13 },
      { value: "הולנד", key: 14 },
      { value: "בלגיה", key: 15 }
  ];

  constructor() {
 
   }

  ngOnInit() {
  }
  doSome()
  {
    
  }
}
