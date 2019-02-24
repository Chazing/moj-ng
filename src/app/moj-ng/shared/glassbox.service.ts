import { Injectable } from '@angular/core';
import { MojConfigService } from './moj-config.service';
// import * as detector from '../../assets/scripts/detector-dom.min.js'
declare var runDetector: any;

@Injectable({
  providedIn: 'root'
})
export class GlassboxService {
  private _isGlassboxOn: boolean;

  constructor(public configService: MojConfigService) {}

  runGlassbox()
    {
      this._isGlassboxOn = this.configService.configuration.isGlassboxOn;
      
      if (this._isGlassboxOn){
        runDetector();
      }
    }
}

  