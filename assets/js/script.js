function doesBrowserSupportCSSVariables() {
    return window.CSS && CSS.supports("color", "var(--dummy-var)");
}

if (doesBrowserSupportCSSVariables()) {
    // alert("browser supports css variables");
} else {
    alert(`Your browser may lack properties needed for this website to function properly. Internet Explorer is not supported. Features like theme switch, back-to-top button, and more may not work at all. Consider switching to the latest version of your browser.`);
}

// 
/* mobile navigation bar */
const openNavBtn = document.querySelector(".open_nav");
const myNavMenu = document.getElementById("myNav");
const my_nav_overlay =  document.getElementById("myNavOverlay");

function closeNav() {
    myNavMenu.style.width = "0";
    my_nav_overlay.classList.remove("auto_close_nav");
    my_nav_overlay.classList.add(h1);
}

function openNav() {
    myNavMenu.style.width = "50%";
    my_nav_overlay.classList.remove(h1);
    my_nav_overlay.classList.add("auto_close_nav");
}

my_nav_overlay.onclick = function () {
    myNavMenu.style.width = "0";
    my_nav_overlay.classList.remove("auto_close_nav");
    my_nav_overlay.classList.add(h1);
}

openNavBtn.addEventListener("click", openNav);

// art
const open_artnav = document.querySelector(".open_artnav");
const artNav = document.querySelector("#art_nav");
open_artnav.onclick = function () {
    artNav.classList.remove('hidden');
    artNav.classList.add('artnav_links');
}
// 

// sticky
const headerWindow = document.getElementById("myHeader");

let sticky = headerWindow.offsetTop;

function stickyHeader() {
    if (window.scrollY > sticky) {
        headerWindow.classList.add("sticky");
    } else {
        headerWindow.classList.remove("sticky");
    }
}
// 

/* mobal */
const modalParent = document.querySelector("#myModal");
const modalWindows = Array.from(document.querySelectorAll("#myModal > div"));
const ini_head_lhs = Array.from(document.querySelectorAll("#myNav > div"));
const ini_proj_lhs = Array.from(document.querySelectorAll("#projectLaunchers > div"));
const modalWinLaunchers = [...ini_head_lhs, ...ini_proj_lhs];
const overlayWindow = document.querySelector("#myOverlay");
const close_modal_Btn = document.querySelector(".close_modal");

const h1 = "hidden";
const m1 = "modal_view";

function openModalP () {
    modalParent.classList.remove(h1);
    modalParent.classList.add("modal");
    overlayWindow.classList.remove(h1);
    overlayWindow.classList.add("overlay");
}

function killModalWins () {
    modalWindows.forEach(element => {
        element.classList.remove(m1);
        element.classList.add(h1)
    });
}

function openModalWin (win) {
    openModalP();
    killModalWins();
    win.classList.remove(h1);
    win.classList.add(m1);
}

function openModalWinP () {
    let win;
    modalWinLaunchers.forEach(launcher => {
        launcher.addEventListener("click", function () {
            if (launcher.getAttribute("id") === "open_about") {
                win = modalWindows.find(element => element.getAttribute("id") === "myAbout");
                openModalWin(win);
            } else if (launcher.getAttribute("id") === "open_contact") {
                win = modalWindows.find(element => element.getAttribute("id") === "myContact");
                openModalWin(win);
            } else if (launcher.getAttribute("id") === "open_faqs") {
                win = modalWindows.find(element => element.getAttribute("id") === "myFaqs");
                openModalWin(win);
            } else if (launcher.getAttribute("id") === "tab_project") {
                win = modalWindows.find(element => element.getAttribute("id") === "myTab");
                openModalWin(win);
            } else if (launcher.getAttribute("id") === "payment_project") {
                win = modalWindows.find(element => element.getAttribute("id") === "myPayment");
                openModalWin(win);
            } else if (launcher.getAttribute("id") === "artist_project") {
                win = modalWindows.find(element => element.getAttribute("id") === "myArtist");
                openModalWin(win);
            } else {
                console.log(launcher.getAttribute("id"))
            }
        });
    });
}
openModalWinP();

