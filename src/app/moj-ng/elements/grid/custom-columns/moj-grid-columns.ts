import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AgRendererComponent, ICellEditorAngularComp } from 'ag-grid-angular';
import { ObjectState } from '../../general/general.enum';
import { GridIconParams } from '../models/grid-icon-params';
import { InternalGridService } from '../service/internal-grid.service';
import { MojGridEditButtonComponent } from '../buttons/moj-grid-buttons';

@Component({
  selector: 'moj-link-column',
  template: `
    <a (click)="onClick()" class="moj-link" [title]="title">{{ params.value }}</a>
  `
})
export class MojLinkColumnComponent extends MojGridEditButtonComponent implements AgRendererComponent {
  params;
  title = '';

  agInit(params: any): void {
    this.params = params;
    if (params.title) {
      this.title = this.translate.instant('Texts.' + params.title, { value: params.value });
      this.title = this.title.indexOf('Texts.') == 0 ? this.title.substr(6) : this.title;
    }
  }

  constructor(protected internalGridService: InternalGridService, protected translate: TranslateService) {
    super(internalGridService, translate);
  }

  onClick() {
    if (this.params.clickLink) {
      this.params.clickLink(this.params.data);
    }
    if (this.params.editGridOnClick) {
      this.onEdit();
    }
  }

  refresh(): boolean {
    return false; //if you return true, or return nothing, then the grid thinks you handled the refresh
  }
}

@Component({
  selector: 'moj-state-column',
  template: `
    <span *ngIf="params.data.state && params.data.state == objectState.Added"> <i class="fas fa-stream"></i> </span>
  `
})
export class MojStateColumnComponent implements AgRendererComponent {
  params;
  objectState = ObjectState;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false; //if you return true, or return nothing, then the grid thinks you handled the refresh
  }
}

@Component({
  selector: 'moj-v-column',
  template: `
    <i
      [ngClass]="{ 'center-horizontal': true, far: true, 'fa-check': params.value, 'fa-minus': !params.value }"
      [title]="title | translate"
    ></i>
  ` //todo ngIf - not working on edit
})
export class MojVColumnComponent implements AgRendererComponent {
  params;
  title;
  //constructor(private translate: TranslateService) { }

  agInit(params: any): void {
    this.params = params;
    if (params.value) this.title = 'MojTexts.yes';
    else this.title = 'MojTexts.no';
  }

  refresh(): boolean {
    return false; //if you return true, or return nothing, then t++he grid thinks you handled the refresh
  }
}

@Component({
  selector: 'moj-icon-link-column',
  template: `
    <div *ngIf="fieldValueExists" [ngClass]="{ 'center-horizontal': params.isCenter }">
      <a
        [ngStyle]="{ cursor: clickFunction ? 'pointer' : 'normal' }"
        [attr.title]="tooltip ? (tooltip.toString() | translate) : null"
        (click)="onClick()"
      >
        <i [attr.class]="icon && icon.iconClass"></i> <span class="bidi">{{ text }}</span>
      </a>
    </div>
  `,
  styles: ['i + span { margin-right: 5px;} ']
})
export class MojIconColumnComponent implements AgRendererComponent {
  params;
  icon: GridIconParams;
  text: string = '';
  tooltip: string;
  clickFunction: Function;
  fieldValueExists: boolean = true;

  constructor(private translate: TranslateService) {}

  agInit(params: any): void {
    this.params = params;
    this.setIcon();
    this.setText();
    this.setTooltip();
    this.getFieldValue();
    this.clickFunction = this.icon.clickLink;
  }

  setIcon() {
    if (typeof this.params.icon === 'object') {
      this.icon = this.params.icon;
    } else if (typeof this.params.icon === 'function') {
      this.icon = this.params.icon(this.params);
    }
  }

  setText() {
    if (!this.params.iconWithText) {
      return;
    }
    if (this.icon.text) {
      this.text = this.icon.text;
    } else {
      this.text = this.getFieldValue();
    }
  }

  setTooltip() {
    if (this.icon.tooltip) {
      let res = this.translate.instant('Texts.' + this.icon.tooltip);
      this.tooltip = res.indexOf('Texts.') == 0 ? res.substr(6) : res;
    } else if (this.params.iconWithText || this.icon.showFieldInTooltip) {
      this.tooltip = this.getFieldValue();
    }
  }

  getFieldValue() {
    if (this.params.data && this.params.data.hasOwnProperty(this.params.colDef.field)) {
      var val = this.params.data[this.params.colDef.field];
      if (!val && val !== 0) {
        //if field, show icon only if has value
        this.fieldValueExists = false;
      }
      return val.toString();
    }
  }

  onClick() {
    if (this.icon.clickLink) {
      this.icon.clickLink(this.params.data);
    }
  }

  refresh(): boolean {
    return false; //if you return true, or return nothing, then the grid thinks you handled the refresh
  }
}

@Component({
  selector: 'moj-grid-actions-button',
  template: `
    <actions-popup [items]="items"></actions-popup>
  `
})
export class MojGridActionsPopupButtonComponent implements ICellEditorAngularComp {
  params;
  items;

  agInit(params: any): void {
    this.params = params;
    this.setItems();
  }

  setItems() {
    if (typeof this.params.items === 'object') {
      this.items = this.params.items;
    } else if (typeof this.params.items === 'function') {
      this.items = this.params.items(this.params.node.data);
    }
  }

  getValue() {}
  isPopup() {
    return true;
  }

  refresh(): boolean {
    return false; //if you return true, or return nothing, then the grid thinks you handled the refresh
  }
}
