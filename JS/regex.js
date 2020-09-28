function checkName(){
    var namn = document.getElementById('namn').value;    
    
    //Kollar så namnet är minst 3 och max 15
    if(!/^[a-z0-9_\-]{3,15}$/i.test(namn)){
        alert("Username should be between 3-15 characters!");
        
    }
    //Kollar för whitespace
    if(/^\s*$/i.test(namn)){
        alert("You need to enter a name!");
        
    }
    
}

function checkMail(){
    var mail = document.getElementById("email").value;
    var regCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   
    if(!regCheck.test(mail.value))
    {
        alert("Email isn't correctly formatted!");
    }
}

function checkNumber(){
    var number = document.getElementById("number");    
}

function toUpper(){
    var up = document.getElementById("namn").value;

    up.value = up.value.toUpperCase();
}