function closeModalP () {
    killModalWins();
    modalParent.classList.remove("modal");
    modalParent.classList.add(h1);
    overlayWindow.classList.remove("overlay");
    overlayWindow.classList.add(h1);
}
close_modal_Btn.addEventListener("click", closeModalP)

overlayWindow.onclick = function () {
    closeModalP();
}

// screen res 
const widthWindow = document.querySelector("#screen_width");
const heightWindow = document.querySelector("#screen_height");
let no_resize = 0;

function screenRes () {
    let screen_width = window.innerWidth;
    let screen_height = window.innerHeight;

    widthWindow.value = screen_width;

    heightWindow.value = screen_height;
    no_resize = 1;
}
window.addEventListener("resize", screenRes);

if (no_resize == 0) {
    screenRes();
}

// theming
const rootElems = document.documentElement;
const rootElems1 = document.body;
const myTheme = document.querySelector("#my_theme");

const root_elemes_list = [rootElems, rootElems1];

const light = "rgb(255, 255, 255)";
const dark = "rgb(0, 0, 0)";
const dark_c = "rgb(61, 57, 53)";
const light_i = "bi-brightness-high";
const dark_i = "bi-moon";
const dark_h = "rgb(104, 197, 188)";
const light_h = "rgb(31, 111, 97)";

function changeTheme() {
    if (myTheme.classList.contains(light_i)) {
        root_elemes_list.forEach(root_elem => {
            root_elem.style.setProperty("--theme-parent", light);
            root_elem.style.setProperty("--theme-child", light);
            root_elem.style.setProperty("--theme-text", dark);
            root_elem.style.setProperty("--theme-bold", light_h);
        });

        myTheme.classList.remove(light_i);
        myTheme.classList.add(dark_i);
    }

    else {
        root_elemes_list.forEach(root_elem => {
            root_elem.style.setProperty("--theme-parent", dark);
            root_elem.style.setProperty("--theme-child", dark_c);
            root_elem.style.setProperty("--theme-text", light);
            root_elem.style.setProperty("--theme-bold", dark_h);
        });

        myTheme.classList.remove(dark_i);
        myTheme.classList.add(light_i);
    }
}
myTheme.addEventListener("click", changeTheme);

// readmore/less
const amRm = document.getElementById("am_rm");
const amLs = document.getElementById("am_ls");
const am3Dots = document.querySelector(".am_3dots");
const amH0Tx = document.querySelector(".am_h0tx");
const amr = "am_read";

amRm.onclick = function () {
    am3Dots.style.display = "none";
    amH0Tx.style.display = "inline";
    amRm.classList.remove(amr);
    amRm.classList.add(h1);
    amLs.classList.remove(h1);
    amLs.classList.add(amr);
}

amLs.onclick = function () {
    am3Dots.style.display = "inline";
    amH0Tx.style.display = "none";
    amRm.classList.remove(h1);
    amRm.classList.add(amr);
    amLs.classList.remove(amr);
    amLs.classList.add(h1);
}

// top
const to_top = document.querySelector("#to_top");

function showToTop() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        to_top.style.opacity = "1";
        to_top.style.visibility = "visible";
    } else {
        to_top.style.opacity = "0";
        to_top.style.visibility = "hidden";
    }
}

// auto scroll
/* 
    to_top.onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
*/

// Bind your button click, scroll direction and effect speed
to_top.onclick = function() {
    scrollTo(0, 3000); // it will take 8 seconds to reach to top.
}

// Element to move, time in ms to animate
function scrollTo(element, duration) {
    let e = document.documentElement;
    if(e.scrollTop === 0){
        let t = e.scrollTop;
        ++e.scrollTop;
        e = t + 1 === e.scrollTop-- ? e: document.body;
        console.log(t);
    }
    scrollToC(e, e.scrollTop, element, duration);
}

