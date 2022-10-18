let number = window.prompt("Type a number");
if(number >= 55 && number <= 99){
console.log("Number is acceptable");
} else {
console.log("Number is not acceptable");
}

let years = 55;
if(years >= 0 && years <= 16){
console.log("You are in group kids");
} else if(years >= 17 && years <= 60){
console.log("You are in group adults");
} else if(years >= 61 && years <= 100){
console.log("You are in group pensioner")
}

const firstName = "Illia";
const lastName = "Bilishuk";
console.log(firstName.length);
console.log(lastName.length);
if(firstName.length >= 4 && lastName.length >= 5){
console.log("Oops!")
}

let random = Math.random((5 - 1) + 1);
if(random === 1){
    console.log("Your number is 1");
} else if(random === 2){
    console.log("Your number is 2");
} else if(random === 3){
    console.log("Your number is 3");
} else if(random === 4){
    console.log("Your number is 4");
} else if(random === 5){
    console.log("Your number is 5");
}

// I don't know how to solve the fifth problem because I don't 
// know how variable "lang" can acquire 4 units. 
