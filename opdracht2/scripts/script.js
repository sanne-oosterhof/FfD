// JavaScript Document
console.log("howdy");

// Variabelen voor de hele dopper
var deDop = document.querySelector("#dop");
var deCup = document.querySelector("#cup");
var deBottle = document.querySelector("#bottle");

// Variabelen voor de dop
var polarBlueDop = document.querySelector("[value='polarBlue']");
var tidalTealDop = document.querySelector("[value='tidalTeal']");
var pacificBlueDop = document.querySelector("[value='pacificBlue']");
var coralSplashDop = document.querySelector("[value='coralSplash']");
var seahorseLimeDop = document.querySelector("[value='seahorseLime']");
var moodyMintDop = document.querySelector("[value='moodyMint']");

// Variabelen voor de cup
var witteCup = document.querySelector("[value='wit']");
var zwarteCup = document.querySelector("[value='zwart']");

// Variabelen voor de bottle
var polarBlueBottle = document.querySelector("[value='polarBlueBottle']");
var tidalTealBottle = document.querySelector("[value='tidalTealBottle']");
var pacificBlueBottle = document.querySelector("[value='pacificBlueBottle']");
var coralSplashBottle = document.querySelector("[value='coralSplashBottle']");
var seahorseLimeBottle = document.querySelector("[value='seahorseLimeBottle']");
var moodyMintBottle = document.querySelector("[value='moodyMintBottle']");

// Variabele voor carousel
var carouselOpties = {
  direction: 'horizontal',
  loop: 'true',
  speed: 300,
  cssMode: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};

// Voor de dop
polarBlueDop.addEventListener("change", maakDopPolarBlue);
tidalTealDop.addEventListener("change", maakDopTidalTeal);
pacificBlueDop.addEventListener("change", maakDopPacificBlue);
coralSplashDop.addEventListener("change", maakDopCoralSplash);
seahorseLimeDop.addEventListener("change", maakDopSeahorseLime);
moodyMintDop.addEventListener("change", maakDopMoodyMint);

// Voor de cup
witteCup.addEventListener("change", maakCupWit);
zwarteCup.addEventListener("change", maakCupZwart);

// Voor de bottle
polarBlueBottle.addEventListener("change", maakBottlePolarBlue);
tidalTealBottle.addEventListener("change", maakBottleTidalTeal);
pacificBlueBottle.addEventListener("change", maakBottlePacificBlue);
coralSplashBottle.addEventListener("change", maakBottleCoralSplash);
seahorseLimeBottle.addEventListener("change", maakBottleSeahorseLime);
moodyMintBottle.addEventListener("change", maakBottleMoodyMint);


// Functies voor de dop
function maakDopPolarBlue() {
  deDop.classList.remove("tidalTeal");
  deDop.classList.remove("pacificBlue");
  deDop.classList.remove("coralSplash");
  deDop.classList.remove("seahorseLime");
  deDop.classList.remove("moodyMint");
  deDop.classList.add("polarBlue");
}

function maakDopTidalTeal(){
  deDop.classList.remove("polarBlue");
  deDop.classList.remove("pacificBlue");
  deDop.classList.remove("coralSplash");
  deDop.classList.remove("seahorseLime");
  deDop.classList.remove("moodyMint");
  deDop.classList.add("tidalTeal");
}

function maakDopPacificBlue(){
  deDop.classList.remove("polarBlue");
  deDop.classList.remove("tidalTeal");
  deDop.classList.remove("coralSplash");
  deDop.classList.remove("seahorseLime");
  deDop.classList.remove("moodyMint");
  deDop.classList.add("pacificBlue");
}

function maakDopCoralSplash(){
  deDop.classList.remove("polarBlue");
  deDop.classList.remove("tidalTeal");
  deDop.classList.remove("pacificBlue");
  deDop.classList.remove("seahorseLime");
  deDop.classList.remove("moodyMint");
  deDop.classList.add("coralSplash");
}

function maakDopSeahorseLime(){
  deDop.classList.remove("polarBlue");
  deDop.classList.remove("tidalTeal");
  deDop.classList.remove("pacificBlue");
  deDop.classList.remove("coralSplash");
  deDop.classList.remove("moodyMint");
  deDop.classList.add("seahorseLime");
}

function maakDopMoodyMint(){
  deDop.classList.remove("polarBlue");
  deDop.classList.remove("tidalTeal");
  deDop.classList.remove("pacificBlue");
  deDop.classList.remove("coralSplash");
  deDop.classList.remove("seahorseLime");
  deDop.classList.add("moodyMint");
}

// Functies voor de cup
function maakCupWit() {
  deCup.classList.remove("zwart");
  deCup.classList.add("wit");
}

function maakCupZwart(){
  deCup.classList.remove("wit");
  deCup.classList.add("zwart");
}

// Functies voor de bottle
function maakBottlePolarBlue() {
  deBottle.classList.remove("tidalTealBottle");
  deBottle.classList.remove("pacificBlueBottle");
  deBottle.classList.remove("coralSplashBottle");
  deBottle.classList.remove("seahorseLimeBottle");
  deBottle.classList.remove("moodyMintBottle");
  deBottle.classList.add("polarBlueBottle");
}

function maakBottleTidalTeal(){
  deBottle.classList.remove("polarBlueBottle");
  deBottle.classList.remove("pacificBlueBottle");
  deBottle.classList.remove("coralSplashBottle");
  deBottle.classList.remove("seahorseLimeBottle");
  deBottle.classList.remove("moodyMintBottle");
  deBottle.classList.add("tidalTealBottle");
}

function maakBottlePacificBlue(){
  deBottle.classList.remove("polarBlueBottle");
  deBottle.classList.remove("tidalTealBottle");
  deBottle.classList.remove("coralSplashBottle");
  deBottle.classList.remove("seahorseLimeBottle");
  deBottle.classList.remove("moodyMintBottle");
  deBottle.classList.add("pacificBlueBottle");
}

function maakBottleCoralSplash(){
  deBottle.classList.remove("polarBlueBottle");
  deBottle.classList.remove("tidalTealBottle");
  deBottle.classList.remove("pacificBlueBottle");
  deBottle.classList.remove("seahorseLimeBottle");
  deBottle.classList.remove("moodyMintBottle");
  deBottlep.classList.add("coralSplashBottle");
}

function maakBottleSeahorseLime(){
  deBottle.classList.remove("polarBlueBottle");
  deBottle.classList.remove("tidalTealBottle");
  deBottle.classList.remove("pacificBlueBottle");
  deBottle.classList.remove("coralSplashBottle");
  deBottle.classList.remove("moodyMintBottle");
  deBottle.classList.add("seahorseLimeBottle");
}

function maakBottleMoodyMint(){
  deBottle.classList.remove("polarBlueBottle");
  deBottle.classList.remove("tidalTealBottle");
  deBottle.classList.remove("pacificBlueBottle");
  deBottle.classList.remove("coralSplashBottle");
  deBottle.classList.remove("seahorseLimeBottle");
  deBottle.classList.add("moodyMintBottle");
}

// Carousel laten werken
const swiper = new Swiper('.swiper', carouselOpties);