// Element to move, element or px from, element or px to, time in ms to animate
function scrollToC(element, from, to, duration) {
    if (duration <= 0) return;
    if(typeof from === "object") from = from.offsetTop;
    if(typeof to === "object") to = to.offsetTop;

    scrollToX(element, from, to, 0, 1 / duration, 20, easeOutCuaic);
}

function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
    if (t01 < 0 || t01 > 1 || speed <= 0) {
        element.scrollTop = xTo;
        return;
    }
    element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
    t01 += speed * step;
    
    setTimeout(function() {
    scrollToX(element, xFrom, xTo, t01, speed, step, motion);
    }, step);
}

function easeOutCuaic(t) {
  t--;
  return t * t * t + 1;
}

// auth
const authWins = Array.from(document.querySelectorAll("#sign_up, #log_in"));
const authWinLaunchers = Array.from(document.querySelectorAll("#open_signup, #open_login, #tab_swts, #tab_swtl"));
const passInputs = Array.from(document.querySelectorAll("#sig_pass, #log_pass, #repeat_sigpass"));
const passToggles = Array.from(document.querySelectorAll("#sig_paswt, #log_paswt"));
const passCheckers = Array.from(document.querySelectorAll("#sm_le, #cp_le, #pas_num, #pas_len, #pasmt"));
const globalSigPass = passInputs.find(passInput => passInput.getAttribute("id") === "sig_pass")
const globalRepeatSigPass = passInputs.find(passInput => passInput.getAttribute("id") === "repeat_sigpass")
const auth1 = "auth_con";
const loga1 = "login_active";
const loga0 = "login_inactive";
const sina1 = "signup_active";
const sina0 = "signup_inactive";
const match1 = "bi-check2";
const match0 = "bi-x";
const pass1 = "pas_swt";
const pamatch1 = "pas_mt1";
const pamatch0 = "pas_mt0";

function killAuthWins() {
    authWins.forEach(win => {
        win.classList.remove(auth1);
        win.classList.add(h1);
    });
    authWinLaunchers.forEach(launcher => {
        launcher.classList.remove(loga0, loga1, sina0, sina1)
    });
}

function openAuthWin (win, launcherx, launchery, class1, class2) {
    killAuthWins();
    if (win.classList.contains(h1)) {
        win.classList.remove(h1);
        win.classList.add(auth1);
        launcherx.classList.add(class1);
        launchery.classList.add(class2);
    }
}

authWinLaunchers.forEach(launcher => {
    let win;
    let launcherx = authWinLaunchers.find(authWinLauncher => authWinLauncher.getAttribute("id") === "open_signup");
    let launchery = authWinLaunchers.find(authWinLauncher => authWinLauncher.getAttribute("id") === "open_login");
    launcher.addEventListener("click", function() {
        if (launcher.getAttribute("id") === "open_signup") {
            win = authWins.find(authWin => authWin.getAttribute("id") === "sign_up");
            openAuthWin(win, launcher, launchery, sina1, loga0);
        } else if (launcher.getAttribute("id") === "open_login") {
            win = authWins.find(authWin => authWin.getAttribute("id") === "log_in");
            openAuthWin(win, launcherx, launcher, sina0, loga1);
        } else if (launcher.getAttribute("id") === "tab_swts") {
            win = authWins.find(authWin => authWin.getAttribute("id") === "log_in");
            openAuthWin(win, launcherx, launchery, sina0, loga1);
        } else if (launcher.getAttribute("id") === "tab_swtl") {
            win = authWins.find(authWin => authWin.getAttribute("id") === "sign_up");
            openAuthWin(win, launcherx, launchery, sina1, loga0);
        }
    });


});

function togglePassword (input, toggle) {
    let type = input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);

    if (type == "password") {
        toggle.classList.remove("bi-eye-slash");
        toggle.classList.add("bi-eye");
    }
    else {
        toggle.classList.remove("bi-eye");
        toggle.classList.add("bi-eye-slash");
    }
}


