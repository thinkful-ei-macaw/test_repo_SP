// eslint-disable-next-line strict
function createGreeting(name, age) {
  if (age < 0) {
    throw new Error ('Age can not be negative.');
  } else {
    const yob = getYearOfBirth(age);
    return `Hi, my name is ${name}, and I'm ${age} years old. I was born in ${yob}`;
  }
}

function getYearOfBirth(age) {
  return 2020 - age;
}

createGreeting('Patrick', 24);

let greeting1;
try {
  greeting1 = createGreeting('Patrick', 24);
} catch (e) { 
  console.log(`${e.name}: ${e.message}`);
} finally {
  console.log(greeting1);

console.log(greeting1); 


}
