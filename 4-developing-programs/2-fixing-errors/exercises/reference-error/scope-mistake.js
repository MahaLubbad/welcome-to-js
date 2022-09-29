// #todo

'use strict';

/*
  environment:chrome

  name:ReferenceError
  message: isValidUserName is not defined

  callstack: line 29

  life cycle: excution phase

  the mistake: isValidUserName is declared twice as const 

  the fix(es):declare it by using let 
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

let isValidUserName=true ;

if (userName.length > 4) {
   isValidUserName = true;
} else {
   isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
