import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RecaptchaModel } from './model';
import { MojRecaptchaService } from '../../moj-ng/elements/website/moj-recaptcha/moj-recaptcha.service';
import { ButtonStyle } from '../../moj-ng/elements/buttons/button-style';
import { MojDialogService } from '../../moj-ng/messages/moj-dialog.service';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-recaptcha-example',
  templateUrl: './recaptcha-example.component.html',
  styleUrls: ['./recaptcha-example.component.css']
})
export class RecaptchaExampleComponent implements OnInit {
  buttonStyle = ButtonStyle;
  model: RecaptchaModel = { recaptchaString: "", recaptchaString1: "" };

  constructor(private http: HttpClient, private recaptchaService: MojRecaptchaService,
    private dialogService: MojDialogService,
    ) { }

  ngOnInit() {
    // this.recaptchaService.recaptchaReady.subscribe((res) => {
    //   this.recaptchaService.appendInvisibleRecaptchaToElement();
    // });
  }

  onSubmit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post("/api/TestRecaptcha", { RecaptchaString: this.model.recaptchaString, id: "123456" }, httpOptions).subscribe(
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

  public openContentDialog() {
    this.dialogService.openDialog('Texts.dialogTitle', DialogExampleComponent, 400, 700, { a: 'aa', b: 'bb' });
    this.dialogService.dialogResult.subscribe(res => {
      
    });
  }
}
