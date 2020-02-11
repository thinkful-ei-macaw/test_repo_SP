'use strict';

function jediName(firstName, lastName) {
  // will setup new array to push specific characters/letters
  // then will convert array to string via `array.join('');`

  const mashUp = [];

  for (let i = 0; i < 3; i++) {
    mashUp.push(lastName[i]);
  }
  
  for (let i = 0; i < 2; i++) {
    mashUp.push(firstName[i]);
  }
  
  return mashUp.join('');
}

const myJediName = jediName('Beyonce', 'Knowles');
// const myJediName = jediName('Sacha', 'Sedriks');
console.log(myJediName);