// Get the elements
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const closeMenu = document.getElementById("close-menu");

// Open and close the menu on menuToggle click
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close the menu when the close icon is clicked
closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("active");
});
