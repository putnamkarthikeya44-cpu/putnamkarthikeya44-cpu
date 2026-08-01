/* ===========================================
   ELEMENTS
=========================================== */

const pages = document.querySelectorAll(".page");

const openBookBtn = document.getElementById("openBook");

const nextBtn = document.getElementById("next");

const prevBtn = document.getElementById("prev");

const celebrateBtn = document.getElementById("celebrate");

const particleContainer = document.querySelector(".floating-particles");

const letters = document.querySelectorAll(".letter");


/* ===========================================
   PAGE CONTROL
=========================================== */

let currentPage = 0;

showPage(currentPage);

function showPage(index) {

    pages.forEach((page, i) => {

        page.classList.remove("active");

        if (i === index) {

            page.classList.add("active");

        }

    });

    prevBtn.style.visibility =
        index === 0 ? "hidden" : "visible";

    nextBtn.style.visibility =
        index === pages.length - 1 ? "hidden" : "visible";
}


/* ===========================================
   OPEN BOOK
=========================================== */

openBookBtn.addEventListener("click", () => {

    currentPage = 1;

    showPage(currentPage);

});


/* ===========================================
   NEXT PAGE
=========================================== */

nextBtn.addEventListener("click", () => {

    if (currentPage < pages.length - 1) {

        currentPage++;

        showPage(currentPage);

    }

});


/* ===========================================
   PREVIOUS PAGE
=========================================== */

prevBtn.addEventListener("click", () => {

    if (currentPage > 0) {

        currentPage--;

        showPage(currentPage);

    }

});


/* ===========================================
   KEYBOARD SUPPORT
=========================================== */

document.addEventListener("keydown", e => {

    if (e.key === "ArrowRight") {

        if (currentPage < pages.length - 1) {

            currentPage++;

            showPage(currentPage);

        }

    }

    if (e.key === "ArrowLeft") {

        if (currentPage > 0) {

            currentPage--;

            showPage(currentPage);

        }

    }

});




/* ===========================================
   FLOATING PARTICLES
=========================================== */

function createParticle() {

    const particle = document.createElement("span");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        8 + Math.random() * 10 + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.opacity =
        Math.random() * 0.5;

    particle.style.transform =
        `scale(${Math.random() * 2 + 0.5})`;

    particleContainer.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 18000);

}

setInterval(createParticle, 250);


