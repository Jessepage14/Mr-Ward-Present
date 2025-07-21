const quizSection = document.getElementById('quiz-section');
const quiz = [
    {
        question: "What does Mr Ward put first?",
        options: ["Education", "Happiness", "Safety", "Homework"],
        answer: 2
    },
    {
        question: "What does Mr Ward never do?",
        options: ["Shout", "Laugh", "Teach", "Smile"],
        answer: 0
    },
    {
        question: "What year did Jesse have Mr Ward?",
        options: ["Year 4", "Year 5", "Year 6", "Year 3"],
        answer: 2
    },
    {
        question: "Wht is not compulsory in 6W?",
        options: ["Anything", "Homework", "School", "Work"],
        answer: 1
    },
    {
        question: "What does Mr Ward's laugh sound like?",
        options: ["Ha ha ha", "AHHHHHHHHH!", "A. A. A. A. A.", "Ha."],
        answer: 2
    }
];
let quizIndex = 0, score = 0;
function showQuiz() {
    if (quizIndex >= quiz.length) {
        quizSection.innerHTML = `<h3>Quiz Complete!</h3><p>Your Score: ${score}/${quiz.length}</p>`;
        return;
    }
    const q = quiz[quizIndex];
    quizSection.innerHTML = `
        <div class="quiz-question">${q.question}</div>
        ${q.options.map((opt, i) => `<button class="quiz-option" data-i="${i}">${opt}</button>`).join('')}
    `;
    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.onclick = () => {
            if (parseInt(btn.dataset.i) === q.answer) score++;
            quizIndex++;
            showQuiz();
        };
    });
}
showQuiz();