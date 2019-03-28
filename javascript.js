var win = 0;
var loss = 0;
var guess = 10;
var guessArray=[];
document.onkeyup = userinput;
function userinput() {

    var letter = document.getElementById("userInput").value;
    console.log(letter);
    getRandomLetter(letter);

}
function getRandomLetter(letter) {
    var alphaArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var randomLetter = alphaArray[Math.floor(Math.random() * alphaArray.length)];
    console.log(randomLetter);

    if (letter === randomLetter) {
         win = win + 1;
        console.log("you win this time" + win);
    }
    else {
        loss = loss + 1;
        console.log("you loss this time" + loss);

    }
    guessArray.push(letter);
    console.log(guessArray);
    document.getElementById("userInput").value="";

    guess--;
    document.getElementById("win").innerHTML = "Wins:"+win;
    document.getElementById("loss").innerHTML = "Losses:"+loss;
    document.getElementById("guessCount").innerHTML = "Number of guesses left:"+guess;
    document.getElementById("guess").innerHTML = "Guesses made so far:"+guessArray;

    console.log(guess);
    if (guess < 1) {
        alert("Game Over!!");
        return false;
        }
    }







