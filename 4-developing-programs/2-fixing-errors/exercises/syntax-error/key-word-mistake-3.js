// #todo

'use strict';

/*
  environment:

  name:
  message:

  callstack:line 25

  life cycle:

  the mistake:using else with the condition ()

  the fix(es):use else if 
*/

const userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');

} else if (userName.length < 5) {
  console.log('just right');

} else {
  console.log('too long');
}


