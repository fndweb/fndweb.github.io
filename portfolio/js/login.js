const modalCon = document.getElementById("modal-con")
const overlayCon = document.getElementById("overlay-con");
const openModalButton = document.querySelector(".open-modal");
const closeModalButton = document.querySelector(".close-modal");
const autoModal = document.querySelector(".auto-modal");
const pwd = document.getElementById("password");
const userEmail =  document.getElementById("email")
const togglePassword = document.getElementById("toggle-password");
const submission = document.getElementById("submited");
const closeParentAlert = document.getElementById("main-alert");
const emptyPasswordAlert = document.getElementById("no-pass-alert");
const emptyEmailAlert = document.getElementById("no-email-alert");
const closeChildAlert = document.querySelectorAll(".close-alert");

openModalButton.onclick = function () {
    modalCon.classList.remove("hidden");
    overlayCon.classList.remove("hidden");
    modalCon.classList.add("modal");
    overlayCon.classList.add("overlay");
}

closeModalButton.onclick = function () {
    modalCon.classList.remove("modal");
    overlayCon.classList.remove("overlay");
    modalCon.classList.add("hidden");
    overlayCon.classList.add("hidden");
};

const autoOpenModal = function () {
    modalCon.classList.remove("hidden");
    overlayCon.classList.remove("hidden");
    modalCon.classList.add("modal");
    overlayCon.classList.add("overlay");
}

// start typing password
pwd.onkeyup = function () {
    // show password toggle
    togglePassword.classList.remove("hidden");
    togglePassword.classList.add("pass-toggle");

    // stop alerts
    emptyPasswordAlert.classList.remove("alert");
    emptyPasswordAlert.classList.add("hidden");
    pwd.classList.remove("red-border");
    pwd.classList.add("default-border");
}

// start typing email
userEmail.onkeyup = function () {
    // stop alerts
    emptyEmailAlert.classList.remove("alert");
    emptyEmailAlert.classList.add("hidden");
    userEmail.classList.remove("red-border");
    userEmail.classList.add("default-border");
}

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

// function for submission
const noPassword = function () {
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

    if (userEmail.value == "") {
        emptyEmailAlert.classList.remove("hidden");
        emptyEmailAlert.classList.add("alert");
        userEmail.classList.remove("default-border");
        userEmail.classList.add("red-border");
        console.log("no")
    } 
    if (userEmail.value != "")  {
        emptyEmailAlert.classList.remove("alert");
        emptyEmailAlert.classList.add("hidden");
        userEmail.classList.remove("red-border");
        userEmail.classList.add("default-border");
    }
}

// close alert
closeChildAlert.forEach(element => {
    element.onclick = function () {
        this.parentNode.classList.remove("alert");
        this.parentNode.classList.add("hidden");
    }
});

autoModal.addEventListener("click", autoOpenModal());
submission.addEventListener("click", noPassword);