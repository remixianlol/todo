var username = document.getElementById("username");
var password = document.getElementById("password");


function name()
 {
    if (username.value == "admin") {
        return true;
    } else 
    {     
        return false;
    }
}

function pass() {
    if (password.value == "12345") {
        return true;
    } else {
        return false;
    }

}

function validate(callback) {
    if (name() && pass()) {
        callback();

    } else {
        return false;
    }
}

function display() {
    window.open("./mainpage.html");
    return true;
}
