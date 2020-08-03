
export function isInternetExplorer(): number {
    var myNav = navigator.userAgent.toLowerCase();
    if (myNav.indexOf('msie') != -1)
        return parseInt(myNav.split('msie')[1]);
    if (myNav.indexOf('rv:') != -1)
        return parseInt(myNav.split('rv:')[1]);
    return 0;
}
function isFF() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('firefox') != -1);
}
export function isEdge():boolean {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('edge') != -1);
}

export function IsSupportBrowser(isSupportEdge = true, isSupportFF = true) {
    if ((isInternetExplorer() && isInternetExplorer() < 11) || (!isSupportEdge && isEdge()) || (!isSupportFF && isFF())) {
        window.location.href = "/assets/unsupported-browser.html";
    }
    return true;
}