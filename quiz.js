let currentQuestion = 0;
let answ1 = 0;
let question = document.getElementById("question");
let answer1 = document.getElementById("answer1");

const questions = [
    { id: 1, name: "question1", answer1: "a1", answer2: "a2", correctAnswer: 1, answer3: "a3", answer4: "a4" },
    { id: 2, name: "question2", answer1: "a1", answer2: "a2", correctAnswer: 2, answer3: "a3", answer4: "a4" },
    { id: 2, name: "question3", answer1: "a1", answer2: "a2", correctAnswer: 3, answer3: "a3", answer4: "a4" }
];
next();
function check(button, correct) {
    if (questions[currentQuestion].correctAnswer == correct) {
        console.log(correct);

        button.style.backgroundColor = "green";
    }


        currentQuestion = currentQuestion + 1;
}

function next() {
    question.textContent = questions[currentQuestion].name;
    answer1.textContent = questions[currentQuestion].answer1;
    answer2.textContent = questions[currentQuestion].answer2;
    answer3.textContent = questions[currentQuestion].answer3;
    answer4.textContent = questions[currentQuestion].answer4;

}
