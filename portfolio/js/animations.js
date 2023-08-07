// post con
const postCon = document.querySelector("#post-no-wide");
const postConWide = document.querySelector("#post-wide");
const postConWideOverlay = document.querySelector("#post-wide");

// head body and foot con
const postHeightCon = document.getElementById("post-height");

// poster height
const postHeight1 = document.getElementById("post-height-1");
const postHeight2 = document.getElementById("post-height-2");
const postHeight3 = document.getElementById("post-height-3");

// poster slideshow
const postSlide1 = document.getElementById("post-slide-1");
const postSlide2 = document.getElementById("post-slide-2");
const postSlide3 = document.getElementById("post-slide-3");

// post body
const postBodySlide1 = document.getElementById("post-body-slide-1");
const postBodySlide2 = document.getElementById("post-body-slide-2");
const postBodySlide3 = document.getElementById("post-body-slide-3");

// poster 1
const posts1 = document.querySelector("#post-no-wide-1");
const posts2 = document.querySelector("#post-no-wide-2");
const posts3 = document.querySelector("#post-no-wide-3");

// post body
const postsBody1 = document.querySelector("#post-body-no-wide-1");
const postsBody2 = document.querySelector("#post-body-no-wide-2");
const postsBody3 = document.querySelector("#post-body-no-wide-3");

// poster 2
const postsA = document.querySelector("#post-wide-1");
const postsB = document.querySelector("#post-wide-2");
const postsC = document.querySelector("#post-wide-3");

// post body
const postsBodyA = document.querySelector("#post-body-wide-1");
const postsBodyB = document.querySelector("#post-body-wide-2");
const postsBodyC = document.querySelector("#post-body-wide-3");

// poster 3
const postsR = document.querySelector("#post-wide-overlay-1");
const postsS = document.querySelector("#post-wide-overlay-2");
const postsT = document.querySelector("#post-wide-overlay-3");

// post body
const postsBodyR = document.querySelector("#post-body-wide-overlay-1");
const postsBodyS = document.querySelector("#post-body-wide-overlay-2");
const postsBodyT = document.querySelector("#post-body-wide-overlay-3");

// image wide overlay
const postsBodyImageR = document.querySelector("#blur-con-1");
const postsBodyImageS = document.querySelector("#blur-con-2");
const postsBodyImageT = document.querySelector("#blur-con-3");

// overlay
const overlayCon = document.querySelector("#overlay-con");
const blurCon = document.querySelector("#blur-con");
const mainOverlayCon = document.querySelector("#main-overlay-con");

// import anime launchers
const launchNovela = document.getElementById("novela");

// import anime  killer
const closeAnime = document.querySelectorAll(".close-anime");

// animes
const novela = document.getElementById("novela-con");

// posters
let pA = "posters";
let p1 = "poster-1";
let p2 = "poster-2";
let p3 = "poster-3";

// visibility
let v1 = "visible";
let v0 = "invisible";

// blur
let b1 = "blur";
let b0 = "no-blur";
let mov1 = "main-overlay";

// image
let img1 = "poster-body";

// hidden 
let h1 = "hidden";

// lifter 
let l1 = "lifters";

// lifter 
let lA = "lifters";

// img wide
let w1 = "widens";
let n1 = "novelas";

// height class
let makeHFBg = "make-hf-big";
let makeHFSml = "make-hf-small";
let makeBBg = "make-b-big";
let makeBSml = "make-b-small";
let raisePoster = "raise-poster";
let makeBright = "make-bright";
let makeDull = "make-dull";

// add slider
let slideIndex = 0;
let slideIndexG = 0;
let slideIndexHeight = 0;

// add slider A
let slideIndexA = 0;
let activateA = 0;

// add slider R
let slideIndexR = 0;

// loader
const postHeightList = [postHeight1, postHeight2, postHeight3];
const headFootList = [postHeight1.children[0], postHeight1.children[2]];
const postBodyHeight = postHeight1.children[1];

let allElementList = [[postHeightCon.querySelectorAll('#post-head-height')], [postHeightCon.querySelectorAll('#post-body-height')], [postHeightCon.querySelectorAll('#post-foot-height')], [postHeightCon.getElementsByTagName("img")]];

const postSlideList = [postSlide1, postSlide2, postSlide3];
const postBodySlideList = [postBodySlide1, postBodySlide2, postBodySlide3];

