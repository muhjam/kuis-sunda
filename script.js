// Quiz Questions
const questions = [
    {
        question: "Ti mana asal muasal tahu bulat nu ayeuna sumebar ka mana-mana?",
        options: ["Bandung", "Cirebon", "Garut", "Kuningan"],
        answer: 2,
        explanation: "Tahu bulat asalna ti Garut, Jawa Barat, sarta sumebar ka sabudeureun Indonésia."
    },
    {
        question: "Tahu bulat biasana digoreng dina kaayaan...",
        options: ["Tiis", "Satengah asak", "Asak tuluy dijieun keripik", "Panas kénéh, langsung saatos di pesen"],
        answer: 3,
        explanation: "Salah sahiji ciri has tina tahu bulat nyaéta digoréng langsung saatos dipésén supaya tetep panas sarta garing di luar tapi empuk di jero."
    },
    {
        question: "Naon anu ngajadikeun rasa jeung tekstur tahu bulat béda jeung tahu biasa?",
        options: ["Digoreng ku minyak samin", "Dijieun tina campuran kacang tanah", "Dihaluskeun, didiuk heula, tuluy dibulakeun", "Dimekarkeun ku bahan pengembang khusus"],
        answer: 2,
        explanation: "Tahu bulat dijieun tina tahu anu dihaleuskeun, didiuk heula, tuluy dibuleudkeun saacan digoréng, anu ngahasilkeun tekstur has anu béda jeung tahu biasa."
    },
    {
        question: "Tahu bulat mimiti jadi populér sabudeureun taun...",
        options: ["2000", "2005", "2010", "2015"],
        answer: 3,
        explanation: "Tahu bulat mimiti populer di taun 2015 nalika lagu 'Tahu Bulat' viral di média sosial."
    },
    {
        question: "Salah sahiji ciri has tina padagang tahu bulat nyaéta...",
        options: ["Ngagunakeun obrog-obrog", "Ngagunakeun sora panggero tina speaker mobil", "Ngagorowok ti motor", "Ngajual di sisi situ"],
        answer: 1,
        explanation: "Padagang tahu bulat kaceluk ku sora panggero anu diputér tina spéker mobil, anu mindeng ngandung promosi kreatif ngeunaan daganganna."
    },
    {
        question: "Sora panggero padagang tahu bulat biasana eusina...",
        options: ["Nyeritakeun sajarah tahu", "Nyaritakeun resep masakan", "Promosi harga jeung cara ngolah", "Ngajak balanja jeung ngajangjikeun diskon"],
        answer: 2,
        explanation: "Sora panggero biasana ngandung promosi harga, kualitas, jeung cara ngolah tahu bulat anu dijualna."
    },
    {
        question: "Dina kaulinan mobile 'Tahu Bulat', nu jadi tujuan utama pamaén téh...",
        options: ["Miceun tahu nu rusak", "Ngalatih koki jeung juru goreng", "Ngumpulkeun duit tina jualan tahu bulat", "Nyieun tahu rasa keju"],
        answer: 2,
        explanation: "Kaulinan 'Tahu Bulat' ngeunaan cara ngumpulkeun duit tina hasil jualan tahu bulat anu digoréng ku pamaén."
    },
    {
        question: "Naha disebutna 'tahu bulat'?",
        options: ["Sabab warnana buleud", "Sabab digoreng buleud-buleud", "Sabab dijieun di wewengkon Bulat", "Sabab ku rasa anu bulat (sempurna)"],
        answer: 1,
        explanation: "Ngaran 'tahu bulat' dicokot tina bentukna anu buleud-buleud nalika digoréng, anu mangrupa ciri has tina kadaharan ieu."
    },
    {
        question: "Salah sahiji alesan kunaon tahu bulat loba nu resep nyaéta...",
        options: ["Mahal jeung eksklusif", "Gampang kapanggih jeung murah hargana", "Leuwih kuat tina tahu biasa", "Dijieun tina daging soy"],
        answer: 1,
        explanation: "Tahu bulat populer sabab gampang kapanggih di pinggir jalan sarta hargana anu tepat pikeun sagala kalangan."
    },
    {
        question: "Tahu bulat ogé bisa disebut bagian tina inovasi kuliner Sunda sabab...",
        options: ["Ngagunakeun bahan impor", "Digoreng tanpa minyak", "Ngahasilkeun bentuk anyar tina olahan tahu", "Dijual ngan di toko élit"],
        answer: 2,
        explanation: "Tahu bulat mangrupa inovasi tina olahan tahu tradisional anu ngahasilkeun produk anyar kalayan cita rasa jeung tekstur anu unik."
    }

];

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const finalScoreElement = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');
const progressBar = document.querySelector('.progress-bar');
const questionCount = document.getElementById('question-count');

