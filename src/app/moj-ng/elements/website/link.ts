export interface Link {
    textKey: string,
    linkId: string,
    href: string
    linkOpenType: LinkOpenType
}

export enum LinkOpenType {
    Browser=1,
    None=2
}