'use strict';

function createGreeting(name, age) {
  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm — gulp — ${age} years old. I was born in ${yob}.`;
}

function getYearOfBirth (age) {
  if (age < 0) {
    throw new Error('Age can not be negative');
  } // else
  return 2019 - age;
}

let greeting1; // *NB* when declared variable as `const`, got SyntaxError: Missing initializer in const declaration. *WHY?*

try {
  // initially declared greeting1 variable in here only
  // const greeting1 =
  // but didn't work, because need to establish/declare variable outside the scope of try {}
  greeting1 = createGreeting('Sacha', 46);
} catch (err) {
  console.log(`${err.name}: ${err.message}`);
}
console.log(greeting1);