function checkName(){
    var namn = document.getElementById('namn').value;    
    var submit = document.getElementById("submit").disabled = true;
    
    //Kollar så namnet är minst 3
    if(!/[a-z_\-]{3,}$/i.test(namn)){
        alert("Name should be atleast 3 characters!");
        isValid = false;
        
    }
    //Kollar för whitespace
    if(/^\s*$/i.test(namn)){
        alert("You need to enter a name!");
        isValid = false;
        
    }
    
}

function checkMail(){ //Funktion för att kolla så att mailen är korrekt angiven och i rätt format
    var mail = document.getElementById("email");
    var mailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
   
    if(!mailCheck.test(mail.value)) //Om fältet inte har rätt värde exekveras denna
    {
        alert("Email isn't correctly formatted!");
    }
}

function checkNumber(){ //Kollar så att numret är korrekt angivet
    var number = document.getElementById("number");    
    var numberCheck = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    

    if(!numberCheck.test(number.value)){
        alert("Phonenumber isn't entered correctly!")
    }
}

function checkText(){ //Kollar om det finns whitespace, finns det whitespace så varnar den
    var text = document.getElementById("meddelande");
    var textCheck = /^\s*$/;
    

    if(textCheck.test(text.value)){
        alert("You need to enter some text!")
    }
}

function manageSubmit(){ //Stänger av submit om fälten är tomma.
    var submitCheck = document.getElementById("submit");
    var namn = document.getElementById('namn'); 
    var mail = document.getElementById("email");
    var number = document.getElementById("number"); 
    var text = document.getElementById("meddelande");

    if(namn.value != "" && mail.value !="" && number.value !="" && text.value !=""){
        submitCheck.disabled = false;
    }

    else { submitCheck.disabled = true; }
}