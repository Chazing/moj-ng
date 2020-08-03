import { ButtonStyle } from "../elements/buttons/button-style";
import { PanelStyle } from "../elements/panels/moj-panel/moj-panel.enum";
import { FilterType } from "../elements/autocomplete/autocomplete.enum";
import { LabelStyle, LabelAlign, TitleType } from "../elements/label/label.enum";
import { ContainerType } from "../elements/website/moj-container/moj-container.component";
import { MojListItemType } from "../elements/grid/list-view/moj-list-view-type.enum";
import { MojDataViewType } from "../elements/grid/models/dataview-type.enum";
import { Alignment, CaptionType, FontSize, FontWeight, MojColor, FontStyle } from "../elements/general/general.enum";

export class Enums {
    ButtonStyle = ButtonStyle;
    FontSize = FontSize;
    FontWeight = FontWeight;
    MojColor = MojColor;
    PanelStyle = PanelStyle;
    FilterType = FilterType;
    LabelStyle = LabelStyle;
    LabelAlign = LabelAlign;
    ContainerType = ContainerType;
    ListItemType = MojListItemType;
    DataViewType = MojDataViewType;
    TitleType = TitleType;
    Alignment = Alignment;
    CaptionType = CaptionType;
    FontStyle = FontStyle;
}

export const ENUMS = new Enums();