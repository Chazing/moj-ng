"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var edit_component_base_1 = require("../edit-component/edit-component.base");
var products_1 = require("../../../../example/grid-example/products");
var moj_grid_service_1 = require("../service/moj-grid.service");
var moj_grid_panel_1 = require("../moj-grid-panel");
var edit_options_model_1 = require("../edit-component/edit-options.model");
var testing_1 = require("@angular/core/testing");
var moj_shared_module_1 = require("../../../shared/moj.shared.module");
var moj_grid_module_1 = require("../moj-grid.module");
var core_2 = require("@ngx-translate/core");
var mock_translate_1 = require("../../../../../testing/mock-translate");
var utils_1 = require("../../../shared/utils");
var moj_config_service_1 = require("../../../shared/moj-config.service");
var testing_2 = require("@angular/platform-browser-dynamic/testing");
var platform_browser_1 = require("@angular/platform-browser");
var moj_grid_buttons_1 = require("./moj-grid-buttons");
var button_style_1 = require("../../buttons/button-style");
var TestComponent = /** @class */ (function () {
    function TestComponent(gridService) {
        this.gridService = gridService;
        this.editOptions = new edit_options_model_1.EditOptions();
    }
    TestComponent.prototype.ngOnInit = function () {
        this.rowData = products_1.products;
        this.gridOptions = this.gridService.getMojGridOptions();
        this.columns = [
            this.gridService.getMojColumn("ID")
        ];
        this.editOptions.editComponentType = TestEditComponent;
    };
    TestComponent.prototype.onReady = function (params) {
        this.gridApi = params.api;
    };
    var _a;
    __decorate([
        core_1.ViewChild(moj_grid_panel_1.MojGridPanelComponent, { static: true }),
        __metadata("design:type", typeof (_a = typeof moj_grid_panel_1.MojGridPanelComponent !== "undefined" && moj_grid_panel_1.MojGridPanelComponent) === "function" ? _a : Object)
    ], TestComponent.prototype, "mojGridPanel", void 0);
    __decorate([
        core_1.ViewChild(moj_grid_buttons_1.MojGridAddButtonComponent, { static: true }),
        __metadata("design:type", moj_grid_buttons_1.MojGridAddButtonComponent)
    ], TestComponent.prototype, "mojGridAddButton", void 0);
    TestComponent = __decorate([
        core_1.Component({
            template: "<moj-grid-panel\n                        [editOptions]=\"editOptions\"\n                        [editService]=\"editService\">\n                    <moj-grid-add-button></moj-grid-add-button>\n                    <ag-grid-angular\n                        [gridOptions]=\"gridOptions\"\n                        [rowData]=\"rowData\"\n                        [columnDefs]=\"columns\"\n                        (gridReady)=\"onReady($event)\">\n                    </ag-grid-angular>\n                </moj-grid-panel>",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [moj_grid_service_1.GridService])
    ], TestComponent);
    return TestComponent;
}());
var TestEditComponent = /** @class */ (function (_super) {
    __extends(TestEditComponent, _super);
    function TestEditComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestEditComponent = __decorate([
        core_1.Component({
            selector: "test-edit-component",
            template: "<form #form=\"ngForm\">\n                    <moj-buttons-line>\n                    <moj-grid-cancel-button></moj-grid-cancel-button>\n                    <moj-grid-save-button></moj-grid-save-button>\n                </moj-buttons-line>\n                </form>"
        })
    ], TestEditComponent);
    return TestEditComponent;
}(edit_component_base_1.EditComponentBase));
describe('MojGridButtons', function () {
    var testComponent;
    var fixture;
    var translate;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [TestComponent, TestEditComponent],
            imports: [moj_shared_module_1.MojSharedModule,
                moj_grid_module_1.MojGridModule,
                core_2.TranslateModule.forRoot({
                    loader: { provide: core_2.TranslateLoader, useClass: mock_translate_1.MockTranslateLoader }
                })
            ],
            providers: [moj_grid_service_1.GridService,
                core_2.TranslateService,
                utils_1.MojUtilsService,
                moj_config_service_1.MojConfigService
            ]
        });
        testing_1.TestBed.overrideModule(testing_2.BrowserDynamicTestingModule, {
            set: {
                entryComponents: [TestEditComponent],
            }
        });
        fixture = testing_1.TestBed.createComponent(TestComponent);
        testComponent = fixture.debugElement.componentInstance;
        translate = testing_1.TestBed.get(core_2.TranslateService);
    });
    it('add - should open edit component on click', testing_1.async(function () {
        fixture.detectChanges();
        var addButtonEl = fixture.debugElement.query(platform_browser_1.By.css('moj-grid-add-button button')).nativeElement;
        addButtonEl.dispatchEvent(new Event('click'));
        expect(testComponent.mojGridPanel.editComponent).toBeTruthy();
    }));
    it('add - properties should work', testing_1.async(function () {
        testComponent.mojGridAddButton.disabled = true;
        testComponent.mojGridAddButton.textKey = 'attachFile';
        testComponent.mojGridAddButton.buttonStyle = button_style_1.ButtonStyle.SmallDark;
        fixture.detectChanges();
        var addButtonEl = fixture.debugElement.query(platform_browser_1.By.css('moj-grid-add-button button')).nativeElement;
        expect(addButtonEl.disabled).toBeTruthy();
        expect(addButtonEl.textContent).toContain(translate.instant('attachFile'));
        var divEl = fixture.debugElement.query(platform_browser_1.By.css('moj-grid-add-button div.moj-add-button')).nativeElement;
        expect(divEl.className).toContain('moj-small-dark');
    }));
    function openEditComponent() {
        var addButtonEl = fixture.debugElement.query(platform_browser_1.By.css('moj-grid-add-button button')).nativeElement;
        addButtonEl.dispatchEvent(new Event('click'));
    }
    // it('cancel - click should hide edit component', async(() => {
    //     fixture.detectChanges();
    //     openEditComponent();
    //     let cancelButtonEl = fixture.debugElement.query(By.css('moj-grid-cancel-button button')).nativeElement;
    //     cancelButtonEl.dispatchEvent(new Event('click'));
    //     let editDiv = fixture.debugElement.query(By.css('div[cl] div.child'));
    //     expect(editDiv.nativeElement.className).toContain('hide-on-edit');
    // }));
    // it('cancel - properties should work', async(() => {
    //     fixture.detectChanges();
    //     openEditComponent();
    //     let cancelButton = testComponent.mojGridPanel.editComponent.cancelBtn;
    //     cancelButton.textKey = 'attachFile';
    //     cancelButton.buttonStyle = ButtonStyle.SmallDark;
    //     fixture.detectChanges();
    //     let cancelButtonEl = fixture.debugElement.query(By.css('moj-grid-cancel-button button')).nativeElement;
    //     expect(cancelButtonEl.textContent).toContain(translate.instant('attachFile'));
    //     let divEl = fixture.debugElement.query(By.css('moj-grid-cancel-button>div')).nativeElement;
    //     expect(divEl.className).toContain('moj-small-dark');
    // }));
    // it('cancel - should emit cancelClick output on click', async(() => {
    //     fixture.detectChanges();
    //     openEditComponent();
    //     let eventCalled;
    //     let cancelButton = testComponent.mojGridPanel.editComponent.cancelBtn;
    //     cancelButton.cancelClick.subscribe(() => eventCalled = true);
    //     let cancelButtonEl = fixture.debugElement.query(By.css('moj-grid-cancel-button button')).nativeElement;
    //     cancelButtonEl.dispatchEvent(new Event('click'));
    //     expect(eventCalled).toBeTruthy();
    // }));
    // it('save - properties should work', async(() => {
    //     fixture.detectChanges();
    //     openEditComponent();
    //     let saveButton = testComponent.mojGridPanel.editComponent.saveBtn;
    //     saveButton.textKey = 'attachFile';
    //     saveButton.buttonStyle = ButtonStyle.SmallDark;
    //     saveButton.disabled = true;
    //     fixture.detectChanges();
    //     let saveButtonEl = fixture.debugElement.query(By.css('moj-grid-save-button button')).nativeElement;
    //     expect(saveButtonEl.disabled).toBeTruthy();
    //     expect(saveButtonEl.textContent).toContain(translate.instant('attachFile'));
    //     let divEl = fixture.debugElement.query(By.css('moj-grid-save-button>div')).nativeElement;
    //     expect(divEl.className).toContain('moj-small-dark');
    // }));
    // it('save - should call mojPanel save on click', async(() => {
    //     let mojPanelSaveSpy = spyOn(testComponent.mojGridPanel,'save');//click should call spy, not truth function
    //     fixture.detectChanges();
    //     openEditComponent();
    //     let saveButtonEl = fixture.debugElement.query(By.css('moj-grid-save-button button')).nativeElement;
    //     saveButtonEl.dispatchEvent(new Event('click'));
    //     expect(mojPanelSaveSpy).toHaveBeenCalled();
    // }));
    // it('save - should emit saveClick output on click', async(() => {
    //     fixture.detectChanges();
    //     openEditComponent();
    //     let eventCalled;
    //     let saveButton = testComponent.mojGridPanel.editComponent.saveBtn;
    //     saveButton.saveClick.subscribe(() => eventCalled = true);
    //     let saveButtonEl = fixture.debugElement.query(By.css('moj-grid-save-button button')).nativeElement;
    //     saveButtonEl.dispatchEvent(new Event('click'));
    //     expect(eventCalled).toBeTruthy();
    // }));
    it('edit - should open edit component on click', testing_1.async(function () {
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            testComponent.gridApi.setColumnDefs([testComponent.gridService.getEditColumn()]);
            var editButtonEl = fixture.debugElement.query(platform_browser_1.By.css('moj-grid-edit-button button')).nativeElement;
            editButtonEl.dispatchEvent(new Event('click'));
            expect(testComponent.mojGridPanel.editComponent).toBeTruthy();
        });
    }));
    it('edit - properties should work', testing_1.async(function () {
        fixture.detectChanges();
        fixture.whenStable().then(function () {
            testComponent.gridApi.setColumnDefs([testComponent.gridService.getEditColumn({ headerName: "edit", cssClass: "orange2", disabled: true })]);
            var editButtonEl = fixture.debugElement.query(platform_browser_1.By.css('moj-grid-edit-button button')).nativeElement;
            //editButtonEl
        });
        // let saveButton = testComponent.mojGridPanel.editComponent.saveBtn;
        // saveButton.textKey = 'attachFile';
        // saveButton.buttonStyle = ButtonStyle.SmallDark;
        // saveButton.disabled = true;
        // fixture.detectChanges();
        // let saveButtonEl = fixture.debugElement.query(By.css('moj-grid-save-button button')).nativeElement;
        // expect(saveButtonEl.disabled).toBeTruthy();
        // expect(saveButtonEl.textContent).toContain(translate.instant('attachFile'));
        // let divEl = fixture.debugElement.query(By.css('moj-grid-save-button>div')).nativeElement;
        // expect(divEl.className).toContain('moj-small-dark');
    }));
});
//# sourceMappingURL=moj-grid-buttons.spec.js.map