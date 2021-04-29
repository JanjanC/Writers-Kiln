function checkTerms() {
    var term = document.getElementById("terms");
    var error = document.getElementById("error");
    if(term.checked) {
        error.innerText = "";
        return true;
    } else {
        error.innerText = "Accepting to the Terms & Conditions and Privacy Policy is required.";
        return false;
    }
}

function checkEmail() {
    var email = document.getElementById("email");
    if(email.value.trim() == "") {
        error.innerText = "Please enter your email address."
        return false;
    } else {
        error.innerText = ""
        return true;
    }
}

function checkUsername() {
    var username = document.getElementById("username");
    if(username.value.trim() == "") {
        error.innerText = "Please enter your destined username."
        return false;
    } else {
        error.innerText = ""
        return true;
    }
}

function checkFullname() {
    var fullname = document.getElementById("fullname");
    if(fullname.value.trim() == "") {
        error.innerText = "Please enter your fullname."
        return false;
    } else {
        error.innerText = ""
        return true;
    }
}

function checkPassword() {
    var password = document.getElementById("password");
    if(password.value.trim() == "") {
        error.innerText = "Please enter a password."
        return false;
    } else {
        error.innerText = ""
        return true;
    }
}

function checkSubmit() {
    if(checkTerms() && checkEmail() && checkUsername() && checkFullname() && checkPassword()) {
        return true;
    }
    else {
        return false;
    }
}