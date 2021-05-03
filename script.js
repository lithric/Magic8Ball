var respondText = document.getElementById("response");
var textOptions=[];
textOptions.push(
    "No", //1
    "Yes", //2
    "Not likely", //3
    "No true answer", //4
    "Probably", //5
    "Not for me to answer", //6
    "It is only a matter of time", //7
    "Maybe", //8
    "Afraid so", //9
    "Afraid not" //10
);

function MagicResponse() {
    var rand = Calc.randomInt(9); //0-9

    //this
    respondText.innerHTML = textOptions[rand];

    //or this works just fine
    switch (rand+1) {
        case 1:
            respondText.innerHTML = [rand];
        case 2:
            respondText.innerHTML = [rand];
        case 3:
            respondText.innerHTML = [rand];
        case 4:
            respondText.innerHTML = [rand];
        case 5:
            respondText.innerHTML = [rand];
        case 6:
            respondText.innerHTML = [rand];
        case 7:
            respondText.innerHTML = [rand];
        case 8:
            respondText.innerHTML = [rand];
        case 9:
            respondText.innerHTML = [rand];
        case 10:
            respondText.innerHTML = [rand];
    }
}