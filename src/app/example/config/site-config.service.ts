import { Injectable } from '@angular/core';
import { MojConfigService } from '../../moj-ng/shared/moj-config.service';
import { SiteConfigModel } from './site-config';

@Injectable()
export class SiteConfigService {
  public get configuration(): SiteConfigModel {
    return <SiteConfigModel>this.configService.configuration;
  }

  constructor(private configService: MojConfigService) {

  }
}
