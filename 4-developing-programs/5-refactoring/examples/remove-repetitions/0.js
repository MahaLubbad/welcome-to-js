'use strict';

/*
  the original program for reference
  and in case you need to start over in an exercise ;)
*/
//************************************************* */
/*
let phrase = null;
while (phrase === null) {
  phrase = prompt(
    'enter something with duplicated letters, they will be removed',
  );
}

let previous = '';

let noRepetitions = '';
for (const next of phrase) {
  if (next !== previous) {
    noRepetitions = noRepetitions + next;
    previous = next;
  }
}

alert(noRepetitions);
*/

//************************************************* */


let phrase = null;
while (phrase === null) {
  phrase = prompt(
    'enter something with duplicated letters, they will be removed',
  );
}
let next ='';
let noRepetitions = '';
for (const char of phrase){
  if(!noRepetitions.includes(char)){
 noRepetitions = noRepetitions + char ;
  }else{
    continue;
  }
}
alert(noRepetitions);