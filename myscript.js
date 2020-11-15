//getting the required elements
//const next_btn = document.querySelector('.nav2 .buttons');
//
const question = document.querySelector('.label');
const progressText = document.querySelector('#qnum');
const choices = Array.from(document.querySelectorAll('.option'));
const progressBarFull = document.querySelector('.progress-bar');
const qnumber = document.querySelector('.number');
const next_btn = document.querySelector('#next');
const skip_btn = document.querySelector('#skip');
const tracker = Array.from(document.querySelectorAll('.count'));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        numb: 1,
        question:"What does CPU stand for?",
        answer:1,
        choice1: "Central Processing Unit", 
        choice2: "Computer Process Unit", 
        choice3: "Central Process Unit", 
        choice4: "Central Processor Unit",
    },

    {
        numb: 2,
        question:"What was the name of the security vulnerability found in Bash in 2014?",
        answer:3,
        choice1: "Stagefright", 
        choice2: "Heartbleed", 
        choice3: "Shellshock", 
        choice4: "Bashbug",
    },
    
    {
        numb: 3,
        question:"In HTML, which non-standard tag used to be be used to make elements scroll across the viewport?",
        answer:1,
        choice1: "&lt;marquee&gt;&lt;/marquee&gt;", 
        choice2: "&lt;move&gt;&lt;/move&gt;", 
        choice3: "&lt;slide&gt;&lt;/slide&gt;", 
        choice4: "&lt;scroll&gt;&lt;/scroll&gt;",
    },
    
    {
        numb: 4,
        question:"In most programming languages, the operator ++ is equivalent to the statement &quot;+= 1&quot;.",
        answer:1,
        choice1: "True", 
        choice2: "False", 
        choice3: "Partially true", 
        choice4: "Partially false",
    },

    {
        numb: 5,
        question:"In computing terms, typically what does CLI stand for?",
        answer:4,
        choice1: "Common Language Input", 
        choice2: "Common Language Interface", 
        choice3: "Control Line Interface", 
        choice4: "Command Line Interface",
    },
    
    {
        numb: 6,
        question:"Which programming language shares its name with an island in Indonesia?",
        answer:2,
        choice1: "Python", 
        choice2: "Java", 
        choice3: "C", 
        choice4: "Jakarta",
    },
    
    {
        numb: 7,
        question:"In computing, what does MIDI stand for?",
        answer:2,
        choice1: "Musical Interface of Digital Instruments", 
        choice2: "Musical Instrumental Digital Interface", 
        choice3: "Modular Interface of Digital Instruments", 
        choice4: "Musical Instrument Data Interface",
    },
    
    {
        numb: 8,
        question:"What was the name of the first Bulgarian personal computer?",
        answer:1,
        choice1: "IMKO-1", 
        choice2: "Pravetz 82", 
        choice3: "Pravetz 8D", 
        choice4: "IZOT 1030",
    },
    
    {
        numb: 9,
        question:"The Python programming language gets its name from the British comedy group &quot;Monty Python.&quot;",
        answer:1,
        choice1: "True", 
        choice2: "False", 
        choice3: "Partially true", 
        choice4: "Partially false",
    },
    
    {
        numb: 10,
        question:"Which of the following operating systems is produced by IBM?",
        answer:1,
        choice1: "OS-2", 
        choice2: "Windows", 
        choice3: "DOS", 
        choice4: "UNIX",
    },
    
    {
        numb: 11,
        question:"Which is the best search tool for finding Web sites that have been handpicked and recommended by someone else?",
        answer:1,
        choice1: "Subject directories", 
        choice2: "Search engines", 
        choice3: "Meta-search engines", 
        choice4: "Discussion groups",
    },
    
    {
        numb: 12,
        question:"Which company created the most used networking software in the 1980's",
        answer:2,
        choice1: "Microsoft", 
        choice2: "Sun", 
        choice3: "IBM", 
        choice4: "Novell",
    },
    
    {
        numb: 13,
        question:"Internet Explorer is a:",
        answer:2,
        choice1: "Any person browsing", 
        choice2: "Web Browser", 
        choice3: "Graphic Package", 
        choice4: "News Reader",
    },
    
    {
        numb: 14,
        question:"ISP stands for:",
        answer:4,
        choice1: "Internet Survey Period", 
        choice2: "Integrated Service Provider", 
        choice3: "Internet Security Portocol", 
        choice4: "Internet Service Provider",
    },
    
    {
        numb: 15,
        question:"In which decade was the Internet first implemented?",
        answer:3,
        choice1: "1940s", 
        choice2: "1950s", 
        choice3: "1960s", 
        choice4: "1980s",
    }     
];

const MAX_QUESTIONS = 15;

startQuiz = () => {
    questionCounter = 0;
    score =0;
    availableQuestions = [...questions];
    getNewQuestion();
}


getNewQuestion = () => {
    if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS)
    {
        return window.location.assign('/homepage.html');
    }
    questionCounter++;
    qnumber.innerText =`Question ${questionCounter}`;
    progressText.innerText = `Question ${questionCounter} / ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    currentQuestion = availableQuestions[questionCounter];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice'+ number];
    })

   /* tracker.addEventListener('click', e => {
        const selected = e.target;
        const numtrack = selected.dataset['num'];
        questionCounter = numtrack - 1;
    })*/ //tried this part for onclick of the numbers on top

    acceptingAnswers = true;
}

startQuiz();
