'use strict';

function createGreeting(name, age) {
  const yearOfBirth = 2019  - age;
  return `Hi, my name is ${name} and I'm — gulp — ${age} years old. I was born in ${yearOfBirth}.`;
}


const greeting1 = createGreeting('Sacha', 46);
console.log(greeting1);