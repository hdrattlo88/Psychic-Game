
//probably a better way to do this but I am basic as f--- at this. lol
var computer = ["a","b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"]

var wins = 0;
var losses = 0;
var guessesLeft = 10;


document.onkeyup = function(event){
var uGuess = event.key;
console.log("user guess " + uGuess);
    

document.getElementById("guess1").append(" " + uGuess);
var cGuess = computer[Math.floor(Math.random() * computer.length)];
console.log("computer guess " + cGuess);   

if (cGuess === uGuess) {
    wins++;
    document.getElementById("wins").innerText = "Wins = " + wins; 
    console.log("win")
}

       

if (uGuess === event.key){
    guessesLeft--;
    document.getElementById("guesses-left").innerText = "Guesses Left= " + guessesLeft; 
    console.log("-1 Guess");
}

if(guessesLeft < 1){
    losses++;
    document.getElementById("losses").innerText = "Losses = " + losses; 
    console.log("loss");
    guessesLeft = 10;         
    console.log("Clear Guess")
     //need to clear uGuess entries,
}


};









