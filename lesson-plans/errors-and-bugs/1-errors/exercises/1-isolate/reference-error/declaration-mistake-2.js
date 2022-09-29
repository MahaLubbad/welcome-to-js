'use strict';

console.log('--- in execution phase ---');

/*
  environment:browser chrome 

  name:RefernceError 
  message:cannot access 'isValidUserName' before initialization

  location:line:24 , column:19

  life cycle:in execution phase

  the mistake:The variable 'isValidUserName' is not declared before initialization

  the fix(es): Initializing the variable before assignning it.
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

if (userName.length > 3) {
  isValidUserName = true;
}

let isValidUserName;

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
