let letsStartBtn = document.getElementById("guess_button");
let gameStarted = window.gameStarted;
let numOfTries = 4;
let winOrlose = "undetermined"
let winCount = 0;
//Start the game when the user presses "Let's Start"
letsStartBtn.onclick = function() {
   window.alert("Get ready!")
   letsStartBtn.style.visibility = "hidden"
   startGame()
 };

let quizData =[
   {
      q1: "This pokemon is from Kanto.",
      q2: "This pokemon is Yellow",
      q3: "This pokemon is Electric type",
      q4: "This pokemon is on the cover of Pokemon Yellow Version",
      answer: "pikachu"
   }
]

function startGame(){
   let quizQuestions = 0;
   let promptResponse = prompt(quizData[quizQuestions].q1)
   checkAnswer(promptResponse, quizQuestions)
}

function checkAnswer(answer, questionSheet) {
   if(answer != quizData[questionSheet].answer) {
      numOfTries -= 1;
      return promptResponse = prompt(quizData[questionSheet].q2)
   } else if (answer == quizData[questionSheet].answer) {
      debugger
      winOrlose = "win"
      endGame()
   }
}

function endGame(){
   if(winOrlose == "win"){
      window.alert("You won!")
      winCount += 1;
      document.getElementById("winLossCount").innerHTML = `Your Wins: ${winCount}`
      winOrlose = "undetermined";
   } else if (winOrlose == "lose"){
      window.alert("You lost.....")
      winOrlose = "undetermined";
   }
}
  
