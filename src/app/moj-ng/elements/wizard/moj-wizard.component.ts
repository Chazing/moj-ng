import { Observable } from 'rxjs';
import { ContainerType } from './../website/moj-container/moj-container.component';
import { Component, OnInit, Input, OnDestroy, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WizardItem } from './wizard-item/wizard-item.model';
import { WizardService, WizardItemModel } from './service/moj-wizard.service';
import { Alignment } from '../general/general.enum';
import { PermissionService } from '../../permissions/permission.service';
import { ButtonStyle } from '../buttons/button-style';
import { WizardItemComponentBase } from './wizard-item/wizard-item-component.base';

interface MetroItem {
    wizardItem: WizardItem,
    index: number,
    subIndex: number,
    indexForMetro: number
}

@Component({
    selector: 'moj-wizard',
    templateUrl: './moj-wizard.component.html',
    styleUrls: ['./moj-wizard.component.scss'],
    providers: [WizardService]
})
export class MojWizardComponent implements OnInit, OnDestroy {
    @Input() items: WizardItem[];
    @Input() readonly: boolean = false;
    @Input() activeIndex: number = 0;
    @Input() subActiveIndex: number = 0;
    @Input() nextText: string = "MojTexts.next";
    @Input() backText: string = "MojTexts.back";
    @Input() submitButton: boolean = true;
    @Input() submitText: string = "MojTexts.submit";
    @Input() checkValidationOnPrevious: boolean = true;
    @Input() canSkipStepsOnNavigation: boolean = false;
    @Input() title: string = "";
    @Input() customBackButtonText: string = "";
    @Input() beforeMove: (OnMovedEventParams) => Observable<boolean>;

    @Output() customBackButtonClicked: EventEmitter<any> = new EventEmitter();
    @Output() onSubmit = new EventEmitter<WizardItemModel[]>();
    @Output() onMoved = new EventEmitter<OnMovedEventParams>();

    @ViewChild("steps", { static: true, read: ElementRef }) stepsEl: ElementRef<any>;

    containerType = ContainerType;
    metroItems: MetroItem[] = [];
    alignment = Alignment;
    buttonStyle = ButtonStyle;
    isLastItem: boolean;
    isFirstItem: boolean = true;
    notVisibleTabs: number[] = [];

    constructor(private wizardService: WizardService, private translateService: TranslateService, private permissionService: PermissionService) { }

    ngOnInit() {
        this.items = this.setItemsPermission(this.items)
        window.addEventListener("scroll", this.scrollWizradSteps);
    }
    
    scrollWizradSteps = () => {
        console.log(window.scrollY);
        if (window.scrollY > 200 && this.stepsEl) {
            this.stepsEl.nativeElement.style.top = window.scrollY - 150 + "px";
        }
        else {
            this.stepsEl.nativeElement.style.top = "0px";
        }
    }

    get activeComponent(): WizardItemComponentBase {
        return this.wizardService.wizardComponent;
    }

    setItemsPermission(items) {
        items.forEach((element, i) => {
            let permissionResult = this.permissionService.getControllerPermission(element.name);
            if (!this.items[i].readonly)
                this.items[i].readonly = !permissionResult.enable;
            if (!permissionResult.enable) {
                this.notVisibleTabs.push(i);
            }
            if (element.wizardSubItems && element.wizardSubItems.length) {
                this.items[i].wizardSubItems = this.setItemsPermission(items);
            }
        });
        return items.filter((element, index, array) => { return this.notVisibleTabs.indexOf(index) < 0 });
    }

    itemChange(event: Event, index: number, subIndex: number = 0) {
        if (!this.canNavigateToStep(index))
            return;
        let isPrevNavigation = this.isPrevClick(index, subIndex);
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
        let onMovedParams: OnMovedEventParams = {
            prevIndex: this.activeIndex, prevSubIndex: this.subActiveIndex, currentIndex: index, currentSubIndex: subIndex
        };

        if (this.beforeMove)
            this.beforeMove(onMovedParams).subscribe(isCanMove => {
                if (isCanMove)
                    this.move(index, subIndex, onMovedParams);
            })
        else {
            this.move(index, subIndex, onMovedParams);
        }
    }

    private move(index: number, subIndex: number, onMovedParams: OnMovedEventParams) {
        this.activeIndex = index;
        this.subActiveIndex = subIndex;
        this.onMoved.emit(onMovedParams);
        this.wizardService.afterExit();
        this.calcFirsLastItem();
    }

    canNavigateToStep(index: number): boolean {
        if (this.isPrevClick(index))
            return true;
        return this.activeIndex + 1 == index || this.canSkipStepsOnNavigation || !this.items[index - 1] || this.items[index - 1].valid;
    }

    isPrevClick(index: number, subIndex?: number) {
        return index < this.activeIndex || (index === this.activeIndex && subIndex < this.subActiveIndex);
    }

    prevClick(event: Event) {
        if (this.subActiveIndex > 0) {
            this.itemChange(event, this.activeIndex, this.subActiveIndex - 1 && this.getEnabledSubIndex(this.activeIndex));
        } else {
            if (this.items[this.activeIndex - 1] && !this.items[this.activeIndex - 1].readonly) {
                let prevSubItem = 0;
                if (this.items[this.activeIndex - 1].wizardSubItems &&
                    this.items[this.activeIndex - 1].wizardSubItems.length) {
                    //prevSubItem = this.items[this.activeIndex - 1].wizardSubItems.length - 1;
                    prevSubItem = this.getEnabledSubIndex(this.activeIndex - 1);
                }
                this.itemChange(event, this.activeIndex - 1, prevSubItem);
            }
        }
    }

    customBackButtonClick(event) {
        this.customBackButtonClicked.emit(event);
    }

    getEnabledSubIndex(index) {
        let subindex = this.items[index].wizardSubItems.length - 1;
        while (this.items[index].wizardSubItems[subindex].readonly && subindex > 0) {
            subindex--
        }
        return subindex;
    }
    nextClick(event: Event) {
        if (!this.items[this.activeIndex].wizardSubItems ||
            this.items[this.activeIndex].wizardSubItems.length == 0 ||
            this.items[this.activeIndex].wizardSubItems.length - 1 == this.subActiveIndex && !this.items[this.activeIndex].readonly) {
            this.itemChange(event, this.activeIndex + 1);
        } else {
            if (!this.items[this.activeIndex].wizardSubItems[this.subActiveIndex + 1].readonly)
                this.itemChange(event, this.activeIndex, this.subActiveIndex + 1);
        }
    }

    calcFirsLastItem() {
        if (this.activeIndex == this.items.length - 1 &&
            (!this.items[this.activeIndex].wizardSubItems ||
                this.items[this.activeIndex].wizardSubItems.length - 1 == this.subActiveIndex)) {
            this.isLastItem = true;
        }
        else {
            this.isLastItem = false;
        }
        this.isFirstItem = this.activeIndex == 0;
    }

    ngOnDestroy() {
        if (this.wizardService.componentRef) {
            this.wizardService.componentRef.destroy();
        }
    }
}

export interface OnMovedEventParams {
    prevIndex: number
    prevSubIndex?: number
    currentIndex: number
    currentSubIndex?: number
}