const postList = [posts1, posts2, posts3];
const postBodyList = [postsBody1, postsBody2, postsBody3];

const postListA = [postsA, postsB, postsC];
const postBodyListA = [postsBodyA, postsBodyB, postsBodyC];

const postListR = [postsR, postsS, postsT];
const postBodyListR = [postsBodyR, postsBodyS, postsBodyT];
const postBodyImageListR = [postsBodyImageR, postsBodyImageS, postsBodyImageT];

// initializer
let isImageOpenAndClose = 0;
let varHeight;
let g;
let i;
let q;
let r;

// close animations
closeAnime.forEach(element => {
    element.onclick = function () {
        console.log(element)
        this.parentNode.classList.remove(n1);
        this.parentNode.classList.add(h1);
        mainOverlayCon.classList.remove(mov1);
        mainOverlayCon.classList.add(h1);
    }
});

// launch animations
launchNovela.onclick = function () {
    novela.classList.remove(h1);
    novela.classList.add(n1);
    mainOverlayCon.classList.remove(h1);
    mainOverlayCon.classList.add(mov1);
}

// height and brightness animation
function postHeightAnime() {
    
    slideIndexHeight++;

    if (slideIndexHeight > postHeightList.length) {
        slideIndexHeight = 1
    }

    varHeight = slideIndexHeight - 1;

    // setTimeout(function () {addHeadFootHeight(); addBodyHeight(); addImageBrightness();}, 10);
    setTimeout(() => {
        addHeadFootHeight(); 
        addBodyHeight(); 
        addImageBrightness();
        liftPoster();
    }, 10);

    setTimeout((postHeightAnime), 5000);
}
postHeightAnime();

function liftPoster() {
    postHeightList[varHeight].classList.add(raisePoster);

    setTimeout(lowerPoster, 4900);
}

function lowerPoster() {
    postHeightList[varHeight].classList.remove(raisePoster);
}

function addHeadFootHeight() {
    allElementList[0].forEach(element => {
        element[varHeight].classList.remove(makeHFSml);
        element[varHeight].classList.add(makeHFBg);
    });

    allElementList[2].forEach(element => {
        element[varHeight].classList.remove(makeHFSml);
        element[varHeight].classList.add(makeHFBg);
    });
    

    setTimeout(removeHeadFootHeight, 4900);
}

function removeHeadFootHeight() {
    allElementList[0].forEach(element => {
        element[varHeight].classList.remove(makeHFBg);
        element[varHeight].classList.add(makeHFSml);
    });

    allElementList[2].forEach(element => {
        element[varHeight].classList.remove(makeHFBg);
        element[varHeight].classList.add(makeHFSml);
    });
}

function addBodyHeight() {
    allElementList[1].forEach(element => {
        element[varHeight].classList.remove(makeBSml);
        element[varHeight].classList.add(makeBBg);
    });

    setTimeout(removeBodyHeight, 4900);
}

function removeBodyHeight() {
    allElementList[1].forEach(element => {
        element[varHeight].classList.remove(makeBBg);
        element[varHeight].classList.add(makeBSml);
    });
}

function addImageBrightness() {
    allElementList[3].forEach(element => {
        element[varHeight].classList.remove(makeDull);
    });
    // allElementList[3][varHeight].classList.add(makeBright);


    setTimeout(removeImageBrightness, 4900);
}

function removeImageBrightness() {
    allElementList[3].forEach(element => {
        element[varHeight].classList.add(makeDull);
    });
}

function postSlide() {
    postSlideList.forEach(element => {
        element.classList.remove(v1);
        element.classList.add(v0);
    });

    postBodySlideList.forEach(element => {
        element.classList.remove(img1);
        element.classList.add(h1);
    });

    slideIndexG++;

    if (slideIndexG > postSlideList.length) {
        slideIndexG = 1;
    }

    g = slideIndexG - 1;

    postSlideList[g].classList.remove(v0);
    postSlideList[g].classList.add(v1);

    setTimeout(postSlide, 10000);
    setTimeout(openSlideImage, 500);
}

postSlide();

function openSlideImage() {
    postBodySlideList[g].classList.remove(h1);
    postBodySlideList[g].classList.add(img1);

    setTimeout(closeSlideImage, 9000)
}

function closeSlideImage() {
    postBodySlideList[g].classList.remove(img1);
    postBodySlideList[g].classList.add(h1);
}

