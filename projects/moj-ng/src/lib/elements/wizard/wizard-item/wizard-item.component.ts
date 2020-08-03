import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { WizardItem } from './wizard-item.model';
import { WizardService } from '../service/moj-wizard.service';

@Component({
    selector: 'moj-wizard-item',
    templateUrl: './wizard-item.component.html',
    styleUrls: ['./wizard-item.component.css']
})
export class WizardItemComponent implements OnInit {

    @Input() item: WizardItem;

    @ViewChild("dynamicContainer", { read: ViewContainerRef, static: true }) dynamicContentContainer: ViewContainerRef;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        private wizardService: WizardService) { }

    ngOnInit() {
        this.loadComponent();
    }

    private loadComponent() {
        //for read only state in first load- not all controls disabled
        setTimeout(() => {
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
        }, 0);
    }
}
