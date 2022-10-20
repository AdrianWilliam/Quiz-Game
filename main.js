const inputs = document.querySelectorAll('div.button input');
const quiz = document.getElementsByClassName('quiz');
const header = document.querySelector('#header');
const body = document.querySelector('body');
const main = document.querySelector('main');
const answer1 = document.getElementById('response1');
const answer2 = document.getElementById('response2');
const answer3 = document.getElementById('response3');
const answer4 = document.getElementById('response4');
const answer5 = document.getElementById('response5');
let idQuiz = '';
let numberScreen = 0;
let progress = document.querySelector('div#pts progress');
let pointsScore = 0;
let currentPoints = document.querySelector('div#points p')
let i = 0;
let tittleQuiz = document.getElementById('question');
const quizWereWolf = [    
    {
        id: 1,
        quest: 'Como surgiu os lobimens?',
        q1: 'Aliens os trouxeram para a terra',
        q2: 'Foram achados em um navio pirata',
        q3: 'Foram criados por uma maldição',
        q4: 'Foram desenvolvidos em laboratorios',
        q5: 'Surgiram por causa de um feitiço',
        qR: 'Foram criados por uma maldição',
        
    },
    {
        id: 2,
        quest: 'Oque são lobisomens?',
        q1: 'Humanos que viram uma criatura durante a lua cheia',
        q2: 'Fantasmas do Scooby Doo',
        q3: 'Lobos do Ártico',
        q4: 'Personagens da Turma da Mônica',
        q5: 'Histórias de acampamento',
        qR: 'Humanos que viram uma criatura durante a lua cheia',
    },
    {
        id: 3,
        quest: 'Como os lobisomens ficaram famosos?',
        q1: 'Por causa de suas lendas',
        q2: 'Por causa dos desenhos',
        q3: 'Por causa dos Três porquinhos',
        q4: 'Por causa da chapéuzinho vermelho',
        q5: 'Por causa do Governo',
        qR: 'Por causa de suas lendas',
    },
    {
        id: 4,
        quest: 'De onde veio a lenda dos Lobisomens?',
        q1: 'Da Escócia',
        q2: 'Do Canadá',
        q3: 'Da Grécia',
        q4: 'De Portugal',
        q5: 'Da Indonésia',
        qR: 'Da Grécia',
    },
    {
        id: 5,
        quest: 'Como se detém um Lobisomen?',
        q1: 'Com bala de prata no coração',
        q2: 'Com uma boa conversa',
        q3: 'Não tem como',
        q4: 'Destruindo a lua',
        q5: 'Com um Fuzil',
        qR: 'Com bala de prata no coração',
    },
]
const quizSamurai = [
    {
        id: 1,
        quest: 'Oque são Samurai?',
        q1: 'Jogadores de futebol',
        q2: 'Guerreiros japoneses',
        q3: 'Dinossauros que viviam no Brasil',
        q4: 'Cientistas Americanos',
        q5: 'Peixes que vivem no Oceano',
        qR: 'Guerreiros japoneses',
        
    },
    {
        id: 2,
        quest: 'Oque faziam os Samurai?',
        q1: 'Jogavam bola',
        q2: 'Apresentavam um programa de TV',
        q3: 'Particapavam das Olimpíadas',
        q4: 'Serviam como soldados',
        q5: 'Cantavam em shows',
        qR: 'Serviam como soldados',
    },
    {
        id: 3,
        quest: 'Qual arma de ficou famosa por causa deles',
        q1: 'Fuzil',
        q2: 'Revolver',
        q3: 'Karambit',
        q4: 'Katana',
        q5: 'Nunchako',
        qR: 'Katana',
    },
    {
        id: 4,
        quest: 'De que país se originou os Samurai',
        q1: 'Japão',
        q2: 'França',
        q3: 'Estados Unidos',
        q4: 'México',
        q5: 'Turquia',
        qR: 'Japão',
    },
    {
        id: 5,
        quest: 'Oque eram os Ronin',
        q1: 'Um samurai que não possui mestre',
        q2: 'Lutadores profissionais',
        q3: 'Lagos da família real',
        q4: 'Jogos de computador',
        q5: 'Um desenhista renomado',
        qR: 'Um samurai que não possui mestre',
    },
]
for(let j = 0; j<quiz.length; j++){
    inputs[j].setAttribute('id', j+1)
}
for (const button of inputs){
    button.addEventListener('click', () => {
        idQuiz = button.getAttribute('id');
        openQuiz(); 
        addFirstQuestions(idQuiz)
    });
};

