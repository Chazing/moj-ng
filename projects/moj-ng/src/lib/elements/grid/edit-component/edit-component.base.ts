import { ViewChild, EventEmitter, Output } from "@angular/core";
import { NgForm } from "@angular/forms";
import { cloneDeep } from "lodash";
import { InternalGridService } from "../service/internal-grid.service";
import { MojGridCancelButtonComponent, MojGridSaveButtonComponent } from "../buttons/moj-grid-buttons";
import { Subscription } from "rxjs";

export class EditComponentBase {
    editedItem: any;
    data: any;//accept any data

    @ViewChild(NgForm, { static: false}) ngForm: NgForm;
    internalGridService: InternalGridService;

    cancelSubscription: Subscription;
    SaveSubscription: Subscription;


    ngOnDestroy() {
        if (this.cancelSubscription)
            this.cancelSubscription.unsubscribe();

        if (this.SaveSubscription)
            this.SaveSubscription.unsubscribe();
    }

    _cancelBtn;
    @ViewChild(MojGridCancelButtonComponent, { static: false}) set cancelBtn(btn: MojGridCancelButtonComponent) {
        if (btn) {
            this._cancelBtn = btn;
            if (!this.cancelSubscription) {
                this.cancelSubscription = btn.cancelClick.subscribe(() => {
                    if (this.internalGridService)
                        this.internalGridService.cancelClick();
                });
            }
        }
    }
    get cancelBtn(){
        return this._cancelBtn;
    }

    _saveBtn;
    @ViewChild(MojGridSaveButtonComponent, { static: false}) set saveBtn(btn: MojGridSaveButtonComponent) {
        if (btn) {
            this._saveBtn = btn;
            if (!this.SaveSubscription) {
                this.SaveSubscription = btn.saveClick.subscribe(() => {
                    if (this.internalGridService)
                        this.internalGridService.saveClick();
                });
            }
        }
    }
    get saveBtn(){
        return this._saveBtn;
    }

    initItem(rowData: any) {
        if (rowData)
            this.editedItem = cloneDeep(rowData);

    }

}