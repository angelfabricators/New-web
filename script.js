// =============================
// MOBILE MENU
// =============================

const navbar = document.querySelector(".navbar");

const navLinks = document.querySelector(".nav-links");


// Create menu button

const menuBtn = document.createElement("div");

menuBtn.className = "menu-btn";

menuBtn.innerHTML = `
<i class="fas fa-bars"></i>
`;

navbar.appendChild(menuBtn);


// Open and close menu

menuBtn.onclick = () => {

    navLinks.classList.toggle("open");

};
// =============================
// SCROLL ANIMATION
// =============================

const animatedElements = document.querySelectorAll(
".service-card, .project-card, .card, .timeline-item, .contact-box, .quote-form"
);


window.addEventListener("scroll", () => {

animatedElements.forEach((element)=>{


const position = element.getBoundingClientRect().top;

const screenHeight = window.innerHeight;


if(position < screenHeight - 100){

element.classList.add("show");

}


});


});
