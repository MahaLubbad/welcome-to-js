

'use strict';

console.log('--- in execution phase ---');


/*
  environment:browser chrome 

  name:SyntaxError 
  message:Invalid or unexpected token 

  location:line 23 

  life cycle:Creatin phase 

  the mistake:Adding line break in string.

  the fix(es):Using \n to add line break.
*/

const a = 'this is \ntwo lines';

console.log(a);

