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


    // read more-less
    const readMoreLessBtns = document.querySelectorAll(".read-more-less-btn");
    
    function showHideText() {
        const siblinText = this.previousElementSibling;
        if (siblinText.style.display === "none" || siblinText.style.display === "" ) {
            siblinText.style.display = "block";
            this.textContent = "Czytaj mniej";
        } else {
            siblinText.style.display = "none";
            this.textContent = "Czytaj więcej";}
    }
    
        
    for (let i = 0; i < readMoreLessBtns.length; i++) {
        readMoreLessBtns[i].addEventListener("click", showHideText);
    }
    

// newsletter

    const input = document.querySelector(".newsletter-form input");
    const newsletterBtn = document.querySelector(".newsletter-form button");
    const formInfo = document.querySelector(".form-info");
    //console.log(input, newsletterBtn);
    
    newsletterBtn.addEventListener("click", function(event) {
        event.preventDefault();
       // console.log(input.value);
        formInfo.style.display = "block"
    
        if (input.value !=="") {
           // formInfo.style.display = "block";
            formInfo.textContent = "Zapisano do newslettera";
            formInfo.style.color = "white";
        } else {
            //formInfo.style.display = "block";
            formInfo.textContent = "Pole nie może być puste, podaj adress email";
            formInfo.style.color = "red";
        }
    });
    
    
    
    
});