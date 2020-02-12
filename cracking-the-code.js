'use strict';

// from https://courses.thinkful.com/ei-js-v1/checkpoint/8

function decode(word) {
  // decode each word ... no need to put a `for` loop in here, because this function will be called within a .forEach() method, which has a built-in loop to parse every item in the array
  let firstLetter = word.charAt(0);
  if (firstLetter === 'a') {
    return word.charAt(1);
  } else if (firstLetter === 'b') {
    return word.charAt(2);
  } else if (firstLetter === 'c') {
    return word.charAt(3);
  } else if (firstLetter === 'd') {
    return word.charAt(4);
  } else {
    return ' ';
  }


}

// return decoded message

const message = 'craft block argon meter bells brown croon droop';
const words = message.split(' ');
// console.log(words);

words.forEach( word => console.log(decode(word)));
