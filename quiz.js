let currentQuestion = 0;
let question = document.getElementById("question");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
let div = document.getElementById("div");
let button = document.getElementById("button");
let timer;
let score = 0;
let p = document.getElementById("result");
/*let next = document.getElementById("next");*/
let buttons = div.getElementsByTagName("button");
let div2 = document.getElementById("div2");
let green = document.getElementById("green");
let red = document.getElementById("red");
const questions = [
    { id: 1, name: "question1", answer1: "a1", answer2: "a2", correctAnswer: 1, answer3: "a3", answer4: "a4" },
    { id: 2, name: "question2", answer1: "a1", answer2: "a2", correctAnswer: 2, answer3: "a3", answer4: "a4" },
    { id: 3, name: "question3", answer1: "a1", answer2: "a2", correctAnswer: 3, answer3: "a3", answer4: "a4" },
    { id: 4, name: "question4", answer1: "a1", answer2: "a2", correctAnswer: 4, answer3: "a3", answer4: "a4" }
];
let allquestion = 100 / questions.length;
console.log(allquestion);
function check(button, correct) {
    answer1.disabled = true;
    answer2.disabled = true;
    answer3.disabled = true;
    answer4.disabled = true;
    if (questions[currentQuestion].correctAnswer == correct) {
        console.log(correct);
        button.style.backgroundColor = "green";
        score = score + 1;
    } else {
        button.style.backgroundColor = "red";
        buttons[questions[currentQuestion].correctAnswer - 1].style.backgroundColor = "green";
    }
    currentQuestion = currentQuestion + 1;
    div2.style.width = allquestion * currentQuestion + "%";

    if (currentQuestion == questions.length) {
        div.style.display = "none";
        let forGreen = score * allquestion;
        let forRed = 100-forGreen;
        console.log(forGreen);
        console.log(forRed);
        green.style.backgroundColor = "green";
        red.style.backgroundColor = "red";
        green.style.width = forGreen+"%";
        red.style.width = forRed+"%";
        div2.style.height = "5vh";
        p.textContent = "Your score:" + score + " Answered correct:" + score;
    } else{

        timer = setInterval(() => {
            question.textContent = questions[currentQuestion].name;
            answer1.textContent = questions[currentQuestion].answer1;
            answer2.textContent = questions[currentQuestion].answer2;
            answer3.textContent = questions[currentQuestion].answer3;
            answer4.textContent = questions[currentQuestion].answer4;
            chc();
            answer1.disabled = false;
            answer2.disabled = false;
            answer3.disabled = false;
            answer4.disabled = false;
            clearInterval(timer);
        }, 3000);
    }
}
function chc() {
    for (i = 0; i < buttons.length; i = i + 1) {
        buttons[i].style.backgroundColor = "white";
    }
}
function start() {
    div.style.display = "block";
    question.textContent = questions[currentQuestion].name;
    answer1.textContent = questions[currentQuestion].answer1;
    answer2.textContent = questions[currentQuestion].answer2;
    answer3.textContent = questions[currentQuestion].answer3;
    answer4.textContent = questions[currentQuestion].answer4;
    button.style.backgroundColor = "white";
    answer1.disabled = false;
    answer2.disabled = false;
    answer3.disabled = false;
    answer4.disabled = false;
    button.style.display = "none";
}
/*function ned() {
    question.textContent = questions[currentQuestion].name;
    answer1.textContent = questions[currentQuestion].answer1;
    answer2.textContent = questions[currentQuestion].answer2;
    answer3.textContent = questions[currentQuestion].answer3;
    answer4.textContent = questions[currentQuestion].answer4;
    button.style.backgroundColor = "white";
    answer1.disabled = false;
    answer2.disabled = false;
    answer3.disabled = false;
    answer4.disabled = false;
}*/
