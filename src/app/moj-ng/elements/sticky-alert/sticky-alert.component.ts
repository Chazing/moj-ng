import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MojConfigService } from '../../shared/moj-config.service';


@Component({
  selector: 'sticky-alert',
  templateUrl: './sticky-alert.component.html',
  styleUrls: ['./sticky-alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StickyAlertComponent {
  @Input() showAlert: boolean;
  @Input() message: string;

  constructor(private _configService: MojConfigService) {
    this.showAlert = _configService.configuration.isGlassboxOn;
  }

  hideAlert() {
    this.showAlert = false;
  }
}
