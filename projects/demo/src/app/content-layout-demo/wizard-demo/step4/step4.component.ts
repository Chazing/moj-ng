import { Component, OnInit } from '@angular/core';
import { WizardItemComponentBase, MojColor, CaptionType } from '@moj/moj-ng';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.css']
})
export class Step4Component extends WizardItemComponentBase implements OnInit {
  mojColor = MojColor;
  captionType = CaptionType;
  step4Model = {
  }

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
