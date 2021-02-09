'use strict';

// let userName = prompt('\t   Who are you..?\n\nPlease tell us your name..!\n ');
// console.log(userName);

// function greeting(message){
//   alert(message);
// }
// greeting('\n\tWelcome to my WebPage..' + userName.toUpperCase() + ' \n\t\t\tIam Abdallah\n\t\tI used to work as a chef\n\t\t\tIam from irbid\nI would like it if you played this guessing game');

// let userConfirm = prompt('Do You Like Quzzies? Answer with yes/no');

// console.log(userConfirm.toLowerCase());

// userConfirm = userConfirm.toLowerCase();

// if (userConfirm ==='yes' || userConfirm ==='y'){
//   console.log('I think you will have fun ..!');
// } else if(userConfirm ==='no' || userConfirm ==='n'){
//   console.log('Come On ..!, Just try it\n\tIt will be fun');
// }
// console.log(userConfirm);

// let favFood = prompt ('Do i love Mansaf?');

// console.log(favFood.toLowerCase());

// favFood = favFood.toLowerCase();

// if (favFood ==='yes' || favFood ==='y'){
//   console.log('Bingo Thats right');
// } else if(favFood ==='no' || favFood ==='n'){
//   console.log('Wrong..?\n\tCome on i said that before');
// }else{
//   console.log(favFood);
// }

// let petType = prompt ('Am i a cat person');

// console.log(petType.toLowerCase());

// petType = petType.toLowerCase();

// if (petType ==='yes' || petType ==='y'){
//   console.log('Yes bravo you nailed it ');
// } else if(petType ==='no' || petType ==='n'){
//   console.log('no wrong but if there is any comfort to you\n i like dogs & parrots too but not as the fluffy pets');
// }else{
//   console.log(petType);
// }

// let bestStudent = prompt ('Do you think iam a good student?');

// console.log(bestStudent.toLowerCase());

// bestStudent = bestStudent.toLowerCase();

// if (bestStudent ==='yes' || bestStudent ==='y'){
//   console.log('Really!!,.. Thanks a lot for your honest answer infact i feel like i am so thank you a lot for your supporting all of us');
// } else if(bestStudent ==='no' || bestStudent ==='n'){
//   console.log('Nooo, come on why you answered you should believe in me');
// }else{
//   console.log(bestStudent);
// }

// let homeJob = prompt ('Because iam a chef as i said before, Do you think i cook in home?');

// console.log(homeJob.toLowerCase());

// homeJob = homeJob.toLowerCase();

// if (homeJob ==='yes' || homeJob ==='y'){
//   console.log('you are right again oh omg i feel like you really know me');
// } else if(homeJob ==='no' || homeJob ==='n'){
//   console.log('well believe it or not infact i do usually... lol');
// }else{
//   console.log(homeJob);
// }

// let favTime = prompt ('what time do i like to work on tasks? is it night?');

// console.log(favTime.toLowerCase());

// favTime = favTime.toLowerCase();

// if (favTime ==='yes' || favTime ==='y'){
//   console.log('yes and now i started to believe that you know me very well');
// } else if(favTime ==='no' || favTime ==='n'){
//   console.log('wrong you dont know anything about me infact i have a quote about that on my whats app status');
// }else{
//   console.log(favTime);
// }
// alert('welcome again' + userName.toUpperCase() + 'I hope you enjoyed the quizes see told you it will be fun' );





// let answer = prompt('do you think i like paris');
// // y
// switch(answer.toLowerCase()){
//     case 'yes':
//     case 'y':
//         alert('thats incorrect');
//         break;
//     case 'no':
//     case 'n':
//         alert('thats correct');
//         break;
//     case 'idk':
//         alert('mohammad');
//         break
//     default:
//         alert('Frank')
// }

//arrays

// let arr = [1,2,3,4,5,6,7];
// console.log(arr);

// let stdNames = ['wasfi','naji','joudy','mohammad azzam','duha','anagheem'];

// console.log(stdNames);

// console.log(stdNames[4]);

// console.log(stdNames[1]);

// stdNames[2] = 'Mohammad khasawneh';

// console.log(stdNames);

// let userEnter = prompt('Please add a name?');
// mohammad alazzam
// stdNames[6] = userEnter;

// stdNames.push(userEnter);

// console.log(stdNames);

// stdNames.push('Hello');

// console.log(stdNames);

// stdNames.pop();
// // remove the last element from the array

// console.log(stdNames);

//loops

/*Programming structure that repeats a sequence of instructions until a specfic condition is met
     counter
for(intilization; condition; update the counter or the initial value){
    // block
}
*/

// using console.log() log 10 numbers using for loop
// 1-only once
// 2- if the condition is True run the code
// 3 - updating the value of coutner
// for(let i = 0; i <= 10;i++){
//     console.log(i);
// }
// i++ => i = i + 1
// i-- => i = i - 1
// index++ = index = index + 1;
// for(let index = 30 ; index >= 20; index = index -2){
//     console.log(index);
// }

// just zero
// infinte loop
// for(let i = 0 ; i <= 2 ; i--){
//     console.log(i);
// }
// i = 0
// i = -1
// i = -2
// let movieNames = ['harry potter','law abiding citzen','catch me if you can', 'lord of the ring','inception', 'tent','ocean 8'];
// console.log(movieNames);
// console.log(movieNames.length);
// 7
// 0 1 2 3 4 5 6
// console.log(movieNames)
// console.log(movieNames[movieNames.length - 1]);
// for(let index = 0  ; index <= movieNames.length-1 ; index++){
//     console.log(movieNames[index]);
// }

// let movieNames = ['harry potter','law abiding citzen','catch me if you can', 'lord of the ring','inception', 'tent','ocean 8'];
// for(let index = 0  ; index < movieNames.length ; index++){
//     if(index === 4){
//         break;
//     }
//     console.log(movieNames[index]);
// }


// let arrOfNums = [1,2,3,4,5,6,7,8,9,10];
// // console.log(arrOfNums)
// // console.log(arrOfNums[0]);
// // problem domain
// /* loop through the array that you have and i want you each time to print out for me the multiplication table for each number inside the array using document.write() (1-10)*/

// for(let i = 0 ; i < arrOfNums.length;i++){
//     // each time you are looping for the array elements
//     document.write('<h2>'+`multiplication table for ${arrOfNums[i]}` + '</h2>')
//     for(let j = 1 ; j<= 10 ; j++){
//         document.write('<p>' + arrOfNums[i] * j + '</p>')
//     }
// }

/*
while(condition){
    //block of code
}
*/

// let userPassword = prompt('enter your password');
// while (userPassword !== 'bashar') {
//     userPassword = prompt('enter your password');
// }

// let userPassword = prompt('enter your password');
// // userPassword = parseInt(userPassword); // numeric value
// // console.log(typeof userPassword)
// while (parseInt(userPassword) !== 123456) {
//     userPassword = prompt('incorrect value');
//     // userPassword = parseInt(userPassword);

// }

// let loading = 0;
// // an infinte // T
// while (loading < 1) {
//     console.log('the page is still loading!');
//     loading++;
// }


// do {

// }while()
