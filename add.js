console.log("Hello boys");

// Your game is going to play against the computer, so begin with a function called getComputerChoice 
// that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game 
// to make the computer’s play
// . Tip: use the console to make sure this is returning the expected output before moving to the next step!

function getComputerChoice(){
    A=  Math.floor(Math.random() * 3);
    if (A==0) {
        return "rock";
    }
    if(A==1){
        return "paper";
    }
    if(A==2){
        return "scissor"
    }
}

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters 
// - the playerSelection and computerSelection - and then return a string that declares the winner of the round like
// so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

let computerScore=0 ;
let yourScore=0;

function singleRound(playerSelection,computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection==computerSelection) return "it's a draw ";
    else if (playerSelection=="rock") {
        if(computerSelection=="scissor"){ 
            ++yourScore;
            return `you won your opponent chose ${computerSelection}`;
        }
        else {
            ++computerScore;
            return  `you lose your opponent chose ${computerSelection}`;
        }
    }
    else if (playerSelection=="scissor") {
        if(computerSelection=="paper"){
            ++yourScore;
             return `you won your opponent chose ${computerSelection}`;
        }
        else {
            ++computerScore;
            return  `you lose your opponent chose ${computerSelection}`;
        }
    }
    else  {
        if(computerSelection=="scissor") {
            ++computerScore;
            return `you lose your opponent chose ${computerSelection}`;
        } 
        else {
            ++yourScore;
            return  `you won your opponent chose ${computerSelection}`;
        }
    }
}





// Write a NEW function called game(). 
// Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// You have not officially learned how to “loop” over code to repeat function calls… 
// if you already know about loops from somewhere else (or if you feel like doing some more learning) 
// feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
// At this point you should be using console.log() to display the results of each round and the winner at the end.
// Use prompt() to get input from the user. Read the docs here if you need to.
// Feel free to re-work your previous functions if you need to. Specifically,
//  you might want to change the return value to something more useful.
// Feel free to create more “helper” functions if you think it would be useful.



// Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound
//  function with the correct playerSelection every time a button is clicked
// . (you can keep the console.logs for this step)

const divv =document.querySelector('#container');
const para = document.querySelector('p');

const btn1 = document.createElement('button');
btn1.classList.add('btn1');
btn1.textContent="Rock"
divv.appendChild(btn1);

btn1.addEventListener('click',()=>{
    para.textContent=singleRound(btn1.textContent,getComputerChoice());
    para.textContent +=` Score of computer is ${computerScore}\n`;
    para.textContent +=` your score is ${yourScore}`;
    if(yourScore==5){
        alert("you won")
        const nextGame = prompt("yes or no");
        if(nextGame=='y'){
            alert("continue");
            computerScore=0;
            yourScore=0;
        }
        else{
            return;
        }
    }
    if(computerScore==5){
        alert("you lose");
        const nextGame = prompt("yes or no");
        if(nextGame=='y'){
            alert("continue");
            computerScore=0;
            yourScore=0;
        }
        else{
            return;
        }
    }


});


const btn2 = document.createElement('button');
btn2.classList.add('btn2');
btn2.textContent="paper"
divv.appendChild(btn2);

btn2.addEventListener('click',()=>{
    para.textContent=singleRound(btn2.textContent,getComputerChoice());

    para.textContent +=` Score of computer is ${computerScore}\n`;
 
    para.textContent +=` your score is ${yourScore}`;
    if(yourScore==5){
        alert("you won")
        const nextGame = prompt("yes or no");
        if(nextGame=='y'){
            alert("continue");
            computerScore=0;
            yourScore=0;
        }
        else{
            return;
        }
    }
    if(computerScore==5){
        alert("you lose");
        const nextGame = prompt("yes or no");
        if(nextGame=='y'){
            alert("continue");
            computerScore=0;
            yourScore=0;
        }
        else{
            return;
        }
    }


    

});


const btn3 = document.createElement('button');
btn3.classList.add('btn3');
btn3.textContent="scissor"
divv.appendChild(btn3);

btn3.addEventListener('click',()=>{
    para.textContent=singleRound(btn3.textContent,getComputerChoice());
    para.textContent +=` Score of computer is ${computerScore}\n`;
    para.textContent +=` your score is ${yourScore}`;

    if(yourScore==5){
        alert("you won")
        const nextGame = prompt("yes or no");
        if(nextGame=='y'){
            alert("continue");
            computerScore=0;
            yourScore=0;
        }
        else{
            return;
        }
    }
    if(computerScore==5){
        alert("you lose");
        const nextGame = prompt("yes or no");
        if(nextGame=='y'){
            alert("continue");
            computerScore=0;
            yourScore=0;
        }
        else{
            return;
        }
    }


    
});



// Play Again

const playAgain = document.createElement('button');
playAgain.textContent="Reset";
divv.appendChild(playAgain);

playAgain.addEventListener('click',()=>{
    playAgain.style.color ="red";
    yourScore=0;
    computerScore=0;
    para.textContent ="score got reset";

});


