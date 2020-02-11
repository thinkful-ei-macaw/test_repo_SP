'use strict';

// THINKFUL SOLUTION
// https://github.com/rich-at-thinkful/ft-curric-gists/blob/master/fundamentals/solutions/function-drills-1-solution.md

// MY SOLUTION

function createGreeting(name, age) {

  // perhaps I should use alternate conditional, replacing if/else statement with a switch statement?
  
  if (typeof name !== 'undefined' && typeof age !== 'undefined') {
    if (typeof name === 'string' &&  typeof age === 'number') {
      const yob = getYearOfBirth(age);
      return `Hi, my name is ${name} and I'm — gulp — ${age} years old. I was born in ${yob}.`;
    } else {
      throw new TypeError('Arguments(s) not valid');
    }
  } else {
    throw new Error('Argument(s) not valid');
  }
}

function getYearOfBirth (age) {
  if (age < 0) {
    throw new Error('Age can not be negative');
  } // else
  return 2019 - age;
}

let  greeting1; 
// ^^^^^^^^^^^ *NB* when declared variable as `const`, got SyntaxError: Missing initializer in const declaration. *WHY?*

try {
  greeting1 = createGreeting('Sacha', 46);
  
  // to test error states...
  // greeting1 = createGreeting(); // to test `typeof` conditional (=== 'undefined')
  // greeting1 = createGreeting('Sacha', 'forty-six'); // to test another `typeof` conditional (re: string && number)

} catch (err) {
  console.log(`${err.name}: ${err.message}`);
}

console.log(greeting1);