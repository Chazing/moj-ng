import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'radio-buttons-wrapper',
  templateUrl: './radio-buttons-wrapper.component.html',
  styleUrls: ['./radio-buttons-wrapper.component.css']
})
export class RadioButtonsWrapperComponent implements OnInit {
 @Input()describedbyId:string;
  constructor() { }

  ngOnInit() {
  }

}
