"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var products_1 = require("../products");
var moj_grid_service_1 = require("../../../moj-ng/elements/grid/service/moj-grid.service");
var server_side_data_source_model_1 = require("./server-side-data-source.model");
var edit_options_model_1 = require("../../../moj-ng/elements/grid/edit-component/edit-options.model");
var edit_popup_example_component_1 = require("../edit-popup-example.component");
var GridServerSideExample = /** @class */ (function () {
    function GridServerSideExample(gridService) {
        this.gridService = gridService;
        this.editOptions = new edit_options_model_1.EditOptions();
    }
    GridServerSideExample.prototype.ngOnInit = function () {
        this.rowData = products_1.products;
        this.gridOptions = this.gridService.getMojGridOptions();
        this.columns = [
            this.gridService.getMojColumn("ID"),
            this.gridService.getMojColumn("ProductName"),
            this.gridService.getMojColumn("UnitPrice"),
            this.gridService.getStateColumn(),
            this.gridService.getMojDateColumn("FirstOrderedOn"),
            this.gridService.getEditColumn(),
            this.gridService.getDeleteColumn()
        ];
        this.editOptions.editComponentType = edit_popup_example_component_1.EditPopupExampleComponent;
    };
    GridServerSideExample.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        var datasource = new server_side_data_source_model_1.ServerSideDatasource();
        params.api.setServerSideDatasource(datasource);
    };
    GridServerSideExample = __decorate([
        core_1.Component({
            selector: 'grid-server-side-example',
            templateUrl: 'grid-server-side-example.component.html',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [moj_grid_service_1.GridService])
    ], GridServerSideExample);
    return GridServerSideExample;
}());
exports.GridServerSideExample = GridServerSideExample;
//# sourceMappingURL=grid-server-side-example.component.js.map