import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { ButtonStyle } from '../../buttons/button-style';
import { Alignment } from '../../general/general.enum';

@Component({
  selector: 'moj-grid-xls-export',
  templateUrl: './moj-grid-xls-export.component.html',
  styleUrls: ['./moj-grid-xls-export.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojGridXlsExportComponent {

  @Output()
  exportClick: EventEmitter<any> = new EventEmitter<any>();

  buttonStyle = ButtonStyle;
  alignment = Alignment;
  onClick($event?: any) {
    this.exportClick.emit(event);
  }

}
