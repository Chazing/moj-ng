export class MojLanguage {
    code: string = "he";
    value: string;
    dir: MojDirection = MojDirection.rtl;
}

export enum MojDirection {
    rtl,
    ltr
}

export const LANGUAGES: MojLanguage[] = [{ code: "he", value: "עברית", dir: MojDirection.rtl }, { code: "en", value: "English", dir: MojDirection.ltr }];