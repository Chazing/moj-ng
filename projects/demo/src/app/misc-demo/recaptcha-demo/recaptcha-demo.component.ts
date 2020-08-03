import { Component, OnInit } from '@angular/core';
import { Enums, ENUMS } from '../../enums';

@Component({
  selector: 'app-recaptcha-demo',
  templateUrl: './recaptcha-demo.component.html',
  styleUrls: ['./recaptcha-demo.component.css']
})
export class RecaptchaDemoComponent implements OnInit {
  model = {
    recaptchaString: '',
    someInput: ''
  }
  Enums: Enums = ENUMS;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event) {
    alert('recaptcha string: ' + this.model.recaptchaString);
  }
}
