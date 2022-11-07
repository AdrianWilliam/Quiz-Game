import {quizWereWolf, quizSamurai} from './js/questions.js';


const inputs = document.querySelectorAll('div.button input');
const header = document.querySelector('#header');
const body = document.querySelector('body');
const main = document.querySelector('main');
let progress = document.querySelector('div#pts progress');
let currentPoints = document.querySelector('div#points p')
const result = document.getElementById('result');
let scorebord = document.getElementById('scorebord');
let comeBack = document.getElementById('comeBack');
let gratters = document.getElementById('moreThan1Point');
let tittleQuiz = document.getElementById('question');
let response = document.querySelectorAll('div.response-box .response')
const quiz = document.getElementsByClassName('quiz');
let i = 0;
let idQuiz = '';
let quizSelectedId = '';
let numberScreen = 0;
let responseRight = 0
let quizzes = [quizWereWolf, quizSamurai];


for(let j = 0; j<quiz.length; j++){
    inputs[j].setAttribute('id', j+1);
}
for (const button of inputs){
    button.addEventListener('click', () => {
        idQuiz = button.getAttribute('id');
        openQuiz(); 
        addFirstQuestions(idQuiz);
    });
};

function openQuiz(){
    progress.value = 0
    header.classList.add('show');
    body.classList.add('clearScroll');
    main.classList.add('behind');
};

function closeTheQuiz(){
    header.classList.remove('show');
    body.classList.remove('clearScroll');
    main.classList.remove('behind');
};

//Add questions
function addFirstQuestions(idFromQuiz){ 
    quizSelectedId = idFromQuiz;
        quizzes[idFromQuiz - 1].forEach(question => {
            if(question.id == 1){
                tittleQuiz.innerText = question.quest
                response[0].innerText = question.q1
                response[1].innerText = question.q2
                response[2].innerText = question.q3
                response[3].innerText = question.q4
                response[4].innerText = question.q5
            }
        })
};

function switchScreen(idQuizSelected, answer){
    answer.style.background = 'white'
    numberScreen++
    if(numberScreen >= 5){
        showScoreBord()
    }
    quizzes[idQuizSelected - 1].forEach(question => {
        if(question.id == numberScreen + 1){
            tittleQuiz.innerText = question.quest
            response[0].innerText = question.q1
            response[1].innerText = question.q2
            response[2].innerText = question.q3
            response[3].innerText = question.q4
            response[4].innerText = question.q5

        }
    })

};

function verifyResponse(verify, answer){
    //if it's not the right answer, this piece of code puts a red background;
    answer.style.background = 'red';
    answer.style.transition = 'background 0.2s'; 
    
    quizzes[quizSelectedId - 1].forEach(question => {
        if(verify == question.qR){
            answer.style.background = '#1aff00';
            answer.style.transition = 'background 0.2s';
            responseRight++
            addPoint()
        };
    })
};

let score = localStorage.getItem('points');
(function showPoints(){
    score == null ? currentPoints.innerText = `Ponto atual:0`
    :currentPoints.innerText = `Ponto atual: ${score}`
}());

function addPoint(){
    for(let count = 0; count < 10; count++){
        score++
    }
    localStorage.setItem('points', score)
};

function showScoreBord(){
    result.style.display = 'flex'
    responseRight == 0 ? gratters.innerText = `Ops, não desista!`
    : gratters.innerText = 'Parabéns! vamos mais uma? :D'
    scorebord.innerText = `Placar: ${responseRight}/5`
    comeBack.addEventListener('click', () =>{
        closeTheQuiz()
        result.style.display = 'none'
        numberScreen = 0 
        responseRight = 0
        currentPoints.innerText = `Pontos Acumulados: ${score}`
    })
}
for(const res of response){
    res.addEventListener('click', () => {
        progress.value = progress.value + 20;
        let resp = res.textContent;
        verifyResponse(resp, res);
        setTimeout(switchScreen, 1000, idQuiz,res);
    });
}
