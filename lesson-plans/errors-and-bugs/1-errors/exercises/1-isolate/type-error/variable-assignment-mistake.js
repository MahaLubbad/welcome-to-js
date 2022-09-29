

'use strict';

console.log('--- in execution phase ---');


/*
  environment:Browser chrome

  name:SyntaxError
  message:Invalid left-hand side in assignment

  location:line 25 

  life cycle:Creation phase 

  the mistake:Assigning the variable into boolean 

  the fix(es):assignning boolean'true' into the variable. 
*/

let isHappy = false;

true = isHappy ;


