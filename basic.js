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

// show the garniture info box when the button is clicked
document.addEventListener("DOMContentLoaded", function () {
  // Flower button click event
  document.getElementById("1").addEventListener("click", function () {
    // Show the description for the flower
    document.getElementById("1-info").style.display = "block";

    // Hide the description for the leaves
    document.getElementById("2-info").style.display = "none";
  });

  // Leaves button click event
  document.getElementById("2").addEventListener("click", function () {
    // Show the description for the leaves
    document.getElementById("2-info").style.display = "block";

    // Hide the description for the flower
    document.getElementById("1-info").style.display = "none";
  });
});

// show the borghese info box when the button is clicked
document.addEventListener("DOMContentLoaded", function () {
  // Flower button click event
  document.getElementById("3").addEventListener("click", function () {
    // Show the description for the flower
    document.getElementById("3-info").style.display = "block";

    // Hide the description for the leaves
    document.getElementById("4-info").style.display = "none";
  });

  // Leaves button click event
  document.getElementById("4").addEventListener("click", function () {
    // Show the description for the leaves
    document.getElementById("4-info").style.display = "block";

    // Hide the description for the flower
    document.getElementById("3-info").style.display = "none";
  });
});

// birds click event
document.addEventListener("DOMContentLoaded", function () {
  // bird button click event
  document.getElementById("5").addEventListener("click", function () {
    // Show the description for the bird
    document.getElementById("5-info").style.display = "block";

    // Hide the description for the flowers
    document.getElementById("6-info").style.display = "none";
    // Hide the description for the plants
    document.getElementById("7-info").style.display = "none";
  });

  // flower button click event
  document.getElementById("6").addEventListener("click", function () {
    // Show the description for the flower
    document.getElementById("6-info").style.display = "block";

    // Hide the description for the bird
    document.getElementById("5-info").style.display = "none";
    // Hide the description for the plants
    document.getElementById("7-info").style.display = "none";
  });
    // plants button click event
  document.getElementById("7").addEventListener("click", function () {
    // Show the description for the plants
    document.getElementById("7-info").style.display = "block";

    // Hide the description for the bird
    document.getElementById("5-info").style.display = "none";
    // Hide the description for the flower
    document.getElementById("6-info").style.display = "none";
  });
});

// Chinese click event
document.addEventListener("DOMContentLoaded", function () {
  // Flower button click event
  document.getElementById("8").addEventListener("click", function () {
    // Show the description for the flower
    document.getElementById("8-info").style.display = "block";

    // Hide the description for the leaves
    document.getElementById("9-info").style.display = "none";
  });

  // Leaves button click event
  document.getElementById("9").addEventListener("click", function () {
    // Show the description for the leaves
    document.getElementById("9-info").style.display = "block";

    // Hide the description for the flower
    document.getElementById("8-info").style.display = "none";
  });
});

// dragon click event
document.addEventListener("DOMContentLoaded", function () {
  // Flower button click event
  document.getElementById("10").addEventListener("click", function () {
    // Show the description for the flower
    document.getElementById("10-info").style.display = "block";

    // Hide the description for the leaves
    document.getElementById("11-info").style.display = "none";
  });

  // Leaves button click event
  document.getElementById("11").addEventListener("click", function () {
    // Show the description for the leaves
    document.getElementById("11-info").style.display = "block";

    // Hide the description for the flower
    document.getElementById("10-info").style.display = "none";
  });
});
