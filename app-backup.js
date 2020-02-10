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

try {
  const greeting1 = createGreeting('Patrick', 24);
} catch (e) { 
  console.log('your mama');
  console.log(`${e.name}: ${e.message}`);
} finally {
  console.log(greeting1);

<<<<<<< HEAD:app.js
console.log(greeting1); 


}
=======
console.log(greeting1); */
>>>>>>> 13390079fa43050f5853db9aca997ef6ad4a6efc:app-backup.js
