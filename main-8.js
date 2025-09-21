//ex1

const friends = ["banana", "Kirill", "mango", "Alex"];


let string = "";
for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ", ";
  }
}
console.log(string);

//join
const string2 = friends.join(", ");
console.log(string2); 
//ex2
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

//-
const cardToRemove = "Карточка-1";
const index = cards.indexOf(cardToRemove);

if (index > 0) cards.splice(index, 1);
console.log("После удаления:", cards);

//+
const cardToInsert = "Карточка-6";
cards.splice(2, 0, cardToInsert); 
console.log("После вставки:", cards);

// update
const cardToUpdate = "Карточка-4";
const idx = cards.indexOf(cardToUpdate);
if (idx !== -1) cards.splice(idx, 1, "Обновлённая-4");
console.log("После обновления:", cards);

