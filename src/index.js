let letsStartBtn = document.getElementById("guess_button");
let gameStarted = window.gameStarted;
let numOfTries = 3;
let winOrlose = "undetermined";
let winCount = 0;
let questionNum = 0;
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
   if(winCount > 0){
      winOrlose = "undetermined";
   }
      let quizQuestions = 0;
      let userAnswer = askForAnswer(questionNum, quizQuestions)
      checkAnswer(userAnswer, quizQuestions)
}

function askForAnswer(questionNum, questionSet){
   let userAnswer = prompt(Object.values(quizData[questionSet])[questionNum])
   checkAnswer(userAnswer, questionSet)
}

function checkAnswer(answer, questionSheet) {
  
gamePlaying: while (winOrlose == "undetermined"){
      if(answer != quizData[questionSheet].answer) {
         if(numOfTries == 0){
            debugger
            winOrlose = "lose"
            endGame()
         } else {
            numOfTries -= 1;
            questionNum += 1;
            return askForAnswer(questionNum, questionSheet)
         }
      } else if (answer == quizData[questionSheet].answer) {
         winOrlose = "win"
         return endGame()
      }
   }
}

function endGame(){
   if(winOrlose == "win"){
      window.alert("You won!")
      winCount += 1;
      document.getElementById("winLossCount").innerHTML = `Your Wins: ${winCount}`
      winOrlose = "end";
   } else if (winOrlose == "lose"){
      window.alert("You lost.....")
      winOrlose = "end";
      letsStartBtn.style.visibility = visible;
   }
}
  
