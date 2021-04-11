const headerFont1 = document.querySelector('.header__font-1');
const headerFont2 = document.querySelector('.header__font-2');
const HTML = document.querySelector('.HTML__fill');
const CSS = document.querySelector('.CSS__fill');
const JAVASCRIPT = document.querySelector('.JAVASCRIPT__fill');
const REACT = document.querySelector('.REACT__fill');
const NODE = document.querySelector('.NODE__fill');
const UI = document.querySelector('.UI__fill');
const aboutFont = document.querySelector('.about__font');
const aboutUnderline = document.querySelector('.about__underline');
const portraitBox = document.querySelector('.my__portrait-box');
const hexagonBox1 = document.querySelector('.hexagon__box-1');
const hexagonBox2 = document.querySelector('.hexagon__box-2');
const hexagonBox3 = document.querySelector('.hexagon__box-3');
const hexagonBox4 = document.querySelector('.hexagon__box-4');
const projectsFont = document.querySelector('.projects__font');
const projectsUnderline = document.querySelector('.projects__underline');
const blogFont = document.querySelector('.blog__font');
const blogUnderline = document.querySelector('.blog__underline');
const contactFont = document.querySelector('.contact__font');
const contactUnderline = document.querySelector('.contact__underline');
const contactSmallFont = document.querySelector('.contact__small-font');
const form = document.querySelector('.form');
const nav = document.querySelector('.nav');

// scrollspy animation
const scrollspy = new VanillaScrollspy(nav, 1000, 'easeInOutQuint');
scrollspy.init();



/* HAMBURGER MENU EVENT */
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    /* TOGGLING NAV-PHONE CLASS BY CLICKING THE HAMBURGER BUTTON */
    document.querySelector('.nav').classList.toggle('nav-phone');

    anime({
        targets: '.nav',
        transition: 'all 0.5s'
    });
});


//scrollSpy.js



/* HEADER FONTS ANIMATION USING ANIME.JS */
anime({
    targets: headerFont1,
    translateX: ['250px', '0px'],
    duration: 2000,
});

anime({
    targets: headerFont2,
    translateX: ['-250px', '0px'],
    duration: 2000,
});




/* ANIMATION USING SCROLLOUT.JS */

/* ABOUT ANIMATION PART 1 */

ScrollOut({
    targets: about,
    threshold: .3,
    once: true,
    onShown: function () {
        /* ABOUT FONT */
        ScrollOut({
            targets: aboutFont,
            once: true,
            onShown: function (aboutFont) {
                aboutFont.animate(
                    [
                        { transform: 'translateX(-250px)' }, { transform: 'translateX(0px)' }
                    ], 500);

            }
        });

        /* ABOUT UNDERLINE */
        ScrollOut({
            targets: aboutUnderline,
            once: true,
            onShown: function (aboutUnderline) {
                aboutUnderline.animate(
                    [
                        { transform: 'translateX(-250px)' }, { transform: 'translateX(0px)' }
                    ], 800);
            }
        });

        /* HEXAGONS ANIMATIONS */
        ScrollOut({
            targets: hexagonBox1,
            once: true,
            onShown: function (hexagonBox1) {
                hexagonBox1.animate(
                    [
                        { transform: 'rotateY(90deg)' }, { transform: 'rotateX(0)' }
                    ], 600);
            }
        });
        ScrollOut({
            targets: hexagonBox2,
            once: true,
            onShown: function (hexagonBox2) {
                hexagonBox2.animate(
                    [
                        { transform: 'rotateY(90deg)' }, { transform: 'rotateX(0)' }
                    ], 800);
            }
        });
        ScrollOut({
            targets: hexagonBox3,
            once: true,
            onShown: function (hexagonBox3) {
                hexagonBox3.animate(
                    [
                        { transform: 'rotateY(90deg)' }, { transform: 'rotateX(0)' }
                    ], 1000);
            }
        });
        ScrollOut({
            targets: hexagonBox4,
            once: true,
            onShown: function (hexagonBox4) {
                hexagonBox4.animate(
                    [
                        { transform: 'rotateY(90deg)' }, { transform: 'rotateX(0)' }
                    ], 1200);
            }
        });


        /* PORTRAIT */
        ScrollOut({
            targets: portraitBox,
            once: true,
            onShown: function (portraitBox) {
                portraitBox.animate(
                    [
                        { transform: 'scale(0)' }, { transform: 'scale(1)' }
                    ], 500);
            }
        });


        /* FILL UP ANIMATION */
        ScrollOut({
            targets: HTML,
            once: true,
            onShown: function (HTML) {
                HTML.animate(
                    [
                        { width: '0%' }, { width: '67%' },
                    ], 800);
            }
        });
        ScrollOut({
            targets: CSS,
            once: true,
            onShown: function (CSS) {
                CSS.animate(
                    [
                        { width: '0%' }, { width: '67%' },
                    ], 800);
            }
        });
        ScrollOut({
            targets: JAVASCRIPT,
            once: true,
            onShown: function (JAVASCRIPT) {
                JAVASCRIPT.animate(
                    [
                        { width: '0%' }, { width: '60%' },
                    ], 800);
            }
        });
        ScrollOut({
            targets: REACT,
            once: true,
            onShown: function (REACT) {
                REACT.animate(
                    [
                        { width: '0%' }, { width: '40%' },
                    ], 800);
            }
        });
        ScrollOut({
            targets: NODE,
            once: true,
            onShown: function (NODE) {
                NODE.animate(
                    [
                        { width: '0%' }, { width: '50%' },
                    ], 800);
            }
        });
        ScrollOut({
            targets: UI,
            once: true,
            onShown: function (UI) {
                UI.animate(
                    [
                        { width: '0%' }, { width: '33%' },
                    ], 800);
            }
        });
    }
});





