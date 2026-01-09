const quizData = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which CSS property controls text size?",
        options: [
            "font-style",
            "text-size",
            "font-size",
            "text-style"
        ],
        answer: "font-size"
    },
    {
        question: "Which JavaScript method is used to select an element by ID?",
        options: [
            "getElementByClass",
            "querySelectorAll",
            "getElementById",
            "selectById"
        ],
        answer: "getElementById"
    },
    {
        question: "Which symbol is used for comments in JavaScript?",
        options: [
            "<!-- -->",
            "//",
            "**",
            "##"
        ],
        answer: "//"
    },
    {
        question: "Which company developed JavaScript?",
        options: [
            "Google",
            "Microsoft",
            "Netscape",
            "Apple"
        ],
        answer: "Netscape"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const scoreText = document.getElementById("score");

loadQuestion();

function loadQuestion() {
    optionsEl.innerHTML = "";
    let q = quizData[currentQuestion];
    questionEl.innerText = q.question;

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => selectAnswer(btn, q.answer);
        optionsEl.appendChild(btn);
    });
}

function selectAnswer(selectedBtn, correctAnswer) {
    let buttons = optionsEl.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.innerText === correctAnswer) {
            btn.classList.add("correct");
        }
    });

    if (selectedBtn.innerText === correctAnswer) {
        score++;
    } else {
        selectedBtn.classList.add("wrong");
    }
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        quiz.style.display = "none";
        result.style.display = "block";
        scoreText.innerText = `${score} / ${quizData.length}`;
    }
};
