document.addEventListener("DOMContentLoaded", function() {
    // nested menu
    
    const nestedMenu = document.querySelector(".nested-menu");
    const menuTriggerEl = document.querySelector(".menu-trigger-el");
    
    menuTriggerEl.addEventListener("mouseover", function() {
    nestedMenu.style.display = "block";    
    });
    
    nestedMenu.addEventListener("mouseout", function() {
       this.style.display = "none"; 
    });

    });