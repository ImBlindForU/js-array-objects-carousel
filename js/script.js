const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// seleziono la proprieta css da prendere in considerazione

let rowDiv = document.querySelector(".row-slider-img")

// creo un ciclo for che cambia immagine al clickdelle arrow

for(let i = 0; i < images.length; i++ ){
    const imageElement = images[i];
    const element = `
            <div class="image hidden">
                <img src="images/${imageElement.image}" alt="">
                <div class="text-img">
                    <h1>${imageElement.title}</h1>
                    <p> ${imageElement.text}</p>
                </div>
                <div class="arrow-right">
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <div class="arrow-left">
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
            </div>
    `
    
    rowDiv.innerHTML += element
}   

// start 
const imageDiv = document.getElementsByClassName("image");
let sliderPosition = 0;
imageDiv[sliderPosition].classList.add("active")

// imageDiv[sliderPosition].classList.add("active")
const rightArrow = document.querySelector(".arrow-right");
const leftArrow = document.querySelector(".arrow-left");

rightArrow.addEventListener("click", function(){
    if(sliderPosition < imageDiv.length){
        
        imageDiv[sliderPosition].classList.remove("active");
        imageDiv[sliderPosition].classList.add("hidden");


        sliderPosition ++;


        imageDiv[sliderPosition].classList.remove("hidden");
        imageDiv[sliderPosition].classList.add("active");
        
        
    }
})
