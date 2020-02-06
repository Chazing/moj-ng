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
var http_1 = require("@angular/common/http");
var moj_ng_1 = require("src/app/moj-ng");
var enums_1 = require("../../../enums");
var ActionPopupDemoComponent = /** @class */ (function () {
    function ActionPopupDemoComponent(http, gridService) {
        this.http = http;
        this.gridService = gridService;
        this.Enums = enums_1.ENUMS;
        this.editOptions = new moj_ng_1.EditOptions();
        this.actions = [
            { textKey: 'בבקשה', href: '/componentsDemo/autocomplete-demo', cssClass: 'fa fa-check-circle' },
            { textKey: 'צפייה ', href: '/website-example/recaptcha', cssClass: 'zzz' },
        ];
        this.getItems = function (rowData) {
            return [
                { textKey: rowData.ID.toString(), href: '/website-example/autocomplete', cssClass: 'request' },
                { textKey: rowData.ProductName.toString(), href: '/website-example/recaptcha', cssClass: 'zzz' },
                { textKey: rowData.Discontinued.toString(), href: '/website-example/form', cssClass: 'refuse' }
            ];
        };
    }
    ActionPopupDemoComponent.prototype.ngOnInit = function () {
        this.rowData2 = [
            {
                "ID": 1,
                "ProductName": "Chai",
                "SupplierID": 1,
                "CategoryID": 1,
                "QuantityPerUnit": "10 boxes x 20 bags",
                "UnitPrice": 0,
                "UnitsInStock": 39,
                "UnitsOnOrder": 0,
                "ReorderLevel": 10,
                "Discontinued": true,
                "Category": {
                    "CategoryID": 1,
                    "CategoryName": "Beverages",
                    "Description": "Soft drinks, coffees, teas, beers, and ales"
                },
                "FirstOrderedOn": new Date(1996, 8, 20)
            },
            {
                "ID": 2,
                "ProductName": "Chang",
                "SupplierID": 1,
                "CategoryID": 1,
                "QuantityPerUnit": "24 - 12 oz bottles",
                "UnitPrice": -3,
                "UnitsInStock": 17,
                "UnitsOnOrder": 40,
                "ReorderLevel": 25,
                "Discontinued": false,
                "Category": {
                    "CategoryID": 1,
                    "CategoryName": "Beverages",
                    "Description": "Soft drinks, coffees, teas, beers, and ales"
                },
                "FirstOrderedOn": new Date(1996, 7, 12)
            },
            {
                "ID": 3,
                "ProductName": "Aniseed Syrup",
                "SupplierID": 1,
                "CategoryID": 2,
                "QuantityPerUnit": "12 - 550 ml bottles",
                "UnitPrice": 10,
                "UnitsInStock": 13,
                "UnitsOnOrder": 70,
                "ReorderLevel": 25,
                "Discontinued": true,
                "Category": {
                    "CategoryID": 2,
                    "CategoryName": "Condiments",
                    "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
                },
                "FirstOrderedOn": new Date(1996, 8, 26)
            }
        ];
        this.columns2 = [
            this.gridService.getMojColumn('ProductName'),
            this.gridService.getActionsPopupColumn({ items: this.actions }),
        ];
        this.gridOptions = this.gridService.getMojGridOptions();
        this.gridOptions.paginationPageSize = 5;
    };
    ActionPopupDemoComponent.prototype.onGridReady1 = function (params) {
        this.gridApi1 = params.api;
    };
    __decorate([
        core_1.ViewChild('areaToReplace', { read: core_1.ViewContainerRef, static: true }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], ActionPopupDemoComponent.prototype, "areaToReplace", void 0);
    __decorate([
        core_1.ViewChild('grid1', { static: true }),
        __metadata("design:type", moj_ng_1.MojGridPanelComponent)
    ], ActionPopupDemoComponent.prototype, "grid", void 0);
    ActionPopupDemoComponent = __decorate([
        core_1.Component({
            selector: 'action-popup-demo',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            templateUrl: 'action-popup-demo.component.html'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            moj_ng_1.GridService])
    ], ActionPopupDemoComponent);
    return ActionPopupDemoComponent;
}());
exports.ActionPopupDemoComponent = ActionPopupDemoComponent;
//# sourceMappingURL=action-popup-demo.component.js.map