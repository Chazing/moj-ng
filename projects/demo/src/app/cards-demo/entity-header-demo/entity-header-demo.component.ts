import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entity-header-demo',
  templateUrl: './entity-header-demo.component.html',
  styleUrls: ['./entity-header-demo.component.css']
})
export class EntityHeaderDemoComponent implements OnInit {
  isHeaderInEditMode: boolean = false;
  form: FormGroup;
  asideBottomData = { key: "מספר בקשה/סימן", value: "256845", cssClass: "my-class" };
  headerData = [{ key: "שכר טרחה", value: "15678" }, { key: "ימי עסקים לביצוע", value: "2" }];
  bodyData = [{ key: "מספר בקשה/סימן", value: "256845" },
  { key: "מספר בקשה/סימן", value: "256845" },
  { key: "שם החייב", value: "ישראל ישראלי" },
  { key: "בית המשפט", value: "תל אביב" },
  { key: "מחוז", value: "תל אביב" }];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      fileId: [this.bodyData[1].value],
      district: [this.bodyData[4].value]
    });
  }

  click() {
    this.isHeaderInEditMode = false;
    this.bodyData[1].value = this.form.value['fileId'];
    this.bodyData[4].value = this.form.value['district'];
  }

  cancel(){
    this.isHeaderInEditMode = false;
  }
}
