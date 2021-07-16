function add(x,y){
    return x + y;
}
function subtract(x,y){
    return x - y;
}
function multiply(x,y){
    return x * y;
}
function divide(x,y){
    return x / y;
}

function power(x,y) {
    return x ** y;
}

const mathFuncs = [add, subtract, multiply, divide, power];

function doAllMath(x, y, maths) {
    for (math of maths) {
        console.log(math(x,y));
    }
}

doAllMath(3,5, mathFuncs);