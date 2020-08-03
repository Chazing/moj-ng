import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-help-text',
  templateUrl: './input-help-text.component.html',
  styleUrls: ['./input-help-text.component.css']
})
export class InputHelpTextComponent implements OnInit {
  @Input() forId: string;
  @Input() rightMessage: string;
  @Input() leftMessage: string;
  @Input() showLeftMessage :boolean;

  constructor() { }

  ngOnInit() {
  }

}
