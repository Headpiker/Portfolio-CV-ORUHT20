function myFunction() {
    var x = document.getElementById("myNavbar"); //Hittar ID i dokumentet som heter "myNavbar"
    if (x.className === "navbar") { //Om klassnamnet är navbar så ändrar den klassnamnet till responsive och då körs den koden i css
      x.className += " responsive";
    } else {
      x.className === "navbar"; //Om responsive är aktivt så körs den här istället och resettar menyn till original
    }
  }

  var slides = document.querySelectorAll('#slides .slide'); //Skapar en variabel som hittar de valda paramterarna
  var currentSlide = 0; //Skapar en variabel som visar vilken position den nuvarande bilden ligger på
  var slideInterval = setInterval(nextSlide,3000); //Sätter ett intervall för hur snabbt bildspelet ska växla bilder, angett i ms
  
  function nextSlide(){
    slides[currentSlide].className = 'slide'; //Skapar en array av slides
    currentSlide = (currentSlide+1)%slides.length; //Iterar genom arrayen så lång som arrayen är
    slides[currentSlide].className = 'slide showing'; //Denna visas när arrayen kommer tillbaka till första bilden igen
  }
  
  var playing = true; //bool för att kunna starta/stoppa spelningen
  var pauseButton = document.getElementById('pause'); //Skapar en variabel för play/pause som hämtar id för play/pause knappen
  
  function pauseSlideshow(){ 
    pauseButton.innerHTML = 'Play slideshow'; //Söker av dokumentet om det står Play på knappen
    playing = false; //Sätter playing till false
    clearInterval(slideInterval); //Stannar tiden
  }
  
  function playSlideshow(){
    pauseButton.innerHTML = 'Pause slideshow'; //Söker av dokumentet om det står Pause på knappen
    playing = true; //Sätter playing till true
    slideInterval = setInterval(nextSlide,3000); //Startar intervallet igen med de angivna parametrarna
  }
  
  pauseButton.onclick = function(){ //Skapar en funktion för ett onclick-event, denna kallas när man trycker på play/pause
    if(playing = true){ pauseSlideshow(); } //Kollar om variabeln playing är true, isåfall kallar den på metoden pauseSlideshow
    else{ playSlideshow(); } //Om playing är false så kallar den på metoden playSlideshow
  }