import { Component, OnInit } from '@angular/core';
import { NgForm, ControlContainer } from '@angular/forms';

@Component({
  selector: 'nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class NestedFormComponent implements OnInit {
  model = { freeText: "טקסט" };
  constructor() { }

  ngOnInit() {
  }

}
