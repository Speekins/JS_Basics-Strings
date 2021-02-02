//Write a function that checks whether a string is empty or not.

isBlank = (string) => {
  return string.length === 0;
}

isBlank('mars'); // false
console.log(isBlank('  '));   // false
isBlank('');     // true