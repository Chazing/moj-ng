import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ResizeEvent } from '../../../directives/moj-resizable/interfaces/resize-event.interface';

/**
 ```html
<moj-slide-preview-doc [src]="'yourPathToFile.pdf'"></moj-slide-preview-doc>
```
 * 
 */
@Component({
  selector: 'moj-slide-preview-doc',
  templateUrl: './moj-slide-preview-doc.component.html',
  styleUrls: ['./moj-slide-preview-doc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MojSlidePreviewDocComponent {
  @Input()
  isOpen: boolean = false;

  onResize: boolean = false;

  @Input()
  src: string = "";

  public style: object = {};

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX_HEIGHT: number = 100;
    const MIN_DIMENSIONS_PX_WIDTH: number = 10;
    if (event.rectangle.width && event.rectangle.height && (event.rectangle.width < MIN_DIMENSIONS_PX_WIDTH || event.rectangle.height < MIN_DIMENSIONS_PX_HEIGHT)) {
      return false;
    }
    return true;
  }

  onResizing(event: ResizeEvent): void {
    this.onResize = true;
    this.style = {
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }

  onResizeEnd(): void {
    this.onResize = false;
  }

  constructor() { 
  }

}
