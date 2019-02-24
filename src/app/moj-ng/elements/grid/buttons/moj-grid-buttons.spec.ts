import { Component, ViewChild, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { EditComponentBase } from "../edit-component/edit-component.base";
import { products } from "../../../../example/grid-example/products";
import { GridService } from "../service/moj-grid.service";
import { MojGridPanelComponent } from "../moj-grid-panel";
import { GridOptions, ColDef, GridApi } from "ag-grid-community";
import { EditOptions } from "../edit-component/edit-options.model";
import { EditServiceBase } from "../service/edit-service.base";
import { ComponentFixture, TestBed, async } from "@angular/core/testing";
import { MojSharedModule } from "../../../shared/moj.shared.module";
import { MojGridModule } from "../moj-grid.module";
import { TranslateModule, TranslateLoader, TranslateService } from "@ngx-translate/core";
import { MockTranslateLoader } from "../../../../../testing/mock-translate";
import { MojUtilsService } from "../../../shared/utils";
import { MojConfigService } from "../../../shared/moj-config.service";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
import { By } from "@angular/platform-browser";
import { MojGridAddButtonComponent } from "./moj-grid-buttons";
import { ButtonStyle } from "../../buttons/button-style";

@Component({
    template: `<moj-grid-panel
                        [editOptions]="editOptions"
                        [editService]="editService">
                    <moj-grid-add-button></moj-grid-add-button>
                    <ag-grid-angular
                        [gridOptions]="gridOptions"
                        [rowData]="rowData"
                        [columnDefs]="columns"
                        (gridReady)="onReady($event)">
                    </ag-grid-angular>
                </moj-grid-panel>`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestComponent implements OnInit {
    @ViewChild(MojGridPanelComponent) mojGridPanel: MojGridPanelComponent;
    @ViewChild(MojGridAddButtonComponent) mojGridAddButton: MojGridAddButtonComponent;
    rowData:any;
    gridOptions:GridOptions;
    columns: ColDef[];
    gridApi:GridApi;
    editOptions: EditOptions = new EditOptions();
    editService: EditServiceBase;
    
    constructor(public gridService: GridService) {
    }

    ngOnInit(){
        this.rowData = products;
        this.gridOptions = this.gridService.getMojGridOptions();
        this.columns = [
            this.gridService.getMojColumn("ID")
        ];
        this.editOptions.editComponentType = TestEditComponent;
    }

    onReady(params){
        this.gridApi = params.api;
    }
}

@Component({
    selector: "test-edit-component",
    template: `<form #form="ngForm">
                    <moj-buttons-line>
                    <moj-grid-cancel-button></moj-grid-cancel-button>
                    <moj-grid-save-button></moj-grid-save-button>
                </moj-buttons-line>
                </form>`
})
class TestEditComponent extends EditComponentBase{
}

describe('MojGridButtons', () => {
    let testComponent: TestComponent;
    let fixture: ComponentFixture<TestComponent>;
    let translate:TranslateService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[TestComponent,TestEditComponent],
            imports: [MojSharedModule,
                MojGridModule,
                TranslateModule.forRoot({
                    loader: {provide: TranslateLoader, useClass: MockTranslateLoader}
                  })
                ],
            providers: [GridService,
                TranslateService,
                MojUtilsService,
                MojConfigService
            ]
        });
        TestBed.overrideModule(BrowserDynamicTestingModule, { //because testbed doesnt have entryComponents, we need to override
            set: {
              entryComponents: [ TestEditComponent ],
            }
          });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.debugElement.componentInstance;
        translate = TestBed.get(TranslateService);
    });

    it('add - should open edit component on click', async(() => {
        fixture.detectChanges();
        let addButtonEl = fixture.debugElement.query(By.css('moj-grid-add-button button')).nativeElement;
        addButtonEl.dispatchEvent(new Event('click'));
        expect(testComponent.mojGridPanel.editComponent).toBeTruthy();
    }));

    it('add - properties should work', async(() => {
        testComponent.mojGridAddButton.disabled = true;
        testComponent.mojGridAddButton.textKey = 'attachFile';
        testComponent.mojGridAddButton.buttonStyle = ButtonStyle.SmallDark;
        fixture.detectChanges();
        let addButtonEl = fixture.debugElement.query(By.css('moj-grid-add-button button')).nativeElement;
        expect(addButtonEl.disabled).toBeTruthy();
        expect(addButtonEl.textContent).toContain(translate.instant('attachFile'));
        let divEl = fixture.debugElement.query(By.css('moj-grid-add-button div.moj-add-button')).nativeElement;
        expect(divEl.className).toContain('moj-small-dark');
    }));

    function openEditComponent(){
        let addButtonEl = fixture.debugElement.query(By.css('moj-grid-add-button button')).nativeElement;
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

    it('edit - should open edit component on click', async(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => { 
            testComponent.gridApi.setColumnDefs([testComponent.gridService.getEditColumn()]);
            let editButtonEl = fixture.debugElement.query(By.css('moj-grid-edit-button button')).nativeElement;
            editButtonEl.dispatchEvent(new Event('click'));
            expect(testComponent.mojGridPanel.editComponent).toBeTruthy();
          });
    }));

    it('edit - properties should work', async(() => {
        fixture.detectChanges();
        fixture.whenStable().then(() => { 
            testComponent.gridApi.setColumnDefs([testComponent.gridService.getEditColumn({headerName:"edit",cssClass:"orange2",disabled:true})]);
            let editButtonEl = fixture.debugElement.query(By.css('moj-grid-edit-button button')).nativeElement;
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