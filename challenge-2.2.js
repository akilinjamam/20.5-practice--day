// fahrenheit to calcius converter using function in js.


function getCalcius(fahrenheit) {
    let calcius = (fahrenheit - 32) / 1.8000;
    return calcius
}

let fromFahrenheit = 68;

let theResult = getCalcius(fromFahrenheit);
console.log('converted to calcius ', theResult, 'C');