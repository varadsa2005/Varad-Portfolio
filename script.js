// ==========================
// Typing Animation
// ==========================

// Step 1: Select the HTML element
const typingText = document.getElementById("typing");

// Step 2: Words to display
const words = [
    "AI Engineer",
    "Machine Learning Engineer",
    "Software Developer",
    "Computer Vision Enthusiast"
];

// Step 3: Variables
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

// Step 4: Main typing function
function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.innerHTML = currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.innerHTML = currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 70 : 120);

}

// Start animation
typeEffect();

// ===============================
// Scroll Reveal Animation
// ===============================

// Select all sections having class "hidden"

const hiddenElements = document.querySelectorAll(".hidden");

// Create Observer

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

// Observe every hidden element

hiddenElements.forEach((element)=>{

    observer.observe(element);

});

// ==============================
// Active Navbar
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==============================
// Floating Profile Image
// ==============================

const profile = document.querySelector(".hero-image img");

let position = 0;
let direction = 1;

setInterval(() => {

    position += direction * 0.5;

    if(position >= 12) direction = -1;

    if(position <= -12) direction = 1;

    profile.style.transform = `translateY(${position}px)`;

},40);


// ==============================
// Button Animation
// ==============================

const buttons = document.querySelectorAll("button");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="scale(1.05)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="scale(1)";

    });

});

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});