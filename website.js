// Wait for the HTML document to load before running the JavaScript code
document.addEventListener("DOMContentLoaded", () => {
    // Get all the elements with the "hover-effect" class and add a hover animation
    const text = document.querySelectorAll(".hover-effect");
  
    text.forEach((item) => {
      item.addEventListener("mouseover", () => {
        item.style.color = "blue";
      });
  
      item.addEventListener("mouseout", () => {
        item.style.color = "";
      });
    });
  
    // Toggle the "active" class on the mobile navigation menu when the user clicks the hamburger icon
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".mobile-menu");
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      menu.classList.toggle("active");
    });
  });
  