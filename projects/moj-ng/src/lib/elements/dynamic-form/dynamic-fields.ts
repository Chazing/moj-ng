import { ValidatorFn } from '@angular/forms';

import { Type, EventEmitter } from '@angular/core';
import { FilterType, DropdownMode } from '../autocomplete/autocomplete.enum';
import { Observable } from 'rxjs';
import { Time } from '@angular/common';

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
    items?: any[]|Observable<any[]>;
    fieldName?: string;
    fieldID?: string;
    filter?: boolean;
    editable?: boolean;
    dropdown?: boolean;
    onChange?:(event, element)=>void;
}

export interface MojDynamicAutocompleteField extends MojDynamicField {
    items?: any[]|Observable<any[]>;
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
   showTime?: boolean;
   minEnableDate?: Date ;
   maxEnableDate?: Date ;
   minEnableTime?: Time;
   maxEnableTime?: Time;
   monthNavigator?: boolean ;
   yearNavigator?: boolean ;
   yearRange?: string;
   numberOfMonths?: number;
   showButtonBar?: boolean ;
   selectionMode?: string ;
   timeOnly?: boolean;
   hideOnDateTimeSelect?: boolean;
   defaultDate?: Date;
   focusedDate?: Date;
   close ?:(event, element)=>void;
   valueChange ?:(event, element)=>void;
}

export interface MojDynamicCheckboxField extends MojDynamicField {
    
    onChange?:(event, element)=>void;
}

export interface MojDynamicMultiSelectField extends MojDynamicField {
   items?: any[]|Observable<any[]>;
   fieldName?: string;
   fieldID?: string;
   filter?: boolean;
   maxSelectedLabels?:number;
   selectedItemsLabel?: string ;
   onChange?:(event, element)=>void;
   onPanelShow ?:(event, element)=>void;
   onPanelHide?:(event, element)=>void;
}

export interface MojDynamicSliderField extends MojDynamicField {
    minValue?: number;
    maxValue?: number;
    disabled?: boolean;
    isRange?: boolean;
    step?: number;
    orientation?: string;
    showValueLabel?: boolean;
    onChange?: (event, element) => void;
}