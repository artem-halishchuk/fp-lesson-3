function factorialFunction(inputNumber) {
    let result = 1;
    if (inputNumber<0) result = "Invalid input";
    for (let i=0; i<inputNumber; i++) {
        result *= (i+1);
    }
    alert(result);
    return result;
}
function degreeFunction(number, degree) {
    let minus = 1;
    let temp = number;
    if (degree<0) minus = -1;
    for (let i=1; i<(degree*minus); i++) number *=temp;
    if (minus === -1) number = 1/number;
    alert(number);
    return number;
}

function multiples(numberFirst, numberSecond){
    let i = 0;
    let result = true;
    do {
        i += 1;
        result = (i%numberFirst === i%numberSecond) ? false : true;
    } while(result)
    return i;
}



function inputNumberForFactorial() {
    let a = parseInt(prompt("Введите число", 10));
    let  inFactorial = document.querySelector(".in-facrotial");
    inFactorial.innerHTML = a;
    let  outFactorial = document.querySelector(".out-facrotial");
    outFactorial.innerHTML = factorialFunction(a);

}
//button_factorial.addEventListener("click", inputNumberForFactorial);

function inputNumberForDegree() {
    let number = parseFloat(prompt("Введите число", 4));
    let degree = parseFloat(prompt("Введите степень", 2));
    let  inNumberDegree = document.querySelector(".in-number-degree");
    inNumberDegree.innerHTML = number;
    let  inDegreeDegree = document.querySelector(".in-degree-degree");
    inDegreeDegree.innerHTML = degree;

    let  outDegree = document.querySelector(".out-degree");
    outDegree.innerHTML = degreeFunction(number, degree);
}

function inputNumberForMultiples() {
    let numberFirst = parseFloat(prompt("Введите первое число", 4));
    let numberSecond = parseFloat(prompt("Введите второе число", 2));
    let  inNumberFirstMultiples = document.querySelector(".in-first-number-multiples");
    inNumberFirstMultiples.innerHTML = numberFirst;
    let  inNumberSecondMultiples = document.querySelector(".in-second-number-multiples");
    inNumberSecondMultiples.innerHTML = numberSecond;

    let  outMultiples = document.querySelector(".out-multiples");
    outMultiples.innerHTML = multiples(numberFirst, numberSecond);
}




