export class ValidationPatterns
{
    public static  EmailPattern = new RegExp ('^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-zA-Z0-9]{1}[a-zA-Z0-9\-]{0,62}[a-zA-Z0-9]{1})|[a-zA-Z])\.)+[a-zA-Z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$');
    public static  HebrewEnglishPrefixPattern =  new RegExp ('^[A-Za-zא-ת0-9\.\-\s\,]');
    public static  PhonePattern = new RegExp ('^[\d,*, ,-]{0,25}');
    public static  PassportPattern = new RegExp ('^(?!^0+$)[a-zA-Z0-9]{3,20}$');
    public static  WebSitePattern = new RegExp ('^[a-zA-Z0-9\.\\-\\%\?\&\/\:]{0,100}$');
    //public static  ValidPattern = new RegExp ('^$|^[^<>%\|+=#$\&\*\?\\]*$');
   // public static  ValidNotePattern =new RegExp ('^$|^[^<>%\|+=#$\&\*\\]*$');
    public static  HebrewPattern = new RegExp ('^[א-ת.\-\s\,\""\'&]+$');
    public static  NumbersPattern = new RegExp ('^[0-9]+$');
    public static  NumbersPatternOrEmpty = new RegExp ('(^[0-9]+$)|(^$)');
    public static  EnglishPattern = new RegExp ('^[a-zA-z.\-\s\,\'&]+$');
    public static  EnglishAndNumbersPattern = new RegExp ('^[a-zA-Z0-9]+$');
    public static  HebrewEnglishNumberPattern = new RegExp ('^[A-Za-zא-ת0-9\.\-\s\,\""\']*$');
    public static  HebrewEnglishPattern = new RegExp ('^[A-Za-zא-ת\.\-\s\,]*$');
    public static  NonHebrewPattern = new RegExp ('^[^א-ת]+$');
    public static  PasswordPattern = new RegExp ('^(?=.*\\d)(?=.*[a-zA-Z]).{8,}$');
    public static  GovHebrewEnglishNumberPattern = new RegExp ('[A-Za-zא-ת0-9\.\\-\\s\,\""\'+/=\!_\#$\%\&\'\(\)\*\:\?@\[\\\]\`\{\}\\-\\^–\~—;’]*');
    public static  GovHebrewEnglishNumberSecurityPattern = new RegExp ('[A-Za-zא-ת0-9\.\-\s\,\""\'/\!_\'\(\)\:@\[\\\]\`\{\}\\-\\^–\~—;’]*');
    public static  GovHebrewEnglishNumberSecurityNotePattern =new RegExp ('[A-Za-zא-ת0-9\.\-\s\,\""\'/\!_\'\(\)\:?@\[\\\]\`\{\}\\-\\^–\~—;’]*');
    public static  GovEmailPattern = new RegExp ('[A-Za-zא-ת0-9\.\\-\\s\,\""\'/\!_\'\(\)\:@\[\\\]\`\{\}\\-\\^–\~—;’]*');
    public static  GovPhonePattern = new RegExp ('[\d,*, ,-]{0,25}');
    public static regular = new RegExp('^$|^[^<>%|+=#$&*?]*$');
    public static note = new RegExp(`^$|^[^<>%\|+=#$\&\*]*$`);

    
}
