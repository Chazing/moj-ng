export enum loggingRequestType{Error,Trace}

export class loggingRequest {
    logString: string;
    logReqType:loggingRequestType;
    constructor(logString: string, logReqType:loggingRequestType=loggingRequestType.Trace) {
        this.logString = logString;
        this.logReqType = logReqType;
    }
};