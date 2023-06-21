const prompt = require("prompt-sync")({sigint: true});

const number = prompt("Enter a number: ")
// check if the number is positive, zero or negative
if (number > 0){
    console.log("The number is Positive");
}

// check if the number is positive, zero or negative
else if(number == 0){
    console.log("The number is 0");
}

// check if the number is positive, zero or negative
else{
    console.log("The number is Negative");
}