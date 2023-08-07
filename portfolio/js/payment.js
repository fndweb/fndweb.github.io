const bankBtn = document.querySelector("#bank-btn");
const payPalBtn = document.querySelector("#paypal-btn");
const amazonBtn = document.querySelector("#amazon-btn");
const bankType = document.querySelector("#bank");
const payPalType = document.querySelector("#paypal");
const amazonType = document.querySelector("#amazon");
const fixBorder = document.querySelectorAll(".payment-type");
const showCVV = document.querySelector("#cvv");
const showZip = document.querySelector("#zipcode");

paymentTypeBtn = [bankBtn, payPalBtn, amazonBtn];
paymentType = [bankType, payPalType, amazonType];

const killAll = function () {
    paymentType.forEach(element => {
        if (element == bankType) {
            bankType.classList.remove("bank-type");
            bankType.classList.add("bank-hide");
            console.log("entered 1");
        }
        if (element == payPalType) {
            payPalType.classList.remove("paypal-type");
            payPalType.classList.add("paypal-hide");
            console.log("entered 2");
        }
        if (element == amazonType) {
            amazonType.classList.remove("amazon-type");
            amazonType.classList.add("amazon-hide");
            console.log("entered 3");
        }
        console.log("here");
    });
    fixBorder.forEach(element => {
        element.classList.remove("payment-type-selected");
        element.classList.add("payment-type-unselected");
        console.log("we did it !!!!");
    });
};

paymentTypeBtn.forEach(element => {
    if (element == bankBtn) {
        element.onclick = function () {
            killAll();
            this.parentNode.classList.remove("payment-type-unselected");
            this.parentNode.classList.add("payment-type-selected");
            bankType.classList.remove("bank-hide");
            bankType.classList.add("bank-type");
            console.log("entered 1 added");
        console.log("bank");
    }}
    if (element == payPalBtn) {
        element.onclick = function () {
            killAll();
            this.parentNode.classList.remove("payment-type-unselected");
            this.parentNode.classList.add("payment-type-selected");
            payPalType.classList.remove("paypal-hide");
            payPalType.classList.add("paypal-type");
            console.log("entered 2 added");
        console.log("paypal");
    }}
    if (element == amazonBtn) {
        element.onclick = function () {
            killAll();
            this.parentNode.classList.remove("payment-type-unselected");
            this.parentNode.classList.add("payment-type-selected");
            amazonType.classList.remove("amazon-hide");
            amazonType.classList.add("amazon-type");
            console.log("entered 3 added");
        console.log("amazon");
    }}
});


    /*      make cvv readable     */
showCVV.onkeyup = function () {
    const type = this.getAttribute("type") === "password" ? "text" : "text";
    this.setAttribute("type", type);

    // validations
    var validInput, validInputList, cvvInput;
    validInputList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    cvvInput = [showCVV.value[0], showCVV.value[1], showCVV.value[2]];

    cvvInput.forEach(element => {
        if (element != undefined && validInputList.includes(parseInt(element)) == true) {
            console.log("valid " + " value " + element);
        } 
        if (element != undefined && validInputList.includes(parseInt(element)) == false) {
            console.clear();
            console.log("invalid " + " value " + element);
            showCVV.value = "";
        }
        // validInputList.forEach(element => {
        //     if (validInput == element) {
        //         console.log("valid " + validInput + " value " + element);
        //     } 
        //     if (element != validInput) {
        //         console.log("invalid " + validInput + " value " + element);
        //     }
        // });
    });
};

    /*      zipcode    */
showZip.onkeyup = function () {
    const type = this.getAttribute("type") === "password" ? "text" : "text";
    this.setAttribute("type", type);

    // validations
    var validInput, validInputList, zipInput, getIndex;
    validInputList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ""];
    zipInput = [showZip.value[0], showZip.value[1], showZip.value[2], showZip.value[3], showZip.value[4]];

    zipInput.forEach(element => {
        if (element != undefined && validInputList.includes(parseInt(element)) == true) {
            console.log("valid " + " value " + element);
        } 
        if (element != undefined && validInputList.includes(parseInt(element)) == false) {
            console.clear();
            console.log("invalid " + " value " + element);
            showZip.value = "";
            // getIndex = zipInput.indexOf(element);
            // console.log("invalid " + " value " + element + " is at index position " + getIndex);
            
            // zipInput[getIndex] = zipInput[zipInput.length - 1];
            // zipInput.pop();

            
            // validInput = showZip.value[showZip.value.lenth - 1];
            // showZip.value = validInput;

            // zipInput.splice(getIndex, 1);
            // showZip.value = showZip.value;
            // console.log(zipInput);

            // validInput = zipInput.filter(item => item !== element);
            // showZip.value[1] = "bx";
            
            // validInput = showZip.value;
            // console.log(validInput);
        }
    });
};
