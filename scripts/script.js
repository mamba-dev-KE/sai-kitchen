const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".nav");

burgerMenuOpen = burgerMenu.addEventListener("click", () => {
	nav.classList.toggle("active");
});
