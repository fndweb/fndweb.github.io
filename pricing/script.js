// theming
const rootElems = document.documentElement;
const rootElems1 = document.body;
const myTheme = document.querySelector("#my_theme");

const root_elemes_list = [rootElems, rootElems1];
const h1 = "hidden";

const light = "rgb(255, 255, 255)";
const dark = "rgb(0, 0, 0)";
const dark_c = "rgb(61, 57, 53)";
const light_i = "bi-brightness-high";
const dark_i = "bi-moon";
const dark_h = "rgb(104, 197, 188)";
const light_h = "rgb(31, 111, 97)";

function changeTheme() {
    if (myTheme.classList.contains(light_i)) {
        for (const root_elem of root_elemes_list) {
            root_elem.style.setProperty("--theme-parent", light);
            root_elem.style.setProperty("--theme-child", light);
            root_elem.style.setProperty("--theme-text", dark);
            root_elem.style.setProperty("--theme-bold", light_h);
        }
        myTheme.classList.remove(light_i);
        myTheme.classList.add(dark_i);
    }

    else {
        for (const root_elem of root_elemes_list) {
            root_elem.style.setProperty("--theme-parent", dark);
            root_elem.style.setProperty("--theme-child", dark_c);
            root_elem.style.setProperty("--theme-text", light);
            root_elem.style.setProperty("--theme-bold", dark_h);
        }
        myTheme.classList.remove(dark_i);
        myTheme.classList.add(light_i);
    }
}
myTheme.addEventListener("click", changeTheme);

// Design
const des_launc = document.querySelectorAll("#op_des");
const desw = document.querySelectorAll("#des"); 

function killAllDesw() {
    desw.forEach(elem => {
        elem.classList.remove("design");
        elem.classList.add(h1);
    });
    des_launc.forEach(elem => {
        elem.classList.remove("design-active");
    });
}

for (let i = 0; i < des_launc.length; i++) {
    des_launc[i].onclick = function() {
        killAllDesw();
        desw[i].classList.remove(h1);
        desw[i].classList.add("design");
        des_launc[i].classList.add("design-active");
    }
}

// switches
const switchWin = Array.from(document.querySelectorAll(".swt-1, .swt-2"));
const switches = Array.from(document.querySelectorAll(".swt1-on, .swt1-off"))
const swt1_on = "rgb(0, 95, 79)";
const swt1_off = "rgb(0, 95, 79, 0.316)";



const validateSwitch = (toggleSwitch) => {
    let key;
    switches.forEach(swt => {
        swt.addEventListener("click", function () {
            if (swt === switches[0]) {
                key = switches[1];
                toggleSwitch(swt, key, true, false);
            } else if (swt === switches[1]) {
                key = switches[0];
                toggleSwitch(swt, key, false, true);
            } else if (swt === switches[2]) {
                key = switches[3];
                toggleSwitch(swt, key, true, false);
            } else if (swt === switches[3]) {
                key = switches[2];
                toggleSwitch(swt, key, false, true);
            } else {
                console.log(swt);
            }
        });
    });
};

validateSwitch((element, key, on, off) => {
    if (on) {
        key.style.color = "var(--theme-bold)";
        element.style.color = "var(--theme-parent)";
        element.nextElementSibling.classList.remove("tog1-rt");
        element.nextElementSibling.classList.add("tog1-lf");
        element.parentElement.style.setProperty("--theme-light", swt1_off);
    } else if (off) {
        key.style.color = "var(--theme-parent)";
        element.style.color = "var(--theme-parent)";
        element.previousElementSibling.classList.remove("tog1-lf");
        element.previousElementSibling.classList.add("tog1-rt");
        element.parentElement.style.setProperty("--theme-light", swt1_on);
    } else {
        console.log(`${element} ${key}`);
    }
});
