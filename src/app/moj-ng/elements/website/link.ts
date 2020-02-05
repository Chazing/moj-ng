export interface Link {
    textKey?: string,
    linkId: string,
    href: string
    linkOpenType: LinkOpenType,
    iconClass?: string;
}

export enum LinkOpenType {
    Browser=1,
    None=2
}

export enum SocialLinkType {
   linkdin="fab fa-linkedin-in",
   twitter="fab fa-twitter",
   youtube="fab fa-youtube",
   instagram="fab fa-instagram",
   facebook="fab fa-facebook-f"
}



