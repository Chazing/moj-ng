import { Type } from "@angular/core";

export interface WizardItem {
    label?: string;
    component?: Type<any>;
    componentData?: any;
    preventNavigateByStep?: boolean;
    readonly?: boolean;
    wizardSubItems?: WizardItem[];
    name?: string;
    valid?: boolean;
}