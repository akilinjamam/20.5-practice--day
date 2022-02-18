// use function by using 3 parameter and sum the three numbers

function getNumberAdd(number1, number2, number3) {
    let sum = number1 + number2 + number3
    return sum;
}

let add1 = 20;
let add2 = 30;
let add3 = 40;

let total = getNumberAdd(add1, add2, add3);

console.log('The total number is ', total);