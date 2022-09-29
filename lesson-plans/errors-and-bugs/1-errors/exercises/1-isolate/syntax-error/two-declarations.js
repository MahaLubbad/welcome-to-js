'use strict';

console.log('--- in execution phase ---');

/*
  environment:chrome

  name:SyntaxError
  message: Identifier 'tree' has already been declared

  location:line 22

  life cycle:Creation phase

  the mistake:identifing tree two times

  the fix(es):assign tree the second time without idetifing it again 
  OR declare another name of variable
*/

let tree = 'oak';

 tree = 'birch';
