export enum CaptionType {
    default = 'default',
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    span = 'span',
}

export enum ObjectState { Unchanged = 1, Added = 2, Edited = 3, Deleted = 4 };

export enum Size {
    Font12 = 12,
    Font14 = 14,
    Font16 = 16,
    Font18 = 18,    
    Font20 = 20,
    Font22 = 22,
    Font24 = 24
}

export enum Alignment {
    right,
    left,
    top,
    center,
    bottom
}

export enum MojColor {
    Default,
    Primary = "moj-primary-color",
    PrimaryDark="moj-primary-dark-color",
    PrimaryLight="moj-primary-light-color",
    Secondary = "moj-secondary-color",
    SecondaryDark="moj-secondary-dark-color",
    SecondaryLight="moj-secondary-light-color",
    Danger = "moj-danger-color",
    Success="moj-success-color",
    Alert="moj-alert-color",
    Orange = "moj-orange-color",
    Purple = "moj-purple-color",
    White = "moj-white-color",
    Accent1Color="moj-accent1-color",
    Accent2Color="moj-accent2-color",
    Accent3Color="moj-accent3-color",
    Accent4Color="moj-accent4-color"
}

export enum FontSize {
    font12 = "font-12",
    font14 = "font-14",
    font16 = "font-16",
    font18 = "font-18",
    font20 = "font-20",
    font22 = "font-22",
    font24 = "font-24"
}

export enum FontWeight {
    bold = "moj-bold",
    normal = ""
}

export enum FontStyle {
    XXLBold = "font-52 moj-bold",
    LRegular = "font-48",
    MRegular = "font-34",
    SRegular = "font-28",
    SBold = "font-24 moj-bold ",
    XSBold = "font-20 moj-bold line-before",
    XXSBold = "font-18 moj-bold",
    Default = "font-16"
}