
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { MojUtilsService } from '../shared/utils';
import { LoggingService } from "./logging.service";
import { loggingRequest } from "./logging-request";
import { MojMessagesService } from "../messages/moj-messages.service";
import { MessageType } from "../messages/message.enum";


@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) {

    }
    handleError(error) {

        const loggingService = this.injector.get(LoggingService);
        const messageService = this.injector.get(MojMessagesService);
        const translateService = this.injector.get(TranslateService);
            
       

        let stackString: string;
        let logString: string;
        let msg = translateService.instant("MojTexts.error");
        if (error instanceof Error) {
            stackString = error.stack;
            logString = `Message:${error.message}*****StackTrace:${stackString}`;
            if (error instanceof CustomError)
                msg = error.message;
        } else {

            switch (error.status) {
                case 400:
                    if (MojUtilsService.isObject(error._body) || MojUtilsService.isObject(error.error.modelState)) {
                        let modelStates;
                        if (MojUtilsService.isObject(error._body))
                            modelStates = JSON.parse(error._body).modelState;
                        else
                            modelStates = error.error.modelState;
                        const messages: string[] = Object.keys(modelStates).map(function (key) {
                            return `${key}:${modelStates[key]}`;
                        });

                        logString = messages.join("\n");;
                    }
                    else {
                        logString = MojUtilsService.isObject(error.error) ? `${error.error.message}:${error.error.messageDetail}` : error.error;
                    }
                    break;
                case 403:      
                  //  isAuthorized=false;
                    logString = error.error;
                    break;   
                case 404:
                    logString = `${error.statusText} on ${error.url}`;
                    break;
                
                case 409:
                    msg = error.error;
                    logString = msg;
                    break;
                default:
                    logString = `Network Error: ${error.statusText} (${error.status}) **message: ${error.message} *****StackTrace: ${error.error?(error.error.stackTrace ? error.error.stackTrace:error.error.StackTrace ? error.error.StackTrace: error.error.StackTraceString):""}`;
                    break;
            }


        }
        loggingService.log(true,new loggingRequest(logString));
        
        console.error(logString);

        //messageService.showMessage(msg, "MojTexts.errorMessage", null, MessageType.Error);
    }



}

export class CustomError extends Error {
    constructor(public message: string) {
        super(message);
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}