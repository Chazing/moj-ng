# רכיבי תשתית
### כללי
פקדי התשתית ממומשים באנגולר כקומפוננטות, כל פקד הוא קומפוננטה נפרדת.

פקדים פשוטים כמו textbox וכדומה, פותחו אצלינו,

פקדים מורכבים יותר כמו DatePicker, וכל ה dropDowns, נלקחו מחברת primeng ועליהם נעשתה התאמה של עיצוב ופונקציונליות כדי שיתאימחו לנו.

ניתן להתרשם מהפקדים באתר המקור: https://www.primefaces.org/primeng/.

הגריד שאתו אנו משתמשים הוא גריד של חברת ag-grid https://www.ag-grid.com/javascript-grid-features/

### מבנה ככלי של פקדי ה input
לרוב פקדי ה input ישנו מבנה זהה ופרמטרים בסיסיים קבועים.

כל פקד כולל בתוכו מלבד הפקד, גם את ה label שלפניו, ו span אדום עבור וולידציה, שיוצג במקרה שהפקד לא וולידי.

מעבר לזה ישנם פרמטרים משתנים לפקדים השונים.

הפרמטרים הקבועים:

### * Inputs- * 
 
| שם                  | סוג        | ברירת מחדל                                | תאור                                                    |
|---------------------|------------|-------------------------------------------|---------------------------------------------------------|
| labelTextKey        | String     | מחפש בקבצי התרגום את הערך Texts.+ שם השדה | הטקסט שיופיע ב label שלפני הפקד. במקרה שאין ערך מתאים בקבצי התרגום, יילקח הערך בעצמו.                         |
| labelWidthColumns   | Number     | null                                      | אורך הlabel שלפני השדה ב columns של bootstrap           |
| isLabelAboveControl | boolean    | false                                     | האם הlabel יהיה מעל הפקד. ברירת המחדל היא לפני ולא מעל. |
| labelAlign          | LabelAlign | LabelAlign.Left                           | יישור הטקסט של ה label                                  |
| labelStyle          | LabelStyle | LabelStyle.Standard                       | עיצוב הלייבל שלפני הפקד, ניתן לבחור מרשימה.             |
| disabled            | boolean    | false                                     |                                                         |
| controlWidthColumns | Number     | Null                                      | אורך הפקד ב columns של bootstrap                        |
| required            | Boolean    | False                                     | האם חובה, לצורך סימון ה \* לפני השדה                    |

### * Outputs- * 

| שם    | פרמטר | תאור                         |
|-------|-------|------------------------------|
| focus | Event | ארוע שיקרה כשהפקד מקבל פוקוס |
| blur  | event | ארוע שיקרה כשהפקד מאבד פוקוס |


ניתן לראות יותר בדף התיעוד של ה [ElementBase](../classes/ElementBase.html) 