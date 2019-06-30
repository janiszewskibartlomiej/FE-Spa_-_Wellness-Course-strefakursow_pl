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
    
    // slider
    const slider = document.querySelector(".slider"); //lista ze sliderami
    const sliderStage = document.querySelector(".slider-stage");
    const sliders = document.querySelectorAll(".slider li"); //obrazki
    //console.log(slider, sliderStage, sliders)
    
    const prev = document.querySelector(".previous-arrow");
    const next = document.querySelector(".next-arrow");
    //console.log(prev, next)
    
    //zmienne pomocnicze
    const sliderWidth = sliders[0].clientWidth;  //pobieranie szerokosći z 1 elementu. Kożystamy z tej metody ponieważ jak bysmy wpisali z palca 500px a potem zmienili szer w css bylby błąd
    let currentIndex = 0;     //ustawianie obecnego indexu
    let slidersNumber = sliders.length -1;  //kożystamy z tej metody aby uniknąć błąedu przy dodaniu kulejnych zdjeci do slider. metoda ta sprawdza dlugosc tablicy. z racji tego ze liczy od 1 a potrzebujemy to do indexow dlatego robimy length - minus 1.
    //console.log(sliderWidth, currentIndex, slidersNumber)
    
    function goToSlider(index) {
        //console.log(index)
        if (index < 0) {
            index = slidersNumber; //ustawiamy na 3 ponieważ chcemy zeby klikajac w lewo po indexie 0 byl przeskok do zdjecia ostatniego czyli z indexem 3
        } else if (index > slidersNumber) {
            index = 0;
        }
        slider.style.left = index * (-sliderWidth) + "px";  // ustawiamy na left ponieważ jest to naturalny ruch slidera 
        //console.log(-sliderWidth + "px")
        currentIndex = index;  //nadpisujemy currentIndex za pomoca index aby wykozystac do strzalek, aby wiedziec w jakim miejscu jestesmy
        //console.log("nr indexu po zmianie przez funkcję:", currentIndex)
    }
    
    //goToSlider(2);
//    console.log(slider, sliderStage, sliders)
//    console.log(prev, next)
//    console.log(sliderWidth)
    
    function slideToNext() {
        goToSlider(currentIndex + 1);   //fukcja zmieniajaca zdjecia po nacisnieciu strzali do przodu
    }
    
    function slideToPrev() {
        goToSlider(currentIndex - 1);//fukcja zmieniajaca zdjecia po nacisnieciu strzali do tyłu
    }
    
    //podpiecie naszej funcji do kliekniecia w arrow
    prev.addEventListener("click", slideToNext);  
    next.addEventListener("click", slideToPrev);
    
    setInterval(slideToNext, 3000); //wbudowana fukcja która wywułej daną funkcję co ileś milisekund w naszym wypadku wywoluje funkcje slideToNext co 3 sekundy
    
    
});