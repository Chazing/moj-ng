import { Component, OnInit } from '@angular/core';
import { ENUMS, Enums } from '../../enums';

@Component({
  selector: 'app-dropdown-demo',
  templateUrl: './dropdown-demo.component.html',
  styleUrls: ['./dropdown-demo.component.css']
})
export class DropdownDemoComponent implements OnInit {
  Enums : Enums = ENUMS;
  fileTypeValue;
  fileTypeNgTemplateValue;
  fileTypeEditValue;
  fileTypeFilterValue;
  dropDownListItems: any = [{ id: 1, name: 'pdf' }, { id: 2, name: 'tiff' }, { id: 3, name: 'jpg' }];
  constructor() { }

  ngOnInit() {
  }



  // @Input() editable: boolean = false;
  // @Input() filter: boolean = false;
  // @Input() autoWidth: boolean = false;
  // @Input() setFocus: boolean = false;

}
