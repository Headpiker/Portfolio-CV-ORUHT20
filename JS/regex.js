
function checkName(){
    var namn = document.getElementById("namn").value;
    
    if(!/^[a-z0-9_\-]{3-15}&/i.test(namn)){
        alert("Username should be between 3 and 15 characters");
    }
}