var userChoice;

function valid(){
    userChoice = prompt("Do you choose rock, paper or scissors?");
    userChoice = userChoice.toLowerCase();
    if(userChoice === "rock"){
        return "rock";
    } else if(userChoice === "paper"){
        return "paper";
    } else if(userChoice === "scissors"){
        return "scissors";
    } else{
        return valid();
    }
}

userChoice = valid();



    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
    	computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
    	computerChoice = "paper";
    } else {
    	computerChoice = "scissors";
    } console.log("Computer: " + computerChoice); // This finds the computer's choice

    var compare = function (choice1, choice2) {
     if (choice1 === choice2) {
      return "The result is a tie!";   
     }
     else if (choice1 === "rock") {
        if (choice2 === "scissors") {
         return "rock wins";   
        } else {
            return "paper wins";
        }
     }
     else if (choice1 === "paper") {
         if (choice2 === "rock") {
          return "paper wins";
         } else {
            return "scissors wins";   
         }
     }
     else if (choice1 === "scissors") {
         if (choice2 === "rock") {
          return "rock wins";
         } else {
            return "scissors wins";   
         }
     }
    }

compare(userChoice, computerChoice);