//ex1
function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
logItems(["Mango", "Poly", "Ajax"]);

//ex2
function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');
  return words.length * pricePerWord;
}
console.log(calculateEngravingPrice('pretty custom necklace', 10));

//ex3
function findLongestWord(string) {
  const words = string.split(' ');
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

//ex4
function formatString(string) {
  if (string.length <= 40) {
    return string;
  }
  return string.slice(0, 40) + '...';
}
console.log(formatString('this is a very long sentence,make it shorter)'));
//ex5
function checkForSpam(message) {
  const lower = message.toLowerCase();
  return lower.includes('spam') || lower.includes("sale");
}
console.log(checkForSpam('Get best sale offer now!')); 
console.log(checkForSpam('Meeting at noon'));          
