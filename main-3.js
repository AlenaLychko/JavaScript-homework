//ex 1 
let result = 5 + 5 + "5";
console.log(result); 
console.log(typeof result);

//ex 2
const email = "alenaxxprv@gmail.com";
const symbol = email.includes("@");
const lenght = email.lenght;

console.log("містить @:", symbol);
console.log("кількість симболів:", length);

//ex 3

const my = "my";
const tag = "name";
const is = "is";
 let fullName = `${my} ${tag} ${is}`;

 const name = "Viktor";

 if (name === "Viktor") {
   fullName += " Viktor";
 } else if (name === "Natalia") {
   fullName += "Natalia";
 } 

 console.log(fullName);

 //ex 4

 const userName = "Олександро!";
 const payment = 300;
 alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);