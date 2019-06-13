// Psuedocoding Trivia Game
// Step 1: 
//  Players will hit a start button which will automatically start the game.
// The timer for the game will start ticking down (90 seconds). That's how much time they have to answer the questions
var start = document.getElementById("start");

var quiz = document.getElementById("quiz");

var question = document.getElementById("question");

var counter = document.getElementById("counter");

var timeGauge = document.getElementById("timeGuage");

var choiceA = document.getElementById("A")
var choiceB = document.getElementById("B")
var choiceC = document.getElementById("C")
var choiceD = document.getElementById("D")

// var questions = [
//     {
//         question: "What team did Lionel Messi player for in the Fifa World Cup ? \n(a) Barcelona \n(b) Spain \n(c) Argentina \n(d) Uruguay",
//         answer: "c"

//     }, 
//     {
//         question: "Who won the 2018 Fifa World Cup? \n(a) France \n(b) Russia \n(c) Croatia \n(d) Argentina ", 
//         answer: "a"
//     }, 
//     {
//         question: "Where are the 2019 Fifa Women's World Cup being held?\n(a) England \n(b) South Korea \n(c) France \n(d) The United States", 
//         answer: "c"
//     }, 
//     {
//         question: "Fifa Women's World Cup, What player has scored the most goals in a World Cup? \n(a) Michelle Akers \n(b) Alex Morgan \n(c) Christiane Roziera \n(d) Beyonce", 
//         answer: "b"
//     }, 
//     {   question: "What country has won the most Fifa World Cups? \n(a) Italy \n(b) Germany \(c) Uruguay \n(d) Brazil",
//         answer: "d"

//     }

// ]
var score = 0; 

for ( var i=0; i < questions.length; i++){
    var response = window.prompt (questions[i].prompt); 
    if( response == questions[i].answer){
        score++;
        alert("Correct");
    } else {
        alert ("WRONG!")
    }
  alert("you got" + score + "/" + questions.length);
}

// Step 2: 
// Write down all the questions the player will have to answer. Players can only chose one of the choices. 


// Step 3: 
// Once the timer stops if the player answered all the questions correctly, get All done 
// at the end and how many they got right. 

// Step 4: 
// If timer stops and player failed to answer all wrong, the All done will show up at the end
// but it will show how many incorrects he or she got. 

// Step 5: 
// If player wasn't able to answer all the way through will show how many are unanswered. 
