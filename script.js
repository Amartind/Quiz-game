// Initialize variables
var timeLeft = 60;
var score = 0;
var currentQuestion = 0;
var highScores = [];

// Array of quiz questions and answers
const questions = [  {    question: "Who can 3d Print?",    
choices: ["Smarties","Only the technically inclined","Anyone!","People in 3D printing design class"],
    answer: 2
  },
  {    question: "How much do you have to spend to get a 3d printer?",    
choices: ["$1000","$100","$5000","$50"],
    answer: 3
  },
  {    question: "What can be 3D printed?",    
choices: ["Metal parts","Glass","Human Organs","All of the above"],
    answer: 3
  },
  {    question: "What is the most common 3D printing type?",    
choices: ["Stereolithography (SLA)","Selective Laser Sintering (SLS)","Fused Deposition Modeling (FDM)","Digital Light Processing (DLP)"],
    answer: 2
  },
  {    question: "When was 3D Printing first done?",    
choices: ["1981","2011","1964","1995"],
    answer: 0
  },
  {    question: "When was 3D Printing first done?",    
choices: ["1981","2011","1964","1995"],
    answer: 0
  },
  {    question: "When was 3D Printing first done?",    
choices: ["1981","2011","1964","1995"],
    answer: 0
  },
  
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
  
    var question = questions[currentQuestion].question;
    var choices = questions[currentQuestion].choices;
  
    document.getElementById('question').innerHTML = question;
  
    for (var i = 0; i < choices.length; i++) {
      var choice = document.createElement('button');
      choice.innerHTML = choices[i];
      choice.setAttribute('value', i);
      choice.addEventListener('click', checkAnswer);
      document.getElementById('choices').appendChild(choice);
    }
  }

function checkAnswer(event) {
    var selectedChoice = event.target.value;
    var correctAnswer = questions[currentQuestion].answer;
  
    if (selectedChoice == correctAnswer) {
      score++;
    } else {
      timeLeft -= 10;
    }
  
    // Remove event listeners from previous question's choices
    var choices = document.getElementById('choices').children;
    for (var i = 0; i < choices.length; i++) {
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
  var finalScore = document.getElementById("final-score").innerHTML;
  var initialsFS = document.getElementById("userInitials");
  var initialsValue = initialsFS.value
  // console.log(finalScore);
  // console.log(initialsValue);
  localStorage.setItem('userInitials', initialsFS.value);
  localStorage.setItem('finalScore', finalScore);

}