passToggles.forEach(toggle => {
    let input; 
    toggle.addEventListener("click", function() {
        if (toggle.getAttribute("id") === "sig_paswt") {
            input = globalSigPass;
            togglePassword(input, toggle)
        } else if (toggle.getAttribute("id") === "log_paswt") {
            input = passInputs.find(passInput => passInput.getAttribute("id") === "log_pass");
            togglePassword(input, toggle);
        } else {
            console.log(toggle.getAttribute("id"));
        }
    });
});

function passScreening (item, pass) {
    if (pass) {
        item.classList.remove(pamatch0, match0);
        item.classList.add(pamatch1, match1)
    } else if (!pass) {
        item.classList.remove(pamatch1, match1);
        item.classList.add(pamatch0, match0)
    }
}

function passValidation (item, key, unique, repeatP) {
    if (!unique && !repeatP) {
        if (globalSigPass.value.match(key)) {
            passScreening(item, true);
        } else {
            passScreening(item, false);
        }
    } else if (unique) {
        if (globalSigPass.value.length >= key) {
            passScreening(item, true);
        } else {
            passScreening(item, false);
        }
    } else if (repeatP) {
        if (globalRepeatSigPass.value === globalSigPass.value) {
            passScreening(item, true);
        } else {
            passScreening(item, false);
        }
    }
}

globalSigPass.oninput = function() {
    passCheckers.forEach(item => {
        let key;
        if (item.getAttribute("id") === "sm_le") {
            key = /[a-z]/g;
            passValidation(item, key, false, false);
        } else if (item.getAttribute("id") === "cp_le") {
            key = /[A-Z]/g;
            passValidation(item, key, false, false);
        } else if (item.getAttribute("id") === "pas_num") {
            key = /[0-9]/g;
            passValidation(item, key, false, false);
        } else if (item.getAttribute("id") === "pas_len") {
            key = 8;
            passValidation(item, key, true, false);
        }else if (item.getAttribute("id") === "pasmt") {
            key = null;
            passValidation(item, key, false, true);
        } else {
            console.log(item.getAttribute("id"));
        }
    });
}

globalRepeatSigPass.oninput = function () {
    let item = passCheckers.find(checker => checker.getAttribute("id") === "pasmt");
    passValidation(item, null, false, true);
}

// faqs //
const faqBody = document.querySelectorAll("#faqBd");
const faqBtn = document.querySelectorAll("#open_faqbd");
const bplus = "bi-plus-lg";
const bminus = "bi-dash-lg";
const faq_bd1 = "faq_body";

function killFaqs() {
    faqBtn.forEach(function(element) {
        element.lastElementChild.classList.remove(bminus);
        element.lastElementChild.classList.add(bplus);
        element.classList.remove("faq_active");
        element.nextElementSibling.classList.remove(faq_bd1);
        element.nextElementSibling.classList.add(h1);
    });
}

for (let faq_count = 0; faq_count < faqBtn.length; faq_count++) {
    faqBtn[faq_count].addEventListener("click", function() {
        if (this.lastElementChild.classList.contains(bplus)) {
           
            if (this.nextElementSibling != null) {
                killFaqs();
                this.classList.add("faq_active");
                this.lastElementChild.classList.remove(bplus);
                this.lastElementChild.classList.add(bminus);
                this.nextElementSibling.classList.remove(h1);
                this.nextElementSibling.classList.add(faq_bd1);
            } else {
                console.log("no element found");
            }
        } else {
            if (this.nextElementSibling != null) {
                killFaqs();
            } else {
                console.log("no element found");
            }
        }
    });
}

