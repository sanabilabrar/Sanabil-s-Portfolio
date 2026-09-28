/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */


/* =========================================
   PROJECT DATA
========================================= */

const projects = {

    eloria: {
        category: "Beauty commerce · WordPress",

        title: "Eloria Germany",

        description:
            "A refined skincare storefront built to make product discovery feel calm, premium, and effortless.",

        details:
            "For Eloria Germany, I shaped a beauty-first shopping experience around clear product storytelling, soft visual rhythm, and a frictionless path from discovery to cart.",

        stack: [
            "WordPress",
            "WooCommerce",
            "Elementor"
        ],

        url: "https://eloriagermany.com/"
    },

   coffee: {
        category: "Coffee website · UI/UX · HTML + CSS + JavaScript",

        title: "Coffee Town",

        description:
            "A clean and inviting coffee website designed with a simple UI, intuitive navigation, and a smooth user experience.",

        details:
            "Coffee Town focuses on a warm visual identity, user-friendly navigation, responsive layouts, and a simple browsing experience designed to make the website easy and enjoyable to explore.",

        stack: [
            "UI/UX",
            "HTML",
            "CSS",
            "JavaScript"
        ],
      
        url: "https://sanabilabrar.github.io/coffee-town-website/"
    }
};


/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("is-open");

}


/* =========================================
   CLOSE MOBILE MENU
========================================= */

function closeMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.remove("is-open");

}


/* =========================================
   SMOOTH SCROLL
========================================= */

function scrollToSection(id) {

    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    element.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    closeMenu();

}


/* =========================================
   PROJECT MODAL
========================================= */

function openProject(projectId) {

    const project = projects[projectId];

    if (!project) {
        return;
    }

    const modal =
        document.getElementById("projectModal");

    const category =
        document.getElementById("modalCategory");

    const title =
        document.getElementById("modalTitle");

    const description =
        document.getElementById("modalDescription");

    const details =
        document.getElementById("modalDetails");

    const stack =
        document.getElementById("modalStack");

    const link =
        document.getElementById("modalLink");


    category.textContent = project.category;

    title.textContent = project.title;

    description.textContent = project.description;

    details.textContent = project.details;


    /* Clear previous stack items */

    stack.innerHTML = "";


    /* Add stack items */

    project.stack.forEach(function (item) {

        const span = document.createElement("span");

        span.textContent = item;

        stack.appendChild(span);

    });


    /* Project link */

    link.href = project.url;


    /* Open modal */

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

}


/* =========================================
   CLOSE PROJECT MODAL
========================================= */

function closeProject() {

    const modal =
        document.getElementById("projectModal");

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


/* =========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================= */

function closeModalOutside(event) {

    if (
        event.target ===
        document.getElementById("projectModal")
    ) {

        closeProject();

    }

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeProject();

            closeMenu();

        }

    }
);


/* =========================================
   CONTACT FORM
========================================= */

function submitForm(event) {

    event.preventDefault();

    const form =
        document.getElementById("contactForm");

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {
        return;
    }


    /* Your email address */

    const myEmail =
        "sanabilabrar12@gmail.com";


    const subject =
        encodeURIComponent(
            "Website Inquiry from " + name
        );


    const body =
        encodeURIComponent(
            "Name: " +
            name +
            "\n\nEmail: " +
            email +
            "\n\nMessage:\n" +
            message
        );


    /* Open visitor's email application */

    window.location.href =
        "mailto:" +
        myEmail +
        "?subject=" +
        subject +
        "&body=" +
        body;


    /* Show success message */

    const success =
        document.getElementById("successMessage");

    success.classList.add("show");


    /* Clear the form */

    form.reset();

}
