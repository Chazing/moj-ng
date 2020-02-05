import { Component, Input, Output, EventEmitter, Host, Inject, forwardRef, ElementRef } from "@angular/core";
import { ButtonStyle } from '../../buttons/button-style';
import { InternalGridService } from "../service/internal-grid.service";
import { MojMessagesService } from "../../../messages/moj-messages.service";
import { ObjectState } from "../../general/general.enum";
import { AgRendererComponent } from "ag-grid-angular";
import { DialogResultEnum } from "../../../messages/message.enum";
import { TranslateService } from "@ngx-translate/core";
import _ from "lodash";
import { NgForm, FormGroup } from "@angular/forms";
import { MojUtilsService } from "../../../shared/utils";
import { ButtonBase } from "../../base/moj-button.base";
import { PermissionService } from "../../../permissions/permission.service";

@Component({
    selector: "moj-grid-add-button",
    //template: `<moj-button [buttonStyle]="buttonStyle" [cssClass]="'moj-add-button'" (click)="onClick()" [textKey]="textKey"  [type]="button"  [iconClass]="'fas fa-plus-circle'" ></moj-button>`,
    template: `<div class="moj-add-button {{buttonStyle}}"><button type='button' [disabled]='disabled' (click)="onClick()"><i class="fas fa-plus-circle"></i> {{textKey | translate }}</button></div>`,
})
export class MojGridAddButtonComponent extends ButtonBase {

    @Input() disabled: boolean = false;
    @Input() beforeAdd: () => {};
    constructor(private internalGridService: InternalGridService, permissionService: PermissionService, el: ElementRef) {
        super(permissionService, el)
        this.textKey = "MojTexts.add";
        this.buttonStyle = ButtonStyle.Primary;
    }

