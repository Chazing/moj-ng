// import { MojAutoCompleteComponent } from "./moj-autocomplete.component";
// import { TestBed, async, ComponentFixture, fakeAsync, tick } from "@angular/core/testing";
// import { HttpClientTestingModule } from "@angular/common/http/testing";
// import { TranslateService, TranslateModule, TranslateLoader } from "@ngx-translate/core";
// import { MojInputModule } from "../input.module";
// import { Injector, Component, ViewChild } from "@angular/core";
// import { By } from "@angular/platform-browser";
// import { FormsModule } from "@angular/forms";
// import { CommonModule } from "@angular/common";
// import { listItems } from "../../../../testing/mock-dropdown.items";
// import { FilterType, DropdownMode } from "./autocomplete.enum";
// import { MockTranslateLoader } from "../../../../testing/mock-translate";

// @Component({
//     template: `<moj-autocomplete [(ngModel)]="value"
//                 [items]="items"
//                 fieldName="Value"
//                 fieldID="Key"></moj-autocomplete>`
// })
// class TestComponent {
//   @ViewChild(MojAutoCompleteComponent) mojAutoComplete: MojAutoCompleteComponent;
//   value;
//   items = listItems;
// }
  
// xdescribe('AutoCompleteComponent', () => {
//     let autoCompleteComponent: MojAutoCompleteComponent;
//     let fixture: ComponentFixture<TestComponent>;
//     let inputEl;

//     beforeEach(async(() => {
//       TestBed.configureTestingModule({
//         declarations: [TestComponent],
//         imports: [
//            HttpClientTestingModule,
//            MojInputModule,
//            FormsModule,
//            CommonModule,
//            TranslateModule.forRoot({
//             loader: {provide: TranslateLoader, useClass: MockTranslateLoader}
//           })
//         ],
//         providers:[
//           TranslateService,
//           Injector
//         ]
//       });

//       fixture = TestBed.createComponent(TestComponent);
//       autoCompleteComponent = fixture.debugElement.componentInstance.mojAutoComplete;
//       autoCompleteComponent.ngOnInit();
//       fixture.detectChanges();
//       inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
//     }));

//     function setInputText(text:string){
//         inputEl.value = text;
//         autoCompleteComponent.pAutoComplete.inputKeyDown = true;//prime catch only keydownevent
//         inputEl.dispatchEvent(new Event('input'));
//         tick();
//     }
//     it('should search by input', fakeAsync(() => {
//         setInputText('I');
//         expect(autoCompleteComponent.filteredItems.length).toEqual(1);
//       }));

//       it('select option should fill component value', fakeAsync(() => {
//         setInputText('I');
//         autoCompleteComponent.pAutoComplete.selectItem(autoCompleteComponent.filteredItems[0]);
//         tick();
//         expect(autoCompleteComponent.value).toEqual({Key:1, Value: "Israel"});
//       }));

//     it('should select option if there is default value', fakeAsync(() => {
//       fixture.debugElement.componentInstance.value = 1;
//       fixture.detectChanges();
//       tick();
//       expect(autoCompleteComponent.value).toBeTruthy();
//     }))

//     //itemsUrl
//     //minLength
//     it('should search only after minLength characters', fakeAsync(()=>{
//       autoCompleteComponent.minLength = 3;
//         fixture.detectChanges();
//         setInputText('I');
//         expect(autoCompleteComponent.filteredItems).toBeUndefined();
//     }));

//     //multiple
//     it('multiple should give option to choose 2 values', fakeAsync(() => {
//         autoCompleteComponent.multiple = true;
//         autoCompleteComponent.value = null;
//         fixture.detectChanges();
//         inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
//         setInputText('I');
//         autoCompleteComponent.pAutoComplete.selectItem(autoCompleteComponent.filteredItems[0]);
//         tick();
//         setInputText('R');
//         autoCompleteComponent.pAutoComplete.selectItem(autoCompleteComponent.filteredItems[0]);
//         tick();
//         expect(autoCompleteComponent.value).toEqual([{Key:1, Value: "Israel"}, { Value: "Russia", Key: 5 }]);
//       }));
//       //dropdown
//       it('click on dropdown button should bring all the items', fakeAsync(() => {
//         autoCompleteComponent.dropdown = true;
//         fixture.detectChanges();
//         let dropdownButton = fixture.debugElement.query(By.css('button.ui-autocomplete-dropdown'));
//         dropdownButton.nativeElement.dispatchEvent(new Event('click'));
//         tick();
//         expect(autoCompleteComponent.filteredItems.length).toEqual(15);
//       }));
      
//      //dropdownMode = current
//      it('should filter items on click dropdown button if mode = current', fakeAsync(() => {
//         autoCompleteComponent.dropdown = true;
//         autoCompleteComponent.dropdownMode = DropdownMode.current;
//         fixture.detectChanges();
//         setInputText('I');
//         let dropdownButton = fixture.debugElement.query(By.css('button.ui-autocomplete-dropdown'));
//         dropdownButton.nativeElement.dispatchEvent(new Event('click'));
//         tick();
//         expect(autoCompleteComponent.filteredItems.length).toEqual(1);
//       }));

//     //filterType
//     it('should search contains if FilterType is includes', fakeAsync(()=>{
//         autoCompleteComponent.filterType = FilterType.includes;
//         fixture.detectChanges();
//         setInputText('I');
//         expect(autoCompleteComponent.filteredItems.length).toEqual(11);
//     }));

//     //forceSelection
//     it('should check onChange - if value exist choose it, if not remove the text (forceSelection by default)', fakeAsync(()=>{
//       setInputText('י');
//       fixture.detectChanges();
//       inputEl.dispatchEvent(new Event('change'));
//       tick();
//       expect(autoCompleteComponent.value).toBeFalsy();

//       setInputText('Israel');
//       fixture.detectChanges();
//       inputEl.dispatchEvent(new Event('change'));
//       tick();
//       expect(autoCompleteComponent.value).toEqual({Key:1, Value: "Israel"});
//     }));

//     it('should remain text onChange if forceSelection is true', fakeAsync(()=>{
//         autoCompleteComponent.forceSelection = false;
//         fixture.detectChanges();
//         setInputText('I');
//         fixture.detectChanges();
//         inputEl.dispatchEvent(new Event('change'));
//         tick();
//         expect(autoCompleteComponent.value).toBeTruthy();
//       }));

//     //onKeyUp
//     it('onKeyUp event should call', async(() => {
//       let eventCalled;
//       autoCompleteComponent.onKeyUp.subscribe(() => eventCalled = true);
//       inputEl.dispatchEvent(new Event('keyup'));
//       expect(eventCalled).toBeTruthy();
//     }));

//     //onSelect
//     it('onSelect event should call', async(() => {
//         let eventCalled;
//         autoCompleteComponent.onSelect.subscribe(() => eventCalled = true);
//         autoCompleteComponent.pAutoComplete.selectItem(null);
//         expect(eventCalled).toBeTruthy();
//       }));

//       //onClear
//     it('onClear event should call', async(() => {
//         let eventCalled;
//         autoCompleteComponent.onClear.subscribe(() => eventCalled = true);
//         autoCompleteComponent.pAutoComplete.inputKeyDown = true;//prime catch only keydownevent
//         inputEl.dispatchEvent(new Event('input'));
//         expect(eventCalled).toBeTruthy();
//       }));
  
//     it('disabled input should disabled p-autocomplete', async(() => {
//         autoCompleteComponent.disabled = true;
//         fixture.detectChanges();
//         expect(inputEl.disabled).toBeTruthy();
//       }));
//   });
  