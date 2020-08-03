import { HttpClient } from "@angular/common/http";
import { MojConfigService } from "./moj-config.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CSRFService {
    constructor(private _http: HttpClient, public configService: MojConfigService) { }

    token: string;

    getToken(): Promise<any> {
        return new Promise(resolve => {
            if (this.configService.configuration.isCSRFActive) {
                this._http.get<any>(this.configService.configuration.webApiAddress + '/Security/GetAntiForgeryToken', { withCredentials: true }).subscribe(data => {
                    this.token = data.antiForgeryToken;
                    resolve();
                });
            }
            else {
                resolve();
            }
        });
    }
}