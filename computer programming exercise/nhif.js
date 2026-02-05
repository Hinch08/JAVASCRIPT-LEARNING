let nhif;

if (gross_salary > 100000) {
    nhif = 1700;
} else if (gross_salary > 90000) {
    nhif = 1600;
} else if (gross_salary > 80000) {
    nhif = 1500;
} else if (gross_salary > 70000) {
    nhif = 1400;
} else if (gross_salary > 60000) {
    nhif = 1300;
} else if (gross_salary > 50000) {
    nhif = 1200;
} else if (gross_salary > 45000) {
    nhif = 1100;
} else if (gross_salary > 40000) {
    nhif = 1000;
} else if (gross_salary > 35000) {
    nhif = 950;
} else if (gross_salary > 30000) {
    nhif = 900;
} else if (gross_salary > 25000) {
    nhif = 850;
} else if (gross_salary > 20000) {
    nhif = 750;
} else if (gross_salary > 15000) {
    nhif = 600;
} else if (gross_salary > 12000) {
    nhif = 500;
} else if (gross_salary > 8000) {
    nhif = 400;
} else if (gross_salary > 6000) {
    nhif = 300;
} else {
    nhif = 150;
}

// To show it in your table:
document.getElementById('nhif_display').innerText = nhif;
