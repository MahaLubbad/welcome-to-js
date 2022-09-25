'use strict';

let  first = prompt('enter your first name:');
let last = prompt ('enter your final name');
let input = first + ' '+ last ;

let greeting = '';
if (input === null) {
  greeting = 'hello anonymous.';
} else {
  greeting = 'hello ' + input + '!';
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/
