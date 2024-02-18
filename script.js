
// allows the user to edit background by scrolling
 window.addEventListener('scroll', ()=> {
    console.log(window.scrollY, document.body.scrollHeight, window.innerWidth, window.innerHeight, window.scrollY *(window.innerWidth/window.innerHeight));
    let boxElt = document.getElementById("falconPhoto");
    boxElt.style.left =window.scrollY*(window.innerWidth/(document.body.clientHeight-window.innerHeight)) +'px';




     



})

function myFunction0() {
    const element = document.getElementById("content0");
    element.scrollIntoView();
    }

function myFunction() {
    const element = document.getElementById("content");
    element.scrollIntoView();
    }

function myFunction1() {
    const element = document.getElementById("content1");
    element.scrollIntoView();
    }
