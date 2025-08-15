function initScrollSuave() {

const LinksInterno = document.querySelectorAll('.nav-menu a[href^="#"]');
console.log(LinksInterno);

function scrolltoSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

LinksInterno.forEach((link) => {
   link.addEventListener('click', scrolltoSection)
});

}

initScrollSuave();

