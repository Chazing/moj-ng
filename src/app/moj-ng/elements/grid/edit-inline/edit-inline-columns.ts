import { Component, ViewChild, EventEmitter } from "@angular/core";
import { ICellEditorAngularComp } from "ag-grid-angular";
import { Constants } from "ag-grid-community";
import { ElementBase } from "../../base/element.base";

export class MojCellEditorComponent implements ICellEditorAngularComp {
    params;
    labelTextKey:string = '';
    @ViewChild(ElementBase) elementBase: ElementBase<any>;

    agInit(params: any): void {
        this.params = params;
        this.labelTextKey = params.column.colDef.headerName || params.column.colDef.field;
        if(this.elementBase){
            this.elementBase.labelTextKey = this.labelTextKey;
            this.elementBase.labelWidthColumns = 0;
        }
        if(params.column.colDef.cellEditorParams){
            this.mapCellParams(params.column.colDef.cellEditorParams);
        }
        
    }

    ngAfterViewInit(){
        if(this.elementBase && this.elementBase.control && this.params.column.colDef.cellEditorParams){
            this.elementBase.control.setValidators(this.params.column.colDef.cellEditorParams.validators);
        }
    }

    //inputs and outputs from EditColumnOptions
    mapCellParams(cellEditorParams:{}){ 
        Object.keys(cellEditorParams).forEach(key => {
            if(this.elementBase){
                //map outputs
                if(this.elementBase[key] instanceof EventEmitter){
                    this.elementBase[key].subscribe(event => {
                        cellEditorParams[key](event, this.elementBase);
                    })
                }
                //map inputs
                else{
                    this.elementBase[key] = cellEditorParams[key];
                }
            }
        })
    }

    isCancelAfterEnd(){
        if(!this.elementBase.control.valid){
            return true;
        }
    }

    ngOnDestroy(){
        
        if(this.elementBase.control.valid){
            this.params.api.context.invalidCell = null;
        }
        else{
            this.params.api.context.invalidCell = {'nodeId':this.params.node.id, 'rowIndex': this.params.rowIndex, 'fieldName': this.params.fieldName, 'value':this.params.value};
        }
    }

    isPopup(){
        return true;
    }

    getValue(){
        return this.params.value;
    }
}

@Component({
    selector: "moj-textbox-column",
    template: `<moj-textbox tabindex="-1" [(ngModel)]="params.value" (keydown)="onKeyDown($event)"></moj-textbox>`,
})
export class MojTextboxColumnComponent extends MojCellEditorComponent {

    onKeyDown(event){
        let isNavigationKey = event.keyCode === Constants.KEY_LEFT
                || event.keyCode === Constants.KEY_RIGHT
                || event.keyCode === Constants.KEY_UP
                || event.keyCode === Constants.KEY_DOWN
                || event.keyCode === Constants.KEY_PAGE_DOWN
                || event.keyCode === Constants.KEY_PAGE_UP
                || event.keyCode === Constants.KEY_PAGE_HOME
                || event.keyCode === Constants.KEY_PAGE_END
                || event.keyCode === Constants.STEP_EVERYTHING;
            if (isNavigationKey) {
                event.stopPropagation();
            }
    }
}

@Component({
    selector: "moj-textarea-column",
    template: `<moj-textarea [(ngModel)]="params.value" (keydown)="onKeyDown($event)"></moj-textarea>`,
})
export class MojTextAreaColumnComponent extends MojCellEditorComponent {

    onKeyDown(event){
        let key = event.which || event.keyCode;
        if (key == Constants.KEY_LEFT ||
            key == Constants.KEY_UP ||
            key == Constants.KEY_RIGHT ||
            key == Constants.KEY_DOWN ||
            (event.shiftKey && key == Constants.KEY_ENTER)) {
            event.stopPropagation();
        }
    }
}

@Component({
    selector: "moj-dropdown-column",
    template: `<moj-dropdownlist [(ngModel)]="params.value" (keydown)="onKeyDown($event)"></moj-dropdownlist>`,
})
export class MojDropdownColumnComponent extends MojCellEditorComponent {
    onKeyDown(event){
        let isNavigationKey = event.keyCode === Constants.KEY_UP || event.keyCode === Constants.KEY_DOWN;
        if (isNavigationKey) {
            event.stopPropagation();
        }
    }   
}

@Component({
    selector: "moj-autocomplete-column",
    template: `<moj-autocomplete [(ngModel)]="params.value" (keydown)="onKeyDown($event)"></moj-autocomplete>`,
})
export class MojAutoCompleteColumnComponent extends MojCellEditorComponent {
    onKeyDown(event){
        let isNavigationKey = event.keyCode === Constants.KEY_LEFT
                || event.keyCode === Constants.KEY_RIGHT
                || event.keyCode === Constants.KEY_UP
                || event.keyCode === Constants.KEY_DOWN;
            if (isNavigationKey) {
                event.stopPropagation();
            }
    }
}

@Component({
    selector: "moj-multiselect-column",
    template: `<moj-multiselect [(ngModel)]="params.value"></moj-multiselect>`,
})
export class MojMultiSelectColumnComponent extends MojCellEditorComponent {
}

@Component({
    selector: "moj-datepicker-column",
    template: `<moj-datepicker [(ngModel)]="params.value" (keydown)="onKeyDown($event)"></moj-datepicker>`,
})
export class MojDatePickerColumnComponent extends MojCellEditorComponent {
    onKeyDown(event){
        let isNavigationKey = event.keyCode === Constants.KEY_LEFT
                || event.keyCode === Constants.KEY_RIGHT
                || event.keyCode === Constants.KEY_UP
                || event.keyCode === Constants.KEY_DOWN
                || event.keyCode === Constants.KEY_PAGE_DOWN
                || event.keyCode === Constants.KEY_PAGE_UP
                || event.keyCode === Constants.KEY_PAGE_HOME
                || event.keyCode === Constants.KEY_PAGE_END
                || event.keyCode === Constants.STEP_EVERYTHING;
            if (isNavigationKey) {
                event.stopPropagation();
            }
    }
}