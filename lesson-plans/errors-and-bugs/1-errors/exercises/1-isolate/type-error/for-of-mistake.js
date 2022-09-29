'use strict';

console.log('--- in execution phase ---');

/*
  environment:chrome

  name:TypeError
  message:maxNumber is not iterable

  location:line 22

  life cycle:In execution phase 

  the mistake:Using number in for of loop 

  the fix(es):Using string or array 
*/

const maxNumber = [0, 1, 2, 3, 4, 5];

for (const i of maxNumber) {
  console.log(i); // 0, 1, 2, 3, 4, 5
}
