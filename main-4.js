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
 if(number > 10){
    console.log("Сума більша за 10");
 } else if (number < 10){
    console.log("Сума менша або дорівнює 10");
 }

 //ex 3

 const message = "Java Script";

 if (message.includes("JavaScript")) {
   console.log("Текст містить слово JavaScript");
 } else {
   console.log("Текст не містить слово JavaScript");
 }