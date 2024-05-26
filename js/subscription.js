document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');
    const progressCompleted = document.getElementById('progress-completed');
    const currentStep = document.getElementById('current-step');
    const questions = document.querySelectorAll('.question');
    let currentQuestion = 0;

    function updateProgress() {
        const progress = ((currentQuestion + 1) / questions.length) * 100;
        progressCompleted.style.width = progress + '%';
        currentStep.textContent = `0${currentQuestion + 1}`;
    }

    function showQuestion(index) {
        questions.forEach((question, i) => {
            question.classList.toggle('active', i === index);
        });
        updateProgress();
    }

    function resetQuiz() {
        setTimeout(() => {
            currentQuestion = 0;
            showQuestion(currentQuestion);
        }, 4000); 
    }

    nextButton.addEventListener('click', () => {
        if (currentQuestion < questions.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
        }
        if (currentQuestion === questions.length - 1) {
            resetQuiz();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            showQuestion(currentQuestion);
        }
    });

    showQuestion(currentQuestion);
});