export const NavScroll = () => window.onscroll = () => {
    const x = window.matchMedia("(min-width: 600px)")
    let currentScrollPosition = window.pageYOffset;
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    if (header) {
        if (currentScrollPosition < "100") {
            if (x.matches) {
                header.style.backgroundColor = "transparent";
                nav.classList.remove('nav-colored');
            }
        } else {
            if (x.matches) {
                header.style.backgroundColor = "#f8f9fa";
                nav.classList.add('nav-colored');
            }
        }
    }
};

export const blandNav = () => {
    const x = window.matchMedia("(min-width: 600px)")
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    if (header) {
        if (x.matches) {
            header.style.backgroundColor = "#f8f9fa";
            nav.classList.add('nav-colored');
        }
    }
}
export const fixedScroll = () => window.onscroll = () => {
    const x = window.matchMedia("(min-width: 600px)")
    const header = document.querySelector("header");
    const nav = document.querySelector("nav");
    if (header) {
        if (x.matches) {
            header.style.backgroundColor = "#f8f9fa";
            nav.classList.add('nav-colored');
        }
    }
}