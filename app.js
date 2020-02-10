// eslint-disable-next-line strict
function createGreeting(name, age) {
  const yearOfBirth = 2020 - age;
  return `Hi, my name is ${name}, and I\'m ${age} years old. I was born in ${yearOfBirth}`;
}

const greeting1 = createGreeting('Patrick', 24);
console.log(greeting1);