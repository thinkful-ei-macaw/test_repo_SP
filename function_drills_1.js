'use strict';

function createGreeting(name, age) {
  return `Hi, my name is ${name} and I'm — gulp — ${age} years old.`;
}

const greeting1 = createGreeting('Sacha', 46);
console.log(greeting1);