import { Component, OnInit, Input } from '@angular/core';
import { Column } from 'ag-grid-community';
import { DatePipe } from '@angular/common';
import { ButtonStyle } from '../../buttons/button-style';
import { MojDialogService } from '../../../messages/moj-dialog.service';
import { DialogResultEnum } from '../../../messages/message.enum';

@Component({
  selector: 'view-row-details',
  templateUrl: './view-row-details.component.html',
  styleUrls: ['./view-row-details.component.css']
})
export class MojViewRowDetailsComponent implements OnInit {
  @Input() data;
  columns: Column[];
  rowData;
  objectKeys = Object.keys;
  dataList = [];
  buttonStyle = ButtonStyle;
  constructor(private dialogService: MojDialogService) { }

  ngOnInit() {
    this.rowData = this.data.data;
    this.columns = this.data.columns;
    this.columns.forEach(element => {
      let value = this.rowData[element.getColDef().field];
      if (element.getColDef().type == 'dateColumn') {//dateColumn parse to string
        let datePipe = new DatePipe('en-US');
        value = datePipe.transform(value, 'dd/MM/yyyy');
      }
      this.dataList.push({
        title: element.getColDef().headerName,
        value: value
      })
    });
  }

  onClick(event) {
    this.dialogService.closeDialog({ dialogResultType: DialogResultEnum.Cancel });
  }
}
