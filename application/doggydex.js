//------------CLASS DECLARATIONS--------------//

class Template {
    contructor(object) {
        this.object = object
    }

    getObject() {
        return this.object;
    }
}

//------------VARIABLES-------------//

var something = 0;

//------------FUNCTIONS-------------//

function doSomething() {
}

//-----------COOKIES------------//

function initCookies() {
    setCookie("nameOfCookie", 2, 30);
    return;
}

// Cookie helper functions || Following setCookie() and getCookie() functions adapted from
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_cookie_username
function setCookie(cookieName, cookieValue, expirationDate) {
    var d = new Date();
    d.setTime(d.getTime() + (expirationDate * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArr = decodedCookie.split(';');

    for(var i = 0; i < cookieArr.length; i++) {
        var tempCookie = cookieArr[i];

        while (tempCookie.charAt(0) == ' ') {
            tempCookie = tempCookie.substring(1);
        }
        if (tempCookie.indexOf(name) == 0) {
            return tempCookie.substring(name.length, tempCookie.length);
        }
    }

    return "";
}

function printCookie(cookieName) {
    console.log(cookieName + " = " + getCookie(cookieName));

    return;
}

function removeCookies() {
    setCookie("nameOfCookie", 1, -60)

    return;
}
