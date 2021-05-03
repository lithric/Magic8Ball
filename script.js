var respondText = document.getElementById("response");
var textOptions=[];
var kite;
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
    var rand = Calc.randomInt(9);
    respondText.innerHTML = textOptions[rand];
}