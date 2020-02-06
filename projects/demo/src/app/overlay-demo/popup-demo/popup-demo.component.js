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
var enums_1 = require("../../enums");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var moj_ng_1 = require("src/app/moj-ng");
var dialog_demo_component_1 = require("../dialog-demo/dialog-demo.component");
var PopupDemoComponent = /** @class */ (function () {
    function PopupDemoComponent(router, messagesService, dialogService, resolver) {
        this.router = router;
        this.messagesService = messagesService;
        this.dialogService = dialogService;
        this.resolver = resolver;
        this.Enums = enums_1.ENUMS;
        this.autocompleteValueFrom = [{ id: 1, name: '1' }, { id: 2, name: '2' }, { id: 3, name: '3' }];
    }
    PopupDemoComponent.prototype.navigate = function (url) {
        this.router.navigate([url]);
    };
    PopupDemoComponent.prototype.openAttentionDialog = function () {
        this.messagesService.showMessage("הודעה לדוגמה", null, null, moj_ng_1.MessageType.Attention);
    };
    PopupDemoComponent.prototype.openErrorDialog = function () {
        this.messagesService.showMessage("הודעת שגיאה", null, null, moj_ng_1.MessageType.Error);
    };
    PopupDemoComponent.prototype.openAlertDialog = function () {
        this.messagesService.showMessage("הודעה", null, null, moj_ng_1.MessageType.Alert);
    };
    PopupDemoComponent.prototype.openConfirmDialog = function (closable) {
        this.messagesService
            .confirm(null, undefined, '<b>החיפוש נכשל ולכן לא נמצאו תוצאות.</b><br/><label>כדאי לחזור ולבצע חיפוש חדש וממוקד יותר</label>', null, 'כן', 'לא', null, closable)
            .subscribe(function (result) {
            if (result.dialogResultType === moj_ng_1.DialogResultEnum.OK)
                alert('OK');
            else
                alert('Cancel');
        });
    };
    PopupDemoComponent.prototype.openSuccessDialog = function () {
        this.messagesService.showMessage('האימות הסתיים בהצלחה, אתה מועבר לאתר', null, null, moj_ng_1.MessageType.Message, undefined, 'לאישור והעברה לאתר');
    };
    PopupDemoComponent.prototype.openContentDialog = function () {
        this.autocompleteValueFrom = [{ id: 1, name: '1' }];
        this.dialogService.openDialog("תיבת תוכן ", dialog_demo_component_1.DialogDemoComponent, 400, 300, { firstName: 'aa', lastName: 'bb' });
        this.dialogService.dialogResult.subscribe(function (res) {
            alert(JSON.stringify(res));
        });
    };
    PopupDemoComponent.prototype.openNoScrollDialog = function () {
        this.dialogService.openDialog("תיבת תוכן ", dialog_demo_component_1.DialogDemoComponent, 400, 300, { firstName: 'aa', lastName: 'bb' }, true, true);
    };
    PopupDemoComponent.prototype.openScrollDialog = function () {
        this.dialogService.openDialog("תיבת תוכן ", dialog_demo_component_1.DialogDemoComponent, 400, 100, { firstName: 'aa', lastName: 'bb' }, true, false);
    };
    PopupDemoComponent.prototype.openNoFooterDialog = function () {
        this.dialogService.openDialog("תיבת תוכן ", dialog_demo_component_1.DialogDemoComponent, 400, 400, { firstName: 'aa', lastName: 'bb' }, false, false);
    };
    PopupDemoComponent = __decorate([
        core_1.Component({
            selector: 'popup-demo',
            templateUrl: 'popup-demo.component.html',
        }),
        __metadata("design:paramtypes", [router_1.Router, moj_ng_1.MojMessagesService, moj_ng_1.MojDialogService, core_1.ComponentFactoryResolver])
    ], PopupDemoComponent);
    return PopupDemoComponent;
}());
exports.PopupDemoComponent = PopupDemoComponent;
var ListItem = /** @class */ (function () {
    function ListItem() {
    }
    return ListItem;
}());
exports.ListItem = ListItem;
//# sourceMappingURL=popup-demo.component.js.map