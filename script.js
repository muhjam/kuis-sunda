// Quiz Questions
const questions = [
    {
        question: "Tina mana asal usul tahu bulat?",
        options: ["Jawa Barat", "Jawa Tengah", "Jawa Timur", "Sumatera Barat"],
        answer: 0,
        explanation: "Tahu bulat asalna ti Jawa Barat sarta jadi jajanan khas Sunda anu populer."
    },
    {
        question: "Bahan utama nyieun tahu bulat nyaeta...",
        options: ["Tahu bodas anu dilemeskeun", "Tahu koneng", "Tahu pong", "Tahu sumedang"],
        answer: 0,
        explanation: "Tahu bulat dijieun tina tahu bodas anu dilemeskeun, dibuleudkeun, tuluy digoreng."
    },
    {
        question: "Iraha tahu bulat mimiti populer di Indonesia?",
        options: ["Taun 1970-an", "Taun 1980-an", "Taun 1990-an", "Taun 2000-an"],
        answer: 3,
        explanation: "Tahu bulat mimiti populer dina awal taun 2000-an."
    },
    {
        question: "Naon ngaran lian tina tahu bulat?",
        options: ["Tahu aci", "Tahu jeletot", "Tahu bulat goreng", "Tahu isi"],
        answer: 2,
        explanation: "Tahu bulat sok disebut ogé ku ngaran tahu bulat goreng."
    },
    {
        question: "Kumaha cara ngadon tahu bulat supaya garing di luar tapi empuk di jero?",
        options: ["Digoreng dina suhu tinggi", "Ditambahan cai jeruk nipis", "Dikukus heula samenggem", "Dikocok samenggem"],
        answer: 0,
        explanation: "Pikeun meunangkeun tekstur garing di luar tapi empuk di jero, tahu bulat kudu digoreng dina suhu anu cukup luhur."
    },
    {
        question: "Naon bungbu anu ilaharna ditambahan dina adonan tahu bulat?",
        options: ["Garam jeung lada", "Gula jeung cengkeh", "Kunyit jeung kayu manis", "Jahe jeung laos"],
        answer: 0,
        explanation: "Bungbu dasar anu ilaharna dipaké nyaéta uyah jeung lada pikeun nambahan rasa."
    },
    {
        question: "Saha anu nyebarkeun tahu bulat di pinggir jalan?",
        options: ["Abang-abang", "Kang tahu", "Mang-mang", "Bapak-bapak"],
        answer: 1,
        explanation: "Pangeusi anu nyebarkeun tahu bulat di pinggir jalan biasana disebut ku sebutan 'Kang Tahu'."
    },
    {
        question: "Kumaha cara ngagoreng tahu bulat supaya teu meletus?",
        options: ["Dikurebkeun dina minyak anu ngorondang", "Dikurebkeun dina minyak anu tiis", "Dikukus heula samenggem", "Dikocok samenggem"],
        answer: 0,
        explanation: "Pikeun nyegah tahu bulat meletus, kudu digoreng dina minyak anu geus panas pisan sarta cukup ngorondang."
    },
    {
        question: "Naon ngaran kadaharan anu biasana dipasangkeun jeung tahu bulat?",
        options: ["Batagor", "Cireng", "Cimol", "Comro"],
        answer: 2,
        explanation: "Cimol sering dipasangkeun jeung tahu bulat dina warung-warung."
    },
    {
        question: "Kumaha cara ngajaga kerenyahan tahu bulat?",
        options: ["Disimpen dina wadah kedap hawa", "Dikurebkeun deui samenggem", "Dikukus deui", "Dihakan langsung"],
        answer: 0,
        explanation: "Pikeun ngajaga kerenyahan, simpen dina wadah kedap hawa atawa wadah anu rapet."
    },
    {
        question: "Iraha biasana tahu bulat dijual?",
        options: ["Isuk-isuk", "Beurang", "Sore", "Peuting"],
        answer: 3,
        explanation: "Tahu bulat biasana dijual peuting nepi ka isuk-isuk di warung-warung pinggir jalan."
    },
    {
        question: "Naon bahan anu bisa ditambahan dina adonan tahu bulat pikeun nambahan rasa?",
        options: ["Bawang beureum", "Daun bawang", "Wortel", "Kabéh jawaban bener"],
        answer: 3,
        explanation: "Bahan-bahan kasebut tiasa ditambahan pikeun nambahan rasa sarta variasi dina adonan tahu bulat."
    },
    {
        question: "Kumaha cara ngadon tahu bulat supaya hasilna alus?",
        options: ["Didamel kalayan ati-ati", "Dikocok kenceng-kenceng", "Dikukus heula", "Dikocok samenggem"],
        answer: 0,
        explanation: "Pikeun hasil anu alus, adonan kudu didamel kalayan ati-ati sarta teu kacida kenceng ngadonna."
    },
    {
        question: "Naon ngaran kadaharan anu dijieun tina tahu bulat anu diiris sarta diisian?",
        options: ["Tahu bulat isi", "Tahu bulat krispi", "Tahu bulat goreng", "Tahu bulat krispi"],
        answer: 0,
        explanation: "Tahu bulat anu diiris sarta diisian biasana disebut ku ngaran tahu bulat isi."
    },
    {
        question: "Kumaha cara ngadon tahu bulat supaya hasilna lembut?",
        options: ["Ditambahan santan", "Ditambahan tepung kanji", "Ditambahan susu bubuk", "Kabéh jawaban bener"],
        answer: 3,
        explanation: "Sadayana bahan éta tiasa nambahan kalembutan dina adonan tahu bulat."
    },
    {
        question: "Naon ngaran kadaharan anu dijieun tina tahu bulat anu dipotong dadu?",
        options: ["Tahu bulat goreng", "Tahu krispi", "Tahu bulat krispi", "Tahu bulat goreng"],
        answer: 2,
        explanation: "Tahu bulat anu dipotong dadu sateuacan digoreng biasana disebut ku ngaran tahu bulat krispi."
    },
    {
        question: "Kumaha cara ngajaga kerenyahan tahu bulat anu geus digoreng?",
        options: ["Disimpen dina toples kedap udara", "Dikurebkeun deui samenggem", "Dikukus deui", "Dihakan langsung"],
        answer: 0,
        explanation: "Pikeun ngajaga kerenyahan, simpen dina toples kedap udara atanapi wadah anu rapet."
    },
    {
        question: "Naon ngaran kadaharan anu dijieun tina tahu bulat anu diiris tipis?",
        options: ["Keripik tahu bulat", "Tahu bulat krispi", "Tahu bulat goreng", "Kerupuk tahu"],
        answer: 0,
        explanation: "Tahu bulat anu diiris tipis sateuacan digoreng biasana disebut ku ngaran keripik tahu bulat."
    },
    {
        question: "Kumaha cara ngadon tahu bulat supaya hasilna garing?",
        options: ["Ditambahan tepung beras", "Ditambahan tepung tapioka", "Ditambahan tepung kanji", "Kabéh jawaban bener"],
        answer: 3,
        explanation: "Sadayana bahan éta tiasa nambahan kekerisan dina adonan tahu bulat."
    },
    {
        question: "Iraha biasana aya kang tahu bulat di jalan?",
        options: ["Isuk-isuk", "Beurang", "Sore", "Peuting"],
        answer: 3,
        explanation: "Kang tahu bulat biasana aya peuting nepi ka isuk-isuk di sisi jalan."
    },
    {
        question: "Naon bungbu anu bisa nambahan rasa gurih dina tahu bulat?",
        options: ["Royco", "Masako", "Vetsin", "Kabéh jawaban bener"],
        answer: 3,
        explanation: "Sadayana bungbu éta tiasa nambahan rasa gurih dina adonan tahu bulat."
    },
    {
        question: "Kumaha cara ngadon tahu bulat supaya teu gampang pegat?",
        options: ["Ditambahan endog", "Ditambahan tepung tapioka", "Ditambahan cau uli", "Kabéh jawaban bener"],
        answer: 3,
        explanation: "Sadayana bahan éta tiasa ngaronjatkeun kalis adonan supados teu gampang pegat."
    },
    {
        question: "Naon ngaran kadaharan anu dijieun tina tahu bulat anu dibelah sarta diisis sambel?",
        options: ["Tahu bulat pedas", "Tahu jeletot", "Tahu bulat krispi", "Tahu bulat isi sambel"],
        answer: 3,
        explanation: "Tahu bulat anu dibelah sarta diisis sambel biasana disebut ku ngaran tahu bulat isi sambel."
    },
    {
        question: "Kumaha cara ngajaga kaséhatan nalika ngadahar tahu bulat?",
        options: ["Ulah kebleng", "Dahar kalayan sayuran", "Ngurangkeun konsumsi gorengan", "Kabéh jawaban bénér"],
        answer: 3,
        explanation: "Pikeun ngajaga kaséhatan, kudu ngadahar kalayan saimbang sarta ulah kaleuleuwihi."
    },
    {
        question: "Naon ngaran kadaharan anu dijieun tina tahu bulat anu dibelah sarta diisis oncom?",
        options: ["Tahu bulat isi oncom", "Tahu bulat krispi", "Tahu jeletot", "Tahu bulat pedas"],
        answer: 0,
        explanation: "Tahu bulat anu dibelah sarta diisis oncom biasana disebut ku ngaran tahu bulat isi oncom."
    },
    {
        question: "Kumaha cara ngadon tahu bulat supaya hasilna garing tapi teu atos?",
        options: ["Ditambahan tepung beras", "Ditambahan tepung tapioka", "Ditambahan endog", "Kabéh jawaban bénér"],
        answer: 3,
        explanation: "Sadayana bahan éta tiasa ngaronjatkeun kualitas adonan supados garing tapi teu atos."
    },
    {
        question: "Naon ngaran kadaharan anu dijieun tina tahu bulat anu dibelah sarta diisis sambel kacang?",
        options: ["Tahu bulat sambel kacang", "Tahu bulat krispi", "Tahu jeletot", "Tahu bulat pedas"],
        answer: 0,
        explanation: "Tahu bulat anu dibelah sarta diisis sambel kacang biasana disebut ku ngaran tahu bulat sambel kacang."
    },
    {
        question: "Kumaha cara ngadon tahu bulat supaya hasilna garing tapi teu atos?",
        options: ["Ditambahan tepung beras", "Ditambahan tepung tapioka", "Ditambahan endog", "Kabéh jawaban bénér"],
        answer: 3,
        explanation: "Sadayana bahan éta tiasa ngaronjatkeun kualitas adonan supados garing tapi teu atos."
    },
    {
        question: "Naon ngaran kadaharan anu dijieun tina tahu bulat anu dibelah sarta diisis sambel matah?",
        options: ["Tahu bulat sambel matah", "Tahu bulat krispi", "Tahu jeletot", "Tahu bulat pedas"],
        answer: 0,
        explanation: "Tahu bulat anu dibelah sarta diisis sambel matah biasana disebut ku ngaran tahu bulat sambel matah."
    },
    {
        question: "Kumaha cara ngadon tahu bulat supaya hasilna garing tapi teu atos?",
        options: ["Ditambahan tepung beras", "Ditambahan tepung tapioka", "Ditambahan endog", "Kabéh jawaban bénér"],
        answer: 3,
        explanation: "Sadayana bahan éta tiasa ngaronjatkeun kualitas adonan supados garing tapi teu atos."
    },
    {
        question: "Naon ngaran kadaharan anu dijieun tina tahu bulat anu dibelah sarta diisis sambel ijo?",
        options: ["Tahu bulat sambel ijo", "Tahu bulat krispi", "Tahu jeletot", "Tahu bulat pedas"],
        answer: 0,
        explanation: "Tahu bulat anu dibelah sarta diisis sambel ijo biasana disebut ku ngaran tahu bulat sambel ijo."
    },
    {
        question: "Kumaha cara ngadon tahu bulat supaya hasilna garing tapi teu atos?",
        options: ["Ditambahan tepung beras", "Ditambahan tepung tapioka", "Ditambahan endog", "Kabéh jawaban bénér"],
        answer: 3,
        explanation: "Sadayana bahan éta tiasa ngaronjatkeun kualitas adonan supados garing tapi teu atos."
    },
    {
        question: "Naon ngaran kadaharan anu dijieun tina tahu bulat anu dibelah sarta diisis sambel terasi?",
        options: ["Tahu bulat sambel terasi", "Tahu bulat krispi", "Tahu jeletot", "Tahu bulat pedas"],
        answer: 0,
        explanation: "Tahu bulat anu dibelah sarta diisis sambel terasi biasana disebut ku ngaran tahu bulat sambel terasi."
    },
    {
        question: "Kumaha cara ngadon tahu bulat supaya hasilna garing tapi teu atos?",
        options: ["Ditambahan tepung beras", "Ditambahan tepung tapioka", "Ditambahan endog", "Kabéh jawaban bénér"],
        answer: 3,
        explanation: "Sadayana bahan éta tiasa ngaronjatkeun kualitas adonan supados garing tapi teu atos."
    },
    {
        question: "Naon ngaran kadaharan anu dijieun tina tahu bulat anu dibelah sarta diisis sambel kecap?",
        options: ["Tahu bulat sambel kecap", "Tahu bulat krispi", "Tahu jeletot", "Tahu bulat pedas"],
        answer: 0,
        explanation: "Tahu bulat anu dibelah sarta diisis sambel kecap biasana disebut ku ngaran tahu bulat sambel kecap."
    },
    {
        question: "Kumaha cara ngadon tahu bulat supaya hasilna garing tapi teu atos?",
        options: ["Ditambahan tepung beras", "Ditambahan tepung tapioka", "Ditambahan endog", "Kabéh jawaban bénér"],
        answer: 3,
        explanation: "Sadayana bahan éta tiasa ngaronjatkeun kualitas adonan supados garing tapi teu atos."
    },
    {
        question: "Naon ngaran kadaharan anu dijieun tina tahu bulat anu dibelah sarta diisis sambel rujak?",
        options: ["Tahu bulat sambel rujak", "Tahu bulat krispi", "Tahu jeletot", "Tahu bulat pedas"],
        answer: 0,
        explanation: "Tahu bulat anu dibelah sarta diisis sambel rujak biasana disebut ku ngaran tahu bulat sambel rujak."
    },
    {
        question: "Kumaha cara ngadon tahu bulat supaya hasilna garing tapi teu atos?",
        options: ["Ditambahan tepung beras", "Ditambahan tepung tapioka", "Ditambahan endog", "Kabéh jawaban bénér"],
        answer: 3,
        explanation: "Sadayana bahan éta tiasa ngaronjatkeun kualitas adonan supados garing tapi teu atos."
    },
    {
        question: "Naon ngaran kadaharan anu dijieun tina tahu bulat anu dibelah sarta diisis sambel bajak?",
        options: ["Tahu bulat sambel bajak", "Tahu bulat krispi", "Tahu jeletot", "Tahu bulat pedas"],
        answer: 0,
        explanation: "Tahu bulat anu dibelah sarta diisis sambel bajak biasana disebut ku ngaran tahu bulat sambel bajak."
    },
    {
        question: "Kumaha cara ngadon tahu bulat supaya hasilna garing tapi teu atos?",
        options: ["Ditambahan tepung beras", "Ditambahan tepung tapioka", "Ditambahan endog", "Kabéh jawaban bénér"],
        answer: 3,
        explanation: "Sadayana bahan éta tiasa ngaronjatkeun kualitas adonan supados garing tapi teu atos."
    },
    {
        question: "Naon ngaran kadaharan anu dijieun tina tahu bulat anu dibelah sarta diisis sambel mangga?",
        options: ["Tahu bulat sambel mangga", "Tahu bulat krispi", "Tahu jeletot", "Tahu bulat pedas"],
        answer: 0,
        explanation: "Tahu bulat anu dibelah sarta diisis sambel mangga biasana disebut ku ngaran tahu bulat sambel mangga."
    },
    {
        question: "Kumaha cara ngadon tahu bulat supaya hasilna garing tapi teu atos?",
        options: ["Ditambahan tepung beras", "Ditambahan tepung tapioka", "Ditambahan endog", "Kabéh jawaban bénér"],
        answer: 3,
        explanation: "Sadayana bahan éta tiasa ngaronjatkeun kualitas adonan supados garing tapi teu atos."
    },
    {
        question: "Naon ngaran kadaharan anu dijieun tina tahu bulat anu dibelah sarta diisis sambel dabu-dabu?",
        options: ["Tahu bulat sambel dabu-dabu", "Tahu bulat krispi", "Tahu jeletot", "Tahu bulat pedas"],
        answer: 0,
        explanation: "Tahu bulat anu dibelah sarta diisis sambel dabu-dabu biasana disebut ku ngaran tahu bulat sambel dabu-dabu."
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
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');
const progressBar = document.querySelector('.progress-bar');
const questionCount = document.getElementById('question-count');

// Audio elements
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const bgMusic = document.getElementById('bg-music');

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
        scoreElement.textContent = score;
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
    
    finalScoreElement.textContent = score;
    
    // Set result message based on score
    const percentage = (score / (selectedQuestions.length * 10)) * 100;
    if (percentage >= 80) {
        resultMessage.textContent = 'Pinter! Pangaweruh anjeun ngeunaan tahu bulat kacida alusna!';
    } else if (percentage >= 50) {
        resultMessage.textContent = 'Alus! Tapi masih kudu ningkatkeun deui.';
    } else {
        resultMessage.textContent = 'Tong nyerah! Ayo coba deui jeung pelajari leuwih loba ngeunaan tahu bulat.';
    }
}

// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = '0';
    resultScreen.classList.add('hidden');
    startQuiz();
}

// Back to main menu function
function backToMenu() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = '0';
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
