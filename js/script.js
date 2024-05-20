/**************************
  * SCRIPT
**************************/
console.log('script file is connected');

// Slick slider
$('.hero').slick();

// Mobile menu
document.addEventListener("DOMContentLoaded", function() {
  //get hamburger menu from the DOM
  const hamburger_menu = document.getElementById('hamburger-menu');

  //get nav from the DOM
  const nav = document.getElementById('nav');

  //get nav from the DOM
  const footer = document.getElementById('footer');

  //get nav from the DOM
  const menu_items = document.getElementById('menu-items');

  hamburger_menu.addEventListener('click', function() {
    //add close class
    hamburger_menu.classList.toggle('close');
      
    //if height of nav is 100vh then reset it to original height, 74px
    if(nav.style.height === "100vh") {
      nav.style.height = "74px";
      menu_items.style.display = "none";
      footer.style.display = "flex";
    } else {
      nav.style.height = "100vh";
      menu_items.style.display = "flex";
      footer.style.display = "none";
    }
  });
});