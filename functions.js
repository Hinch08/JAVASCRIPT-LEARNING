let basic_salary = Number(prompt("Enter your basic salary: "));
let benefits = Number(prompt("Enter your benefits: "));
function calculateNHIF(totalIncome,nhifDeduction) {
    let totalIncome = salary + benefits;
    let nhifDeduction = 0; 
    if (totalIncome <= 5999) {  
        nhifDeduction = 150;
    } else if (totalIncome >= 6000 && totalIncome <= 7999) {
        nhifDeduction = 300;
    } else if (totalIncome >= 8000 && totalIncome <= 11999) {
        nhifDeduction = 400;
    } else if (totalIncome >= 12000 && totalIncome <= 15999) {
        nhifDeduction = 500;
    } else if (totalIncome >= 16000 && totalIncome <= 19999) {
        nhifDeduction = 600;
    } else if (totalIncome >= 20000 && totalIncome <= 24999) {
        nhifDeduction = 750;
    } else if (totalIncome >= 25000 && totalIncome <= 29999) {
        nhifDeduction = 850;
    } else if (totalIncome >= 30000 && totalIncome <= 34999) {
        nhifDeduction = 950;
    } else if (totalIncome >= 35000 && totalIncome <= 39999) {
        nhifDeduction = 1150;
    } else if (totalIncome >= 45444 && totalIncome <= 47777) {
        nhifDeduction = 1258;
    } else if (totalIncome > 47777) {
        nhifDeduction = 1358;
    }
    return nhifDeduction;
}
let result = calculateNHIF(basic_salary,benefits)
console.log(result)