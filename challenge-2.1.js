// calcius to fahrenheit converter using function in js


function getFahrenheit(calcius) {
    let fahrenheit = calcius * (9 / 5) + 32;
    return fahrenheit
}

let toCalcius = 22;

let theResult = getFahrenheit(toCalcius);

console.log('fahrenheit is', theResult, 'F');