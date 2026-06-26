// ======================================
// PORTFOLIO WEBSITE JAVASCRIPT
// ======================================

// Navigation
const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");
const background = document.querySelector(".background");

// Background images
const backgrounds = {
    home: "background kkk.jpg",
    about: "photo.jpg",
    skills: "calindar.png",
    projects: "asbjuah.jpg",
    travel: "bansalan.jfif",
    contact: "ewbn.jpg"
};

// ===========================
// CHANGE PAGE
// ===========================

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const page = this.dataset.page;

        // Active Navigation
        navLinks.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");

        // Hide all pages
        pages.forEach(section => {
            section.classList.remove("active-page");
            section.style.display = "none";
        });

        // Show selected page
        const activePage = document.getElementById(page);

        activePage.style.display = "flex";

        setTimeout(() => {
            activePage.classList.add("active-page");
        }, 150);

        // Change background
        background.style.background = `
            linear-gradient(rgba(5,10,20,.75),
            rgba(5,10,20,.85)),
            url("${backgrounds[page]}")
            center center / cover
        `;

    });

});

// ===========================
// FADE IN
// ===========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// ===========================
// PARALLAX BACKGROUND
// ===========================

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.clientX) / 45;

    const y = (window.innerHeight / 2 - e.clientY) / 45;

    background.style.backgroundPosition = `${x}px ${y}px`;

});

// ===========================
// ANIMATED BOXES
// ===========================

const boxes = document.querySelectorAll(`
.home-box,
.content-box,
.skills-box,
.card,
.project-image,
.travel-image,
.contact-item
`);

boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {

        box.style.transform = "";
        box.style.boxShadow = "0 0 30px #00d9ff";

    });
    box.addEventListener("mouseleave", () => {

        box.style.transform = "";
        box.style.boxShadow = "";

    });
});

// ===========================
// IMAGE ZOOM
// ===========================

const images = document.querySelectorAll(
".project-image img, .travel-image img"
);

images.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.15)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

// ===========================
// SOCIAL ICONS
// ===========================

const icons = document.querySelectorAll(".social-icons a");

icons.forEach(icon => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transform = "scale(1.2) rotate(10deg)";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform = "scale(1)";

    });

});

// ===========================
// END
// ===========================