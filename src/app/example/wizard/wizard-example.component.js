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
var multiselect_example_component_1 = require("../multiselect/multiselect-example.component");
var form_example_component_1 = require("../form-example/form-example.component");
var general_enum_1 = require("../../moj-ng/elements/general/general.enum");
var file_upload_example_component_1 = require("../file-upload-example/file-upload-example.component");
var reactive_form_example_component_1 = require("../form-example/reactive-form-example/reactive-form-example.component");
var WizardExampleComponent = /** @class */ (function () {
    function WizardExampleComponent() {
        this.alighment = general_enum_1.Alignment;
    }
    WizardExampleComponent.prototype.ngOnInit = function () {
        this.items = [{
                label: 'בחירת פניה', component: file_upload_example_component_1.FileUploadExampleComponent,
            },
            {
                label: 'הוספת בקשה', component: multiselect_example_component_1.MultiSelectExampleComponent,
            },
            {
                label: 'אישור הבקשה', component: multiselect_example_component_1.MultiSelectExampleComponent,
            },
            {
                label: 'ביצוע התשלום', component: multiselect_example_component_1.MultiSelectExampleComponent,
            },
            {
                label: 'טופס', component: form_example_component_1.FormExampleComponent,
                componentData: { name: 'my form', id: 1 },
            },
            {
                label: 'Reactive', component: reactive_form_example_component_1.ReactiveFormExampleComponent,
                componentData: { name: 'my form', id: 1 },
            }];
    };
    WizardExampleComponent.prototype.submit = function (wizardItemModels) {
        alert("wizardItemModels: " + JSON.stringify(wizardItemModels));
    };
    WizardExampleComponent = __decorate([
        core_1.Component({
            selector: 'moj-wizard-example',
            templateUrl: './wizard-example.component.html',
            styleUrls: ['./wizard-example.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], WizardExampleComponent);
    return WizardExampleComponent;
}());
exports.WizardExampleComponent = WizardExampleComponent;
//# sourceMappingURL=wizard-example.component.js.map