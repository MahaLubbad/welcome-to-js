

'use strict';

console.log('--- in execution phase ---');


/*
  environment:browser chrome 

  name:SyntaxError 
  message:Unexpected token

  location:line 27

  life cycle:Creation Phase

  the mistake:Using else more than one time 

  the fix(es): using  if else  , then else 
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
}  else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}


