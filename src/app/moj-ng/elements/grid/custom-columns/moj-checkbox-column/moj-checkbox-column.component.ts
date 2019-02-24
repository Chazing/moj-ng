import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from "ag-grid-angular";
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { ObjectState } from '../../../general/general.enum';

@Component({
  selector: 'app-moj-checkbox-column',
  templateUrl: './moj-checkbox-column.component.html'
})

export class MojCheckBoxColumnComponent implements AgRendererComponent {
  params: ICellRendererParams;
  refresh(params: any): boolean {
    return true;
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {

  }
  constructor() { }

  ngOnInit() {
  }

  onChanged($event) {
    if (this.params.value == true) {
      this.params.setValue(false);
    }
    else {
      this.params.setValue(true);
    }
    this.params.api.redrawRows();
    if (this.params.data.state && this.params.data.state != ObjectState.Added) {
      this.params.data.state = ObjectState.Edited;
    }
  }
}
