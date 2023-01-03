// Initialize variables
var timeLeft = 60;
var score = 0;
var currentQuestion = 0;
var highScores = [];

// Array of quiz questions and answers
const questions = [  {    question: "Who can 3d Print?",    
choices: ["Smarties","Only the technically inclined","Anyone!"],
    answer: 2
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["scripting","javascript","script","js"],
    answer: 2
  },
  // Add more questions here...
];

// Start quiz when start button is clicked
document.getElementById('start-button').addEventListener('click', startQuiz);

function startQuiz() {
  // Hide start button and show quiz questions
  document.getElementById('start-button').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';

  // Start timer
  startTimer();

  // Show first question
  showQuestion();
}

function startTimer() {
  setInterval(function() {
    timeLeft--;
    document.getElementById('timer').innerHTML = timeLeft;

    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

function showQuestion() {
    // Clear previous question's choices
    document.getElementById('choices').innerHTML = '';
  
    let question = questions[currentQuestion].question;
    let choices = questions[currentQuestion].choices;
  
    document.getElementById('question').innerHTML = question;
  
    for (let i = 0; i < choices.length; i++) {
      let choice = document.createElement('button');
      choice.innerHTML = choices[i];
      choice.setAttribute('value', i);
      choice.addEventListener('click', checkAnswer);
      document.getElementById('choices').appendChild(choice);
    }
  }

function checkAnswer(event) {
    let selectedChoice = event.target.value;
    let correctAnswer = questions[currentQuestion].answer;
  
    if (selectedChoice == correctAnswer) {
      score++;
    } else {
      timeLeft -= 10;
    }
  
    // Remove event listeners from previous question's choices
    let choices = document.getElementById('choices').children;
    for (let i = 0; i < choices.length; i++) {
      choices[i].removeEventListener('click', checkAnswer);
    }
  
    currentQuestion++;
  
    if (currentQuestion >= questions.length) {
      endQuiz();
    } else {
      showQuestion();
    }
  }
function endQuiz() {
  // Stop timer
  clearInterval(timer);

  // Hide quiz questions and show end screen
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('end').style.display = 'block';

  // Show final score
  document.getElementById('final-score').innerHTML = 'Your final score is: ' + score;
}

document.getElementById('save-score').addEventListener('click', saveScore);

function saveScore() {
  let initials = document}