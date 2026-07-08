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
