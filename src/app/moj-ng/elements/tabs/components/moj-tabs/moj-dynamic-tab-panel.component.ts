import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, Type, ViewContainerRef, OnDestroy, ComponentRef } from '@angular/core';
import { MojTab } from '../../models/moj-tabs.models';

@Component({
    selector: "dynamic-tab-panel",
    template: `<div #dynamicContainer></div>`,
})
export class DynamicTabPanelComponent implements OnInit, OnDestroy {
    @Input() tabItem: MojTab;
    @ViewChild("dynamicContainer", { read: ViewContainerRef, static: true }) dynamicContentContainer: ViewContainerRef;
    componentRef: ComponentRef<Component>

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit(): void {
        this.loadComponent(this.tabItem, this.tabItem.component, this.tabItem.data, this.dynamicContentContainer);
    }

    private loadComponent(tab: MojTab, component: Type<any>, componentData: any, dynamicContainer: ViewContainerRef) {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
        dynamicContainer.clear();
        let componentRef = dynamicContainer.createComponent(componentFactory);
        this.componentRef = componentRef;
        componentRef.instance.data = componentData;
        if (tab) {
            tab.instance = componentRef.instance;
        }
    }

    ngOnDestroy(): void {
        this.componentRef.destroy();
    }

}