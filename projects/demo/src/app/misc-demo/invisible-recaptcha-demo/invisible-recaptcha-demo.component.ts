import { ButtonStyle } from './../../../../../../src/app/moj-ng/elements/buttons/button-style';
import { Component, OnInit } from '@angular/core';
import { Enums, ENUMS } from '../../enums';

@Component({
  selector: 'app-invisible-recaptcha-demo',
  templateUrl: './invisible-recaptcha-demo.component.html',
  styleUrls: ['./invisible-recaptcha-demo.component.css']
})
export class InvisibleRecaptchaDemoComponent implements OnInit {
  Enums:Enums=ENUMS;
  buttonStyle = ButtonStyle;
  model = {
    recaptchaString: '',
    someInput: ''
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(event) {
    alert('recaptcha string: ' + this.model.recaptchaString);
  }
}
