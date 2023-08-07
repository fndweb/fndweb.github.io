const pwd = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const figures = document.getElementById("number");
const length = document.getElementById("length");
const message = document.getElementById("message");
const repeatPwd = document.getElementById("repeat-password");
const matching = document.getElementById("pass-check");
const submission = document.querySelector("#submited");
const closeParentAlert = document.getElementById("main-alert");
const emptyPasswordAlert = document.getElementById("no-pass-alert");
const emptyEmailAlert = document.getElementById("no-email-alert");
const closeChildAlert = document.querySelectorAll(".close-alert");

alertList = [emptyEmailAlert, emptyPasswordAlert]

const theBabayega = function () {
    alertList.forEach(element => {
        element.classList.remove("alert");
        element.classList.add("hidden");
    });
};

// const togglePassword = function () {
//     if (pwdBtn.checked == true) {
//         pwd.type = "text";
//     }
//     else {
//         pwd.type = "password";
//     }
// };

// showBtn.addEventListener("click", function (e) {
//     const type = pwd.getAttribute("type") === "password" ? "text" : "password";
//     pwd.setAttribute("type", type)

//     this.classList.showBtn("fa-eye-slash")
// });

// const togglePassword = function () {
//     if (pwd.getAttribute("type") == "password") {
//         pwd.setAttribute("type", "text");
//         toggleButton.classList.remove("fa-eye")
//         toggleButton.classList.add("fa-eye-slash")
//     }
//     else {
//         pwd.setAttribute("type", "password");
//         toggleButton.classList.remove("fa-eye-slash")
//         toggleButton.classList.add("fa-eye")
//     }
// };

togglePassword.onclick = function () {
    const type = pwd.getAttribute("type") === "password" ? "text" : "password";
    pwd.setAttribute("type", type);

    if (type == "password") {
        togglePassword.classList.remove("fa-eye-slash")
        togglePassword.classList.add("fa-eye")
    }
    else {
        togglePassword.classList.remove("fa-eye")
        togglePassword.classList.add("fa-eye-slash")
    }
}

// password validation

// start typing
pwd.onkeyup = function () {
    // show password toggle
    togglePassword.classList.remove("hidden");
    togglePassword.classList.add("pass-toggle");

    // stop alerts
    emptyPasswordAlert.classList.remove("alert");
    emptyPasswordAlert.classList.add("hidden");
    pwd.classList.remove("red-border");
    pwd.classList.add("default-border");

    // reset password repeat field by default
    matching.classList.remove("matched");
    matching.classList.add("mismatch");

    // lowercase
    var lowerCaseLetters = /[a-z]/g;
    if (pwd.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // uppercase
    var upperCaseLetters = /[A-Z]/g;
    if (pwd.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // number
    var numbers = /[0-9]/g;
    if (pwd.value.match(numbers)) {
        figures.classList.remove("invalid");
        figures.classList.add("valid");
    } else {
        figures.classList.remove("valid");
        figures.classList.add("invalid");
    }

    // length
    if (pwd.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
};

repeatPwd.onkeyup = function () {
    // show match indicator
    matching.style.display = "inline";

    // match password
    if (pwd.value === repeatPwd.value) {
        matching.classList.remove("mismatch");
        matching.classList.add("matched");
        console.log("password matched");
    } else {
        matching.classList.remove("matched");
        matching.classList.add("mismatch");
        console.log("mismatch");
    }
};

// match password with submit button
const matchPassword = function() {
    // match password
    if (pwd.value === repeatPwd.value && pwd.value != "") {
        matching.classList.remove("mismatch");
        matching.classList.add("matched");
        pwd.classList.remove("red-border");
        pwd.classList.add("default-border");
        console.log("password matched");
    } 
    if (pwd.value != repeatPwd.value) {
        matching.classList.remove("matched");
        matching.classList.add("mismatch");
        pwd.classList.remove("default-border");
        pwd.classList.add("red-border");
        console.log("mismatch");
    }
    if (pwd.value == "") {
        emptyPasswordAlert.classList.remove("hidden");
        emptyPasswordAlert.classList.add("alert");
        pwd.classList.remove("default-border");
        pwd.classList.add("red-border");
    } 
    if (pwd.value != "")  {
        emptyPasswordAlert.classList.remove("alert");
        emptyPasswordAlert.classList.add("hidden");
        pwd.classList.remove("red-border");
        pwd.classList.add("default-border");
    }
}

// click
pwd.onclick = function () {
    message.style.display = "initial";
};

// leave
repeatPwd.onclick = function () {
    message.style.display = "none";
    if (pwd.value === "") {
        repeatPwd.setAttribute("readonly", true);
        repeatPwd.value = "";
    } else {
        repeatPwd.removeAttribute("readonly");
    }
};

// const closeIndividual = function () {
    
// }

// close child/individual alert
/* it took me 24 hours to come up with this line of code */
closeChildAlert.forEach(element => {
    element.onclick = function () {
        this.parentNode.classList.remove("alert");
        this.parentNode.classList.add("hidden");
    }
});

//toggleButton.addEventListener("click", togglePassword);
submission.addEventListener("click", matchPassword);
