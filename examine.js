var Calc = {};
var scriptText = "";

Calc.random = function() {
    var low;
    var high;
    var arr = [];
    arr[0] = function(){low=0;high=1;};
    arr[1] = function(){low=0;high=arguments[0];};
    arr[2] = function(){low=arguments[0];high=arguments[1];};
    arr[arguments.length-1]();
    var numb = Math.random()*(high - low) + low;
    return numb;
}
Calc.randomInt = function() {
    var low=0;
    var high;
    var dat = [];
    dat[0] = () => {high = arguments[0]};
    dat[0]();
    var numb = Math.round(Math.random()*(high - low) + low);
    return numb;
}

function _ex(Var) {
    return (typeof Var !== "undefined");
}

Calc.factorial = function rec(numb) {
    return numb * (numb-1 ? rec(--numb):1);
}

Calc.sum = function() {
    return (n**2+n)/2;
}
