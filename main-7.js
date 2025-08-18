//1
const numb = [6, 87, 104];
numb[2] = 65;
console.log(numb);
//2
let str = ["shrek", "princess", "donkey"];
str.push("fiona");
console.log(str);
//3
//4
const fiveNumb = [55, 67, 88, 99, 34];
const sum = 0;
for (let i = 0; i < fiveNumb.length; i++) {
  console.log(fiveNumb[i]);
}
//5
const fiveStrings = ["strawberry", "apple", "potato", "root", "book"];
for (let i = 0; i < fiveStrings.length; i++) {
  if (fiveStrings[i].length > 5) {
    console.log(fiveStrings[i]);
  }
}

//7
const more = [19, 98, 54, 22, 4, 51, 11, 39, 90, 45];
for (let i = 0; i < more.length; i++) {
  if (more[i] % 2 === 0) {
    console.log(more[i]);
  }
}