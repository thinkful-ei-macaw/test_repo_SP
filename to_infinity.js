'use strict';

function beyond(num) {
  
  // if num is infinite
  if (num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY ) {
    console.log('And beyond');
  }

  // if num is finite...
  if (Number.isFinite(num) === true) {
    if (num < 0) { // ... and negative
      console.log('To negative infinity');
    } else { // ... else positive
      console.log('To infinity');
    }
  }

  // if num is zero
  if (num === 0) {
    console.log('Staying home');
  }
}

beyond(-22);