

'use strict';

console.log('--- in execution phase ---');


/*
  environment:browser chrome 

  name:SyntaxError 
  message:Unexpected string 

  location:line 23 

  life cycle:Creation phase 

  the mistake: concatenation strings together without using +

  the fix(es):Using the operator + to concatenate strings togother 
*/

const quotesInQuotes = 'remind yourself '+'i can do this!'+' at least once a day';


console.log(quotesInQuotes);