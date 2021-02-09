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
