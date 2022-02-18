
// finding out interest using function in js 

function getInterest(principle, rate, time) {
    let savingsWithInterest = (principle * rate * time) / 100;
    return savingsWithInterest
}

let p = 1000;
let r = 8;
let t = 2

let theResult = getInterest(p, r, t);

console.log('the interest is', theResult);