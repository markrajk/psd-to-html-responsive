const burgerElement = document.querySelector('.burger');
const navListElements = document.querySelectorAll('.dropdown--list--item');
const navElement = document.querySelector('.nav');
const headerElement = document.querySelector('.dropdown--list');
const headerElement2 = document.querySelector('.header');
const hrElements = document.querySelectorAll('hr');
const burgerTop = document.querySelector('.burger--top');
const burgerMiddle = document.querySelector('.burger--middle');
const burgerBottom = document.querySelector('.burger--bottom');

let counter = 0;

function openMenu() {
    if(counter === 0) {
        for(let i = 0; i < navListElements.length; i++) {
            navListElements[i].classList.add('activate-links');
            hrElements[i].classList.add('activate-links');

        }
        disableScroll();
        burgerMiddle.style.display = 'none';
        burgerTop.style.transform = 'rotateZ(135deg)';
        burgerTop.style.top = '45%';
        burgerBottom.style.transform = 'rotateZ(-135deg)';
        burgerBottom.style.top = '45%';
        headerElement.classList.add('activate');
        counter++;
    }else {
        for(let i = 0; i < navListElements.length; i++) {
            navListElements[i].classList.remove('activate-links');
            hrElements[i].classList.remove('activate-links');
        }
        enableScroll();
        burgerMiddle.style.display = 'block';
        burgerTop.style.transform = 'rotateZ(0)';
        burgerTop.style.top = '15%';
        burgerBottom.style.transform = 'rotateZ(0)';
        burgerBottom.style.top = '65%';
        headerElement.classList.remove('activate');
        counter = 0;
    }
    
}

burgerElement.addEventListener('click', openMenu);

// DISABLE/ENABLE SCROLLING
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36

var keys = {37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null; 
}
