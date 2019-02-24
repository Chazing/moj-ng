// import { Component, ViewChild, ChangeDetectionStrategy, OnInit } from "@angular/core";
// import { TestBed, ComponentFixture } from "@angular/core/testing";
// import { MojGridModule } from "./moj-grid.module";
// import { GridService } from "./service/moj-grid.service";
// import { GridOptions, ColDef } from "ag-grid-community";
// import { MojGridPanelComponent } from "./moj-grid-panel";
// import { TranslateService, TranslateModule, TranslateLoader } from "@ngx-translate/core";
// import { MockTranslateLoader } from "../../../../testing/mock-translate";
// import { MojUtilsService } from "../../shared/utils";
// import { MojConfigService } from "../../shared/moj-config.service";
// import { async } from "rxjs/internal/scheduler/async";
// import { EditComponentBase } from "./edit-component/edit-component.base";
// import { products } from "../../../example/grid-example/products";
// import { CommonModule } from "@angular/common";
// import { MojSharedModule } from "../../shared/moj.shared.module";
// import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";
// import { EditServiceBase } from "./service/edit-service.base";
// import { EditOptions } from "./edit-component/edit-options.model";
// import { By } from "@angular/platform-browser";


// @Component({
//     template: `<moj-grid-panel
//                         [editOptions]="editOptions"
//                         [editService]="editService">
//                     <ag-grid-angular
//                         [gridOptions]="gridOptions"
//                         [rowData]="rowData"
//                         [columnDefs]="columns">
//                     </ag-grid-angular>
//                 </moj-grid-panel>`,
//     changeDetection:  ChangeDetectionStrategy.OnPush,
// })
// class TestComponent implements OnInit {
//     @ViewChild(MojGridPanelComponent) mojGridPanel: MojGridPanelComponent;
//     rowData:any;
//     gridOptions:GridOptions;
//     columns: ColDef[];
//     editOptions: EditOptions = new EditOptions();
//     editService: EditServiceBase;
    
//     constructor(private gridService: GridService) {
//     }

//     ngOnInit(){
//         this.rowData = products;
//         this.gridOptions = this.gridService.getMojGridOptions();
//         this.columns = [
//             this.gridService.getMojColumn("ID"),
//             this.gridService.getMojColumn("ProductName"),
//             this.gridService.getMojColumn("UnitPrice"),
//             this.gridService.getMojDateColumn("FirstOrderedOn")
//         ];
//     }
// }

// @Component({
//     selector: "test-edit-component",
//     template: `<form #form="ngForm">
//                 </form>`
// })
// class TestEditComponent extends EditComponentBase{
// }


// xdescribe('MojGridPanelComponent', () => {
//     let testComponent: TestComponent;
//     let fixture: ComponentFixture<TestComponent>;
//     let gridPanelComponent: MojGridPanelComponent

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             declarations:[TestComponent,TestEditComponent],
//             imports: [MojSharedModule,
//                 MojGridModule,
//                 TranslateModule.forRoot({
//                     loader: {provide: TranslateLoader, useClass: MockTranslateLoader}
//                   })
//                 ],
//             providers: [GridService,
//                 TranslateService,
//                 MojUtilsService,
//                 MojConfigService
//             ]
//         }).overrideModule(BrowserDynamicTestingModule, { //because testbed doesnt have entryComponents, we need to override
//             set: {
//               entryComponents: [ TestEditComponent ],
//             }
//           });
//     fixture = TestBed.createComponent(TestComponent);
//     testComponent = fixture.debugElement.componentInstance;
//     gridPanelComponent = testComponent.mojGridPanel;
//     });

//     it('should be truthy', () => {
//         expect(gridPanelComponent).toBeTruthy();
//     });

//     it('should open edit component on call add', () => {
//         testComponent.editOptions.editComponentType = TestEditComponent;
//         fixture.detectChanges();
//         gridPanelComponent.add();
//         expect(gridPanelComponent.editComponent).toBeTruthy("the component didn't created");
//         expect(fixture.debugElement.query(By.css('test-edit-component')).nativeElement).toBeTruthy("edit component didn't created in dom");
//     });
    
//     it('should open edit component on call edit', () => {
//         testComponent.editOptions.editComponentType = TestEditComponent;
//         fixture.detectChanges();
//         gridPanelComponent.edit(products[0], "1");
//         expect(gridPanelComponent.editComponent).toBeTruthy("the component didn't created");
//         expect(fixture.debugElement.query(By.css('test-edit-component')).nativeElement).toBeTruthy("edit component didn't created in dom");
//     });
// })
