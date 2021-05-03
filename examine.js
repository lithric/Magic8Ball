var Calc = {};
var Oper = {};
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

function _def(Var) {
    return (typeof Var !== "undefined");
}

function _type(Var) {
    return typeof Var !== "undefined" ?
                Var !== null ?
                    Object.getPrototypeOf(Var).constructor.name
                :null
            :undefined;
}

Oper.denest = function rec(arr,iter = [[]]) {
    return _def(arr[0]) ?
        _type(arr[0]) != "Array" ?
            (function(){iter[iter.length-1] = iter[iter.length-1].concat(arr[0]);return rec(arr.slice(1),iter)})()
        :(function(){iter.push(...rec(arr[0],[[]]),[]);return rec(arr.slice(1),iter)})()
    :iter.filter(String);
}

/*
if cond1 ?
    if cond2 ?
        func2
    :failfunc2
:failfunc1

return if defined(arr[0]) ?
    if arr[0] == "a" ?
        "a"
    : read(arr.slice(1))
:stop
*/

Calc.factorial = function rec(numb) {
    return numb * (numb-1 ? rec(--numb):1);
}

Calc.recurseOpp = function rec(numb,func = function(n,b=1){return n*b},inc = function(a){return a-1},cond = function(n){return n > 0}) {
    return func(numb,
        cond(inc(numb)) ?
            rec(inc(numb),func,inc,cond)
        :undefined
    )
}

Calc.sum = function(n) {
    return (n**2+n)/2;
}

console.log(Calc.recurseOpp(20,function(n,b=1){return ((n+b)/n**2)+n}));