import { Injectable } from "@angular/core";
import { CanActivate, CanDeactivate } from "@angular/router";
import { GridExampleComponent } from "../../grid-example/grid-example.component";


@Injectable()
export class GridExampleGuard implements CanDeactivate<GridExampleComponent> {


  constructor() {
  }
  canDeactivate(component: GridExampleComponent) {
    component.setGridState();
    return true;
  }
}