// payment
const launchOder = document.getElementById("open_order");
const launchShip = document.getElementById("open_ship");
const launchCheckout = document.getElementById("open_checkout");
const checkoutWin = document.getElementById("checkout");
const shipWin = document.getElementById("shipping");
const orderWin = document.getElementById("order");
const basicUi = document.getElementById("basic_ui");
const advanceUi = document.getElementById("advance_ui");
const orderItem = document.querySelectorAll(".order_item");
const backward = document.querySelectorAll(".backward");
const forward = document.querySelector(".next");
const ship_name_inp = document.querySelector("input[name='full_name']");
const package_inp = document.querySelector("input[name='package_type']");
const item_type_inp = document.querySelector("input[name='item_type']");
const item_price_inp = document.querySelector("input[name='item_price']");
const deliv_date_inp = document.querySelector("input[name='delivery_datetime']");
const platform_inp = document.querySelector("select[name='delivery_platform']");
const plat_user_inp = document.querySelector("input[name='platform_username']");
const checkout_price = document.querySelector(".checkout_amount");
const credit_exp_inp = document.querySelector("input[name='credit_exp']");
const purchaseWinList = [orderWin, shipWin, checkoutWin];
const item_launch_list = [launchOder, launchShip, launchCheckout];
const ship_input_list = [ship_name_inp, package_inp, item_type_inp, item_price_inp, deliv_date_inp, plat_user_inp];
const big_ellip = "ellipse_bg";
const small_ellip = "ellipse_sm";
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const months = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let package_type = "";
let item_price = "";
let item_type = "";
let delivery_date = "";
let time_frame;
let current_ellip;
let package_dic = {};
let dates = [];
let years = [];
let local_date = new Date()
let current_month = months[local_date.getMonth()];
let current_year = local_date.getFullYear();
let max_years = current_year + 11;
let credit_exp_value = current_year.toString();

for (let date = 1; date <= 31; date++) {
    dates.push(date);
}

for (let year = current_year; year <= max_years; year++) {
    years.push(year);
}

function killEllipPurchase() {
    for (let ellipIndex = 0; ellipIndex < item_launch_list.length; ellipIndex++) {
        const ellip = item_launch_list[ellipIndex];
        ellip.classList.remove(big_ellip);
        ellip.classList.add(small_ellip);
        const purchase = purchaseWinList[ellipIndex];
        purchase.classList.remove("card_con", "ship_con", "checkout_con");
        purchase.classList.add(h1);
    }
}

function ellipAnim() {
    item_launch_list[current_ellip].classList.remove(small_ellip);
    item_launch_list[current_ellip].classList.add(big_ellip);
}

function openOrderWin() {
    current_ellip = 0;
    ellipAnim();
    orderWin.classList.remove(h1);
    orderWin.classList.add("card_con");
}

function openShipWin() {
    current_ellip = 1;
    ellipAnim();
    shipWin.classList.remove(h1);
    shipWin.classList.add("ship_con");
}

function openCheckoutWin() {
    current_ellip = 2;
    ellipAnim();
    checkoutWin.classList.remove(h1);
    checkoutWin.classList.add("checkout_con");
}

// for developers.
item_launch_list.forEach(itemwin => {
    itemwin.onclick = function() {
        if (itemwin == item_launch_list[0]) {
            killEllipPurchase();
            openOrderWin();
        }
        if (itemwin == item_launch_list[1]) {
            killEllipPurchase();
            openShipWin();
        }
        if (itemwin == item_launch_list[2]) {
            killEllipPurchase();
            openCheckoutWin();
        }
    }
});

function package_list() {
    package_dic = {package_type, item_type, item_price, delivery_date};
    package_inp.value = package_dic.package_type;
    item_type_inp.value = package_dic.item_type;
    item_price_inp.value = package_dic.item_price;
    deliv_date_inp.value = package_dic.delivery_date;
    checkout_price.value = package_dic.item_price;
}

function getDeliveryDate() {
    if (time_frame >= 2) {
        delivery_date = time_frame.toString() + " " + "days";
    } else {
        delivery_date = time_frame.toString() + " " + "day";
    }
    // for developers
    // const local_date = new Date();
    // const current_month = months[local_date.getMonth()];
    // const current_day = days[local_date.getDay()];
    // const current_date = local_date.getDate();
    // const current_year = local_date.getFullYear();
    // delivery_date = current_day + " " + current_date.toString() + " " + current_month + " " + current_year;
}

