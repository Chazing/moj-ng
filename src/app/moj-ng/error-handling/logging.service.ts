import { Injectable, Inject } from '@angular/core';
import { loggingRequest } from './logging-request'
import { RequestOptions, RequestMethod, Headers, RequestOptionsArgs, ResponseContentType } from '@angular/http';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { MojMessagesService } from '../messages/moj-messages.service';
import { MessageType } from '../messages/message.enum';
import { MojConfigService } from '../shared/moj-config.service';

@Injectable()
export class LoggingService {
    constructor(private http: HttpClient, private configService:MojConfigService, private messageService: MojMessagesService) {

    }

    log(loggingRequest: loggingRequest): void {
        if (this.configService.configuration.isWriteUIErrorsToLog) {
            let url = this.configService.configuration.webApiAddress + '/' + this.configService.configuration.logApiFunction;
            let response: any;
            let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
            this.http.post(url, JSON.stringify(loggingRequest), { headers: headers, withCredentials: true })
                .subscribe(() => { console.log(response) });
        }
        this.messageService.showMessage("MojTexts.error", "MojTexts.errorMessage", null, MessageType.Error).subscribe((result) => {

        });
    }
}
