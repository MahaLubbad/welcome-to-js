// #todo

'use strict';

/*
  environment:chrome

  name:ReferenceError
  message:Cannot access 'isValidUserName' before initialization

  callstack:line 24

  life cycle:let isValidUserName;

  the mistake:variable not declared before initialized 

  the fix(es):declare before initialize 
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);
let isValidUserName ;
if (userName.length > 3) {
  isValidUserName = true;
}



if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
