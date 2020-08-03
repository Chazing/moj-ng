import { Injectable } from '@angular/core';
import { MojConfigService } from './moj-config.service';
// import * as detector from '../../assets/scripts/detector-dom.min.js'
declare var runDetector: any;

@Injectable({
  providedIn: 'root'
})
export class GlassboxService {
  constructor(public configService: MojConfigService) {}

  addGlassboxScript() {
    if (this.configService.configuration.isGlassboxOn && document.getElementById('_cls_detector') == null) {
      var glassboxRev = this.configService.configuration.glassboxVersion || '5.6.210SP4_B135';
      const script = document.createElement('script') as HTMLScriptElement;
      script.innerHTML = '';
      var src =
        (<any>this.configService.configuration).GlassboxSrc ||
        `https://content.justice.gov.il/Publicjs/gbox/detector-dom.min.js?rev=${glassboxRev}`;
      script.src = src;
      script.id = '_cls_detector';
      var glassboxData =
        (<any>this.configService.configuration).glassboxData ||
        "reportURI=https://shoko.efasi.org/glassbox/reporting/cls_report;recordScrolls=true;recordMouseMoves=true;domMaskContentByClass=cls_mask"
      if (this.configService.configuration.isGlassboxWithCss) {
        glassboxData += ';resourcesRecordEnabled=true;resourceRecordCssOnly=true';
      }
      if (this.configService.configuration.isGlassboxWithAjaxData) {
        glassboxData += ';ajaxRecordMetadata=always;ajaxRecordResponseHeaders=always;ajaxRecordResponseBody=always';
      }
      script.setAttribute('data-clsconfig', glassboxData);
      document.head.appendChild(script);
    }
  }
}
