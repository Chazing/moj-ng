# תיעוד logging
התשתית מספקת שירות כתיבה ללוג כאשר ישנה פונק' עיקרית המקבלת 2 פרמטרים:
1.isError-משתנה בוליאני המגדיר האם סוג הכתיבה ללוג הוא error  אחרת סוג הכתיבה יהיה trace.
2.loggingRequest-פרמטר מסוג loggingRequest המכיל בתוכו את סוג הכתיבה(ERROR/TRACE) 
וכןמחרוזת הלוג.
```
export enum loggingRequestType { Error, Trace }

export class loggingRequest {
    logString: string;
    logReqType: loggingRequestType;
    constructor(logString: string, logReqType: loggingRequestType = loggingRequestType.Trace) {
        this.logString = logString;
        this.logReqType = logReqType;
    }
};
```
ע"מ להשתמש בתשתית זו יש לעשות מספר צעדים:
1.לבדוק שיש בידכם את חבילת הnuget המעודכנת של Moj.Infrastructure.WebApi בה תמצאו תחת ה-models הגדרה של אובייקט ה-LoggingRequest:
```
    public enum LoggingRequestType
  {
      Error = 0,
      Trace = 1
  }
    public class LoggingRequest
  {
      public LoggingRequestType LogReqType;
      public string LogString;

      public LoggingRequest();
  }
```
2. יש להגדיר ב-webApi כתיבה ללוג עם המימוש הרצוי כאשר המתודה תקבל טיפוס מהסוג הנ"ל ותנתב את הנתונים להיכן שתחליטו.

3.בקובץ הsite-config.json תחת המפתח logApiUrl יש לכתוב את שם המתודה ש-webApi
כדאי גם אז לוודא שכתובת ה-webApi שבקובץ זה היא הכתובת הנכונה.

4.להזריק את השירות במקום הרצוי ולהשתמש

## תיעוד globalErrorHandler
 לאנגולר ישנו מנגנון של ErrorHandler.התשתית שלנו מספקת הרחבה למנגנון הנ"ל המאפשרת כתיבה ללוג בעת שמתרחשת שגיאה וכן הצגת הודעה למשתמש הנותנת חיווי לשגיאה.
 איך זה עובד?
 בקובץ ה-app.module יש להגדיר את ה-globalErrorHandler כמימוש ל-errorHandler של אנגולר.
 נעשה זאת כך 
 
```
    providers: [
        {provide: ErrorHandler, useClass: GlobalErrorHandler},
        TranslateService
    ]
```
דבר נוסף יש להגדיר בקובץ ה-site-config.json את מפתח ה-"isWriteUIErrorsToLog": true

