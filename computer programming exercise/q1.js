let base = Number(prompt("Enter the base: "));
let height = Number(prompt("Enter the height: "));
function calculateArea(b, h) {
    return 0.5 * b * h;
}
let result = calculateArea(base, height);
console.log("The area of the triangle is: " + result
    
);

let num = Number(prompt("Enter a number:"));
function isEvenOrOdd(n) {
    if (n % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log("The number is: " + isEvenOrOdd(num));