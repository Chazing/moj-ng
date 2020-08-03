import { Component, OnInit } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { FileType } from './file-type.model';

@Component({
  selector: 'app-moj-document-format-column',
  template: `<i (click)="onClick(params.data)" [ngStyle]="{'cursor':isClickAction ? 'pointer' : 'normal' }" [ngClass]="[iconClass, 'moj-document-format']" *ngIf="params.value" [attr.title]="tooltip | translate"></i>`,
  styleUrls: ['./moj-document-format-column.component.css']
})
export class MojDocumentFormatColumnComponent implements AgRendererComponent {
  params: any;
  iconClass: string = '';
  tooltip: string;
  isClickAction;
  fileTypes:FileType[] = null;
  //,
  iconToFileType: FileType[] = [
    { extension: "pdf", iconClass: 'fas fa-file-pdf' },
    { extension: "png,gif,jpeg,jpg,bmp,tif,tiff", iconClass: 'fas fa-file-image' },
    { extension: "doc,docx", iconClass: 'fas fa-file-word' },
    { extension: "txt", iconClass: 'fas fa-file-alt' },
    { extension: 'xls,xlsx,csv', iconClass: 'fas fa-file-excel' },
    { extension: 'ppt,pptx', iconClass: 'fas fa-file-powerpoint' },
    { extension: 'xml,html,htm', iconClass: 'fas fa-file-code' },
    { extension: 'zip,rar', iconClass: 'fas fa-file-archive' },
    { extension: 'msg', iconClass: 'fas fa-envelope-square' },
    { extension: 'mp3', iconClass: 'fas fa-file-audio' },
    { extension: 'mp4', iconClass: 'fas fa-file-video' }]

  refresh(params: any): boolean {
    return false;
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.tooltip = this.params.tooltip;
    this.isClickAction = this.params.clickLink;
    this.findIconInFileTypes();
  }

  findIconInFileTypes(){
    //search format first in user filetypes and after in iconToFileType and take the icon
    if (this.params.value) {
      let extensionToIcon;
      if(this.params.fileTypes && this.params.fileTypes.length){
        extensionToIcon = this.params.fileTypes.find(x => x.extension.split(',').find(x => x == this.params.value) != undefined);
      }
      if(!extensionToIcon){
        extensionToIcon = this.iconToFileType.find(x => x.extension.split(',').find(x => x == this.params.value) != undefined);
      }
      if (extensionToIcon)
        this.iconClass = extensionToIcon.iconClass;
    }
  }

  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
  }

  constructor() { }

  onClick(rowData: any) {
    if (this.params.clickLink) {
      this.params.clickLink(rowData);
    }
  }
}

