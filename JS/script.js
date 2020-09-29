function myFunction() {
    var x = document.getElementById("myNavbar"); //Hittar ID i dokumentet som heter "myNavbar"
    if (x.className === "navbar") { //Om klassnamnet är navbar så ändrar den klassnamnet till responsive och då körs den koden i css
      x.className += " responsive";
    } else {
      x.className = "navbar"; //Om responsive är aktivt så körs den här istället och resettar menyn till original
    }
  }

