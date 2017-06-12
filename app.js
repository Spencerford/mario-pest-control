
function grandtotal () {
    var cheeptotal = Number(document.querySelector("#cheepanswer").innerHTML);
    var Bombtotal = Number(document.querySelector("#bombanswer").innerHTML);
    var goombtotal = Number(document.querySelector("#goombanswer").innerHTML);
    
    document.querySelector("#totalAnswer").innerHTML = cheeptotal + Bombtotal + goombtotal;
}

document.getElementById("cheepvalue").addEventListener("change", function(){
    var amount = Number(document.querySelector("#cheepvalue").value);
    var cost = 11;

    var answer = amount * cost;
    
    document.querySelector("#cheepanswer").innerHTML = answer;
    grandtotal();
});

document.getElementById("bombvalue").addEventListener("change", function(){
    var amount = Number(document.querySelector("#bombvalue").value);
    var cost = 7;

    var answer = amount * cost;
    
    document.querySelector("#bombanswer").innerHTML = answer;
    grandtotal();
});

document.getElementById("goombvalue").addEventListener("change", function(){
    var amount = Number(document.querySelector("#goombvalue").value);
    var cost = 5;

    var answer = amount * cost;
    
    document.querySelector("#goombanswer").innerHTML = answer;
    grandtotal();
});



