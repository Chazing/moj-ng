import { Component, Input, Output, EventEmitter, Host, Inject, forwardRef } from "@angular/core";
import { ButtonStyle } from '../../buttons/button-style';
import { InternalGridService } from "../service/internal-grid.service";
import { MojMessagesService } from "../../../messages/moj-messages.service";
import { ObjectState } from "../../general/general.enum";
import { AgRendererComponent } from "ag-grid-angular";
import { DialogResultEnum } from "../../../messages/message.enum";
import { TranslateService } from "@ngx-translate/core";
import _ from "lodash";
import { NgForm } from "@angular/forms";

@Component({
    selector: "moj-grid-add-button",
    template: `<div class="moj-add-button {{buttonStyle}}"><button type='button' [disabled]='disabled' (click)="onClick()"><i class="fas fa-plus-circle"></i> {{textKey | translate }}</button></div>`,
})
export class MojGridAddButtonComponent {
    @Input() textKey: string = "MojTexts.add";
    @Input() buttonStyle: ButtonStyle = ButtonStyle.Dark;
    @Input() disabled: boolean = false;
    @Input() beforeAdd: () => {};
    constructor(private internalGridService: InternalGridService) { }

    onClick() {
        if(this.beforeAdd && this.beforeAdd() == false){
            return;
        }
        this.internalGridService.addClick();
    }
}

@Component({
    selector: "moj-grid-save-button",
    template: `<div class="action-base moj-button {{buttonStyle}}"><button (click)="onClick()" type='button' [disabled]='disabled'>{{textKey | translate }}</button></div>`,
    styles: [`:host{ margin-right: 10px;}`]
})
export class MojGridSaveButtonComponent {
    @Input() textKey: string = "MojTexts.save";
    @Input() buttonStyle: ButtonStyle = ButtonStyle.Dark;
    @Input() disabled: boolean = false;
    @Input() form: NgForm;

    @Output() saveClick = new EventEmitter();
    constructor() { }

    onClick() {
        if (this.form) {
            Object.keys(this.form.controls).forEach(key => {
                (<any>this.form.controls[key]).submitted = true;
                this.form.controls[key].updateValueAndValidity();
            })
            if (this.form.valid) {
                this.saveClick.emit();
            }
        }
        else {
            this.saveClick.emit();
        }
    }
}

@Component({
    selector: "moj-grid-cancel-button",
    template: `<div class="action-base moj-button {{buttonStyle}}"><button (click)="onClick()" type='button'>{{textKey | translate }}</button></div>`,
    styles: [`:host{ margin-right: 10px;}`]
})
export class MojGridCancelButtonComponent {
    @Input() textKey: string = "MojTexts.cancel";
    @Input() buttonStyle: ButtonStyle = ButtonStyle.Light;

    @Output() cancelClick = new EventEmitter();
    constructor() { }

    onClick() {
        this.cancelClick.emit();
    }
}



@Component({
    selector: "moj-grid-delete-button",
    template: `<button type="button" (click)="onDelete()" [attr.class]="cssClass" [attr.aria-label]="title"  [title]="title">{{params.textKey | translate }}</button>`
})
export class MojGridDeleteButtonComponent implements AgRendererComponent {
    params;
    title: string;
    cssClass: string = 'btn-grid fas fa-trash-alt';

    constructor(private messagesService: MojMessagesService, private internalGridService: InternalGridService, private translate: TranslateService) {
    }

    agInit(params: any): void {
        this.params = params;
        this.title = this.translate.instant(params.textKey || 'MojTexts.delete');
        if(typeof this.params.cssClass === 'function'){ // add dynamic class per row
            this.cssClass += ' ' + this.params.cssClass(params);
        }
    }

    onDelete() {
        let rowData = this.params.data;

        if (rowData && rowData.state == ObjectState.Deleted) {
            return;
        }
        this.messagesService.confirm(this.params.confirmDeleteText, "MojTexts.approve").subscribe((result) => {
            if (result.dialogResultType == DialogResultEnum.OK) {
                this.internalGridService.deleteClick(rowData, this.params.node.id);
            }
        });

    }

    refresh(): boolean {
        return false; //if you return true, or return nothing, then the grid thinks you handled the refresh
    }
}

@Component({
    selector: "moj-grid-edit-button",
    template: `<button type="button" (click)="onEdit()" [attr.class]="cssClass" [title]="title" [attr.aria-label]="title" [ngClass]="{'moj-row-edited':params.data.state == objectState.Edited}">
    {{params.textKey | translate }}</button>`
})
export class MojGridEditButtonComponent implements AgRendererComponent {
    params;
    title: string;
    objectState = ObjectState;
    cssClass: string = 'btn-grid btn-grid-edit fal fa-pencil-alt';

    constructor(protected internalGridService: InternalGridService, protected translate: TranslateService) {
    }

    agInit(params: any): void {
        this.params = params;
        this.title = this.translate.instant(params.textKey || 'MojTexts.edit');
        if(typeof this.params.cssClass === 'function'){ // add dynamic class per row
            this.cssClass += ' ' + this.params.cssClass(params);
        }
    }

    onEdit() {
        let rowData = this.params.data;
        this.internalGridService.editClick(rowData, this.params.node.id);
    }

    refresh(): boolean {
        return false; //if you return true, or return nothing, then the grid thinks you handled the refresh
    }
}

@Component({
    selector: "moj-grid-duplicate-button",
    template: `<button type="button" (click)="onDuplicate()" class="btn-grid fa fa-copy" [attr.aria-label]="title"  [title]="title">{{params.textKey | translate }}</button>`
})
export class MojGridDuplicateButtonComponent implements AgRendererComponent {
    params;
    title: string;

    constructor(private internalGridService: InternalGridService, private translate: TranslateService) {
    }
    agInit(params: any): void {
        this.params = params;
        this.title = this.translate.instant(params.textKey || 'MojTexts.duplicate');
    }

    onDuplicate() {
        let rowData;
        if (this.params.setDuplicatedData) {
            rowData = this.params.setDuplicatedData(_.cloneDeep(this.params.data));
        }
        else {          
            rowData = _.cloneDeep(this.params.data);
        }
        this.internalGridService.duplicateClick(rowData);
    } 

    refresh(): boolean {
        return false; //if you return true, or return nothing, then the grid thinks you handled the refresh
    }
}


