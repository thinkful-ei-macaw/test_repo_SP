// eslint-disable-next-line strict
function createGreeting(name, age) {
  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name}, and I\'m ${age} years old. I was born in ${yob}`;
}

function getYearOfBirth(age) {
    return 2020 - age;
}

const greeting1 = createGreeting('Patrick', 24);
console.log(greeting1);

