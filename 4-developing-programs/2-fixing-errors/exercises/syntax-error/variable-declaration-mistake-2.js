// #todo

'use strict';

/*
  environment:chrome

  name:
  message:

  callstack:

  life cycle:

  the mistake:usoing const 

  the fix(es):change const into let
*/

const userName = 'qopiznu';

let path;

if (userName.length > 4) {
  path = 'if';
} else {
  path = 'else';
}

console.log(path);