orderItem.forEach(item => {
    item.onclick = function() {
        if (item == orderItem[0]) {
            console.clear();
            package_type = "basic";
            item_type = basicUi.value;
            item_price = "$ 50";
            time_frame = 3;
            getDeliveryDate();
            package_list();
            killEllipPurchase();
            openShipWin();
        }
        if (item == orderItem[1]) {
            console.clear();
            package_type = "advance";
            item_type = advanceUi.value;
            item_price = "$ 150";
            time_frame = 2;
            getDeliveryDate();
            package_list();
            killEllipPurchase();
            openShipWin();
        }
        if (item == orderItem[2]) {
            console.clear();
            package_type = "premium";
            item_type = "light theme, dark theme";
            item_price = "$ 300";
            time_frame = 1;
            getDeliveryDate();
            package_list();
            killEllipPurchase();
            openShipWin();
        }
    }
});

backward.forEach(function(back){
    back.onclick = function() {
        package_list();
        if (back == backward[0]) {
            killEllipPurchase();
            openOrderWin();
        }
        if (back == backward[1]) {
            killEllipPurchase();
            openShipWin();
        }
    }
});

forward.onclick = function() {
    if (ship_name_inp.value, package_inp.value, plat_user_inp.value != "") {
        if (ship_name_inp.value.length, plat_user_inp.value.length >= 3) {
            if (ship_name_inp.value.length, plat_user_inp.value.length <= 24) {
                killEllipPurchase();
                openCheckoutWin();
            } else {
                alert("Full name and Platform username can not be more than 24 letters");
            }
        } else {
            alert("Full name and Platform username can not be less than 3 letters");
        }
    } else {
        alert("please fill the shipping form");
    }
    
}

// Store the regexes as globals so they're cached and not re-parsed on every call:
const credit_inp  = document.querySelector("input[name='credit_number']");
const credit_type_inp  = document.querySelector("select[name='credit_type']");
const cvv_inp = document.querySelector("input[name='cvv']");
const confirm_checkout  = document.querySelector("input[name='checkout']");
const visaPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
const mastPattern = /^(?:5[1-5][0-9]{14})$/;
// /^(?:5[1-5][0-9]{2}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4})$/
const amexPattern = /^(?:3[47][0-9]{13})$/;
const discPattern = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
const cvvPattern = /^([0-9]{3})$/;

function validateCreditCardNumber() {
    let credit_inp_raw_value = credit_inp.value;
    let credit_inp_value = credit_inp_raw_value.replace(/\s+/g, "");

    let isVisa = visaPattern.test(credit_inp_value) === true;
    let isMast = mastPattern.test(credit_inp_value) === true;
    let isAmex = amexPattern.test(credit_inp_value) === true;
    let isDisc = discPattern.test(credit_inp_value) === true;

    if( isVisa || isMast || isAmex || isDisc ) {
        // at least one regex matches, so the card number is valid.

        if(isVisa) {
            credit_type_inp.value = "visa";
        }
        else if(isMast) {
            credit_type_inp.value = "master";
        }
        else if(isAmex) {
            credit_type_inp.value = "amex";
        }
        else if(isDisc) {
            credit_type_inp.value = "discover";
        }
    }
    else {
        credit_type_inp.value = "search";
    }
}
credit_inp.addEventListener("input", validateCreditCardNumber);


function validateCvv() {
    let cvv_raw_value = cvv_inp.value;
    let cvv_value = cvv_raw_value.replace(/\s+/g, "");
    let isCvv = cvvPattern.test(cvv_value) === true;

    if (isCvv) {
        console.log(cvv_value);
    } else {
        // alert("cvv is invalid");
    }
}
confirm_checkout.addEventListener("click", validateCvv);

