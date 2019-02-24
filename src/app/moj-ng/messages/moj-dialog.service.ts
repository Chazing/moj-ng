import {
    ComponentFactoryResolver, Injectable, Inject, ViewContainerRef, ComponentRef, Type, Injector, ApplicationRef, EmbeddedViewRef
} from '@angular/core'
import { DialogResult } from "./dialog-result";
import { DialogWrapperComponent } from './dialog-wrapper.component';
import { ReplaySubject } from 'rxjs';



@Injectable()
export class MojDialogService {
    // private rootViewContainer: ViewContainerRef;
    private factoryResolver: ComponentFactoryResolver;
    private componentsStack: any[] = [];
    public dialogResult = new ReplaySubject();
    private _appRef;
    get appRef(): ApplicationRef {
        if (this._appRef)
            return this._appRef;
        else {
            this._appRef = this.injector.get(ApplicationRef);
            return this._appRef;
        }
    }


    constructor(@Inject(ComponentFactoryResolver) factoryResolver, private injector: Injector) {
        this.factoryResolver = factoryResolver
    }

    /**
    * @ignore
    */
    setRootViewContainerRef(viewContainerRef) {
    }


    openDialog<T>(title: string, componentType: Type<T>, width: number = 300, height?: number, componentInputData?: any, isAddFooter: boolean = true, preventScroll?: boolean, resolver?: ComponentFactoryResolver, customClass?: string) {
        var currentResolver = resolver || this.factoryResolver;
        const dialogfactory = currentResolver
            .resolveComponentFactory(DialogWrapperComponent);
        let wrapperDialogComponent = dialogfactory.create(this.injector) as ComponentRef<DialogWrapperComponent>;
        (<any>wrapperDialogComponent.instance).title = title;
        (<any>wrapperDialogComponent.instance).width = width;
        (<any>wrapperDialogComponent.instance).height = height;
        (<any>wrapperDialogComponent.instance).isAddFooter = isAddFooter;
        (<any>wrapperDialogComponent.instance).styleClass = customClass;
        (<any>wrapperDialogComponent.instance).preventScroll = preventScroll;
        wrapperDialogComponent.instance.close.subscribe((res) => {
            this.closeDialog(res);
        })
        this.appRef.attachView(wrapperDialogComponent.hostView);
        const domElem = (wrapperDialogComponent.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;
        document.body.appendChild(domElem);

        this.componentsStack.push(wrapperDialogComponent);

        const factory = currentResolver.resolveComponentFactory(componentType);
        let currentComponent = factory.create(wrapperDialogComponent.instance.dialogContentVcr.parentInjector);
        if (componentInputData != undefined && componentInputData != null) {
            (<any>currentComponent.instance).data = componentInputData;
        }
        if ((<any>currentComponent.instance).closeDialog != undefined) {
            (<any>currentComponent.instance).closeDialog.subscribe((res) => {
                this.closeDialog(res);
            })
        }
        wrapperDialogComponent.instance.dialogContentVcr.insert(currentComponent.hostView);
        this.appRef.tick();
    }

    closeDialog(result: DialogResult) {
        var component = this.componentsStack.pop();
        //this line is for bug 288808 fix (dialog not disapear on close)
        component.instance.viewContainerRef
            .element
            .nativeElement
            .parentElement
            .removeChild(component.instance.viewContainerRef.element.nativeElement);
        component.destroy();
        this.result(result);
    }

    private result(result: DialogResult) {
        this.dialogResult.next(result);
        this.dialogResult.complete();
        this.dialogResult = new ReplaySubject();
    }
}
