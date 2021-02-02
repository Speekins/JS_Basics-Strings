/*Write code that capitalizes the words in the string 'launch school tech & talk',
 so that you get the string 'Launch School Tech & Talk'.*/

let sentence = 'launch school tech & talk';

console.log(sentence[0].toUpperCase() + sentence.substring(1, 7) + sentence[7].toUpperCase() + sentence.substring(8, 14) + sentence[14].toUpperCase() + sentence.substring(15, 21) + sentence[21].toUpperCase() + sentence.substring(22));

let words = sentence.split(' ');
let capitals = [];

for (let index = 0; index < words.length; index++) {
  let word = words[index];

  capitals.push(word[0].toUpperCase() + word.slice(1));
}
console.log(capitals.join(' '))