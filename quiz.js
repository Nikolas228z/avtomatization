let score = 0;
let answered = 0;
const totalQuestions = 5;

function answer(question, isCorrect) {
    // 1. Приховуємо кнопки поточного питання
    document.getElementById("q" + question).style.display = "none";

    // 2. Показуємо повідомлення
    document.getElementById("msg" + question).style.display = "block";

    // 3. Підрахунок балів
    if (isCorrect) score++;
    else score--; // або можна не мінусувати

    answered++;

    // 4. Показуємо результат після всіх питань
    if (answered === totalQuestions) {
        document.getElementById("result").innerText =
            "Правильних відповідей: " + score +
            "\nНеправильних: " + (totalQuestions - score);
    }
}
