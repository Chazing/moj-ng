export class MojTopMenuItem {
    id?: number;
    textKey?: string;
    textValue?: string;
    internalLink: string;
    externalLink: string;
    subItems?: MojTopMenuItem[];
    active?: boolean;
}