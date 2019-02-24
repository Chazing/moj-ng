import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WizardItem } from './wizard-item/wizard-item.model';
import { WizardService, WizardItemModel } from './service/moj-wizard.service';
import { Alignment } from '../general/general.enum';

interface MetroItem {
    wizardItem: WizardItem,
    index: number,
    subIndex: number,
    indexForMetro: number
}

@Component({
    selector: 'moj-wizard',
    templateUrl: './moj-wizard.component.html',
    styleUrls: ['./moj-wizard.component.css'],
    providers: [WizardService]
})
export class MojWizardComponent implements OnInit, OnDestroy {

    @Input() items: WizardItem[];
    @Input() readonly: boolean = false;
    @Input() activeIndex: number = 0;
    @Input() subActiveIndex: number = 0;
    @Input() nextText: string = "MojTexts.next";
    @Input() backText: string = "MojTexts.back";
    @Input() isWithMetro: boolean;
    @Input() enableNavigationByMetro: boolean = true;
    @Input() metroAlign: Alignment = Alignment.bottom;
    @Input() submitButton: boolean = true;
    @Input() submitText: string = "MojTexts.submit";

    @Output() 
    onSubmit = new EventEmitter<WizardItemModel[]>();

    metroItems: MetroItem[] = [];
    alighment = Alignment;
    isLastItem: boolean;

    constructor(private wizardService: WizardService, private translateService: TranslateService) { }

    ngOnInit() {
        if (this.isWithMetro) {
            this.initMetroList();
        }
    }

    itemChange(event: Event, index: number, subIndex: number = 0) {

        if (this.wizardService.getFormValid() === false) {
            return;
        }

        if (this.wizardService.beforeExit() == false) {
            return;
        }

        this.wizardService.saveModel();

        if (this.isLastItem && index > this.activeIndex) { //submit button clicked
            this.onSubmit.emit(this.wizardService.getWizardItemModels());
            return;
        }

        this.activeIndex = index;
        this.subActiveIndex = subIndex;

        this.wizardService.afterExit();

        this.calcIsLastItem();
    }

    prevClick(event: Event) {
        if (this.subActiveIndex > 0) {
            this.itemChange(event, this.activeIndex, this.subActiveIndex - 1);
        } else {
            let prevSubItem = 0;
            if (this.items[this.activeIndex - 1].wizardSubItems &&
                this.items[this.activeIndex - 1].wizardSubItems.length) {
                prevSubItem = this.items[this.activeIndex - 1].wizardSubItems.length - 1;
            }
            this.itemChange(event, this.activeIndex - 1, prevSubItem);
        }
    }

    nextClick(event: Event) {
        if (!this.items[this.activeIndex].wizardSubItems ||
            this.items[this.activeIndex].wizardSubItems.length == 0 ||
            this.items[this.activeIndex].wizardSubItems.length - 1 == this.subActiveIndex) {
            this.itemChange(event, this.activeIndex + 1);
        } else {
            this.itemChange(event, this.activeIndex, this.subActiveIndex + 1);
        }
    }

    calcIsLastItem() {
        if (this.activeIndex == this.items.length - 1 &&
            (!this.items[this.activeIndex].wizardSubItems ||
                this.items[this.activeIndex].wizardSubItems.length - 1 == this.subActiveIndex)) {
            this.isLastItem = true;
        }
        else {
            this.isLastItem = false;
        }
    }

    initMetroList() {
        for (let i = 0; i < this.items.length; ++i) {
            if (this.items[i].isForMetro) {
                this.metroItems.push({
                    wizardItem: this.items[i],
                    index: i,
                    subIndex: 0,
                    indexForMetro: this.items[i].indexForMetro
                });
            }
            if (this.items[i].wizardSubItems) {
                for (let j = 0; j < this.items[i].wizardSubItems.length; ++j) {
                    if (this.items[i].wizardSubItems[j].isForMetro) {
                        this.metroItems.push({
                            wizardItem: this.items[i].wizardSubItems[j],
                            index: i,
                            subIndex: j,
                            indexForMetro: this.items[i].wizardSubItems[j].indexForMetro
                        });
                    }
                }
            }

            this.metroItems.sort(function (a, b) {
                return a.indexForMetro - b.indexForMetro;
            });
        }
    }

    ngOnDestroy() {
        if (this.wizardService.componentRef) {
            this.wizardService.componentRef.destroy();
        }
    }
}
