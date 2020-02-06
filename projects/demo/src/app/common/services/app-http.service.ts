import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MojConfigService } from '@moj/moj-ng';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {
  
  constructor(private httpClient: HttpClient, private configService: MojConfigService) { }

  get(url: string, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<any> {
    return this.httpClient.get(this.appendBaseUrlToUrl(url), options)
  }
 
  post(url: string, body: any | null, options: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType: 'json';
    withCredentials?: boolean;
  }): Observable<any> {
    return this.httpClient.post(this.appendBaseUrlToUrl(url), body, options)
  }

  put(url: string, body: any | null, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<any> {
    return this.httpClient.put(this.appendBaseUrlToUrl(url), body, options);
  }

  delete(url: string, options?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
  }): Observable<any> {
    return this.httpClient.delete(this.appendBaseUrlToUrl(url), options);
  }
  
  private appendBaseUrlToUrl(url: string): string {
    return this.configService.configuration.webApiAddress + url;
  }
}
