import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MojDynamicField } from './dynamic-fields';

@Component({
  selector: 'moj-dynamic-form',
  templateUrl:'./dynamic-form.component.html'
})
export class MojDynamicFormComponent {
  @Input() fields: MojDynamicField[][]

  @Input() form: FormGroup;
}
