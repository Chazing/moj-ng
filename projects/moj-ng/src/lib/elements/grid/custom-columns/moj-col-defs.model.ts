import { ColDef } from 'ag-grid-community';
import { ActionPopUpItem } from '../../actions-popup/action-popup.model';
import { GridIconParams } from '../models/grid-icon-params';
import { FileType } from './moj-document-format-column/file-type.model';

export interface setDefaultsToColParams {
    headerName?: string;
    mojColDef?: MojColDef;
    isAction?;
    noDefaultHeader?: boolean;
    field?: string;
}

export interface MojColDefBase {
    colDef?: ColDef;
    isHideOnPrint?: boolean;
    isLangSensitive?: boolean;
}
export interface MojColDef extends MojColDefBase { }

export interface MojDeleteColDef extends MojColDef {
    headerName?: string;
    toolTipTextKey?: string;
    cssClass?: string | ((params) => string); //function for dynamic class per row
    confirmDeleteText?: string;
    disabled?: boolean;
}

export interface MojEditColDef extends MojColDef {
    headerName?: string;
    toolTipTextKey?: string;
    cssClass?: string | ((params) => string); //function for dynamic class per row
    disabled?: boolean;
}

export interface MojDuplicateColDef extends MojColDef {
    setDuplicatedData?: ((data) => any);
    headerName?: string;
    toolTipTextKey?: string;
    cssClass?: string | ((params) => string); //function for dynamic class per row
    disabled?: boolean;
}

export interface MojActionsPopupColDef extends MojColDef {
    items?: ActionPopUpItem[] | ((rowData) => ActionPopUpItem[]);
    headerName?: string;
    toolTipTextKey?: string;
    cssClass?: string;
}


export interface MojCurrencyColDef extends MojColDef {
    currencyString?: string;
}

export interface MojLinkColDef extends MojColDef {
    clickLink?: Function;
    title?: string;
    editGridOnClick?: boolean;
}

export interface MojIconColDef extends MojColDef {
    icon: GridIconParams | ((params) => GridIconParams);
    iconWithText?: boolean;
    isCenter?: boolean;
}

export interface MojDateColDef extends MojColDef {
    format?: string;
}

export interface MojVColDef extends MojColDef { }

export interface MojRadioButtonColDef extends MojColDef { }

export interface MojCheckBoxColDef extends MojColDef {
    headerSelection?: boolean;
    disabled?: boolean;
}

export interface MojStateColDef extends MojColDef { }

export interface MojDocumentFormatColDef extends MojColDef {
    clickLink?: Function;
    tooltip?: string;
    fileTypes?: FileType[];
}

export interface MojHebrewEnglishColDef extends MojColDef { }

export interface MojNumberColDef extends MojColDef { }

export interface MojDatePickerColDef extends MojColDef { }
