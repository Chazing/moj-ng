import { EditType } from './../../../../../../../src/app/moj-ng/elements/grid/edit-component/edit-options.model';
import { Component, OnInit } from '@angular/core';
import { EditGridDemoComponent } from '../edit-grid/edit-grid-demo.component';
import { GridService } from '@moj/moj-ng';

@Component({
  selector: 'app-edit-popup-demo',
  templateUrl: './edit-popup-demo.component.html',
  styleUrls: ['./edit-popup-demo.component.css']
})
export class EditPopupDemoComponent extends EditGridDemoComponent implements OnInit {

  constructor(gridService: GridService) {
    super(gridService);
  }

  ngOnInit() {
    super.ngOnInit();
    this.editOptions.editType = EditType.Dialog;
    this.editOptions.editDialogWidth = 600;
  }
}
