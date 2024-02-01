/*=============== SHOW MENU ===============*/
const nav_Menu = document.getElementById('nav-menu')
    navToggle = document.getElementById('nav-toggle')
    navClose = document.getElementById('nav-close')

// Menu Show
// validate if constant exist
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        nav_Menu.classList.add('show-menu')

    })
}
//Menu Hidden
if(navClose){
    navClose.addEventListener('click', ()=>{
        nav_Menu.classList.remove('show-menu')
    })
 }
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const nav_Menu = document.getElementById('nav-menu')
    //when we click on each nav__link 
    nav_Menu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader =()=>{
    const header = document.getElementById('header')
    //when the scroll is greaterthan 50 port
    this.scrollY >= 50 ? header.classList.add   ('blur-header')
                      : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //when scroll is higher than 350 vh
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration : 3000,
    delay: 400,
    reset:true //animations repeat

})
sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`)
sr.reveal(`.home__card`,{delay:600,distance:'100px',interval: 100})
sr.reveal(`.about__data, .join__image`,{origin:'right'})
sr.reveal(`.about__image, .join__data`,{origin:'left'})
sr.reveal(`.popular__card`,{interval: 200})