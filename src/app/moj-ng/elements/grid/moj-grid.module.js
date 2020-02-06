"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var primeng_1 = require("primeng/primeng");
var moj_grid_buttons_1 = require("./buttons/moj-grid-buttons");
var moj_grid_columns_1 = require("./custom-columns/moj-grid-columns");
var moj_grid_panel_component_1 = require("./moj-grid-panel.component");
var moj_grid_options_1 = require("./moj-grid-options");
var ag_grid_angular_1 = require("ag-grid-angular");
var moj_radiobutton_column_component_1 = require("./custom-columns/moj-radiobutton-column/moj-radiobutton-column.component");
var actions_popup_component_1 = require("../actions-popup/actions-popup.component");
var moj_checkbox_column_component_1 = require("./custom-columns/moj-checkbox-column/moj-checkbox-column.component");
var ag_grid_enterprise_1 = require("ag-grid-enterprise");
var moj_document_format_column_component_1 = require("./custom-columns/moj-document-format-column/moj-document-format-column.component");
var moj_grid_xls_export_component_1 = require("./moj-grid-xls-export/moj-grid-xls-export.component");
var view_row_details_component_1 = require("./view-row-details/view-row-details.component");
var moj_pipes_module_1 = require("../../pipes/moj-pipes-module");
var input_module_1 = require("../input.module");
var edit_inline_columns_1 = require("./edit-inline/edit-inline-columns");
var moj_quick_filter_1 = require("./filters/moj-quick-filter");
var moj_paging_component_1 = require("./pagination/moj-paging.component");
var primeng_2 = require("primeng/primeng");
var moj_directive_module_1 = require("../../directives/moj-directive.module");
var moj_grid_print_button_component_1 = require("./moj-grid-print-button/moj-grid-print-button.component");
var moj_shared_module_1 = require("../../shared/moj.shared.module");
var moj_grid_service_1 = require("./service/moj-grid.service");
var moj_file_upload_module_1 = require("../file-upload/moj-file-upload.module");
var moj_list_item_component_1 = require("./list-view/moj-list-item.component");
var moj_list_item_header_component_1 = require("./list-view/moj-list-item-header.component");
var moj_list_item_body_component_1 = require("./list-view/moj-list-item-body.component");
var moj_list_item_ext_component_1 = require("./list-view/moj-list-item-ext.component");
var moj_list_design_toggle_component_1 = require("./list-view/moj-list-design-toggle.component");
;
var moj_grid_menu_column_component_1 = require("./buttons/moj-grid-menu-column/moj-grid-menu-column.component");
ag_grid_enterprise_1.LicenseManager.setLicenseKey("Software_Sources_Ltd._on_behalf_of_Israeli_Ministry_Of_Justice_MultiApp_1Devs11_April_2019__MTU1NDkzNzIwMDAwMA==1baea05d9fd5b715079f6fd9434861d6");
var MojGridModule = /** @class */ (function () {
    function MojGridModule() {
    }
    MojGridModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                core_2.TranslateModule,
                primeng_1.DialogModule,
                input_module_1.MojInputModule,
                moj_shared_module_1.MojSharedModule,
                moj_pipes_module_1.MojPipesModule,
                primeng_2.DropdownModule,
                moj_directive_module_1.MojDirectiveModule,
                moj_file_upload_module_1.MojFileUploadModule,
                ag_grid_angular_1.AgGridModule.withComponents([
                    moj_grid_buttons_1.MojGridDeleteButtonComponent,
                    moj_grid_buttons_1.MojGridEditButtonComponent,
                    moj_grid_buttons_1.MojGridDuplicateButtonComponent,
                    moj_grid_columns_1.MojLinkColumnComponent,
                    moj_grid_columns_1.MojIconColumnComponent,
                    moj_grid_columns_1.MojVColumnComponent,
                    moj_grid_columns_1.MojStateColumnComponent,
                    actions_popup_component_1.ActionsPopupComponent,
                    edit_inline_columns_1.MojTextboxColumnComponent,
                    edit_inline_columns_1.MojTextAreaColumnComponent,
                    edit_inline_columns_1.MojDropdownColumnComponent,
                    edit_inline_columns_1.MojAutoCompleteColumnComponent,
                    edit_inline_columns_1.MojMultiSelectColumnComponent,
                    edit_inline_columns_1.MojDatePickerColumnComponent
                ])
            ],
            exports: [
                moj_grid_buttons_1.MojGridAddButtonComponent,
                moj_grid_buttons_1.MojGridSaveButtonComponent,
                moj_grid_buttons_1.MojGridCancelButtonComponent,
                moj_grid_columns_1.MojIconColumnComponent,
                moj_checkbox_column_component_1.MojCheckBoxColumnComponent,
                moj_grid_columns_1.MojLinkColumnComponent,
                moj_grid_columns_1.MojStateColumnComponent,
                moj_grid_columns_1.MojVColumnComponent,
                moj_grid_panel_component_1.MojGridPanelComponent,
                moj_grid_buttons_1.MojGridDeleteButtonComponent,
                moj_grid_buttons_1.MojGridEditButtonComponent,
                moj_grid_options_1.MojGridOptionsDirective,
                moj_radiobutton_column_component_1.MojRadiobuttonColumnComponent,
                moj_grid_columns_1.MojGridActionsPopupButtonComponent,
                actions_popup_component_1.ActionsPopupComponent,
                ag_grid_angular_1.AgGridModule,
                moj_grid_xls_export_component_1.MojGridXlsExportComponent,
                moj_quick_filter_1.MojQuickFilterComponent,
                moj_paging_component_1.MojPagingComponent,
                moj_grid_print_button_component_1.MojGridPrintButtonComponent,
                moj_list_item_component_1.MojListItemComponent, moj_list_item_ext_component_1.MojListItemExtensionComponent, moj_list_design_toggle_component_1.MojDataViewToggleComponent,
                moj_list_item_header_component_1.MojListItemHeaderComponent, moj_list_item_body_component_1.MojListItemBodyComponent, moj_grid_menu_column_component_1.MojGridMenuColumnComponent
            ],
            declarations: [
                moj_grid_buttons_1.MojGridAddButtonComponent,
                moj_grid_buttons_1.MojGridSaveButtonComponent,
                moj_grid_buttons_1.MojGridCancelButtonComponent,
                moj_grid_columns_1.MojIconColumnComponent,
                moj_checkbox_column_component_1.MojCheckBoxColumnComponent,
                moj_grid_columns_1.MojLinkColumnComponent,
                moj_grid_columns_1.MojStateColumnComponent,
                moj_grid_columns_1.MojVColumnComponent,
                moj_grid_panel_component_1.MojGridPanelComponent,
                moj_grid_buttons_1.MojGridDeleteButtonComponent,
                moj_grid_buttons_1.MojGridEditButtonComponent,
                moj_grid_buttons_1.MojGridDuplicateButtonComponent,
                moj_grid_options_1.MojGridOptionsDirective,
                moj_radiobutton_column_component_1.MojRadiobuttonColumnComponent,
                moj_grid_columns_1.MojGridActionsPopupButtonComponent,
                actions_popup_component_1.ActionsPopupComponent,
                moj_document_format_column_component_1.MojDocumentFormatColumnComponent,
                moj_grid_xls_export_component_1.MojGridXlsExportComponent,
                view_row_details_component_1.MojViewRowDetailsComponent,
                edit_inline_columns_1.MojTextboxColumnComponent,
                edit_inline_columns_1.MojTextAreaColumnComponent,
                edit_inline_columns_1.MojDropdownColumnComponent,
                edit_inline_columns_1.MojAutoCompleteColumnComponent,
                edit_inline_columns_1.MojMultiSelectColumnComponent,
                edit_inline_columns_1.MojDatePickerColumnComponent,
                moj_quick_filter_1.MojQuickFilterComponent,
                moj_paging_component_1.MojPagingComponent,
                moj_list_item_component_1.MojListItemComponent, moj_list_item_ext_component_1.MojListItemExtensionComponent, moj_list_design_toggle_component_1.MojDataViewToggleComponent,
                moj_list_item_header_component_1.MojListItemHeaderComponent, moj_list_item_body_component_1.MojListItemBodyComponent, moj_grid_menu_column_component_1.MojGridMenuColumnComponent,
                moj_grid_print_button_component_1.MojGridPrintButtonComponent
            ],
            entryComponents: [
                moj_grid_columns_1.MojIconColumnComponent,
                moj_radiobutton_column_component_1.MojRadiobuttonColumnComponent,
                moj_grid_columns_1.MojGridActionsPopupButtonComponent,
                moj_checkbox_column_component_1.MojCheckBoxColumnComponent,
                moj_document_format_column_component_1.MojDocumentFormatColumnComponent,
                view_row_details_component_1.MojViewRowDetailsComponent
            ],
            providers: [moj_grid_service_1.GridService]
        })
    ], MojGridModule);
    return MojGridModule;
}());
exports.MojGridModule = MojGridModule;
//# sourceMappingURL=moj-grid.module.js.map