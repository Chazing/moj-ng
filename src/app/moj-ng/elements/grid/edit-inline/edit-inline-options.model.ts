import { ValidatorFn } from "@angular/forms";
import { FilterType, DropdownMode } from "../../autocomplete/autocomplete.enum";

export interface EditColumnOptions{
    validators?: ValidatorFn | ValidatorFn[];
    
    //elementbase
    disabled?: boolean;
    customValidationErrors?: any[];
    submitted?: boolean;
    placeholder?: string;

    //dropdownbase
    items?: any[];
    fieldName?: string;
    //fieldID?: string;//don't use (use object model)
    filter?: boolean;

    //autocomplete
    itemsUrl?: string;
    minLength?: number;
    multiple?: boolean;
    dropdown?: boolean;
    filterType?: FilterType;
    forceSelection?: boolean;
    dropdownMode?: DropdownMode;
    emptyMessage?: string;
    delay?: number;

    //datepicker
    format?: string;
    showTime?: boolean;
    minDate?: Date;
    maxDate?: Date;
    monthNavigator?: boolean;
    yearNavigator?: boolean;
    yearRange?: string;
    focusedDate?: Date;

    //dropdown
    editable?: boolean;
    autoWidth?: boolean;

    //multiselect
    maxSelectedLabels?: number;
    selectedItemsLabel?: string;

    //textarea
    maxTextLength?: number;
    rows?: number;

    //textbox
    inputType?: string;
    maxlength?:number;


    //outputs
    focus?:(event, element)=>void;
    blur?:(event, element)=>void;
    onChange?:(event, element)=>void;
    onPanelShow?:(event, element)=>void;
    onPanelHide?:(event, element)=>void;
    onKeyUp?:(event, element)=>void;
    onSelect?:(event, element)=>void;
    onClear?:(event, element)=>void;
    close?:(event, element)=>void;
    valueChange?:(event, element)=>void;
}