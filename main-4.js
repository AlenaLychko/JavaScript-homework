//ex 1
const area1 = prompt("введить перше значення");
const area2 = prompt("введить друге значення");
if (area1 !== "" && area2 !== "") {
  alert("Обидва поля заповнені");
} else {
  alert("Не всі поля заповнені");
}

//ex 2
const number = 7 + 6;
if (number > 10) {
  console.log("Сума більша за 10");
} else if (number < 10) {
  console.log("Сума менша або дорівнює 10");
}

//ex 3

const message = "Я вивчаю мову JavaScript";

if (message.includes("JavaScript")) {
  console.log("Текст містить слово JavaScript");
} else {
  console.log("Текст не містить слово JavaScript");
}
//ex 4

const nummber = 15;

if (nummber > 10 && nummber < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
    console.log("Число не входить в діапазон від 10 до 20");
}
//ex 5

const name = "Alena";
const email = "alenaxxprv@gmail.com";
const password = "pikpk";

const isNameValid = name.lenght >= 3;
const isEmailValid = email.includes("@") && email.indexOf(".") > email.indexOf("@");
const isPasswordValid = password.lenght >= 6;

if(isNameValid && isEmailValid && isPasswordValid) {
    console.log("Перенаправлення на іншу сторінку");
} else {
    console.log("Помилка: неправильне заповнення");
}