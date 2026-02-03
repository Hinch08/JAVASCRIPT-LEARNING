score = Number(prompt("Enter your score:"));

if (score >= 70 && score <= 100) {
    console.log("A");
} else if (score >= 60 && score <= 69) {
    console.log("B");
} else if (score >= 50 && score <=50) {
    console.log("C");
} else if (score >= 40 && score <= 49) {
    console.log("D");
} else if (score >= 0 && score <= 39) {
    console.log("F");
} else{
    console.log("Invalid score ");
}