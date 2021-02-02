/*Implement a function repeat that repeats an input string a given number of times, as shown in the
example below; without using the pre-defined string method String.prototype.repeat().*/

function repeat(times, phrase) {
  let i = '';
  while (times > 0) {
    i += phrase;
    times -= 1;
  }
  return i;
}

console.log(repeat(3, 'ha'));
