// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active section animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation repeats on scroll use this
        else {
            sec.classList.remove('show-animate');

        }
    });


    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

// ----------------contact me----------

function changeText(text) {
    var display = document.getElementById('contactme');
    display.innerText = "Click Here"
}
function changeback(text) {
    var display = document.getElementById('contactme');
    display.innerText = text;
}

// ----------hire me-------------------

function hire(text) {
    var display = document.getElementById("hireme")
    display.innerText = "Click Here"
}
function hireme() {
    var display = document.getElementById("hireme")
    display.innerText = "Hire Me"
}

// ----------------------about me---------------
function read(text) {
    var display = document.getElementById("readmore")
    display.innerText = "Click Here"
}
function readmore(text) {
    var display = document.getElementById("readmore")
    display.innerText = "Read More"
}

// -------------------submit------------------

function subm(text) {
    var display = document.getElementById("submit")
    display.innerText = "Click Here"
}
function submite(text) {
    var display = document.getElementById("submit")
    display.innerText = "Submit"
}

// submit button message 

function msg(){
    var msg=document.getElementById("submit");
    msg.innerHTML="Done"
    var mgspan=document.getElementById("msg-span").innerText="Message Send Successfully."
}
