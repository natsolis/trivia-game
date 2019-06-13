// Psuedocoding Trivia Game
// Step 1: 
//  Players will hit a start button which will automatically start the game.
// The timer for the game will start ticking down (90 seconds). That's how much time they have to answer the questions
var start = document.getElementById("start");
start.addEventListener("click",startQuiz);
var timer; 
function startQuiz(){
    start.style.display = "none";
    counter();
    timer = setInterval(counter, 1000);
    question();
    quiz.style.display = "block";

}

var quiz = document.getElementById("quiz");

var question = document.getElementById("question");

var counter = document.getElementById("counter");

var timeGauge = document.getElementById("timeGuage");

var choiceA = document.getElementById("A")
var choiceB = document.getElementById("B")
var choiceC = document.getElementById("C")
var choiceD = document.getElementById("D")

// Step 2: 
// Write down all the questions the player will have to answer. Players can only chose one of the choices. 

var questions = [
    {
        question: "What team did Lionel Messi player for in the Fifa World Cup ?",
        choiceA: "Barcelona",
        choiceB: "Spain",
        choiceC: "Argentina",
        choiceD: "Uruguay",
        answer: "C"

    },
    {
        question: "Who won the 2018 Fifa World Cup?", 
        choiceA: "France",
        choiceB: "Russia",
        choiceC: "Croatia", 
        choiceD: "Argentina",
        answer: "A"
    },
    {
        question: "Where are the 2019 Fifa Women's World Cup being held?",
        choiceA: "England",
        choiceB: "South Korea",
        choiceC: "France",
        choiceD: "The United States",
        answer: "C"
    },
    {
        question: "Fifa Women's World Cup, What player has scored the most goals in a World Cup?",
        choiceA: "Michelle Akers",
        choiceB: "Alex Morgan",
        choiceC: "Christiane Roziera", 
        choiceD: "Beyonce",
        answer: "B"
    },
    {
        question: "What country has won the most Fifa World Cups?", 
        choiceA: "Italy", 
        choiceB: "Germany",
        choiceC: "Uruguay", 
        choiceD: "Brazil",
        answer: "D"

    }

]
// var score = 0;
var index = questions.length - 1;
var questionIndex = 0;
renderQuestion()

function renderQuestion(){
    var q = questions[score];
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
} 


// for (var i = 0; i < questions.length; i++) {
//     var response = window.prompt(questions[i].prompt);
//     if (response == questions[i].answer) {
//         score++;
//         alert("Correct");
//     } else {
//         alert("WRONG!")
//     }
//     alert("you got" + score + "/" + questions.length);
// }


// Step 3: 
// Once the timer stops if the player answered all the questions correctly, get All done 
// at the end and how many they got right. 
var questionTime = 10;
var gaugeWidth = 150;
var count =    0;
var guageProgressUnit = gaugeWidth/questionTime;

function counter(){
    if (count <= questionTime){
    counter.innerHTML = count;
    timeGauge.style.width = guageProgressUnit * count + "px";
    count++;
    }else{
        count = 0;
        answerIsWrong();
        if(questionIndex < index){
         questionIndex++;
         question();
        } else { clearInterval(timer)
            score();
        }


    }
}
var timer =
setInterval(counter, 1000);


clearInterval();


function checkAnswer(answer){
    if(questions[questionIndex].correct == answer){ 
        score++;
        answerIsCorreect();
    } else{
        answerIsWrong();
    } 
    if(questionIndex < index){
        count = 0; 
        questionIndex++;
        question();
    } else{
        clearInterval(timer);
        score();
    }
}
// Step 4: 
// If timer stops and player failed to answer all wrong, the All done will show up at the end
// but it will show how many incorrects he or she got. 

// Step 5: 
// If player wasn't able to answer all the way through will show how many are unanswered. 
