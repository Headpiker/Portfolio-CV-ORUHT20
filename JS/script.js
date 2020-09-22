function myFunction(){
    var x = document.getElementById("sitelinks");
    if(x.className === "navbar") {
        x.className += "responsive";
    } else{
        x.className = "navbar";
    }
}

