import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'moj-website-support-container',
  templateUrl: 'moj-website-support-container.component.html',
  styleUrls: ['moj-website-support-container.component.scss'],
  
  
  encapsulation: ViewEncapsulation.None
})

export class MojWebsiteSupportContainerComponent {
  @Input() phone: string;
  @Input() email: string;
  @Input() emailSubject: string;
  @Input() supportHeadline: string;
  @Input() supportText: string;
}
