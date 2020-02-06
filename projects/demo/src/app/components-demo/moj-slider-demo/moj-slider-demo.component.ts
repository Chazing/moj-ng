import { ENUMS } from './../../enums';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moj-slider-demo',
  templateUrl: './moj-slider-demo.component.html',
  styleUrls: ['./moj-slider-demo.component.css']
})
export class MojSliderDemoComponent implements OnInit {
  sliderValue;
  sliderStepValue;
  sliderRangeValue = [1990, 2019];
  sliderVerticalValue;
  enums = ENUMS
  constructor() { }

  ngOnInit() {
  }

}
