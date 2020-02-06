import { Injectable, Inject } from '@angular/core';
import { loggingRequest, loggingRequestType } from './logging-request'
import { HttpHeaders, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { MojMessagesService } from '../messages/moj-messages.service';
import { MojConfigService } from '../shared/moj-config.service';
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";


@Injectable()
export class LoggingService {
    constructor(private http: HttpClient, private configService: MojConfigService) {

    }

 

    log(isError: boolean, loggingRequest: loggingRequest) {
        if (!isError || isError && this.configService.configuration.isWriteUIErrorsToLog) {
            loggingRequest.logReqType = isError ? loggingRequestType.Error : loggingRequestType.Trace;
            let url = this.configService.configuration.webApiAddress + this.configService.configuration.logApiUrl;
            const headers = new HttpHeaders({ "Content-Type": "application/json" });
            this.http.post(url, JSON.stringify(loggingRequest), { headers: headers, withCredentials: true }).pipe(catchError((error: HttpErrorResponse) => throwError(error))).subscribe(x => { });
        }
    }
}
