// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-info', () => {
  debugger;
 

  console.log('\n--- form data changed ---');

  // --- read user input ---

  let firstname = readString('the-fname');
  let lastname = readString('the-lname');

  console.log(name);

  // --- create a message ---

  let greeting = 'Hello ' + firstname + ' ' +lastname + '! \n good bye';  
  // --- display the message ---

  displayString('greeting-output', greeting);
});

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/
