document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.getElementById('alphabet-grid');
    const modal = document.getElementById('letter-modal');
    const closeBtn = document.querySelector('.close-btn');

    // Modal elements
    const modalLetter = document.getElementById('modal-letter');
    const playSoundBtn = document.getElementById('play-sound-btn');
    const examplesList = document.getElementById('examples-list');
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptionsContainer = document.getElementById('quiz-options');
    const quizFeedback = document.getElementById('quiz-feedback');

    let currentLetterData = null;

    // 1. Generate the grid
    function renderGrid() {
        // persianAlphabetData comes from data.js
        persianAlphabetData.forEach(data => {
            const card = document.createElement('div');
            card.className = 'letter-card';
            card.textContent = data.letter;
            card.addEventListener('click', () => openModal(data));
            gridContainer.appendChild(card);
        });
    }

    // 2. Open Modal and populate data
    function openModal(data) {
        currentLetterData = data;

        // Set basic info
        modalLetter.textContent = data.letter;

        // Populate Examples
        examplesList.innerHTML = '';
        data.examples.forEach(ex => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="persian-word">${ex.word}</span>
                <span class="english-meaning">(${ex.transliteration}) - ${ex.meaning}</span>
            `;
            examplesList.appendChild(li);
        });

        // Populate Quiz
        quizQuestion.textContent = data.quiz.question;
        quizOptionsContainer.innerHTML = '';
        quizFeedback.className = 'hidden';
        quizFeedback.textContent = '';

        data.quiz.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.textContent = opt;
            btn.addEventListener('click', () => handleQuizAnswer(index, btn));
            quizOptionsContainer.appendChild(btn);
        });

        modal.classList.remove('hidden');
    }

    // 3. Handle Quiz Logic
    function handleQuizAnswer(selectedIndex, buttonClicked) {
        const isCorrect = selectedIndex === currentLetterData.quiz.correctAnswerIndex;

        // Disable all buttons after selection
        const allOptions = quizOptionsContainer.querySelectorAll('.quiz-option');
        allOptions.forEach(btn => btn.disabled = true);

        quizFeedback.classList.remove('hidden', 'success-text', 'error-text');

        if (isCorrect) {
            buttonClicked.classList.add('correct');
            quizFeedback.textContent = "آفرین! (Well done!)";
            quizFeedback.classList.add('success-text');
        } else {
            buttonClicked.classList.add('incorrect');
            // Highlight the correct one
            allOptions[currentLetterData.quiz.correctAnswerIndex].classList.add('correct');
            quizFeedback.textContent = "دوباره سعی کن (Try again!)";
            quizFeedback.classList.add('error-text');
        }
    }

    // 4. Handle Audio (Try Real Audio -> Fallback to TTS)
    let currentAudio = null;

    playSoundBtn.addEventListener('click', () => {
        if (!currentLetterData) return;

        // Visual feedback for click
        playSoundBtn.style.transform = 'scale(0.9)';
        setTimeout(() => playSoundBtn.style.transform = '', 150);

        // Stop any currently playing audio
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        window.speechSynthesis.cancel();

        // Try playing the real audio file first
        const audioFile = `sounds/${currentLetterData.id}.mp3`;
        currentAudio = new Audio(audioFile);

        currentAudio.play().catch(error => {
            console.log(`Real audio not found for ${currentLetterData.id}, falling back to TTS.`);

            // Fallback to Browser Text-to-Speech
            // Prioritize the actual Persian letter over the English transliteration for better TTS results
            const textToSpeak = currentLetterData.letter.split('/')[0].trim();
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            utterance.lang = 'fa-IR'; // Try to use Persian voice if available
            window.speechSynthesis.speak(utterance);
        });
    });

    // 5. Close Modal Logic
    function closeModal() {
        modal.classList.add('hidden');
        window.speechSynthesis.cancel(); // Stop audio if playing
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }

    closeBtn.addEventListener('click', closeModal);

    // Close if clicked outside the modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Initialize
    renderGrid();
});