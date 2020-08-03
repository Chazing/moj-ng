import { PermissionService } from "../../permissions/permission.service";
import { ElementRef, Input, OnInit } from "@angular/core";

import { identity } from "rxjs";
import { ButtonStyle } from "../buttons/button-style";



export abstract class ButtonBase implements OnInit {
  @Input() textKey: string;
  @Input() isEnable: boolean = true;
  @Input() buttonStyle: ButtonStyle
  @Input() visible: boolean;
  identifier: string;
  constructor(private permissionService: PermissionService, protected el: ElementRef) {

  }

  ngOnInit() {
    this.setIdentifier();
    this.setPermissions();
  }

  setPermissions() {
    var result = this.permissionService.getControllerPermission(this.identifier)

    if (this.isEnable != undefined && this.isEnable || this.isEnable == undefined) {
      this.isEnable = result.enable;
    }
    if (this.visible != undefined && this.visible || this.visible == undefined) {
      this.visible = result.visible;
    }
  }

  setIdentifier() {

    if (this.el.nativeElement.getAttribute("formControlName")) {
      this.identifier = this.el.nativeElement.getAttribute("formControlName");
    }
    else {
      this.identifier = this.el.nativeElement.getAttribute("name");
    }
  }

}