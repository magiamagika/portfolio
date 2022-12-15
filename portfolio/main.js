


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


// ---------------------CIRCLE_WORDS-------------------

let words = document.querySelector('.circle-words img');
let a = 0; 

setInterval(() => {
    a++;
    rotateCircle(a);
}, 25);

function rotateCircle(a) {
    for(let i = 0; i < a; i++) {
        words.style.transform = 'rotate(' + a + 'deg)';
        
    }
}



// ------------parallax-----------------
const parallaxHome = document.querySelector(".home");
const parallaxCircle = document.querySelector('.decorations')
const parallaxCircleSec = document.querySelector('.decorations-sec')

window.addEventListener("scroll", () => {
  parallaxHome.style.backgroundPositionY = `${scrollY / 1.5}px`;
  parallaxCircle.style.transform = 'translateY('+`${scrollY / 3 - 450}px` + ')'
})
window.addEventListener("scroll", () => {

    parallaxCircleSec.style.transform = 'translateY('+`${scrollY / -3 - (-300)}px` + ')'
  })

// ------------Slider-----------------

const sliderBox = document.querySelector('.slider-box');
const rightBtn = document.querySelector('.arrow')
const containers = document.querySelectorAll('.port-container')
const containersWidth = 100;
let containersSpeed= 5500;


let index = 0;
let slider = document.querySelector('.slider')

slider.addEventListener('mouseenter', e => {
    clearInterval()
})

setInterval(() => {
    changeImage();
}, containersSpeed);

const changeImage = () => {
    index++;
    if(index > containers.length -1) {
        index = 0;
    } else if(index < 0) {
        index = containers.length - 1
    }
    sliderBox.style.transform = `translateX(${- index * containersWidth}vw)`
    
}

rightBtn.addEventListener('click', changeImage)



const userName = document.querySelector('#name');
const email= document.querySelector('#email')
const message = document.querySelector('#message')
const sendBtn = document.querySelector('.sendBtn')
const box = document.querySelector('.accept-box')

const showBox = () => {
    box.style.display = 'block'
}


const showError = (input, msg) => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text');

    errorMsg.classList.add('error');

}
const clearError = (input)=> {
    const formBox = input.parentElement;
    formBox.classList.remove('error');

}
const checkForm = input => {
    input.forEach(el => {
        if(el.value === '') {
            showError(el, el.placeholder)
        } else{
            clearError(el)
            // showBox()
        }
    })
}


sendBtn.addEventListener('click', e => {
    checkForm([userName, email, message])
})







