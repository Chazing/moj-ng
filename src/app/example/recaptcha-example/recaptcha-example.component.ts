import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecaptchaModel } from './model';
import { MojRecaptchaService } from '../../moj-ng/elements/website/moj-recaptcha/moj-recaptcha.service';
import { ButtonStyle } from '../../moj-ng/elements/buttons/button-style';

@Component({
  selector: 'app-recaptcha-example',
  templateUrl: './recaptcha-example.component.html',
  styleUrls: ['./recaptcha-example.component.css']
})
export class RecaptchaExampleComponent implements OnInit {
  buttonStyle = ButtonStyle;
  model: RecaptchaModel = { recaptchaString: "aaa", recaptchaString1: "aaa" };

  constructor(private http: HttpClient, private recaptchaService: MojRecaptchaService) { }

  ngOnInit() {
    this.recaptchaService.recaptchaReady.subscribe((res) => {
      this.recaptchaService.appendInvisibleRecaptchaToElement();
    });
  }

  onSubmit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post("/api/Values", { RecaptchaString: this.model.recaptchaString }, httpOptions).subscribe(
      (res) => { debugger; },
      (res) => { debugger; }
    );
  }

  onClick() {
    this.recaptchaService.executeRecaptcha().subscribe((res) => {
      this.model.recaptchaString = res;
      this.onSubmit();
    })
  }
}
