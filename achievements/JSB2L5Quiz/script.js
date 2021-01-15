const delayTime = 1000; // wachttijd voor de volgende vraag
const myQuestion = document.getElementById('myQuestion');
const myAnswer = document.getElementById('myAnswer');
const quizWrapper = document.getElementById('quizWrapper');
const questionBox = document.getElementById('questionBox');
const resultBox = document.getElementById('resultBox');
const quizTitle = document.getElementById('quizTitle');

let counter = 0; // aantal mutliple choice vragen
let quiz; // object met quiz vragen
let playerData = {}; // object, hierin worden de game gegevens opgeslagen
let quizNummer = 1;

function init(){
  if (quiz == null) {
    quiz = quiz1;
  } else if (quiz == quiz1) {
    quiz = quiz2;
  } else {
    quiz = null
  }
  if (quiz != null) {
    initQuiz();
  }
  console.log(quiz)
}

function initQuiz(){
  questionBox.style.display = "block"; // reset alle player game variabelen
  resultBox.style.display = "none"; // reset alle player game variabelen
  counter = 0; // reset alle player game variabelen
  playerData.goodAnswers = 0; // reset alle player game variabelen
  playerData.wrongAnswers = 0; // reset alle player game variabelen
  playerName = ""; // toekomstige uitbreiding naam speler opvragen
  resultBox.style.display = "none"; // verberg de resultbox
  quizTitle.innerHTML=quiz.quizMetaData.title; // laat titel van quiz zien
  prepareQuestions(); // start de quiz
}

function prepareQuestions() {
  questionBox.className = "questionBox-new"; // voorbereiden animatie
  let quizImage = quiz.quizMetaData.imageURI; // image laden
  quizWrapper.style.backgroundImage = "url("+ quizImage + ")"; // image laden
  quizWrapper.style.backgroundRepeat = "no-repeat"; // image positioneren
  quizWrapper.style.backgroundPosition = "right"; // image positioneren
  quizWrapper.style.backgroundSize = "25%"; // image positioneren
  quiz.answerClicked = false; // voorkom dubbel klikken op antwoord


  if (counter < quiz.quizContent.length) { // test op aantal vragen
    myQuestion.innerHTML = quiz.quizContent[counter].question; // laat vraag zien
    myAnswer.innerHTML = ""; 
    // zet de multiple choice antwoorden neer
    for (let i = 0; i < quiz.quizContent[counter].answers.length; i++) {
      let answer = document.createElement('li');
      answer.className = "answer";
      answer.score = quiz.quizContent[counter].answers[i].feedback;
      answer.innerHTML = quiz.quizContent[counter].answers[i].answer;
      myAnswer.appendChild(answer);
      answer.addEventListener('click', evaluate, true)
    }

  } 
  else 
  {
    finishQuiz(); // sluit de quiz af
  }
}

function evaluate(evt) {
 // console.log(evt.target); // debug
  if(!quiz.answerClicked){
    if (evt.target.score) {
      evt.target.className = "right";
      playerData.goodAnswers += 1; // increase good score
      console.log("correct answer");
    } else {
      evt.target.className = "wrong";
      playerData.wrongAnswers += 1; // increase wrong score
      console.log("wrong answer");
    }
    quiz.answerClicked=true; // prevent double click
  }
  counter++;
  questionBox.className = "questionBox";  // voorbereiden animatie
  setTimeout(prepareQuestions, delayTime); // wacht 2 seconden voor nieuwe vraag
}


function finishQuiz() {
  // afsluiting quiz geef feedback
  questionBox.style.display = "none";
  resultBox.style.display = "block";
  quizWrapper.style.background = "silver";
  if (quiz == quiz1 && playerData.goodAnswers > playerData.wrongAnswers) {
    resultBox.innerHTML = "<h3> Je bent een goede match voor het LAM, het zal je zeker goed doen om het LAM te bezoeken.</h3>";
  } else if (quiz == quiz1 && playerData.wrongAnswers > playerData.goodAnswers) {
    resultBox.innerHTML = "<h3> Helaas heb je een groot deel van de vragen fout beantwoord, maar een tripje naar het LAM zou nog steeds heel leuk zijn!</h3>"
  } else {
    resultBox.innerHTML = "<h2>Jouw resultaat <br>goede antwoorden " + playerData.goodAnswers + "<br>foute antwoorden " + playerData.wrongAnswers + "</h2>";
  }

  setTimeout(init, delayTime);
}

init(); // start it