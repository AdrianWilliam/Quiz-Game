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
let numberScreen = 0;
let responseRight = 0
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
//result.style.display = 'flex'
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
    if(idFromQuiz == 1 && quizWereWolf[0].id == 1){
        tittleQuiz.innerText = quizWereWolf[0].quest
        for(let j = 0; j < 5; j++){
            response[0].innerText = quizWereWolf[0].q1
            response[1].innerText = quizWereWolf[0].q2
            response[2].innerText = quizWereWolf[0].q3
            response[3].innerText = quizWereWolf[0].q4
            response[4].innerText = quizWereWolf[0].q5
        };
    };
    if(idFromQuiz == 2){
        tittleQuiz.innerText = quizSamurai[0].quest
        for(let j = 0; j < 5; j++){
            response[0].innerText = quizSamurai[0].q1
            response[1].innerText = quizSamurai[0].q2
            response[2].innerText = quizSamurai[0].q3
            response[3].innerText = quizSamurai[0].q4
            response[4].innerText = quizSamurai[0].q5
        };
    };
};

function switchScreen(idQuizSelected, answer){
    answer.style.background = 'white'
    numberScreen++
    if(numberScreen >= 5){
        showScoreBord()
    }else if (idQuizSelected == 1){
        tittleQuiz.innerText = quizWereWolf[numberScreen].quest
        response[0].innerText = quizWereWolf[numberScreen].q1
        response[1].innerText = quizWereWolf[numberScreen].q2
        response[2].innerText = quizWereWolf[numberScreen].q3
        response[3].innerText = quizWereWolf[numberScreen].q4
        response[4].innerText = quizWereWolf[numberScreen].q5
    }else if(idQuizSelected == 2){
        tittleQuiz.innerText = quizSamurai[numberScreen].quest
        response[0].innerText = quizSamurai[numberScreen].q1
        response[1].innerText = quizSamurai[numberScreen].q2
        response[2].innerText = quizSamurai[numberScreen].q3
        response[3].innerText = quizSamurai[numberScreen].q4
        response[4].innerText = quizSamurai[numberScreen].q5
    }

};

function verifyResponse(verify, answer){
    if(verify == quizWereWolf[numberScreen].qR){
        answer.style.background = '#1aff00';
        answer.style.transition = 'background 0.2s';
        responseRight++
        addPoint()
    }else if(verify == quizSamurai[numberScreen].qR){
        answer.style.background = '#1aff00';
        answer.style.transition = 'background 0.2s';
        responseRight++
        addPoint()
    }else{
        answer.style.background = 'red';
        answer.style.transition = 'background 0.2s';
    };
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
