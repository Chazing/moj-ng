import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-backoffice-example-form',
//   templateUrl: './backoffice-example-form.component.html',
//   styleUrls: ['./backoffice-example-form.component.css']
// })
export class BackofficeExampleFormComponent implements OnInit {
  tooltipActions = [
    { id: 1, label: "פעילות 1", imgUrl:"assets/MojImages/FileUpload/AddFileDis.png" }, { id: 2, label: "פעילות 2" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
