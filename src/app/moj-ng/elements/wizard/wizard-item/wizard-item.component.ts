import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WizardItem } from './wizard-item.model';
import { WizardItemComponentBase } from './wizard-item-component.base';
import { WizardService } from '../service/moj-wizard.service';

@Component({
    selector: 'moj-wizard-item',
    templateUrl: './wizard-item.component.html',
    styleUrls: ['./wizard-item.component.css']
})
export class WizardItemComponent implements OnInit {

    @Input() item: WizardItem;

    @ViewChild("dynamicContainer", { read: ViewContainerRef }) dynamicContentContainer: ViewContainerRef;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        private wizardService: WizardService) { }

    ngOnInit() {
        this.loadComponent();
    }

    private loadComponent() {
        if (this.wizardService.componentRef) {
            this.wizardService.componentRef.destroy();
        }

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.item.component);
        this.dynamicContentContainer.clear();
        let componentRef = this.dynamicContentContainer.createComponent(componentFactory);

        this.wizardService.componentRef = componentRef;
        this.wizardService.wizardComponent = componentRef.instance;
        this.wizardService.wizardComponent.data = this.item.componentData;
        this.wizardService.setModel();
    }
}
