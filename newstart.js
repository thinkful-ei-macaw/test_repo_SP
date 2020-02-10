// eslint-disable-next-line strict
function createGreeting(name, age) {
  if (age < 0) {
    throw new Error ('Age can not be negative.');
  } else {
    const yob = getYearOfBirth(age);
    return `Hi, my name is ${name}, and I'm ${age} years old. I was born in`;
  }
}

function getYearOfBirth(age) {
  return 2020 - age;
} 
  
console.log(createGreeting('Patrick', 24));
