
// ------------Onscroll-----------------

const navbar = document.querySelector('nav')

const scroll = () => {
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    }
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add('sticky')
    } else {
        navbar.classList.remove('sticky')
    }
}
window.addEventListener('scroll', scroll) 


// ------------NAVLINKS-----------------

let path = window. location. pathname;
let page = path. split("/"). pop();

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');
const nav = document.querySelector('nav');

document.addEventListener('scroll', onScrollLinks);

function onScrollLinks() {
    if(!(page == "index.html")) return;
    sections.forEach(sec => {
        if(sec.getBoundingClientRect().top < 100 && sec.getBoundingClientRect().top > (sec.getBoundingClientRect().height * -1)) {

            navLinks.forEach(link => {
                switch (link.innerHTML) {
                    case sec.getAttribute("data-highlight"):
                        link.style.color = '#FFFFFF';
                        break;
                    default:
                        link.style.color = '#767676';
                        break;
                }
            });
        }
    });
}

// -------------------------BURGER---------------------------------

const navSlide = () => {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.links');
    let Links = document.querySelectorAll('.links li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

    Links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
            
        } else {
            link.style.animation =`navLinkFade 0.5s ease forwards $(index / 7 + 0)`
        }
    });
    burger.classList.toggle('toggle');
    });
}
   
navSlide();










const alertBox = document.querySelector('.box-alert');
const project = document.querySelector('.project');


project.addEventListener('mouseenter', () => {
    alertBox.style.transform = 'translateX(-100%)'
})

project.addEventListener('mouseleave', () => {
    alertBox.style.transform = 'translateX(0%)'
})


