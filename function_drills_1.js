'use strict';

function createGreeting(name, age) {
  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I'm — gulp — ${age} years old. I was born in ${yob}.`;
}

function getYearOfBirth (age) {
  return 2019 - age;
}


const greeting1 = createGreeting('Sacha', 46);
console.log(greeting1);