import { Input, OnInit, Component } from "@angular/core";
import { TestRequest } from "@angular/common/http/testing";
import { PermissionService } from "../../permissions/permission.service";


@Component({
    selector: "moj-fieldset",
    template: `<fieldset [disabled]="disabled"><ng-content></ng-content></fieldset>`
})

export class mojFieldsetComponent implements OnInit
{
   @Input() name:string;
   disabled:boolean;
   visible:boolean;
   constructor(private permissionService:PermissionService)
   {
   }

   ngOnInit()
   {
     let result=this.permissionService.getControllerPermission(this.name);
     if(!this.disabled)
       this.disabled=!result.enable;
     if(this.visible)
      this.visible=result.visible;  
   }
}