    ngOnInit() {
        super.ngOnInit();
        if (!this.disabled) {
            this.disabled = !this.isEnable;
        }


    }
    onClick() {
        if (this.beforeAdd && this.beforeAdd() == false) {
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
export class MojGridSaveButtonComponent extends ButtonBase {
    @Input() disabled: boolean = false;
    @Input() form: NgForm | FormGroup;

    @Output() saveClick = new EventEmitter();

    constructor(private mojUtilsService: MojUtilsService, permissionService: PermissionService, el: ElementRef) {
        super(permissionService, el)
        this.textKey = "MojTexts.save";
        this.buttonStyle = ButtonStyle.Primary;
    }

    onClick() {
        if (this.form) {
            this.mojUtilsService.setSubmitToFormGroup(this.form);
            if (this.form.valid) {
                this.saveClick.emit();
            }
        }
        else {
            this.saveClick.emit();
        }
    }

    ngOnInit() {
        super.ngOnInit();
        if (!this.disabled) {
            this.disabled = !this.isEnable;
        }
    }
}

@Component({
    selector: "moj-grid-cancel-button",
    template: `<div class="action-base moj-button {{buttonStyle}}"><button (click)="onClick()" type='button' [disabled]='!isEnable' >{{textKey | translate }}</button></div>`,
    styles: [`:host{ margin-right: 10px;}`]

})
export class MojGridCancelButtonComponent extends ButtonBase {


    @Output() cancelClick = new EventEmitter();
    constructor(permissionService: PermissionService, el: ElementRef) {
        super(permissionService, el)
    }

    onClick() {
        this.cancelClick.emit();
    }
    ngOnInit() {
        super.ngOnInit();
        this.textKey = "MojTexts.cancel";
        this.buttonStyle = ButtonStyle.Secondary;
    }
}



@Component({
    selector: "moj-grid-delete-button",
    template: `<moj-button (click)="onDelete()" [isGridButton]="true" [cssClass]="cssClass"  [textKey]="params?.textKey" [attr.name]="params?.colDef?.field" [attr.aria-label]="title"  [title]="title" ></moj-button>`
    //template: `<button type="button"  (click)="onDelete()" [attr.class]="cssClass" [attr.aria-label]="title"  [title]="title" [disabled]="disabled" [ngStyle]="{'visibility':visible ? 'visible' : 'hidden'}" >{{params?.textKey | translate }}</button>`
})
export class MojGridDeleteButtonComponent implements AgRendererComponent {
    params;
    title: string = "";
    cssClass: string = 'btn-grid fas fa-trash-alt';
    name?: string;
    @Input() item: any;
    @Input() confirmDeleteText: string = 'MojTexts.confirmDelete';

    constructor(private messagesService: MojMessagesService, private internalGridService: InternalGridService, private translate: TranslateService) {
    }

    agInit(params: any): void {
        this.params = params;
        this.title = this.translate.instant(params.textKey || 'MojTexts.delete');

        if (this.params.colDef && params.colDef.field)
            this.name = params.colDef.field;
        if (typeof this.params.cssClass === 'function') { // add dynamic class per row
            this.cssClass += ' ' + this.params.cssClass(params);
        }
    }

    onDelete() {
        let rowData = this.item;
        let nodeId = this.item ? this.item.nodeId : null;
        if (this.params) {
            rowData = this.params.data;
            nodeId = this.params.node.id;
            this.confirmDeleteText = this.params.confirmDeleteText;
        }

        if (rowData && rowData.state == ObjectState.Deleted) {
            return;
        }
        this.messagesService.confirm(this.confirmDeleteText, "MojTexts.approve").subscribe((result) => {
            if (result.dialogResultType == DialogResultEnum.OK) {
                this.internalGridService.deleteClick(rowData, nodeId);
            }
        });

    }

    refresh(): boolean {
        return false; //if you return true, or return nothing, then the grid thinks you handled the refresh
    }
}

@Component({
    selector: "moj-grid-edit-button",

    template: `<moj-button  [isGridButton]="true" (click)="onEdit()" [textKey]="params?.textKey" [cssClass]="cssClass +(params?.data?.state == objectState.Edited? 'moj-row-edited' :'')"  [attr.name]="name"  [attr.aria-label]="title"  [title]="title"></moj-button>`
    //template: `<button type="button" (click)="onEdit()" [attr.class]="cssClass" [title]="title" [attr.aria-label]="title" [ngClass]="{'moj-row-edited':params?.data?.state == objectState.Edited}" [disabled]="disabled" [ngStyle]="{'visibility':visible ? 'visible' : 'hidden'}">
    // {{params?.textKey | translate }}</button>`

})
export class MojGridEditButtonComponent implements AgRendererComponent {
    params;
    title: string = "";
    objectState = ObjectState;
    cssClass: string = 'btn-grid btn-grid-edit fal fa-pencil-alt';
    @Input() item: any;
    name?: string;


    constructor(protected internalGridService: InternalGridService, protected translate: TranslateService) {
    }

    agInit(params: any): void {
        this.params = params;
        this.title = this.translate.instant(params.textKey || 'MojTexts.edit');
        if (this.params.colDef && params.colDef.field)
            this.name = params.colDef.field;
        if (typeof this.params.cssClass === 'function') { // add dynamic class per row
            this.cssClass += ' ' + this.params.cssClass(params);
        }
    }

    onEdit() {
        let rowData = this.item;
        let nodeId = this.item ? this.item.nodeId : null;
        if (this.params) {
            nodeId = this.params.node.id;
            let node = this.params.api.getRowNode(nodeId);
            if (node) {
                rowData = node.data;
            }
        }
        this.internalGridService.editClick(rowData, nodeId);
    }

    refresh(): boolean {
        return false; //if you return true, or return nothing, then the grid thinks you handled the refresh
    }
}

@Component({
    selector: "moj-grid-duplicate-button",

    template: `<moj-button [isGridButton]="true" (click)="onDuplicate()" [cssClass]="cssClass"  [textKey]="params?.textKey"  [attr.name]="name"  [attr.aria-label]="title"  [title]="title">`
    //[ngStyle]="{'visibility':visible ? 'visible' : 'hidden'}"
    //template: `<button type="button" (click)="onDuplicate()" class="btn-grid fa fa-copy" [attr.aria-label]="title"  [title]="title" [disabled]="disabled" >{{params.textKey | translate }}</button>`

})
export class MojGridDuplicateButtonComponent implements AgRendererComponent {
    params;
    title: string;
    name?: string;
    cssClass: string = 'btn-grid fa fa-copy';

    constructor(private internalGridService: InternalGridService, private translate: TranslateService) {
    }
    agInit(params: any): void {
        this.params = params;

        if (this.params.colDef && params.colDef.field)
            this.name = params.colDef.field;
        if (typeof this.params.cssClass === 'function') { // add dynamic class per row
            this.cssClass += ' ' + this.params.cssClass(params);
        }
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


