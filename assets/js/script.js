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
const closeNavBtn = document.querySelector(".close_nav");

function closeNav() {
    myNavMenu.style.width = "0";
    my_nav_overlay.classList.remove("auto_close_nav");
    my_nav_overlay.classList.add(h1);
}
closeNavBtn.addEventListener("click", closeNav);
my_nav_overlay.addEventListener("click", closeNav);

function openNav() {
    myNavMenu.style.width = "50%";
    my_nav_overlay.classList.remove(h1);
    my_nav_overlay.classList.add("auto_close_nav");
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
    authWinLaunchers.forEach(launcher => launcher.classList.remove(loga0, loga1, sina0, sina1));
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
const bplus = "bi-chevron-down";
const bminus = "bi-chevron-up";
const faq_bd1 = "faq_body";

function killFaqs() {
    faqBtn.forEach(function(element) {
        element.lastElementChild.classList.remove(bminus);
        element.lastElementChild.classList.add(bplus);
        element.classList.remove("active");
        element.nextElementSibling.classList.remove(faq_bd1);
        element.nextElementSibling.classList.add(h1);
    });
}

for (let faq_count = 0; faq_count < faqBtn.length; faq_count++) {
    faqBtn[faq_count].addEventListener("click", function() {
        if (this.lastElementChild.classList.contains(bplus)) {
           
            if (this.nextElementSibling != null) {
                killFaqs();
                this.classList.add("active");
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
// navigators
const paymentWins = Array.from(document.querySelectorAll("#order, #shipping, #checkout"));
const payWinLaunch = Array.from(document.querySelectorAll("#open_order, #open_ship, #open_checkout"));
const payWinBtn = Array.from(document.querySelectorAll(".back, .next"));

payWinBtn.forEach(btn => {
    let launcher;
    let win;
    let key;
    btn.addEventListener("click", function () {
        if (btn === payWinBtn[0] && btn.getAttribute("class") === "back") {
            key = "card_con"
            launcher = payWinLaunch.find(element => element.getAttribute("id") === "open_order");
            win = paymentWins.find(paymentWin => paymentWin.getAttribute("id") === "order");
            launchPaymentWin(win, launcher, key);
        } else if (btn === payWinBtn[1] && btn.getAttribute("class") === "next") {
            key = "checkout_con"
            launcher = payWinLaunch.find(element => element.getAttribute("id") === "open_checkout");
            win = paymentWins.find(paymentWin => paymentWin.getAttribute("id") === "checkout");
            launchPaymentWin(win, launcher, key);
        } else if (btn === payWinBtn[2] && btn.getAttribute("class") === "back") {
            key = "ship_con"
            launcher = payWinLaunch.find(element => element.getAttribute("id") === "open_ship");
            win = paymentWins.find(paymentWin => paymentWin.getAttribute("id") === "shipping");
            launchPaymentWin(win, launcher, key);
        } else {
            console.log(btn);
        }
    });
});

function killEllip () {
    payWinLaunch.forEach(launcher => launcher.classList.remove("ellipse_bg"));
}

function killPayWin () {
    paymentWins.forEach(win => {
        win.classList.remove("card_con", "ship_con", "checkout_con");
        win.classList.add(h1);
    });
}

function launchPaymentWin (win, launcher, key) {
    killEllip();
    killPayWin();
    
    launcher.classList.add("ellipse_bg");
    win.classList.remove(h1);
    win.classList.add(key);
}

payWinLaunch.forEach(launcher => {
    let key;
    let win;
    launcher.addEventListener("click", function () {
        if (launcher.getAttribute("id") === "open_order") {
            key = "card_con";
            win = paymentWins.find(paymentWin => paymentWin.getAttribute("id") === "order");
            launchPaymentWin(win, launcher, key);
        } else if (launcher.getAttribute("id") === "open_ship") {
            key = "ship_con";
            win = paymentWins.find(paymentWin => paymentWin.getAttribute("id") === "shipping");
            launchPaymentWin(win, launcher, key);
        } else if (launcher.getAttribute("id") === "open_checkout") {
            key = "checkout_con";
            win = paymentWins.find(paymentWin => paymentWin.getAttribute("id") === "checkout");
            launchPaymentWin(win, launcher, key);
        } else {
            console.log(launcher.getAttribute("id"));
        }
    });
});

// order
const orderButtons = Array.from(document.querySelectorAll(".card-button"));
const orderInps = Array.from(document.querySelectorAll("#package, #delivery, #package_price"))

// Fetching data using fetch API 
fetch('assets/json/card_price.json').then(response => {

    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }

    return response.json();
}).then(data => {
    setTimeout(() => {
        setOrderBtns(data, globalExpData);
    }, 1000);
}).catch(err => {
    console.log(err.message);
});

function setOrderBtns (card_data, time_data) {
    orderButtons.forEach(btn => {
        const key = "ship_con"
        const launcher = payWinLaunch.find(element => element.getAttribute("id") === "open_ship");
        const win = paymentWins.find(paymentWin => paymentWin.getAttribute("id") === "shipping");
        btn.addEventListener("click", function () {
            launchPaymentWin(win, launcher, key);

            if (btn === orderButtons[0]) {
                getPackageData(card_data, 0, time_data.days, 3);
            } else if (btn === orderButtons[1]) {
                getPackageData(card_data, 1, time_data.days, 2);
            } else if (btn === orderButtons[2]) {
                getPackageData(card_data, 2, time_data.days, 1);
            } else {
                console.log(btn);
            }
        });
    });
}

function getPackageData (card_data, index, time_data, duration) {
    const local_date = new Date()

    let day_index = local_date.getDay() + duration;

    if (day_index > 6) {
        day_index = day_index - 7;
    }

    const package_delivery = time_data[day_index];
    const package_type = card_data[index].package_type;
    const package_price = `$ ${card_data[index].price}`;

    setPackageData(package_type, package_price, package_delivery);
}

function setPackageData (package_type, package_price, package_delivery) {
    orderInps.forEach(inp => {
        if (inp.getAttribute("id") === "package") {
            inp.value = package_type;
        } else if (inp.getAttribute("id") === "delivery") {
            inp.value = package_delivery;
        } else if (inp.getAttribute("id") === "package_price") {
            inp.value = package_price;
        } else {
            console.log(inp.getAttribute("id"));
        }
    });
}

// 

const custom_selects = Array.from(document.querySelectorAll("#customSelect"));
const selectWins = Array.from(document.querySelectorAll("#platforms, #expiryDates"));
const platOpt = Array.from(document.querySelectorAll("#platforms > i"));


function ToggleSelectWin (win, select, key, active) {
    if (active) {
        win.classList.remove(key);
        win.classList.add(h1);
        select.classList.remove("bi-chevron-up");

        setTimeout(() => {
            select.classList.add("bi-chevron-right");
        }, 50);

        setTimeout(() => {
            select.classList.remove("bi-chevron-right");
        }, 100);

        setTimeout(() => {
            select.classList.add("bi-chevron-down");
        }, 150);

    } else if (!active) {
        win.classList.remove(h1);
        win.classList.add(key);
        select.classList.remove("bi-chevron-down");

        setTimeout(() => {
            select.classList.add("bi-chevron-right");
        }, 50);

        setTimeout(() => {
            select.classList.remove("bi-chevron-right");
        }, 100);

        setTimeout(() => {
            select.classList.add("bi-chevron-up");
        }, 150);
        
    }
}

function getSelectWin (select, selectInp) {
    let key;
    selectWins.forEach(win => {

        if (win === select.nextElementSibling) {
            if (win.getAttribute("id") === "platforms") {
                key = "platforms";
                win.addEventListener("mouseleave", getLastHover);
                if (win.classList.contains(key)) {
                    ToggleSelectWin(win, select, key, true);
                } else {
                    getLastClick(select, key, platOpt, undefined);
                    ToggleSelectWin(win, select, key, false);
                }
            } else if (win.getAttribute("id") === "expiryDates") {
                key = "expiry_dates";
                if (win.classList.contains(key)) {
                    ToggleSelectWin(win, select, key, true);
                } else {
                    getLastClick(select, key, globalExpOpt, globalExpOptValue);
                    ToggleSelectWin(win, select, key, false);
                }
            } else {
                console.log(win.getAttribute("id"));
            }
        }
    });
}

custom_selects.forEach(select => {
    select.addEventListener("click", function () {

        getSelectWin(select);
    });

    const selectInp = select.previousElementSibling;
    selectInp.addEventListener("click", function () {
        
        getSelectWin(selectInp.nextElementSibling);
    });
});


// mouse event
/*
"opt" attribute is a childElemet of "select window". 

Example of 'opt';

<div id="platforms" class="hidden">
    <i class="bi bi-whatsapp active">Whatsapp</i>
    <i class="bi bi-telegram">Telegram</i>
    <i class="bi bi-messenger">Messanger</i>
</div>

from example above;

'<div>#platforms' = 'select window'
'<i> = 'opt'

*/


/*
auto updating functions for 'mouse event' begin here.
*/

let globalOpt;
let globalLastHoveredOpt;

function addActive (opt) {
    globalLastHoveredOpt = opt;
    opt.classList.add("active");
}

function removeActive () {
    globalOpt.classList.remove("active");
}

function removeAllActive (opt_list) {
    opt_list.forEach(opt => opt.classList.remove("active"));
}

// mouse hover event listerner
/*
    usage: call mouseEnter(opt) in function. 

    note: this function adds "mouseleave event"
*/
function mouseEnter (opt) {
    globalOpt = opt;
    addActive(opt);
    opt.addEventListener("mouseleave", removeActive);
}

// mouse click event listerner
/*
    usage: call mouseClick(opt) in function. 
*/
function mouseClick (opt) {
    opt.removeEventListener("mouseleave", removeActive);
    addActive(opt);
}

// fixes bug that comes when "select window" is closed with no item selected.
function getLastClick (select, key, opt_list, opt_value) {
    if (key === "platforms") {
        const selectInp = select.previousElementSibling;
        const selectInpValue = selectInp.value;
        const opt = opt_list.find(element => element.innerHTML === selectInpValue);
        removeAllActive(opt_list);
        mouseClick(opt);
    } else if (key === "expiry_dates") {
        if (opt_list, opt_value !== undefined) {
            if (opt_list.length == 2 && opt_value.length == 2) {
                opt_list.forEach(arr => {
                    if (arr ===  opt_list[0]) {
                        const opt = arr.find(element => element.getAttribute("id") == opt_value[0]);
                        removeAllActive(arr);
                        mouseClick(opt);
                    } else if (arr === opt_list[1]) {
                        const opt = arr.find(element => element.getAttribute("id") == opt_value[1]);
                        removeAllActive(arr);
                        mouseClick(opt);
                    }
                });
            }
        }
        
    }
}

function getLastHover () {
    if (globalLastHoveredOpt !== undefined) {
        globalLastHoveredOpt.classList.add("active");
    }
}

function toggleOpts (win, key) {
    const select = win.previousElementSibling;
    
    ToggleSelectWin(win, select, key, true);
}


/*
auto updating functions for "mouse event" end here
*/


/*
add "opt's" here with "for loops"

note: use separate "for loops" for every 'opt' list 
*/

function setSelectInpValue (win, key, value, exp_index, set_month, set_year) {
    const select = win.previousElementSibling;
    const selectInp = select.previousElementSibling;

    if (key === "platforms") {
        selectInp.value = value;
    } else if (key === "expiry_dates") {
        globalExpOptValue.length = 0;
        globalExpOptValue.push(set_month, set_year);
        selectInp.value = `${exp_index.month_index[set_month]} ${'/'} ${exp_index.year_index[set_year]}`;
    }
}

platOpt.forEach(opt => {
    const key = "platforms";

    opt.addEventListener("mouseenter", function () {
        removeAllActive(platOpt);
        mouseEnter(opt);
    });

    opt.addEventListener("click", function() {
        removeAllActive(platOpt);
        mouseClick(opt);

        const value = opt.innerHTML;
        
        const win = opt.parentElement;

        setSelectInpValue(win, key, value, null, null);

        toggleOpts(win, key);
    });
});

// credit card validation
const creditCardInp = document.querySelector("#card_number");
const creditCardType = document.querySelector("#card_type");
const creditCardCvv = document.querySelector("#card_cvv");

const visaPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
const mastPattern = /^(?:5[1-5][0-9]{14})$/;
// /^(?:5[1-5][0-9]{2}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4})$/
const amexPattern = /^(?:3[47][0-9]{13})$/;
const discPattern = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
const cvvPattern = /^([0-9]{3})$/;

function setCardType (type) {
    creditCardType.setAttribute("src", type);
}

creditCardInp.addEventListener("input", function () {
    let raw_card_number = creditCardInp.value;
    let card_number = raw_card_number.replace(/\s+/g, "");
    let card_type;

    let isVisa = visaPattern.test(card_number) === true;
    let isMast = mastPattern.test(card_number) === true;
    let isAmex = amexPattern.test(card_number) === true;
    let isDisc = discPattern.test(card_number) === true;

    if( isVisa || isMast || isAmex || isDisc ) {
        // at least one regex matches, so the card number is valid.
        if (isVisa) {
            card_type = "./assets/images/visa.svg";
            setCardType(card_type);
        } else if (isMast) {
            card_type = "./assets/images/mastercard.svg";
            setCardType(card_type)
        } else if(isAmex) {
            card_type = "./assets/images/amex.svg";
            setCardType(card_type)
        } else if(isDisc) {
            card_type = "./assets/images/discover.svg";
            setCardType(card_type)
        }
    } else {
        card_type = "./assets/images/search.gif";
        setCardType(card_type)
    }
});

creditCardCvv.addEventListener("input", function() {
    let raw_card_cvv = creditCardCvv.value;
    let card_cvv = raw_card_cvv.replace(/\s+/g, "");
    
    let isCorrectCvv = cvvPattern.test(card_cvv) === true;

    if (isCorrectCvv) {
        console.log(card_cvv);
    }
});

// create card expiry dates
// fetching data using Promise
const getExpData = (resource) => {

    return new Promise((resolve, reject) => {
        
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4) {
                reject('error getting resource');
            }
        });

        request.open("GET", resource);
        request.send();
    });
};

let globalExpData;

if (globalExpData === undefined) {
    getExpData('assets/json/exp_data.json').then(data => {
        globalExpData = data;
    }).catch(err => {
        console.log(err);
    });
}

// Fetching data using fetch API 
fetch('assets/json/exp_index.json').then(response => {

    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }

    return response.json();
}).then(data => {
    if (globalExpData !== undefined) {       
        createExpElements(globalExpData, data);
    }
}).catch(err => {
    console.log(err.message);
});

const expWins = Array.from(document.querySelectorAll(".expiry_months, .expiry_years"));

expWins.forEach(win => win.addEventListener("mouseleave", getLastHover));

const expInp = document.querySelector("#card_exp_date");
const globalExpOpt = [];
const globalExpOptValue = [];

function createExpElements (exp_data, exp_index) {
    const local_date = new Date();
    const current_month = exp_data.months[local_date.getMonth()];
    const current_year = local_date.getFullYear();
    const key = "expiry_dates";
    const win = expWins[0].parentElement;
    let month_click = false;
    let year_click = false;

    let set_month = current_month;
    let set_year = current_year

    globalExpOptValue.push(set_month, set_year);
                    
    if (!month_click && !year_click) {
        setSelectInpValue(win, key, null, exp_index, set_month, set_year);
    }
    
    exp_data.months.forEach(month => {
        const exp_month = document.createElement("i");
        exp_month.setAttribute("id", month);
        exp_month.setAttribute("class", "expiry_month");
        const exp_month_text = document.createTextNode(`${month} ${'('}${exp_index.month_index[month]}${')'}`);
        exp_month.appendChild(exp_month_text);

        expWins[0].appendChild(exp_month);

        if (expWins[0].childElementCount === 12) {
            const child_elements = Array.from(expWins[0].querySelectorAll("i"));

            globalExpOpt.push(child_elements);

            child_elements.forEach(opt => {
                opt.addEventListener("mouseenter", function () {
                    removeAllActive(child_elements);
                    mouseEnter(opt);
                });
        
                opt.addEventListener("click", function () {
                    removeAllActive(child_elements);
                    mouseClick(opt);

                    set_month = opt.getAttribute("id");

                    setSelectInpValue(win, key, null, exp_index, set_month, set_year);

                    month_click = true;

                    if (month_click && year_click) {
                        toggleOpts(win, key)
                        month_click = year_click = false;
                        if (month_click === false) {
                            console.log(month_click, year_click);
                        }
                    }
                });
            });
        }
    });

    exp_data.years.forEach(year => {
        const exp_year = document.createElement("i");
        exp_year.setAttribute("id", year);
        exp_year.setAttribute("class", "expiry_year");
        const exp_year_text = document.createTextNode(`${year} ${'('}${exp_index.year_index[year]}${')'}`);
        exp_year.appendChild(exp_year_text);

        expWins[1].appendChild(exp_year);

        if (expWins[1].childElementCount === 12) {
            const child_elements = Array.from(expWins[1].querySelectorAll("i"));

            globalExpOpt.push(child_elements);

            child_elements.forEach(opt => {
                opt.addEventListener("mouseenter", function () {
                    removeAllActive(child_elements);
                    mouseEnter(opt);
                });
        
                opt.addEventListener("click", function () {
                    removeAllActive(child_elements);
                    mouseClick(opt);

                    set_year = opt.getAttribute("id");
                    
                    setSelectInpValue(win, key, null, exp_index, set_month, set_year);

                    year_click = true

                    if (month_click && year_click) {
                        toggleOpts(win, key)
                        year_click = month_click = false;
                    }
                });
            });
        }
    });
}

window.onscroll = function() {
    stickyHeader();
    showToTop();
}

// side notes
// Async & Await
/*
    const getTodos = async () => {
        const response = await fetch("assets/exp_data.json");

        if (response.status !== 200) {
            throw new Error('cannot fetch the data');
        }
        
        const data = await response.json()
        return data;
    };

    getTodos()
        .then(data => console.log("resolved", data))
        .catch(err => console.log("rejected", err.message));
*/

// const getTodos = (resource, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if(request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         } else if(request.readyState === 4) {
//             callback('could not fetch data', undefined);
//         }
//     });

//     request.open("GET", resource);
//     request.send();
// };

// getTodos('assets/exp_data.json', (err, data) => {
//     console.log(data);
//     getTodos('assets/exp_index.json', (err, data) => {
//         console.log(data);
//         getTodos('assets/card_price.json', (err, data) => {
//             console.log(data);
//         });
//     });
// });
//

// using Promise
// const getTodosP = (resource) => {

//     return new Promise((resolve, reject) => {
        
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             if(request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             } else if(request.readyState === 4) {
//                 reject('error getting resource');
//             }
//         });

//         request.open("GET", resource);
//         request.send();
//     });
// };

// getTodosP('assets/exp_data.json').then(data => {
//     console.log(data);
//     return getTodosP('assets/exp_index.json');
// }).then(data => {
//     console.log(data);
//     return getTodosP('assets/card_price.json');
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });