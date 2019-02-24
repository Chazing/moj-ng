import {
  Injectable,
  ComponentFactoryResolver,
  Inject,
  ViewContainerRef, 
  Renderer2,
  RendererFactory2
} from '@angular/core';
import { MojLoadingComponent } from './moj-loading.component';

/**
 * Usage example
 * ```typescript
 * export class FormExampleComponent {
 * ViewChild("pnl", { read: ViewContainerRef }) pnl: ViewContainerRef;
 *
 * constructor(private loadingService: MojLoadingService) { }
 * ngOnInit(): void {
 *      this.loadingService.show(this.pnl);
 *      someObservabel.subscribe(res=>{
 *        this.loadingService.hide();
 *      })
 *    }
 * }
 * ```
 * ```html
 * <div #pnl>
 * </div>
 * ```
 * <example-url>../screenshots/loading.JPG</example-url>
 */
@Injectable()
export class MojLoadingService {
  private loadingStack: any[] = [];
  private renderer: Renderer2;
  private factoryResolver: ComponentFactoryResolver;
  constructor(@Inject(ComponentFactoryResolver) factoryResolver, private rendererFactory: RendererFactory2) {
    this.factoryResolver = factoryResolver;
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   *
   * show overlay and spinner on element.
   */
  show(elementToOverlay: ViewContainerRef) {
    let divComponent = this.loadingStack.find(x => x.div == elementToOverlay);
    if (divComponent) {
      divComponent.component.show = true;
      this.loadingStack.slice(this.loadingStack.indexOf(divComponent));
      this.loadingStack.push(divComponent);
    } else {
      let loadingComponent = this.createLoadingComponent(elementToOverlay);
      this.addStylesToDiv(elementToOverlay);
      this.renderer.appendChild(
        elementToOverlay.element.nativeElement,
        loadingComponent.injector.get(MojLoadingComponent).elRef.nativeElement
      );
      this.loadingStack.push({
        div: elementToOverlay,
        component: loadingComponent.instance
      });
    }
  }

  //add styles for the element really be overlay
  private addStylesToDiv(elementToOverlay: ViewContainerRef) {
    var size = elementToOverlay.element.nativeElement.getBoundingClientRect();
    this.renderer.setStyle(elementToOverlay.element.nativeElement, 'position', 'relative');
    this.renderer.setStyle(elementToOverlay.element.nativeElement, 'width', size.width + 'px');
    this.renderer.setStyle(elementToOverlay.element.nativeElement, 'height', size.height + 'px');
    this.renderer.setStyle(elementToOverlay.element.nativeElement, 'display', 'block');
  }

  private createLoadingComponent(elemetToOverlay: ViewContainerRef) {
    const dialogFactory = this.factoryResolver.resolveComponentFactory(MojLoadingComponent);
    let loadingComponent = elemetToOverlay.createComponent(dialogFactory);
    loadingComponent.instance.show = true;
    return loadingComponent;
  }

  /**
   * hide the overlay from element, if elementToOverlay empty, hide the last that display
   */
  hide(elemetToOverlay?: ViewContainerRef) {
    var loadingToHide;
    if (elemetToOverlay) {
      if (this.loadingStack.find(x => x.div == elemetToOverlay)) {
        var loadingToHide = this.loadingStack.find(x => x.div == elemetToOverlay);
      }
    } else {
      loadingToHide = this.loadingStack.pop();
    }
    loadingToHide.component.show = false;
    loadingToHide.div.element.nativeElement.removeAttribute('style');
  }
}
