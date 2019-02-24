# glassbox הוראות הטמעה

## index.html
יש להוסיף הפניה בראש הדף לקובץ js כך:
```
<script type="text/javascript" 
        id="_cls_detector" src="assets/scripts/detector-dom.min.js?rev=5.6.184_B186" 
        data-clsconfig="reportURI=https://shoko.efasi.org/glassbox/reporting/cls_report;recordScrolls=true;recordMouseMoves=true">
```

## site.config
יש להוסיף לכל קובץ קונפיג את המפתח isGlassboxOn
ולתת לו את הערכים הנכונים לפי הסביבה
```
{
    "recaptchaSiteKey":"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
    ...
    "isGlassboxOn": true
}
```

## הצגת הודעה למשתמש על הקלטת הפעולות
נוספה הודעה מובנית מוכנה להצגה בפוטר של האתרים, ברגע שההקלטה פועלת ההודעה תוצג באופן אוטומטי