const expMonths = document.getElementById("exp_months");
const expYears = document.getElementById("exp_years");
let exp_year_val = "";
let exp_month_val = "";
const month_var = {
    January : "01",
    Febraury : "02",
    March : "03",
    April : "04",
    May : "05",
    June : "06",
    July : "07",
    August : "08",
    September : "09",
    October : "10",
    November : "11",
    December : "12",
};

function killAllExpMonthActive() {
    const expMonthChildren = expMonths.children;
    for (const expMonthChild of expMonthChildren) {
        expMonthChild.classList.remove("exp_active");
    }
}

function killAllExpYearActive() {
    const expYearChildren = expYears.children;
    for (const expYearChild of expYearChildren) {
        expYearChild.classList.remove("exp_active");
    }
}

function createExpElements() {
    let month_count = 0;
    months.forEach(month => {
        month_count++;
        const newExp = document.createElement("p");
        newExp.setAttribute("id", month);
        newExp.setAttribute("class", "exp_month");
        const newExpContent = document.createTextNode(`${month} ${'('} ${month_var[month]} ${')'}`);
        newExp.appendChild(newExpContent);

        expMonths.appendChild(newExp);

        if (month === current_month) {
            document.getElementById(month).classList.add("exp_active");
        }
        document.getElementById(month).onclick = function() {
            console.clear();
            exp_month_val = month_var[month];
            killAllExpMonthActive();
            this.classList.add("exp_active");
            // console.log(this.innerHTML);
            // console.log(months.indexOf(month));
        }
    });

    let year_count = 0;
    years.forEach(year => {
        const newExp = document.createElement("p");
        newExp.setAttribute("id", year);
        newExp.setAttribute("class", "exp_year");
        const newExpContent = document.createTextNode(year);
        newExp.appendChild(newExpContent);

        expYears.appendChild(newExp);

        if (year === current_year) {
            document.getElementById(year).classList.add("exp_active");
        }
        document.getElementById(year).onclick = function() {
            console.clear();
            let year_var = year.toString();
            exp_year_val = year_var[2] + year_var[3];
            killAllExpYearActive();
            this.classList.add("exp_active");
        }
    });
}
createExpElements();

const expWin = document.querySelector(".exp_input");
const expMenuWin = document.getElementById("exp_menu");
const close_exp = document.querySelector(".exp_exit");
const submit_exp = document.querySelector(".exp_submit");
let isExpOpen = 0;
let isExpValueEmpty = 0;
let temp_exp_val = "";
function closeExpMenu() {
    expMenuWin.classList.remove("exp_values");
    expMenuWin.classList.add(h1);
    isExpOpen = 0;
}
function toggleExpMenu() {
    if (isExpOpen == 0 && expMenuWin.classList.contains(h1)) {
        expMenuWin.classList.remove(h1);
        expMenuWin.classList.add("exp_values");
        isExpOpen = 1;
    } else {
        closeExpMenu();
    }
}
expWin.addEventListener("click", toggleExpMenu);
close_exp.addEventListener("click", closeExpMenu);

if (isExpValueEmpty == 0) {
    exp_month_val = month_var[current_month];
    let temp_current_year = current_year.toString();
    exp_year_val = temp_current_year[2] + temp_current_year[3];
    temp_exp_val = `${exp_month_val} ${" / "} ${exp_year_val}`;
    credit_exp_inp.setAttribute("placeholder", temp_exp_val);
}

function fillExpInp() {
    temp_exp_val = `${exp_month_val} ${" / "} ${exp_year_val}`;
    credit_exp_inp.value = temp_exp_val;
    isExpValueEmpty = 1;
    closeExpMenu();
}
submit_exp.addEventListener("click", fillExpInp);

//////////////////////////////////////////////////
// const notice = document.getElementById("notice");
// setTimeout(function () {
//     notice.classList.remove(".above_header");
//     notice.classList.add(h1);
// }, 20000);

window.onscroll = function() {
    stickyHeader();
    showToTop();
}