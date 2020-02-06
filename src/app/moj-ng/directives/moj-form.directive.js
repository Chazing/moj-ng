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
var moj_grid_panel_component_1 = require("../elements/grid/moj-grid-panel.component");
var moj_buttons_line_component_1 = require("../elements/general/moj-buttons-line.component");
var moj_form_service_1 = require("./moj-form.service");
var permission_service_1 = require("../permissions/permission.service");
var MojFormDirective = /** @class */ (function () {
    function MojFormDirective(el, permissionService) {
        this.el = el;
        this.permissionService = permissionService;
        this.alive = true;
    }
    MojFormDirective.prototype.ngAfterViewInit = function () {
        var firstInputElement = this.el.nativeElement.querySelector('.ui-inputtext, .ui-dropdown, .ui-multiselect, button, a');
        if (firstInputElement) {
            this.setFocus(firstInputElement);
        }
    };
    MojFormDirective.prototype.ngAfterContentInit = function () {
        this.setPermissions();
    };
    MojFormDirective.prototype.appendChild = function (node) {
        for (var i = 0; i < node.childNodes.length; i++) {
            this.formWrapper.appendChild(node.childNodes[i]);
            if (node.childNodes[i] == undefined) {
            }
            if (node.childNodes[i] && node.childNodes[i].childNodes.length) {
                this.appendChild(node.childNodes[i]);
            }
        }
        this.formWrapper.setAttribute("style", true);
    };
    MojFormDirective.prototype.setPermissions = function () {
        var identifier = this.getIdentifier();
        if (identifier) {
            var result = this.permissionService.getControllerPermission(identifier);
            if (result && (!result.enable || !result.visible)) {
                this.wrappFormContent();
                if (!result.enable)
                    this.formWrapper.setAttribute("disabled", true);
                if (!result.visible)
                    this.formWrapper.style.display = "none";
            }
        }
    };
    MojFormDirective.prototype.wrappFormContent = function () {
        this.formWrapper = document.createElement('fieldset'); //create a div
        var ref = document.querySelector('form');
        this.appendChild(ref);
        ref.parentNode.replaceChild(this.formWrapper, ref);
    };
    MojFormDirective.prototype.getIdentifier = function () {
        if (this.el.nativeElement.getAttribute("FormGroupName")) {
            return this.el.nativeElement.getAttribute("FormGroupName");
        }
        else {
            return this.el.nativeElement.getAttribute("name");
        }
    };
    MojFormDirective.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    MojFormDirective.prototype.onFormSubmit = function () {
        var invalidElement = this.el.nativeElement.querySelector('.moj-invalid .ui-inputtext, .moj-invalid .ui-dropdown, .moj-invalid .ui-multiselect');
        if (invalidElement) {
            this.setFocus(invalidElement);
        }
    };
    MojFormDirective.prototype.setFocus = function (element) {
        if (element) {
            if (element.nodeName == 'DIV') { //div can get focus only with tabindex
                element.setAttribute("tabindex", 0);
            }
            element.focus();
        }
    };
    __decorate([
        core_1.ContentChildren(moj_grid_panel_component_1.MojGridPanelComponent, { descendants: true }),
        __metadata("design:type", core_1.QueryList)
    ], MojFormDirective.prototype, "gridPanels", void 0);
    __decorate([
        core_1.ContentChildren(moj_buttons_line_component_1.MojButtonsLineComponent, { descendants: true, }),
        __metadata("design:type", core_1.QueryList)
    ], MojFormDirective.prototype, "buttonsLine", void 0);
    __decorate([
        core_1.HostListener('submit'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MojFormDirective.prototype, "onFormSubmit", null);
    MojFormDirective = __decorate([
        core_1.Directive({
            selector: '[mojForm]',
            providers: [moj_form_service_1.MojFormService]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, permission_service_1.PermissionService])
    ], MojFormDirective);
    return MojFormDirective;
}());
exports.MojFormDirective = MojFormDirective;
//# sourceMappingURL=moj-form.directive.js.map