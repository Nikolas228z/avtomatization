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
let div3 = document.getElementById("menuforquestions");
let main = document.getElementById("main");
const questions = [
    {
        id: 1,
        name: "Що таке автоматизація виробництва?",
        answer1: "Лише програмування роботів",
        answer2: "Застосування технічних засобів для виконання процесів без участі людини",
        answer3: "Використання ручної праці",
        answer4: "Заміна комп’ютерів людьми",
        correctAnswer: 2
    },
    {
        id: 2,
        name: "Який пристрій є «мозком» промислового робота?",
        answer1: "Маніпулятор",
        answer2: "Датчик",
        answer3: "Контролер",
        answer4: "Привід",
        correctAnswer: 3
    },
    {
        id: 3,
        name: "Що означає термін CAD?",
        answer1: "Централізоване архівування даних",
        answer2: "Комп’ютерне автоматичне діагностування",
        answer3: "Автоматичне керування даними",
        answer4: "Комп’ютерне проєктування",
        correctAnswer: 4
    } /*,
    {
        id: 4,
        name: "Яка основна функція датчиків у робототехніці?",
        answer1: "Отримання інформації про навколишнє середовище",
        answer2: "Виконання рухів",
        answer3: "Керування програмами",
        answer4: "Зберігання інформації",
        correctAnswer: 1
    },
    {
        id: 5,
        name: "CAM-системи використовуються для:",
        answer1: "Навчання персоналу",
        answer2: "Проєктування деталей",
        answer3: "Керування виробничим обладнанням",
        answer4: "Моделювання процесів",
        correctAnswer: 3
    },
    {
        id: 6,
        name: "Який тип робота найчастіше використовується на виробництві?",
        answer1: "Побутовий",
        answer2: "Промисловий маніпулятор",
        answer3: "Гуманоїдний",
        answer4: "Мобільний",
        correctAnswer: 2
    },
    {
        id: 7,
        name: "Що таке гнучка виробнича система (FMS)?",
        answer1: "Окремий робот",
        answer2: "Комп’ютерна програма",
        answer3: "Сукупність автоматизованих верстатів і роботів",
        answer4: "Система з ручним керуванням",
        correctAnswer: 3
    },
    {
        id: 8,
        name: "Яка мова програмування часто використовується в робототехніці?",
        answer1: "SQL",
        answer2: "Python",
        answer3: "HTML",
        answer4: "CSS",
        correctAnswer: 2
    },
    {
        id: 9,
        name: "Яка перевага автоматизованих систем?",
        answer1: "Підвищення точності та швидкості",
        answer2: "Зменшення продуктивності",
        answer3: "Залежність від людини",
        answer4: "Збільшення кількості помилок",
        correctAnswer: 1
    },
    {
        id: 10,
        name: "Комп’ютерно-інтегроване виробництво (CIM) — це:",
        answer1: "Лише використання роботів",
        answer2: "Поєднання проєктування, виробництва та керування за допомогою комп’ютерів",
        answer3: "Робота одного верстата",
        answer4: "Ручне керування процесами",
        correctAnswer: 2
    }*/
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
        button.style.background = "green";
        score = score + 1;
    } else {
        button.style.background = "red";
        buttons[questions[currentQuestion].correctAnswer - 1].style.background = "green";
    }
    currentQuestion = currentQuestion + 1;
    div2.style.width = allquestion * currentQuestion + "%";
    if (currentQuestion == questions.length) {
        finish();
    } else {
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
        buttons[i].style.background = "transparent";
    }
}
function start() {
    chc();
    div.style.display = "block";
    div3.style.display = "block";
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
    /*     p.style.display = "none";
    red.style.display = "none";
    green.style.display = "none";
*/
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
function finish() {
    div3.style.display = "none";
    question.style.display = "none";
    let forGreen = score * allquestion;
    let forRed = 100 - forGreen;
    main.style.minHeight = "65vh";
    console.log(forGreen);
    /*   button.style.display = "block";
    button.textContent = "Попробувати знову?";
    */ console.log(forRed);
    green.style.background = "green";
    red.style.background = "red";
    green.style.width = forGreen + "%";
    red.style.width = forRed + "%";
    div2.style.height = "5vh";
    p.textContent = "   Кількість баллів:     " + score + ";" + "        Правильних відповідей:      " + score + ";";
    p.style.fontSize = "38px";
}
