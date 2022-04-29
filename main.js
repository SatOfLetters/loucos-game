console.log('done')










/* LOADING BG + DOCUMENT.READYSTATE */

/* const loadingBg = document.getElementById('loading_bg')

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {
        loadingBg.style.opacity = 0;
        loadingBg.style.visibility = 'hidden';
        setTimeout(() => {
            menuBt.style.transform = 'translateY(0) rotate(0deg)'
        }, 200);
    }
} */





/* HAMBURGUER MENU */

const hambt = document.querySelector('.hambt')
const nav = document.querySelector('header nav')

const hamDivs = document.querySelectorAll('.hambt div')

let showingNav = false;

function toggleNav() {
    if(showingNav == false) {
        showingNav = true;
        nav.classList.add('showing_nav')

        for(i=0;i<hamDivs.length;i++) {
            hamDivs[i].style.backgroundColor = 'var(--c2)';
        }
    } else {
        showingNav = false;
        nav.classList.remove('showing_nav')

        for(i=0;i<hamDivs.length;i++) {
            hamDivs[i].style.backgroundColor = 'var(--c1)';
        }
    }
}

hambt.addEventListener('click', toggleNav)

let isMobile;

if(window.matchMedia('(min-width:820px)').matches) {
    isMobile = false;
} else {
    isMobile = true;
}

let windowPosition;
const fixedCTA = document.querySelector('header .cta_ctnr')

document.body.onscroll = function() {
    windowPosition = window.pageYOffset;

    if(showingNav == true) {
        toggleNav()
    }

    if(isMobile == true) {
        if(windowPosition > window.innerHeight / 2) {
            fixedCTA.style.transform = 'translateY(0)'
        } else {
            fixedCTA.style.transform = 'translateY(100%)'
        }
    }
}




