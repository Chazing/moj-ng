import { Component, Input } from '@angular/core';

/**
 * ```html
 * <moj-line>
            <moj-textbox [(ngModel)]="formModel.textField" name="textField" [rangeLength]="[5, 9]" controlWidthColumns="2"
                [securityIf]="checkboxValue">
            </moj-textbox>
            <moj-textbox #tt="ngModel" [(ngModel)]="formModel.title1" name="title1" minlength="3" controlWidthColumns="2"
                labelTextKey="Texts.textField" [requiredIf]="checkboxValue">
            </moj-textbox>
            <moj-textbox [(ngModel)]="formModel.password" name="password" [required]="false" minlength="3" controlWidthColumns="2"
                inputType="password">
            </moj-textbox>
   </moj-line>
```
 * <example-url>../screenshots/line.JPG</example-url>
 */
@Component({
    selector: 'moj-line',
    template: `<ng-content></ng-content>`,
    host: { 'class': "row moj-form-line", "[class.no-margin]": 'noMargin' }
})
export class MojLineComponent {
    @Input() noMargin: boolean = false;

}