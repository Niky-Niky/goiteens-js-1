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
switch(random){
case 1: console.log("Your number is 1");
break;
case 2: console.log("Your number is 2");
break;
case 3: console.log("Your number is 3");
break;
}


