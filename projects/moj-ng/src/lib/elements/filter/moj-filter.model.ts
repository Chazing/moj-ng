import { MojDynamicField } from "../dynamic-form/dynamic-fields";

export class MojFilter {
    categories: MojCategoryFilter[];
}

export class MojCategoryFilter {
    categoryId: string;
    category: string | MojDynamicField[][];
    fields?: MojDynamicField[][];
    sub_categories?: MojCategoryFilter[];
    isOpen?: boolean;
    isMain?: boolean;
    maxRecords: number;
    isDisplaySearchBox?:boolean;
    isDisplay:boolean=true;
    categoryColor:string;


    get hasChildren(): boolean {
        return this.sub_categories && this.sub_categories.length > 0;
    }

    get haschildrenToDisplay():boolean
    {
        return this.sub_categories && this.sub_categories.length > 0 && this.sub_categories.filter(x=>x.isDisplay).length>0;

    }

    get hasFields(): boolean {
        return this.fields && this.fields.length > 0;
    }

    constructor(category: string | MojDynamicField[][], fields?: MojDynamicField[][]
        , sub_categories?: MojCategoryFilter[], isOpen?: boolean,  categoryId: string = null,isDisplaySearchBox?:boolean,
        maxRecords?:number,categoryColor?:string ) {
        this.category = category;
        this.fields = fields;
        this.sub_categories = sub_categories;
        this.isOpen = isOpen;
        this.categoryId = categoryId;
        this.isDisplaySearchBox=isDisplaySearchBox;
        this.maxRecords=maxRecords;
        this.categoryColor=categoryColor;

    }
}