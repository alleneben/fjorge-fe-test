console.log("script file is connected"),$(".hero").slick({prevArrow:$(".prev"),nextArrow:$(".next")}),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("hamburger-menu"),t=document.getElementById("nav"),n=document.getElementById("footer"),s=document.getElementById("menu-items");e.addEventListener("click",(function(){"hamburger-menu"===e.classList.value?(e.classList.toggle("close"),e.classList.remove("hamburger-menu")):(e.classList.add("hamburger-menu"),e.classList.remove("close")),"100vh"===t.style.height?(t.style.height="74px",s.style.display="none",n.style.display="flex"):(t.style.height="100vh",s.style.display="flex",n.style.display="none")})),window.addEventListener("resize",(function(){window.innerWidth>=1024&&(s.style.display="flex")}))}));//# sourceMappingURL=script.js.map
