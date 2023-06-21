const prompt = require("prompt-sync")({sigint: true});
const age = prompt("Please insert your age: ")
if(age > 18){
    console.log ("you are welcome to lakers")
} else { 
    console.log ("Sorry, you are not welcomed")
}
