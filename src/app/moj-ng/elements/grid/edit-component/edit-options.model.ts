import { Type, ViewContainerRef } from '@angular/core';

export class EditOptions {
  editComponentType: Type<any>;
  saveUrl: string = '';
  saveUrlWithCredentials: boolean = false;
  deleteUrl: string = '';
  hideAreaOnEdit: ViewContainerRef;
  editDialogTitle: string = '';
  editDialogWidth: number = 300;
  editType: EditType = EditType.ReplaceGrid;
  preventScrollInEditPopup: boolean = false;
  showDeletedRow: boolean = false;
  initInlineItem: () => object = () => {
    return {};
  };
  data: any; //send any data to the edit component
}

export enum EditType {
  Dialog,
  ReplaceArea,
  ReplaceGrid,
  Inline
}