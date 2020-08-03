import { take } from 'rxjs/operators';
import { SnackbarData, SnackbarResult } from './messages.model';
import {
    ComponentFactoryResolver, Injectable, Inject, ViewContainerRef, ComponentRef, Type, Injector, ApplicationRef, EmbeddedViewRef
} from '@angular/core'
import { DialogResult } from "./dialog-result";
import { DialogWrapperComponent } from './dialog-wrapper.component';
import { ReplaySubject, Observable } from 'rxjs';
import { MojSnackbarComponent } from '../elements/moj-snackbar/moj-snackbar.component';



@Injectable()
export class MojDialogService {
    // private rootViewContainer: ViewContainerRef;
    private factoryResolver: ComponentFactoryResolver;
    private componentsStack: any[] = [];
    public dialogResult = new ReplaySubject();
    private _appRef;
    private snackbarComponentRef: ComponentRef<MojSnackbarComponent>;
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


    openDialog<T>(title: string, componentType: Type<T>, width: number = 500, height?: number, componentInputData?: any, isAddFooter: boolean = true, preventScroll?: boolean, resolver?: ComponentFactoryResolver, customClass?: string, closable?: boolean) {

        var currentResolver = resolver || this.factoryResolver;
        const dialogfactory = currentResolver
            .resolveComponentFactory(DialogWrapperComponent);
        let wrapperDialogComponent = dialogfactory.create(this.injector) as ComponentRef<DialogWrapperComponent>;
        (<any>wrapperDialogComponent.instance).title = title;
        (<any>wrapperDialogComponent.instance).width = width ? width : 500;
        (<any>wrapperDialogComponent.instance).height = height;
        (<any>wrapperDialogComponent.instance).isAddFooter = isAddFooter;
        (<any>wrapperDialogComponent.instance).styleClass = customClass;
        (<any>wrapperDialogComponent.instance).preventScroll = preventScroll;
        (<any>wrapperDialogComponent.instance).closable = closable;
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

    showSnackbar(snackbarData: SnackbarData): Observable<SnackbarResult> {
        if (!this.snackbarComponentRef) {
            const componentFactory = this.factoryResolver.resolveComponentFactory(MojSnackbarComponent);
            this.snackbarComponentRef = componentFactory.create(this.injector) as ComponentRef<MojSnackbarComponent>;
            this.appRef.attachView(this.snackbarComponentRef.hostView);
            const domElem = (this.snackbarComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
            document.body.appendChild(domElem);
        }
        else {
            this.snackbarComponentRef.instance.show = true;
        }

        //set defaults
        snackbarData.iconClass = snackbarData.iconClass || "default";
        snackbarData.durationSeconds = snackbarData.durationSeconds || 10;
        snackbarData.hideCloseButton = snackbarData.hideCloseButton;
        //set inputs and detectChanges
        this.snackbarComponentRef.instance.snackbarData = snackbarData;
        this.snackbarComponentRef.instance.cdr.detectChanges();

        return Observable.create(observer => { 
            this.snackbarComponentRef.instance.close.pipe(take(1)).subscribe(res => {
                observer.next(res);
                observer.complete();
            })
        });
    }

    private result(result: DialogResult) {
        var prevDialogResult = this.dialogResult;
        this.dialogResult = new ReplaySubject();
        prevDialogResult.next(result);
        prevDialogResult.complete();
    }
}
