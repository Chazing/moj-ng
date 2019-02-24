## נגישות

### את עקרונות הנגישות ניתן לקרוא במסמך ההנחיות שנמצא [כאן](http://itportal/ItDocuments/Dev/infrastructureUi/%D7%AA%D7%A9%D7%AA%D7%99%D7%95%D7%AA%20UI/%D7%94%D7%A0%D7%97%D7%99%D7%95%D7%AA%20%D7%A0%D7%92%D7%99%D7%A9%D7%95%D7%AA.pdf). 
החלק הרלוונטי לאנגולר הוא רק ההקדמה.


### נגישות בגריד
* יש לעטוף ב moj-grid-panel את כל הגריד, כי שם אנחנו מוסיפים חלק מתכונות הנגישות.

* כדי להכניס תאור לגריד, יש לשלוח את הפרמטר gridDescription ל moj-grid-panel.

### נגישות בטפסים   
* יש לשים על כל form את ה directive mojForm
```html
<form mojForm>
</form>
```