// Update score display with tahu icons
function updateScore() {
    const tahuIcons = document.querySelectorAll('.tahu-icon');
    const scoreCount = Math.floor(score / 10); // Convert to 1-3 scale
    
    tahuIcons.forEach((icon, index) => {
        if (index < scoreCount) {
            icon.classList.add('earned');
        } else {
            icon.classList.remove('earned');
        }
    });
}

// Audio elements
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const bgMusic = document.getElementById('background-music');

// Game variables
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let selectedQuestions = [];

// Start background music as soon as possible
function startBackgroundMusic() {
    bgMusic.volume = 0.3;
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log('Autoplay prevented, will try again after user interaction');
            // Wait for user interaction to try again
            const playOnInteraction = () => {
                bgMusic.play().catch(e => console.log('Still cannot play:', e));
                document.removeEventListener('click', playOnInteraction);
                document.removeEventListener('keydown', playOnInteraction);
            };
            
            document.addEventListener('click', playOnInteraction);
            document.addEventListener('keydown', playOnInteraction);
        });
    }
}

// Start the music when the page loads
window.addEventListener('DOMContentLoaded', startBackgroundMusic);

// Start Quiz
function startQuiz() {
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    // Shuffle and select 3 random questions
    shuffledQuestions = shuffleArray([...questions]);
    selectedQuestions = shuffledQuestions.slice(0, 3);
    
    // Ensure music is playing when quiz startds
    startBackgroundMusic();
    showQuestion();
}

// Show current question
function showQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        showResult();
        return;
    }
    
    const question = selectedQuestions[currentQuestionIndex];
    questionElement.textContent = question.question;
    
    // Clear previous options
    optionsElement.innerHTML = '';
    
    // Add new options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.innerHTML = `
            <span class="option-prefix">${String.fromCharCode(65 + index)}</span>
            <span>${option}</span>
        `;
        
        optionElement.addEventListener('click', () => selectAnswer(index));
        optionsElement.appendChild(optionElement);
    });
    
    // Update progress
    updateProgress();
}

// Select answer
function selectAnswer(selectedIndex) {
    const question = selectedQuestions[currentQuestionIndex];
    const optionElements = document.querySelectorAll('.option');
    
    // Disable all options
    optionElements.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Check answer
    if (selectedIndex === question.answer) {
        optionElements[selectedIndex].classList.add('correct');
        score += 10;
        updateScore(); // Update tahu icons
        correctSound.play();
        optionElements[selectedIndex].classList.add('pulse');
    } else {
        optionElements[selectedIndex].classList.add('wrong');
        optionElements[question.answer].classList.add('correct');
        wrongSound.play();
        optionElements[selectedIndex].classList.add('shake');
    }
    
    // Show next button after delay
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1500);
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestionIndex) / selectedQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    questionCount.textContent = `Pertanyaan ${currentQuestionIndex + 1}/${selectedQuestions.length}`;
}

// Show result
function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    
    const tahuCount = Math.floor(score / 10);
    
    // Set result message based on number of tahu earned
    let message = '';
    let subMessage = '';
    
    if (tahuCount === 0) {
        message = 'Hampura, anjeun tacan meunang tahu bulat!';
        subMessage = 'Hayu cobian deui, siapa nyaho meunangkeun tahu bulat leuwih loba!';
    } else if (tahuCount === 1) {
        message = 'Alus! Anjeun meunangkeun 1 tahu bulat!';
        subMessage = 'Coba deui, pasti bisa meunangkeun leuwih loba tahu bulat!';
    } else if (tahuCount === 2) {
        message = 'Hébat! Anjeun meunangkeun 2 tahu bulat!';
        subMessage = 'Sakali deui, pasti bisa meunangkeun 3 tahu bulat!';
    } else {
        message = 'Luar biasa! Anjeun meunangkeun 3 tahu bulat!';
        subMessage = 'Pangaweruh anjeun ngeunaan tahu bulat kacida alusna!';
    }
    
    // Update the result message with HTML for better formatting
    resultMessage.innerHTML = `
        <h3>${message}</h3>
        <p>${subMessage}</p>
        <div class="tahu-result">
            ${Array(tahuCount).fill().map(() => `<img src="src/tahu.png" alt="Tahu Bulat" class="tahu-earned">`).join('')}
        </div>
    `;
}

// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    updateScore(); // Reset tahu icons
    resultScreen.classList.add('hidden');
    startQuiz();
}

// Back to main menu function
function backToMenu() {
    currentQuestionIndex = 0;
    score = 0;
    updateScore(); // Reset tahu icons
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

// Event Listeners
document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('restart-btn').addEventListener('click', restartQuiz);
document.getElementById('back-to-menu-btn').addEventListener('click', backToMenu);

// Add hover effect for options
optionsElement.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('option')) {
        e.target.classList.add('hover-effect');
    }
});

optionsElement.addEventListener('mouseout', (e) => {
    if (e.target.classList.contains('option')) {
        e.target.classList.remove('hover-effect');
    }
});
