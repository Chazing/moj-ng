import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from "@moj/moj-ng"

@Component({
  selector: 'app-resize-demo',
  templateUrl: './resize-demo.component.html',
  styleUrls: ['./resize-demo.component.css']
})
export class ResizeDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public style: object = {};
    validate(event: ResizeEvent): boolean {
        const MIN_DIMENSIONS_PX_WIDTH: number = 100;
        if (event.rectangle.width && event.rectangle.width < MIN_DIMENSIONS_PX_WIDTH) {
            return false;
        }
        return true;
    }
    onResizing(event: ResizeEvent): void {
        this.style = {
            width: `${event.rectangle.width}px`,
        };
    }

}
