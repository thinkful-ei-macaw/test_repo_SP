'use strict';

function createGreeting(name, age) {
  if (name !== true || age !== true) {
    throw new Error('Arguments not valid');
  } else {
    const yob = getYearOfBirth(age);
    return `Hi, my name is ${name} and I'm — gulp — ${age} years old. I was born in ${yob}.`;
  }
}

function getYearOfBirth (age) {
  if (age < 0) {
    throw new Error('Age can not be negative');
  } // else
  return 2019 - age;
}

let greeting1; // *NB* when declared variable as `const`, got SyntaxError: Missing initializer in const declaration. *WHY?*

try {
  // greeting1 = createGreeting('Sacha', 46);
  greeting1 = createGreeting(); // to test `throw new Error('Arguments not valid')`

} catch (err) {
  console.log(`${err.name}: ${err.message}`);
}

console.log(greeting1);