//task 1
function factorialFunction(inputNumber) {
    let result = 1;
    if (inputNumber<0) result = "Invalid input";
    for (let i=0; i<inputNumber; i++) {
        result *= (i+1);
    }
    alert("Факториал числа " +inputNumber+" = "+result);
    return result;
}
//task 2
function degreeFunction(number, degree) {
    let number0 = number;
    let minus = 1;
    let temp = number;
    if (degree<0) minus = -1;
    for (let i=1; i<(degree*minus); i++) number *=temp;
    if (minus === -1) number = 1/number;
    alert("Число "+number0+" в степени "+degree+" = "+number);
    return number;
}
//task 3
function multiples(numberFirst, numberSecond){
    let i = 0;
    let result = true;
    do {
        i++;
        result = ((parseFloat(i%numberFirst) == 0) &&
                  (parseFloat(i%numberSecond) == 0)) ? false : true;
    } while(result);
    alert("Наименьшее общее кратное чисел "+numberFirst+" и "+numberSecond+" = "+i);
    return i;
}
//task 4
function numRev(enteredNum) {
    let temp = enteredNum;
    let remainder;
    let outNum = "";
    let minus = false;
    while (temp) {
        if (temp<1) {
            temp *=-1;
            minus = true;
        }
        remainder = temp%10; //1234 - 4
        temp = parseInt(temp/10); //1234 - 123
        console.log(remainder);
        console.log(temp);
        outNum += String(remainder);
    }
    outNum = parseInt(outNum);
    if (minus) outNum *=-1;
    if (enteredNum === 0) outNum = 0;
    alert("Число "+enteredNum+" преобразованное \"задом на перед\""+" = "+outNum);
    return outNum;
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
function inputRevNumber() {
    let inputNumber = parseInt(prompt("Введите число", 1234));
    let  inputNumberRev = document.querySelector(".in-rev-number");
    inputNumberRev.innerHTML = inputNumber;
    let  outputNumberRev = document.querySelector(".out-rev-number");
    outputNumberRev.innerHTML = numRev(inputNumber);
}



