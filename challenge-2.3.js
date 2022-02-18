// finding out grade typing number using if, else if condition.

let number = 79;

if (number <= 100 && number >= 80) {
    console.log('you got A+');
}

else if (number < 80 && number >= 70) {
    console.log('you got A');
}

else if (number < 70 && number >= 60) {
    console.log('you got A-');
}

else if (number < 60 && number >= 50) {
    console.log('you got B');
}

else if (number < 50 && number >= 40) {
    console.log('you got c');
}
else if (number < 40 && number >= 33) {
    console.log('you got D');
}

else if (number < 33) {
    console.log('you Failed')
}

