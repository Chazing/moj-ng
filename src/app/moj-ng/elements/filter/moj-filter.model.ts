import { MojDynamicField } from "../dynamic-form/dynamic-fields";

export class MojFilter {
    categories: MojCategoryFilter[]; 
}

export class MojCategoryFilter {
    category: string;                 
    fields?: MojDynamicField[][];     
    sub_categories?: MojCategoryFilter[];  
    isOpen?: boolean;
    isMain?: boolean;
    controlName:string;
    
    get hasChildren(): boolean {
        return this.sub_categories && this.sub_categories.length > 0;
    }

    get hasFields(): boolean {
        return this.fields && this.fields.length > 0;
    }

    constructor(category: string,fields?: MojDynamicField[][], sub_categories?: MojCategoryFilter[],controlName?:string) {
        this.category = category;
        this.fields = fields;
        this.sub_categories = sub_categories;
        this.controlName=controlName;
    }
}