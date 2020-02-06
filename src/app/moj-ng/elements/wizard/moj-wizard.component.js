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
var moj_container_component_1 = require("./../website/moj-container/moj-container.component");
var core_1 = require("@angular/core");
var core_2 = require("@ngx-translate/core");
var moj_wizard_service_1 = require("./service/moj-wizard.service");
var general_enum_1 = require("../general/general.enum");
var permission_service_1 = require("../../permissions/permission.service");
var button_style_1 = require("../buttons/button-style");
var MojWizardComponent = /** @class */ (function () {
    function MojWizardComponent(wizardService, translateService, permissionService) {
        this.wizardService = wizardService;
        this.translateService = translateService;
        this.permissionService = permissionService;
        this.readonly = false;
        this.activeIndex = 0;
        this.subActiveIndex = 0;
        this.nextText = "MojTexts.next";
        this.backText = "MojTexts.back";
        this.submitButton = true;
        this.submitText = "MojTexts.submit";
        this.checkValidationOnPrevious = true;
        this.canSkipStepsOnNavigation = false;
        this.title = "";
        this.customBackButtonText = "";
        this.customBackButtonClicked = new core_1.EventEmitter();
        this.onSubmit = new core_1.EventEmitter();
        this.onMoved = new core_1.EventEmitter();
        this.containerType = moj_container_component_1.ContainerType;
        this.metroItems = [];
        this.alignment = general_enum_1.Alignment;
        this.buttonStyle = button_style_1.ButtonStyle;
        this.isFirstItem = true;
        this.notVisibleTabs = [];
    }
    MojWizardComponent.prototype.ngOnInit = function () {
        this.items = this.setItemsPermission(this.items);
    };
    Object.defineProperty(MojWizardComponent.prototype, "activeComponent", {
        get: function () {
            return this.wizardService.wizardComponent;
        },
        enumerable: true,
        configurable: true
    });
    MojWizardComponent.prototype.setItemsPermission = function (items) {
        var _this = this;
        items.forEach(function (element, i) {
            var permissionResult = _this.permissionService.getControllerPermission(element.name);
            if (!_this.items[i].readonly)
                _this.items[i].readonly = !permissionResult.enable;
            if (!permissionResult.enable) {
                _this.notVisibleTabs.push(i);
            }
            if (element.wizardSubItems && element.wizardSubItems.length) {
                _this.items[i].wizardSubItems = _this.setItemsPermission(items);
            }
        });
        return items.filter(function (element, index, array) { return _this.notVisibleTabs.indexOf(index) < 0; });
    };
    MojWizardComponent.prototype.itemChange = function (event, index, subIndex) {
        var _this = this;
        if (subIndex === void 0) { subIndex = 0; }
        if (!this.canNavigateToStep(index))
            return;
        var isPrevNavigation = this.isPrevClick(index, subIndex);
        if (!isPrevNavigation || this.checkValidationOnPrevious) {
            if (this.wizardService.getFormValid() === false) {
                return;
            }
            this.items[this.activeIndex].valid = true;
        }
        if (this.wizardService.beforeExit() == false) {
            return;
        }
        this.wizardService.saveModel();
        if (this.isLastItem && index > this.activeIndex) { //submit button clicked
            this.onSubmit.emit(this.wizardService.getWizardItemModels());
            return;
        }
        var onMovedParams = {
            prevIndex: this.activeIndex, prevSubIndex: this.subActiveIndex, currentIndex: index, currentSubIndex: subIndex
        };
        if (this.beforeMove)
            this.beforeMove(onMovedParams).subscribe(function (isCanMove) {
                if (isCanMove)
                    _this.move(index, subIndex, onMovedParams);
            });
        else {
            this.move(index, subIndex, onMovedParams);
        }
    };
    MojWizardComponent.prototype.move = function (index, subIndex, onMovedParams) {
        this.activeIndex = index;
        this.subActiveIndex = subIndex;
        this.onMoved.emit(onMovedParams);
        this.wizardService.afterExit();
        this.calcFirsLastItem();
    };
    MojWizardComponent.prototype.canNavigateToStep = function (index) {
        if (this.isPrevClick(index))
            return true;
        return this.activeIndex + 1 == index || this.canSkipStepsOnNavigation || !this.items[index - 1] || this.items[index - 1].valid;
    };
    MojWizardComponent.prototype.isPrevClick = function (index, subIndex) {
        return index < this.activeIndex || (index === this.activeIndex && subIndex < this.subActiveIndex);
    };
    MojWizardComponent.prototype.prevClick = function (event) {
        if (this.subActiveIndex > 0) {
            this.itemChange(event, this.activeIndex, this.subActiveIndex - 1 && this.getEnabledSubIndex(this.activeIndex));
        }
        else {
            if (this.items[this.activeIndex - 1] && !this.items[this.activeIndex - 1].readonly) {
                var prevSubItem = 0;
                if (this.items[this.activeIndex - 1].wizardSubItems &&
                    this.items[this.activeIndex - 1].wizardSubItems.length) {
                    //prevSubItem = this.items[this.activeIndex - 1].wizardSubItems.length - 1;
                    prevSubItem = this.getEnabledSubIndex(this.activeIndex - 1);
                }
                this.itemChange(event, this.activeIndex - 1, prevSubItem);
            }
        }
    };
    MojWizardComponent.prototype.customBackButtonClick = function (event) {
        this.customBackButtonClicked.emit(event);
    };
    MojWizardComponent.prototype.getEnabledSubIndex = function (index) {
        var subindex = this.items[index].wizardSubItems.length - 1;
        while (this.items[index].wizardSubItems[subindex].readonly && subindex > 0) {
            subindex--;
        }
        return subindex;
    };
    MojWizardComponent.prototype.nextClick = function (event) {
        if (!this.items[this.activeIndex].wizardSubItems ||
            this.items[this.activeIndex].wizardSubItems.length == 0 ||
            this.items[this.activeIndex].wizardSubItems.length - 1 == this.subActiveIndex && !this.items[this.activeIndex].readonly) {
            this.itemChange(event, this.activeIndex + 1);
        }
        else {
            if (!this.items[this.activeIndex].wizardSubItems[this.subActiveIndex + 1].readonly)
                this.itemChange(event, this.activeIndex, this.subActiveIndex + 1);
        }
    };
    MojWizardComponent.prototype.calcFirsLastItem = function () {
        if (this.activeIndex == this.items.length - 1 &&
            (!this.items[this.activeIndex].wizardSubItems ||
                this.items[this.activeIndex].wizardSubItems.length - 1 == this.subActiveIndex)) {
            this.isLastItem = true;
        }
        else {
            this.isLastItem = false;
        }
        this.isFirstItem = this.activeIndex == 0;
    };
    MojWizardComponent.prototype.ngOnDestroy = function () {
        if (this.wizardService.componentRef) {
            this.wizardService.componentRef.destroy();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], MojWizardComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojWizardComponent.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MojWizardComponent.prototype, "activeIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], MojWizardComponent.prototype, "subActiveIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojWizardComponent.prototype, "nextText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojWizardComponent.prototype, "backText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojWizardComponent.prototype, "submitButton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojWizardComponent.prototype, "submitText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojWizardComponent.prototype, "checkValidationOnPrevious", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], MojWizardComponent.prototype, "canSkipStepsOnNavigation", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojWizardComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MojWizardComponent.prototype, "customBackButtonText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], MojWizardComponent.prototype, "beforeMove", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], MojWizardComponent.prototype, "customBackButtonClicked", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MojWizardComponent.prototype, "onSubmit", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MojWizardComponent.prototype, "onMoved", void 0);
    MojWizardComponent = __decorate([
        core_1.Component({
            selector: 'moj-wizard',
            templateUrl: './moj-wizard.component.html',
            styleUrls: ['./moj-wizard.component.scss'],
            providers: [moj_wizard_service_1.WizardService]
        }),
        __metadata("design:paramtypes", [moj_wizard_service_1.WizardService, core_2.TranslateService, permission_service_1.PermissionService])
    ], MojWizardComponent);
    return MojWizardComponent;
}());
exports.MojWizardComponent = MojWizardComponent;
//# sourceMappingURL=moj-wizard.component.js.map