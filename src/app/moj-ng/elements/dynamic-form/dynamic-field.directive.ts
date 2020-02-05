import { Directive, OnInit, Input, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MojDynamicComponent } from "./dynamic-components";
import { MojDynamicField } from "./dynamic-fields";

@Directive({
    selector:'[mojDynamicField]'
})
export class MojDynamicFieldDirective implements OnInit {  
    @Input() field: MojDynamicField;
    @Input() group: FormGroup;

    component:ComponentRef<MojDynamicComponent>;
  
    constructor(
      private resolver: ComponentFactoryResolver,
      private container: ViewContainerRef
    ) {}

    ngOnInit() {
        const factory = this.resolver.resolveComponentFactory<any>(this.field.type);
        this.component = this.container.createComponent(factory);
        this.component.instance.field = this.field;
        this.component.instance.name = this.field.name; //formControlName
        this.component.instance.group = this.group;
    }
}