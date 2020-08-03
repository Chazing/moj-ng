import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";

import { DialogModule } from "primeng/primeng";
import {
    MojGridAddButtonComponent,
    MojGridSaveButtonComponent,
    MojGridCancelButtonComponent,
    MojGridDeleteButtonComponent,
    MojGridEditButtonComponent,
    MojGridDuplicateButtonComponent,
} from "./buttons/moj-grid-buttons";
import {
    MojLinkColumnComponent,
    MojStateColumnComponent,
    MojVColumnComponent,
    MojIconColumnComponent,
    MojGridActionsPopupButtonComponent
} from "./custom-columns/moj-grid-columns";
import { MojGridPanelComponent } from "./moj-grid-panel.component";
import { MojGridOptionsDirective } from "./moj-grid-options";
import { AgGridModule } from "ag-grid-angular";
import { MojRadiobuttonColumnComponent } from "./custom-columns/moj-radiobutton-column/moj-radiobutton-column.component";
import { ActionsPopupComponent } from "../actions-popup/actions-popup.component";
import { MojCheckBoxColumnComponent } from "./custom-columns/moj-checkbox-column/moj-checkbox-column.component";
import { LicenseManager } from "ag-grid-enterprise";
import { MojDocumentFormatColumnComponent } from './custom-columns/moj-document-format-column/moj-document-format-column.component';
import { MojGridXlsExportComponent } from "./moj-grid-xls-export/moj-grid-xls-export.component";
import { MojViewRowDetailsComponent } from './view-row-details/view-row-details.component';
import { MojPipesModule } from "../../pipes/moj-pipes-module";
import { MojInputModule } from "../input.module";
import {
    MojTextboxColumnComponent,
    MojTextAreaColumnComponent,
    MojDropdownColumnComponent,
    MojAutoCompleteColumnComponent,
    MojMultiSelectColumnComponent,
    MojDatePickerColumnComponent
} from "./edit-inline/edit-inline-columns";
import { MojQuickFilterComponent } from "./filters/moj-quick-filter";
import { MojPagingComponent } from "./pagination/moj-paging.component";
import { DropdownModule } from "primeng/primeng";
import { MojDirectiveModule } from "../../directives/moj-directive.module";
import { MojGridPrintButtonComponent } from './moj-grid-print-button/moj-grid-print-button.component'
import { MojSharedModule } from "../../shared/moj.shared.module";
import { GridService } from "./service/moj-grid.service";
import { MojFileUploadModule } from "../file-upload/moj-file-upload.module";
import { MojListItemComponent } from "./list-view/moj-list-item.component";
import { MojListItemHeaderComponent } from "./list-view/moj-list-item-header.component"
import { MojListItemBodyComponent } from "./list-view/moj-list-item-body.component"
import { MojListItemExtensionComponent } from "./list-view/moj-list-item-ext.component";
import { MojDataViewToggleComponent } from "./list-view/moj-list-design-toggle.component";;
import { MojGridMenuColumnComponent } from './buttons/moj-grid-menu-column/moj-grid-menu-column.component'
import { MojSortComponent } from './sort/moj-sort.component'
import { MojListItemFooterComponent } from './list-view/moj-list-item-footer.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        DialogModule,
        MojInputModule,
        MojSharedModule,
        MojPipesModule,
        DropdownModule,
        MojDirectiveModule,
        MojFileUploadModule,
        AgGridModule.withComponents([
            MojGridDeleteButtonComponent,
            MojGridEditButtonComponent,
            MojGridDuplicateButtonComponent,
            MojLinkColumnComponent,
            MojIconColumnComponent,
            MojVColumnComponent,
            MojStateColumnComponent,
            ActionsPopupComponent,
            MojTextboxColumnComponent,
            MojTextAreaColumnComponent,
            MojDropdownColumnComponent,
            MojAutoCompleteColumnComponent,
            MojMultiSelectColumnComponent,
            MojDatePickerColumnComponent
        ])
    ],
    exports: [
        MojGridAddButtonComponent,
        MojGridSaveButtonComponent,
        MojGridCancelButtonComponent,
        MojGridDuplicateButtonComponent,
        MojIconColumnComponent,
        MojCheckBoxColumnComponent,
        MojLinkColumnComponent,
        MojStateColumnComponent,
        MojVColumnComponent,
        MojGridPanelComponent,
        MojGridDeleteButtonComponent,
        MojGridEditButtonComponent,
        MojGridOptionsDirective,
        MojRadiobuttonColumnComponent,
        MojGridActionsPopupButtonComponent,
        ActionsPopupComponent,
        AgGridModule,
        MojGridXlsExportComponent,
        MojQuickFilterComponent,
        MojPagingComponent,
        MojGridPrintButtonComponent,
        MojListItemComponent, MojListItemExtensionComponent, MojDataViewToggleComponent, 
        MojListItemHeaderComponent, MojListItemBodyComponent, MojListItemFooterComponent, MojGridMenuColumnComponent,
        MojSortComponent
    ],
    declarations: [
        MojGridAddButtonComponent,
        MojGridSaveButtonComponent,
        MojGridCancelButtonComponent,
        MojIconColumnComponent,
        MojCheckBoxColumnComponent,
        MojLinkColumnComponent,
        MojStateColumnComponent,
        MojVColumnComponent,
        MojGridPanelComponent,
        MojGridDeleteButtonComponent,
        MojGridEditButtonComponent,
        MojGridDuplicateButtonComponent,
        MojGridOptionsDirective,
        MojRadiobuttonColumnComponent,
        MojGridActionsPopupButtonComponent,
        ActionsPopupComponent,
        MojDocumentFormatColumnComponent,
        MojGridXlsExportComponent,
        MojViewRowDetailsComponent,
        MojTextboxColumnComponent,
        MojTextAreaColumnComponent,
        MojDropdownColumnComponent,
        MojAutoCompleteColumnComponent,
        MojMultiSelectColumnComponent,
        MojDatePickerColumnComponent,
        MojQuickFilterComponent,
        MojPagingComponent,
        MojListItemComponent, MojListItemExtensionComponent, MojDataViewToggleComponent, 
        MojListItemHeaderComponent, MojListItemBodyComponent, MojListItemFooterComponent, MojGridMenuColumnComponent, 
        MojGridPrintButtonComponent,
        MojSortComponent],
    entryComponents: [
        MojIconColumnComponent,
        MojRadiobuttonColumnComponent,
        MojGridActionsPopupButtonComponent,
        MojCheckBoxColumnComponent,
        MojDocumentFormatColumnComponent,
        MojViewRowDetailsComponent
    ],
    providers: [GridService]
})
export class MojGridModule { }
