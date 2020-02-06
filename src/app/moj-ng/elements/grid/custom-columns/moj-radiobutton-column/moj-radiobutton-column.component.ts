import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from "ag-grid-angular";
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { ObjectState } from '../../../general/general.enum';

@Component({
  selector: 'app-moj-radiobutton-column',
  templateUrl: './moj-radiobutton-column.component.html'
})
export class MojRadiobuttonColumnComponent implements AgRendererComponent {
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

  onClick($event) {
    let field = this.params.colDef.field;
    let data: any[] = [];
    this.params.api.forEachNode(function (node: any) {
      let rowdata = node.data;
      rowdata[field] = false;
      data.push(rowdata);
    });
    this.params.api.updateRowData({ update: data })
    this.params.setValue(true);
    this.params.api.selectNode(this.params.node);
    this.params.api.redrawRows();

  
    if (this.params.data.state && this.params.data.state != ObjectState.Added) {
      this.params.data.state = ObjectState.Edited;
    }
  }
}
