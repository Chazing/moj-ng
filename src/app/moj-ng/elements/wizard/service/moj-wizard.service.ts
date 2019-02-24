import { Injectable } from '@angular/core'
import { WizardItemComponentBase } from '../wizard-item/wizard-item-component.base';
import * as _ from "lodash";

export interface WizardItemModel {
    name: string;
    model: any;
}

@Injectable()
export class WizardService {
    wizardComponent: WizardItemComponentBase;
    componentRef;//save ref for destroy
    wizardItemModels: WizardItemModel[] = [];


    getFormValid(): boolean {
        if (this.wizardComponent &&
            this.wizardComponent.ngForm &&
            !this.wizardComponent.ngForm.form.valid) {
            return false
        }
    }

    beforeExit(): boolean {
        if (this.wizardComponent &&
            this.wizardComponent.methodBeforeExit) {
            return this.wizardComponent.methodBeforeExit();
        }
    }

    afterExit(): void {
        if (this.wizardComponent &&
            this.wizardComponent.methodAfterExit) {
            this.wizardComponent.methodAfterExit();
        }
    }

    saveModel(): void {
        if (this.wizardComponent &&
            this.wizardComponent.wizardItemModel &&
            this.wizardComponent[this.wizardComponent.wizardItemModel]) {
            let index = this.findModelIndex(this.wizardComponent.wizardItemModel)
            if (index > -1) {
                this.wizardItemModels[index].model = this.wizardComponent[this.wizardComponent.wizardItemModel];
            }
            else {
                this.wizardItemModels.push({
                    name: this.wizardComponent.wizardItemModel,
                    model: this.wizardComponent[this.wizardComponent.wizardItemModel]
                });
            }
        }
    }

    setModel(): void {
        if (this.wizardComponent && this.wizardComponent.wizardItemModel) {
            let index = this.findModelIndex(this.wizardComponent.wizardItemModel)
            if (index > -1) {
                this.wizardComponent[this.wizardComponent.wizardItemModel] = _.cloneDeep(this.wizardItemModels[index].model);
            }
        }
    }

    getWizardItemModel(name: string): any {
        let index = this.findModelIndex(name)
        if (index > -1) {
            return this.wizardItemModels[index].model;
        }
    }

    getWizardItemModels(): WizardItemModel[] {
        return this.wizardItemModels;
    }
    
    findModelIndex(name: string): number {
        let index = this.wizardItemModels.map(function (wizardItemModel) { return wizardItemModel.name; })
            .indexOf(name);
        return index;
    }
}