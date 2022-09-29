// #todo

'use strict';

/*
  environment:

  name:
  message:

  callstack:line 22

  life cycle:

  the mistake:using number(6) with for of loop 

  the fix(es):change it into array
  OR string
*/

const maxNumber = [0,1,2,3,4,5];

for (const i of maxNumber) {
  console.log(i); // 0, 1, 2, 3, 4, 5
}
