'use strict';

/*
  test cases:
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  experiment 1
    line:21
    why:using input.length === 0, which is not existed 
    trying:to change the value 

       
  experiment 2
    line:21
    why:using && and making the equal sign = not equal !=
    try: change it into || 
    
    experiment 3
    line 21
    why: input =null && input.length = 0
    try: input != null && input.length > 0
    
    

  line :21

*/

let message = 'you entered "';

while (true) {
  const input = prompt('enter something');

  if (input != null || input.length > 0) {
    message = message + input + '"';
    break;
  }
}

alert(message);
