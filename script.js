// Quiz Questions
const questions = [
    {
        question: "Tina mana asal usul tahu bulat?",
        options: ["Jawa Barat", "Jawa Tengah", "Jawa Timur", "Sumatera Barat"],
        answer: 0,
        explanation: "Tahu bulat asalna ti Jawa Barat sarta jadi jajanan khas Sunda anu populer."
    },
    {
        question: "Naon bahan dasar pembuatan tahu bulat?",
        options: ["Tahu putih", "Tahu sumedang", "Tahu pong", "Tahu kuning"],
        answer: 2,
        explanation: "Tahu bulat biasana dijieun tina tahu pong anu geus dihaleuskeun sarta diaduk nepi ka kalis."
    },
    {
        question: "Kumaha cara nyieun tahu bulat anu bener?",
        options: ["Digoreng langsung", "Dikukus heula", "Dibakar heula", "Dihaluskeun heula sarta dibuleudkeun"],
        answer: 3,
        explanation: "Tahu bulat dijieun ku cara dihaleuskeun heula, dibuleudkeun, tuluy digoreng nepi ka garing."
    },
    {
        question: "Saha nu ngawanohkeun tahu bulat munggaran?",
        options: ["Asep", "Dani Firmansyah", "Kang Asep", "Ente Sutisna"],
        answer: 1,
        explanation: "Dani Firmansyah mangrupikeun tokoh anu ngawanohkeun tahu bulat ka masarakat luas ngaliwatan lagu viralna."
    },
    {
        question: "Naon ngaran lagu anu ngajadikeun tahu bulat jadi populer?",
        options: ["Tahu Bulat", "Juragan Tahu", "Tahu Bulatku", "Tahu Bulat Viral"],
        answer: 0,
        explanation: "Lagu 'Tahu Bulat' anu dinyanyikeun ku Dani Firmansyah ngajadikeun tahu bulat jadi populer di masarakat."
    },
    {
        question: "Kumaha ciri has sora panggero padagang tahu bulat?",
        options: ["Nyaring", "Lembut", "Khas ngagorowok", "Nyanyi-nyanyi"],
        answer: 2,
        explanation: "Padagang tahu bulat kaceluk ku sora panggerona anu khas ngagorowok ngagambarkeun daganganna."
    },
    {
        question: "Dina taun sabaraha lagu Tahu Bulat viral?",
        options: ["2013", "2014", "2015", "2016"],
        answer: 2,
        explanation: "Lagu Tahu Bulat viral dina taun 2015 sarta ngajadikeun jajanan ieu langkung populer deui."
    },
    {
        question: "Naon ngaran kaulinan mobile anu ngangkat tema tahu bulat?",
        options: ["Tahu Bulat Mania", "Tahu Bulatku", "Tahu Bulat Viral", "Tahu Bulat: The Game"],
        answer: 0,
        explanation: "Kaulinan mobile 'Tahu Bulat Mania' mangrupikeun kaulinan anu ngangkat tema jualan tahu bulat."
    },
    {
        question: "Sabaraha harga standar tahu bulat per bijina?",
        options: ["Rp 500", "Rp 1.000", "Rp 2.000", "Rp 5.000"],
        answer: 0,
        explanation: "Harga standar tahu bulat biasana dijual dina harga Rp 500 per biji, tapi bisa béda-béda gumantung kana lokasi."
    },
    {
        question: "Kumaha cara ngajaga kerenyahan tahu bulat?",
        options: ["Disimpen dina wadah kedap udara", "Dikukus deui", "Digoreng deui", "Dilempeukkeun"],
        answer: 2,
        explanation: "Pikeun ngajaga kerenyahan, tahu bulat bisa digoreng deui sakedap sateuacan didahar."
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
        subMessage = 'Hayu cobian deui, bisa wae meunangkeun tahu bulat leuwih loba!';
    } else if (tahuCount === 1) {
        message = 'Alus! Anjeun meunangkeun 1 tahu bulat!';
        subMessage = 'Coba deui, bisa wae meunangkeun leuwih loba tahu bulat!';
    } else if (tahuCount === 2) {
        message = 'Hébat! Anjeun meunangkeun 2 tahu bulat!';
        subMessage = 'Sakali deui, bisa wae meunangkeun 3 tahu bulat!';
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
        <p class="share-text">Poto keun layarna, teras berekeun ka akang teteh kasep garelis anu boga tenan</p>
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
