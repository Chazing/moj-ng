import { Type } from "@angular/core";

export interface WizardItem {
    label?: string;
    component?: Type<any>;
    componentData?: any;
    width?: string;
    readonly?: boolean;
    wizardSubItems?: WizardItem[];
    isForMetro?: boolean;
    indexForMetro?: number;
}