function postAnime() {
    postList.forEach(element => {
        element.classList.remove(v0);
        element.classList.add(v1);
        element.classList.remove(l1);
    });

    postBodyList.forEach(element => {
        element.classList.remove(img1);
        element.classList.add(h1);
    });


    slideIndex++;

    if (slideIndex > postList.length) {
        slideIndex = 1;
    }

    i = slideIndex - 1;

    postList[i].classList.remove(v0);
    postList[i].classList.add(v1);
    postList[i].classList.add(l1);

    // open poster image after 1.5s
    setTimeout(openPosterImage, 1500);

    // activateA++;

    // let postListB = [postsA, postsB, postsC];
    // let postBodyListB = [postsBodyA, postsBodyB, postsBodyC];

    // for first run 
    // if (activateA == 1) {
    //     postBodyListB.forEach(element => {
    //         element.classList.remove(img1);
    //         element.classList.add(h1);
    //         element.classList.remove(w1);
    //     });

    //     postListB.forEach(element => {
    //         element.classList.remove(v0);
    //         element.classList.add(v1);
    //         element.classList.remove(lA);
    //     });
    // }

    // for second run onwards
    // if (activateA > 2) {
    //     autoSlideA();
    //     activateA = 3;
    // }
    setTimeout(postAnime, 15000);
}
postAnime();

function openPosterImage () {
    postBodyList[i].classList.remove(h1);
    postBodyList[i].classList.add(img1);

    setTimeout(closePosterImage, 12000);
}

function closePosterImage () {
    postBodyList[i].classList.remove(img1);
    postBodyList[i].classList.add(h1);
}

function postAnimeImage() {

    postListA.forEach(element => {
        element.classList.remove(v0);
        element.classList.add(v1);
        element.classList.remove(lA);
    });

    postBodyListA.forEach(element => {
        element.classList.remove(img1);
        element.classList.add(h1);
        element.classList.remove(w1);
    });


    slideIndexA++;

    if (slideIndexA > postListA.length) {
        slideIndexA = 1;
    }

    q = slideIndexA - 1;

    postListA[q].classList.remove(v0);
    postListA[q].classList.add(v1);
    postListA[q].classList.add(lA);

    setTimeout(openPosterImageA, 1500);
    setTimeout(postAnimeImage, 15000);
}

postAnimeImage();

function openPosterImageA () {
    postBodyListA[q].classList.remove(h1);
    postBodyListA[q].classList.add(img1);

    setTimeout(imageWide, 1500);
    setTimeout(closePosterImageA, 12000);
}

function closePosterImageA () {
    postBodyListA[q].classList.remove(img1);
    postBodyListA[q].classList.add(h1);
}

function imageWide () {
    postBodyListA[q].classList.add(w1);

    setTimeout(imageDefault, 9000);
}

function imageDefault () {
    postBodyListA[q].classList.remove(w1);
}

function postAnimeImageOverlay() {

    postListR.forEach(element => {
        element.classList.remove(v0);
        element.classList.add(v1);
        element.classList.remove(lA);
    });

    postBodyListR.forEach(element => {
        element.classList.remove(w1);
    });


    slideIndexR++;

    if (slideIndexR > postListR.length) {
        slideIndexR = 1;
    }

    r = slideIndexR - 1;

    postListR[r].classList.remove(v0);
    postListR[r].classList.add(v1);
    postListR[r].classList.add(lA);

    setTimeout(removeImageBlurR, 100);
    setTimeout(postAnimeImageOverlay, 15000);
}

postAnimeImageOverlay();

function removeImageBlurR () {
    postBodyImageListR[r].classList.remove(b1);
    postBodyImageListR[r].classList.add(b0);
    setTimeout(imageWideOverlay, 1500);
    setTimeout(addImageBlurR, 12000);
}

function addImageBlurR () {
    postBodyImageListR[r].classList.remove(b0);
    postBodyImageListR[r].classList.add(b1);
}

function imageWideOverlay () {
    postBodyListR[r].classList.add(w1);

    setTimeout(imageDefaultOverlay, 9000);
}

function imageDefaultOverlay () {
    postBodyListR[r].classList.remove(w1);
}

"use strict";

function sleep(v) {
    return new Promise(function (r) {
        return setTimeout(r, v);
    });
}

async function load() {
    for (var s = 0; s < 3; s++) {
        // console.log(s);
        await sleep(3000);
    }
}
load();