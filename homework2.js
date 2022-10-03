const k1 = "5px";
const k2 = "12djd334";
const k3 = "12.45asdwe12";
const k4 = "qwqweeewq";

console.log(parseInt(k1));
console.log(parseInt(k2));
console.log(parseInt(k3));
console.log(parseInt(k4));

console.log(parseFloat(k1));
console.log(parseFloat(k2));
console.log(parseFloat(k3));
console.log(parseFloat(k4));

console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));
console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));

const random = Math.random((19 - 3) + 3);
console.log(random);

const result = 5 + 5 + "5";
console.log(result);

const email = "nik333nik888@gmail.com";
console.log(email.indexOf("@"));
console.log(email.length);

let my = " My";
let name = " name";
let is = " is";
const fullName = my + name + is;
console.log(fullName + " Viktor");

let userName = "Ваня Бомж";
let payment = 10;
window.alert(`Шановний, ${userName}, за шаурму на Укр Залізниці з вас ${payment} грн! Не отруїться -_-`)