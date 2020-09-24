function myFunction() {
    var x = document.getElementById("myNavbar"); //Hittar ID i dokumentet som heter "myNavbar"
    if (x.className === "navbar") { //Om klassnamnet är navbar så ändrar den klassnamnet till responsive och då körs den koden i css
      x.className += " responsive";
    } else {
      x.className = "navbar"; //Om responsive är aktivt så körs den här istället och resettar menyn till original
    }
  }

  var slides = document.querySelectorAll('#slides .slide');
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide,2000);
  
  function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
  }
  
  var playing = true;
  var pauseButton = document.getElementById('pause');
  
  function pauseSlideshow(){
    pauseButton.innerHTML = 'Play';
    playing = false;
    clearInterval(slideInterval);
  }
  
  function playSlideshow(){
    pauseButton.innerHTML = 'Pause';
    playing = true;
    slideInterval = setInterval(nextSlide,5000);
  }
  
  pauseButton.onclick = function(){
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
  };