import { Injectable } from '@angular/core';
import { SiteConfigModel } from './site-config';
import { MojConfigService } from '@moj/moj-ng';

@Injectable()
export class SiteConfigService {
  public get configuration(): SiteConfigModel {
    return <SiteConfigModel><unknown>this.configService.configuration;
  }

  constructor(private configService: MojConfigService) {

  }
}
