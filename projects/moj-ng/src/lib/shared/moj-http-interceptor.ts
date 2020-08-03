import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MojConfigService } from './moj-config.service';
import { map } from 'rxjs/operators';
import { MojUtilsService } from './utils';
import { CSRFService } from './moj-csrf.service';

@Injectable()
export class MojHttpInterceptor implements HttpInterceptor {
    constructor(private _csrfService: CSRFService, public configService: MojConfigService, private mojUtilsService:MojUtilsService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.includes("http") || req.url.includes(this.configService.configuration.webApiAddress)) {
            const headerName = 'XSRF-TOKEN';
            let token = this._csrfService.token;
            if (token !== undefined && token !== null) {
                req = req.clone({ headers: req.headers.set(headerName, token) });
            }
        }
        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse) {
                if(this.configService.configuration &&
                    this.configService.configuration.isParseDate &&
                    event.url.includes(this.configService.configuration.webApiAddress)){
                        this.mojUtilsService.parseAllDates(event.body);
                }
                return event;
              }
            })
          );
    }
}
