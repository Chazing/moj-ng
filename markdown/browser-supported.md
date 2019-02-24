## תמיכה בדפדפנים
כדי שלא יוכלו לגלוש באתר עם דפדפן שלא תומכים בו, יש לממש את השלבים הבאים:

* להוסיף את הקוד הבא בדף index.html
```html
<script>
        function isInternetExplorer() {
            var myNav = navigator.userAgent.toLowerCase();
            if (myNav.indexOf('msie') != -1)
                return parseInt(myNav.split('msie')[1]);
            if (myNav.indexOf('rv:') != -1)
                return parseInt(myNav.split('rv:')[1]);
            return false;
        }
        function isFF() {
            var myNav = navigator.userAgent.toLowerCase();
            return (myNav.indexOf('firefox') != -1);
        }
        function isEdge() {
            var myNav = navigator.userAgent.toLowerCase();
            return (myNav.indexOf('edge') != -1);
        }
        (IsSupportBrowser = function (isSupportEdge, isSupportFF) {
            if ((isInternetExplorer() && isInternetExplorer() < 11) || (!isSupportEdge && isEdge()) || (!isSupportFF && isFF())) {
                window.location.href = "/assets/unsupported-browser.html";
            }
        })(true, true);
    </script>
```

* להעתיק את הקובץ unsupported-browser.html שיורד עם התשתית לתוך הפרוייקט

הקובץ נמצא במיקום: node_modules/@moj/moj-ng/src/assets/unsupported-browser.html

יש להעתיק אותו לתוך הפרוייקט ולשים אותו מתחת התיקיה assets שלכם.

