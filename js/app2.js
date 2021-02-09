'use strict';


let myBirthYear = prompt('\t\tTry to guess my birth Year?\n\t\tHint:Iam from the late 80`s\nPlease mind that you have only 4 Attempts ');

myBirthYear = parseInt(myBirthYear);

for(let i = 1; i <= 4 ; i++){
  if(myBirthYear > 1988 ){
    alert ('No Try Again and try to type a lower number than that');
    myBirthYear = prompt('Enter your Guess again you have 3 Another Attempts');
    if (i===4) {
      alert('I`am from 1988');
    }
  }else if(myBirthYear < 1988){
    alert ('No Try Again and try to type a greater number than that');
    myBirthYear = prompt('Enter your Guess again you have 3 Another Attempts');
    if (i===4) {
      alert('I`m from 1988');
    }
  }else{
    alert('Yes My year birth date is 1988');
    break;
  }
}

let myKids = ['Majd', 'Leen', 'Majdoleen'];

let found = false;

for (let index = 0; index < 6; index++){
  let myFutureKids = prompt ('Which one of them do you think will be my favorite kid ..?');
  for (let a = 0; a < 4; a++) {
    if (myFutureKids.toLowerCase() === myKids[a]) {
      alert('Ok infact all of them are will be my favorite');
      console.log(myFutureKids);
      found = true;
      break;
    }
  }
  if(found===true){
    break;
  }
}
