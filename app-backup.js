// eslint-disable-next-line strict
function createGreeting(name, age) {
  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name}, and I'm ${age} years old. I was born in ${yob}`;
  /* if (age < 0) {
    throw new Error ('Age can not be negative.');
  } else {
    const yob = getYearOfBirth(age);
    return `Hi, my name is ${name}, and I'm ${age} years old. I was born in ${yob}`;
  }
  */
}

function getYearOfBirth(age) {
  return 2020 - age;
}
console.log('Hi');
createGreeting('Patrick', 24);

/*try {
  const greeting1 = createGreeting('Patrick', 24);
} catch (e) { 
  console.log('your mama');
  console.log(`${e.name}: ${e.message}`);
} finally {
  console.log(greeting1);

console.log(greeting1); */