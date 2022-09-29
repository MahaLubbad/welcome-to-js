'use strict';

console.log('--- in execution phase ---');

/*
  environment:browser chrome

  name:ReferenceError
  message: cannot access 'tomatoes' before initialization

  location:line 20, column 13

  life cycle:in exection phase

  the mistake:Logging the variable 'tomatoes' before declaration and initialization

  the fix(es):Declare and initilize ' tomatoes' before logging it.
*/

console.log(tomatoes);

let tomatoes = 'fresh';
