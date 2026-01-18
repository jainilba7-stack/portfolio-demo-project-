// MOBILE MENU TOGGLE (FIXED)
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// MODE TOGGLE (NO COLOR CHANGE)
document.getElementById("modeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

// ACTIVE NAV + HEADER EFFECT + SCROLL TOP
const sections = document.querySelectorAll("section");
const navLinksAll = document.querySelectorAll(".nav-links a");
const header = document.getElementById("header");
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
    revealOnScroll();

    header.classList.toggle("scrolled", window.scrollY > 50);

    scrollTopBtn.style.display = window.scrollY > 400 ? "block" : "none";

    sections.forEach(sec => {
        const id = sec.getAttribute("id");
        if (
            window.scrollY >= sec.offsetTop - 150 &&
            window.scrollY < sec.offsetTop + sec.offsetHeight
        ) {
            navLinksAll.forEach(a => a.classList.remove("active"));
            document.querySelector(`a[href="#${id}"]`)?.classList.add("active");
        }
    });
});

// SCROLL TO TOP
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// FORM VALIDATION
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", e => {
    e.preventDefault();
    successMsg.style.display = "block";
    form.reset();
});

// INITIAL CALL
revealOnScroll();
