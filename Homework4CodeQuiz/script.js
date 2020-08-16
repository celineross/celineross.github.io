// 10 questions, 1:30 timer, 4 options for each question

//create dynamic header to change with each question

// when start button pressed timer starts, and question appears on screen
//if start button pressed, timer starts & question appears
//return
//buttons for each answer choice
//work from the indexes of the answer choices to determine the correct one
//if index (num) is true then move to next question and add 10 points to score
//else move to next question and remove 10 seconds from the timer

//array of questions with index as the identifier of correct answer
var questions = [
    {
        question: "Inside which HTML element do we put the Javascript file?",
        answers: ["<script>", "<scripting>", "<js>", "<javascript>"],
        correct: 0
    }, 
    {
        question: "Which is the correct place to insert a Javascript?",
        answers: ["<head> section", "<body> section", "<head> or <body> section", "<title> section"],
        correct: 2
    }, 
    {

        question: "What is the correct syntax for refferring to an external script?",
        answers: ["<script src = \"xxx.js\">", "<script name = \"xxx.js\">", "<script href = \"xxx.js\">", "<script = \"xxx.js\">"],
        correct: 0
    },
    {
        question: "How do you write \"Hello World\" in an alert box?",
        answers: ["msg(\"Hello World\");", "msgBox(\"Hello World\");", "alertBox(\"Hello World\");", "alert(\"Hello World\");"],
        correct: 3
    },
    {

        question: "How do you create a function in Javascript?",
        answers: ["function = myFunction()", "function:myFunction()", "function myFunction()", "function myFunction[]"],
        correct: 2
    },
    {
        question: "How do you call a function named myFunction?",
        answers: ["myFunction()", "call myFunction()", "call function myFunction()", "cb myFunction()"],
        correct: 0
    },
    {
        question: "How to write an IF statement in Javascript?",
        answers: ["if i = 5 then", "if i = 5", "if i == 5 then", "if (i == 5)"],
        correct: 3
    },
    {
        question: "How does a WHILE loop start?",
        answers: ["while i = 1 to 10", "while (i <= 10; i++)", "while (i <= 10)", "while i < 10"],
        correct: 2
    },
    {

        question: "How does a FOR loop start?",
        answers: ["for i = 1 to 5", "for (i = 0; i <= 5)", "for (var i = 0; i <= 5; i++)", "for (i <=5; i++)"],
        correct: 2
    },
    {

        question: "How do you add a comment in Javascript?",
        answers: ["<!--comment-->", "//comment", "\'comment\'", "\"comment\""],
        correct: 1
    }

];
//list of variables
var startButton = document.getElementById("start-btn");
var questionContainerElements = document.getElementById("question-container");
var timerEl = document.getElementById('timer')
var question = document.getElementById('question')
var answerButtons = document.getElementById('answer-buttons')
var timer = 60;
var qIndex = 0;
var timerId;
var score = 0;

//on click for start button
startButton.addEventListener("click", startGame);

//function to start game, begin timer, and display first question
function startGame() {
    timerEl.textContent = timer;

    startButton.classList.add("hide");
    questionContainerElements.classList.remove("hide");

    callTimer();
    displayQuestion();
}

//function to determine if answer is correct or not
function selectAnswer() {
    console.log(this.textContent);
    var correctAnswerIdx = questions[qIndex].correct;

    if ($(this).text() === questions[qIndex].answers) {
        alert("Correct.")
        qIndex++;
        displayQuestion();
    } else {
        alert("Incorrect.")
    }
}

//function for displaying each question
function displayQuestion() {
    answerButtons.innerHTML = "";

    var q = questions[qIndex];
    question.textContent = q.question;

    //loop to go through each question
    for (var i = 0; i < q.answers.length; i++) {
        var button = document.createElement('button');
        button.textContent = q.answers[i];
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
       

    }
 
}

//sets up timer
function callTimer() {
    //initial clear to avoid secondary timers
    clearInterval(timerId)

    timerId = setInterval(function () {
        timer--;
        timerEl.textContent = timer;

        if (timer === 0) {
            clearInterval(timerId);
            alert("You ran out of time!")
        }
    }, 1 * 1000)
}


