import { ButtonStyle } from "../button-style";

export interface ButtonToggleItem {
    id: number,
    text?: string,
    cssClasses?: string,
    iconClass?: string,
    disabled?: boolean,
    visible?: boolean,
    tooltipText?: string
    //not implemented
}
