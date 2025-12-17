let currentQuestion = 0;
let question = document.getElementById("question");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");
const questions = [
    { id: 1, name: "question1", answer1: "a1", answer2: "a2", correctAnswer: 1, answer3: "a3", answer4: "a4" },
    { id: 2, name: "question2", answer1: "a1", answer2: "a2", correctAnswer: 2, answer3: "a3", answer4: "a4" },
    { id: 3, name: "question3", answer1: "a1", answer2: "a2", correctAnswer: 3, answer3: "a3", answer4: "a4" },
    { id: 4, name: "question4", answer1: "a1", answer2: "a2", correctAnswer: 4, answer3: "a3", answer4: "a4" }
];
next();
function check(button, correct) {
    answer1.disabled = true;
    answer2.disabled = true;
    answer3.disabled = true;
    answer4.disabled = true;
    if (questions[currentQuestion].correctAnswer == correct) {
        console.log(correct);
        button.style.backgroundColor = "green";
    } else {
        button.style.backgroundColor = "red";
    }
    currentQuestion = currentQuestion + 1;
    let timer = setInterval(() => {
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
    }, 3000);
}
