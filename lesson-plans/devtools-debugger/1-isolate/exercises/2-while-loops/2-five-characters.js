'use strict';

let input = null;
let input1 ="";
while (input1 === null || input1.length !== 10) {
  input = prompt('enter something with 5 characters:');
  input1 = input1 + input ;
}


let message = 'thank you for "' + input1 + '"!';

alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/