//Open and Close Quiz
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
    if(idFromQuiz == 1 && quizWereWolf[0].id == 1){
        tittleQuiz.innerText = quizWereWolf[0].quest
        for(let j = 0; j < 5; j++){
            answer1.innerText = quizWereWolf[0].q1
            answer2.innerText = quizWereWolf[0].q2
            answer3.innerText = quizWereWolf[0].q3
            answer4.innerText = quizWereWolf[0].q4
            answer5.innerText = quizWereWolf[0].q5
        }
    }
    if(idFromQuiz == 2){
        tittleQuiz.innerText = quizSamurai[0].quest
        for(let j = 0; j < 5; j++){
            answer1.innerText = quizSamurai[0].q1
            answer2.innerText = quizSamurai[0].q2
            answer3.innerText = quizSamurai[0].q3
            answer4.innerText = quizSamurai[0].q4
            answer5.innerText = quizSamurai[0].q5
        }
    }
}

function switchScreen(idQuizSelected, answer){
    answer.style.border = 'none'
    numberScreen++
    if(numberScreen >= 5){
        closeTheQuiz()
        numberScreen = 0      
        currentPoints.innerText = `Ponto atual: ${pointsScore}`  
    }
    if(idQuizSelected == 1){
        tittleQuiz.innerText = quizWereWolf[numberScreen].quest
        answer1.innerText = quizWereWolf[numberScreen].q1
        answer2.innerText = quizWereWolf[numberScreen].q2
        answer3.innerText = quizWereWolf[numberScreen].q3
        answer4.innerText = quizWereWolf[numberScreen].q4
        answer5.innerText = quizWereWolf[numberScreen].q5
        
    }
     if(idQuizSelected == 2){
        tittleQuiz.innerText = quizSamurai[numberScreen].quest
        answer1.innerText = quizSamurai[numberScreen].q1
        answer2.innerText = quizSamurai[numberScreen].q2
        answer3.innerText = quizSamurai[numberScreen].q3
        answer4.innerText = quizSamurai[numberScreen].q4
        answer5.innerText = quizSamurai[numberScreen].q5
        
    }
}

function verifyResponse(verify, answer){
    console.log(verify, quizWereWolf[numberScreen])
    if(verify == quizWereWolf[numberScreen].qR){
        answer.style.border = 'solid 8px #1aff00'
        answer.style.transition = 'border 0.2s'
        pointsScore = pointsScore + 10
    }else if(verify == quizSamurai[numberScreen].qR){
        answer.style.border = 'solid 8px #1aff00'
        answer.style.transition = 'border 0.2s'
        pointsScore = pointsScore + 10
    }else{
        answer.style.border = 'solid 8px red'
        answer.style.transition = 'border 0.2s'
    }
}
answer1.addEventListener('click', () => {
    console.log(progress.value)
    progress.value = progress.value + 20
    let res = answer1.textContent
    verifyResponse(res, answer1)
    setTimeout(switchScreen, 1000, idQuiz,answer1)
});

answer2.addEventListener('click', () => {
    progress.value = progress.value + 20
    let res = answer2.textContent
    verifyResponse(res,answer2)
    setTimeout(switchScreen, 1000, idQuiz,answer2)

});
answer3.addEventListener('click', () => {
    progress.value = progress.value + 20
    let res = answer3.textContent
    verifyResponse(res,answer3)
    setTimeout(switchScreen, 1000, idQuiz,answer3)

});
answer4.addEventListener('click', () => {
    progress.value = progress.value + 20
    let res = answer4.textContent
    verifyResponse(res,answer4)
    setTimeout(switchScreen, 1000, idQuiz,answer4)
});
answer5.addEventListener('click', () => {
    progress.value = progress.value + 20
    let res = answer5.textContent
    verifyResponse(res,answer5)
    setTimeout(switchScreen, 1000, idQuiz,answer5)
});