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
var products_1 = require("./products");
var moj_grid_service_1 = require("../../moj-ng/elements/grid/service/moj-grid.service");
var forms_1 = require("@angular/forms");
var autocomplete_enum_1 = require("../../moj-ng/elements/autocomplete/autocomplete.enum");
var edit_options_model_1 = require("../../moj-ng/elements/grid/edit-component/edit-options.model");
var GridEditInlineExampleComponent = /** @class */ (function () {
    function GridEditInlineExampleComponent(gridService) {
        this.gridService = gridService;
        this.editOptions = new edit_options_model_1.EditOptions();
        this.categories = [
            { "CategoryID": 1, "CategoryName": "Beverages", "Description": "Soft drinks, coffees, teas, beers, and ales" },
            { "CategoryID": 2, "CategoryName": "Condiments", "Description": "Sweet and savory sauces, relishes, spreads, and seasonings" },
            { "CategoryID": 3, "CategoryName": "Confections", "Description": "Desserts, candies, and sweet breads" },
            { "CategoryID": 4, "CategoryName": "Dairy Products", "Description": "Cheeses" },
            { "CategoryID": 5, "CategoryName": "Grains/Cereals", "Description": "Breads, crackers, pasta, and cereal" },
            { "CategoryID": 6, "CategoryName": "Meat/Poultry", "Description": "Prepared meats" },
            { "CategoryID": 7, "CategoryName": "Produce", "Description": "Dried fruit and bean curd" },
            { "CategoryID": 8, "CategoryName": "Seafood", "Description": "Seaweed and fish" }
        ];
    }
    GridEditInlineExampleComponent.prototype.ngOnInit = function () {
        this.rowData = products_1.products;
        this.columns = [
            this.gridService.getMojTextBoxColumn("ID", { validators: [forms_1.Validators.required] }),
            this.gridService.getMojDropdownColumn("Category", { validators: [forms_1.Validators.required], items: this.categories, fieldName: 'CategoryName' }),
            this.gridService.getMojDatePickerColumn("FirstOrderedOn", { validators: [forms_1.Validators.required] }, { colDef: { headerName: 'תאריך הזמנה' } }),
            this.gridService.getMojMultiSelectColumn("Categories", { items: this.categories, fieldName: 'CategoryName' }),
            this.gridService.getMojAutoCompleteColumn("Category", { validators: [forms_1.Validators.required], items: this.categories, fieldName: 'CategoryName', filterType: autocomplete_enum_1.FilterType.includes }),
        ];
        this.gridOptions = this.gridService.getMojGridOptions();
        this.editOptions.editType = edit_options_model_1.EditType.Inline;
    };
    GridEditInlineExampleComponent = __decorate([
        core_1.Component({
            selector: "grid-edit-inline-example",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            templateUrl: "grid-edit-inline-example.component.html"
        }),
        __metadata("design:paramtypes", [moj_grid_service_1.GridService])
    ], GridEditInlineExampleComponent);
    return GridEditInlineExampleComponent;
}());
exports.GridEditInlineExampleComponent = GridEditInlineExampleComponent;
//# sourceMappingURL=grid-edit-inline-example.component.js.map