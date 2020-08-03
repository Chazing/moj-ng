# עבודה עם file upload סינכרוני לאתרים חיצוניים

קיים מימוש סינכרוני לטעינת קבצים, הקבצים נסרקים בתוכנת opswat ומקבלים חיווי מיידי האם הקובץ תקין או לא.

קובץ שעבר בצורה תקינה ממשיך את דרכו לתיקייה המתאימה ב fums

בשביל להשתמש ביכולת זו עליכם לעבוד עם קומפוננטת moj-sync-file-upload
```
<moj-sync-file-upload ...></moj-sync-file-upload>
```
## מה צריך לעשות בכדי לעבוד עם sync file upload?


*	להגדיר בפרויקט האנגולר את המפתחות הבאים בקבצי הקונפיג (בהתאם לכל סביבה):
```typescript
    "uploadServerUrl": "https://test-op.justice.gov.il/FileStreamReceiver.ashx",
    "fums": "4458e545-795a-45a7-a021-b6aa9ff33b63"
```

**uploadServerUrl** מכיל את הכתובת בו יושב ה reciever

בתוך הבית הכתובת תהיה: http://qa-srv12app2:8200/FileStreamReceiver.ashx

בסביבת תהילה טסט הכתובת תהיה: https://test-op.justice.gov.il/FileStreamReceiver.ashx

**fums** זהו מזהה האפליקציה ב fums אליו בסופו של דבר הקובץ יישלח (יש לקבל מקוסטה)


*	בhtml יש לשים את הקומפוננטה לפי התיעוד שנמצא על הusage של הקומפוננטה

	