/* PROJECTS ANIMATION */

// PROJECTS FONT
ScrollOut({
    targets: projectsFont,
    once: true,
    onShown: function (projectsFont) {
        projectsFont.animate([
            { transform: 'translateX(-250px)' }, { transform: 'translateX(0px)' }
        ], 500);
    }
});

// PROJECT UNDERLINE
ScrollOut({
    targets: projectsUnderline,
    once: true,
    onShown: function (projectsUnderline) {
        projectsUnderline.animate(
            [
                { transform: 'translateX(-250px)' }, { transform: 'translateX(0px)' }
            ], 800);
    }
});





/* BLOG ANIMATION */

// BLOG FONT
ScrollOut({
    targets: blogFont,
    once: true,
    onShown: function (blogFont) {
        blogFont.animate([
            { transform: 'translateX(-250px)' }, { transform: 'translateX(0px)' }
        ], 500);
    }
});

// BLOG UNDERLINE
ScrollOut({
    targets: blogUnderline,
    once: true,
    onShown: function (blogUnderline) {
        blogUnderline.animate(
            [
                { transform: 'translateX(-250px)' }, { transform: 'translateX(0px)' }
            ], 500);
    }
});





/* CONTACT ANIMATION */

/* CONTACT FONT */
ScrollOut({
    targets: contactFont,
    once: true,
    onShown: function (contactFont) {
        contactFont.animate(
            [
                { transform: 'translateX(-250px)' }, { transform: 'translateX(0px)' }
            ], 500);
    }
});

/* CONTACT UNDERLINE */
ScrollOut({
    targets: contactUnderline,
    once: true,
    onShown: function (contactUnderline) {
        contactUnderline.animate(
            [
                { transform: 'translateX(-250px)' }, { transform: 'translateX(0px)' }
            ], 800);
    }
});

/* CONTACT SAMALL FONT */
ScrollOut({
    targets: contactSmallFont,
    once: true,
    onShown: function (contactSmallFont) {
        contactSmallFont.animate(
            [
                { transform: 'translateX(250px)' }, { transform: 'translateX(0px)' }
            ], 800);
    }
});



/* CHANGING THE NAV ACTIVE CLASS */
const navList = document.querySelector('.nav__list');
const list = navList.querySelectorAll('.nav__link');

/* ADDING EVENT LISTENER TO EVERY CHILD */
list.forEach(el => {
    el.addEventListener('click', () => {
        /* REMOVING ACTIVE CLASS TO ALL EVERY CHILDREN AND
           THEN ADDING IT TO THE CURRENT CHILD.
         */
        [...el.parentElement.children].forEach(sib => {
            sib.classList.remove('active');
            el.classList.add('active');
        });

        /* TOGGLING NAV-PHONE CLASS AFTER CLICKING A LINK */
        document.querySelector('.nav').classList.toggle('nav-phone');

    });
});


