export class loggingRequest {
    message: string;
    stackTrace: string;
    constructor(message: string, stackTrace: string) {
        this.message = message;
        this.stackTrace = stackTrace;
    }
};