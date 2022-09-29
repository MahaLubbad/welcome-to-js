'use strict';

/*
  test cases:
    null -> ':('
    '' -> 'too short'
    'abcde' -> 'perfect'
    'abcdef' -> 'too long'

  experiment 1
    line:21
    why:there is an extra paranthises in line 19
    trying:remove them 

experiment 
    line:21
    why:using equal sign = as reading (=) 
    trying: make it === to read input value 
*/

let input = prompt('enter something 5 characters long');

if (input === null) {
  alert(':(');
} else if (input.length < 5) {
  alert('too short');
} else if (input.length > 5) {
  alert('too long');
} else {
  alert('perfect');
}
