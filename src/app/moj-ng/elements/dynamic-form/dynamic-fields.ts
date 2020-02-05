import { ValidatorFn } from '@angular/forms';

import { Type, EventEmitter } from '@angular/core';
import { FilterType, DropdownMode } from '../autocomplete/autocomplete.enum';

export interface setPropertyObject {
    propertyName: string;
    value: any;
}

export interface MojDynamicField {
    name:string;
    type:Type<any>;
    value?:any;
    validators?: ValidatorFn | ValidatorFn[];
    disabled?: boolean;
    // placeholder?: string;
    labelTextKey?: string;
    // isLabelAboveControl?: boolean;
    // labelWidthColumns?: number;
    controlWidthColumns?: number;
    setValue?: EventEmitter<any>;
    setProperty?: EventEmitter<setPropertyObject>;
    setValidators?: EventEmitter<any>;
}

export interface MojDynamicLabelField extends MojDynamicField {
    textKey?: string;
}

export interface MojDynamicTextboxField extends MojDynamicField {
    inputType?: string ;
    maxlength?: number;
    max?: number;
    min?: number;
    pattern?:string;
}

export interface MojDynamicDropdownField extends MojDynamicField {
    items?: any[];
    fieldName?: string;
    fieldID?: string;
    filter?: boolean;
    editable?: boolean;
    dropdown?: boolean;
    onChange?:(event, element)=>void;
}

export interface MojDynamicAutocompleteField extends MojDynamicField {
    items?: any[];
    fieldName?: string;
    fieldID?: string;
    filter?: boolean;
    minLength?: number;
    multiple?: boolean;
    dropdown?: boolean;
    filterType?: FilterType;
    forceSelection?: boolean;
    dropdownMode?: DropdownMode;
    onSelect?:(event, element)=>void;
}

export interface MojDynamicDatepickerField extends MojDynamicField {
    format?: string;
    showTime?: boolean;
    minDate?: Date;
    maxDate?: Date;
    monthNavigator?: boolean;
    yearNavigator?: boolean;
    yearRange?: string;
    focusedDate?: Date;
}

export interface MojDynamicCheckboxField extends MojDynamicField {
}