// Quiz Questions
const questions = [
    {
        question: "Tina mana asal usul tahu bulat?",
        options: ["Jawa Barat", "Jawa Tengah", "Jawa Timur", "Sumatera Barat"],
        answer: "Jawa Barat",
        explanation: "Tahu bulat asalna ti Jawa Barat sarta jadi jajanan khas Sunda anu populer."
    },
    {
        question: "Naon bahan dasar pembuatan tahu bulat?",
        options: ["Tahu putih", "Tahu sumedang", "Tahu pong", "Tahu kuning"],
        answer: "Tahu pong",
        explanation: "Tahu bulat biasana dijieun tina tahu pong anu geus dihaleuskeun sarta diaduk nepi ka kalis."
    },
    {
        question: "Kumaha cara nyieun tahu bulat anu bener?",
        options: ["Digoreng langsung", "Direbus heula sateuacan digoreng", "Dikukus heula", "Dihaluskeun heula sarta dibuleudkeun"],
        answer: "Dihaluskeun heula sarta dibuleudkeun",
        explanation: "Tahu bulat dijieun ku cara dihaleuskeun heula, dibuleudkeun, tuluy digoreng nepi ka garing."
    },
    {
        question: "Saha nu ngawanohkeun tahu bulat munggaran?",
        options: ["Asep", "Dani Firmansyah", "Kang Asep", "Ente Sutisna"],
        answer: "Dani Firmansyah",
        explanation: "Dani Firmansyah mangrupikeun tokoh anu ngawanohkeun tahu bulat ka masarakat luas ngaliwatan lagu viralna."
    },
    {
        question: "Naon ngaran lagu anu ngajadikeun tahu bulat jadi populer?",
        options: ["Tahu Bulat", "Juragan Tahu", "Tahu Bulatku", "Tahu Bulat Viral"],
        answer: "Tahu Bulat",
        explanation: "Lagu 'Tahu Bulat' anu dinyanyikeun ku Dani Firmansyah ngajadikeun tahu bulat jadi populer di masarakat."
    },
    {
        question: "Kumaha ciri has sora panggero padagang tahu bulat?",
        options: ["Nyaring", "Lembut", "Khas ngagorowok", "Nyanyi-nyanyi"],
        answer: "Khas ngagorowok",
        explanation: "Padagang tahu bulat kaceluk ku sora panggerona anu khas ngagorowok ngagambarkeun daganganna."
    },
    {
        question: "Dina taun sabaraha lagu Tahu Bulat viral?",
        options: ["2013", "2014", "2015", "2016"],
        answer: "2015",
        explanation: "Lagu Tahu Bulat viral dina taun 2015 sarta ngajadikeun jajanan ieu langkung populer deui."
    },
    {
        question: "Naon ngaran kaulinan mobile anu ngangkat tema tahu bulat?",
        options: ["Tahu Bulat Mania", "Tahu Bulatku", "Tahu Bulat Viral", "Tahu Bulat: The Game"],
        answer: "Tahu Bulat Mania",
        explanation: "Kaulinan mobile 'Tahu Bulat Mania' mangrupikeun kaulinan anu ngangkat tema jualan tahu bulat."
    },
    {
        question: "Sabaraha harga standar tahu bulat per bijina?",
        options: ["Rp 500", "Rp 1.000", "Rp 2.000", "Rp 5.000"],
        answer: "Rp 500",
        explanation: "Harga standar tahu bulat biasana dijual dina harga Rp 500 per biji, tapi bisa béda-béda gumantung kana lokasi."
    },
    {
        question: "Kumaha cara ngajaga kerenyahan tahu bulat?",
        options: ["Disimpen dina wadah kedap udara", "Dikukus deui", "Digoreng deui", "Dilempeukkeun"],
        answer: "Digoreng deui",
        explanation: "Pikeun ngajaga kerenyahan, tahu bulat bisa digoreng deui sakedap sateuacan didahar."
    },
    {
        question: "Salah sahiji alesan kunaon tahu bulat loba nu resep nyaéta...",
        options: ["Mahal jeung eksklusif", "Gampang kapanggih jeung murah hargana", "Leuwih kuat tina tahu biasa", "Dijieun tina daging soy"],
        answer: "Gampang kapanggih jeung murah hargana",
        explanation: "Tahu bulat populer sabab gampang kapanggih di pinggir jalan sarta hargana anu tepat pikeun sagala kalangan."
    },
    {
        question: "Tahu bulat ogé bisa disebut bagian tina inovasi kuliner Sunda sabab...",
        options: ["Ngagunakeun bahan impor", "Digoreng tanpa minyak", "Ngahasilkeun bentuk anyar tina olahan tahu", "Dijual ngan di toko élit"],
        answer: "Ngahasilkeun bentuk anyar tina olahan tahu",
        explanation: "Tahu bulat mangrupa inovasi tina olahan tahu tradisional anu ngahasilkeun produk anyar kalayan cita rasa jeung tekstur anu unik."
    },
    {
        question: "Tahu bulat munggaran dikenal ti daérah mana?",
        options: ["Bandung", "Yogyakarta", "Tasikmalaya", "Surabaya"],
        answer: "Tasikmalaya",
        explanation: "Tahu bulat mimitina populer ti daérah Tasikmalaya, Jawa Barat, sateuacan sumebar ka sakuliah Indonésia."
    },
    {
        question: "Naon ciri has utama tahu bulat dibandingkeun tahu biasa?",
        options: ["Rasana pedes", "Bentukna pipih jeung padet", "Digoreng kalayan saos husus", "Bentukna buleud sarta ngembang nalika digoreng"],
        answer: "Bentukna buleud sarta ngembang nalika digoreng",
        explanation: "Tahu bulat boga ciri has bentukna anu buleud sarta bakal ngembang nalika digoreng, ngahasilkeun tekstur anu garing di luar tapi empuk di jero."
    },
    {
        question: "Naon strategi penjualan anu ngajadikeun tahu bulat populer?",
        options: ["Dijual di réstoran gancang saji", "Dijual ngangkut ojek online", "Dijual nguriling kalayan mobil bak kabuka sarta sora panggero anu unik", "Dijual dina bungkus instan"],
        answer: "Dijual nguriling kalayan mobil bak kabuka sarta sora panggero anu unik",
        explanation: "Strategi penjualan nganggo mobil bak kabuka sarta sora panggero anu unik ngajadikeun tahu bulat gampang dipikanyaho sarta ditéang ku masarakat."
    },
    {
        question: "Sora rekaman anu mindeng diputer ku padagang tahu bulat nyaéta...",
        options: ["'Tahu bulat! Lezat dan pedas!'", "'Tahu bulat! Goreng hangat, enak nendang!'", "'Tahu bulat! Digoreng dadakan, lima ratusan, gurih-gurih nyoi!'", "'Tahu bulat! Ngan dinten ieu, diskon spesial!'"],
        answer: "'Tahu bulat! Digoreng dadakan, lima ratusan, gurih-gurih nyoi!'",
        explanation: "Rekaman sora anu khas ieu mindeng diputer ku padagang tahu bulat pikeun narik perhatian para pembeli."
    },
    {
        question: "Naon bahan dasar utama dina nyieun tahu bulat?",
        options: ["Tepung béas", "Kedelé", "Hui", "Tepung kanji"],
        answer: "Kedelé",
        explanation: "Sapertos tahu biasa, bahan dasar utama tahu bulat nyaéta kedelé anu diolah jadi tahu teras diolah deui janten tahu bulat."
    },
    {
        question: "Tekstur tahu bulat anu digoréng leres biasana...",
        options: ["Lembek di luar, teuas di jero", "Garing di luar, lembut di jero", "Garing di luar jeung di jero", "Lembek di luar jeung di jero"],
        answer: "Garing di luar, lembut di jero",
        explanation: "Tahu bulat anu sampurna biasana boga tekstur garing di luar tapi tetep lembut sarta empuk di jero."
    },
    {
        question: "Ngaran kaulinan Android anu ngajadikeun tahu bulat langkung populer nyaéta...",
        options: ["Tahu Goreng Mania", "Tahu Bulat", "Jualan Tahu", "Tahu Express"],
        answer: "Tahu Bulat",
        explanation: "Kaulinan 'Tahu Bulat' ngajadikeun jajanan ieu langkung populer deui di kalangan generasi muda."
    },
    {
        question: "Saha pamekar kaulinan 'Tahu Bulat' anu viral di Indonésia?",
        options: ["Gojek Games", "Garuda Games", "Own Games", "Tofu Studio"],
        answer: "Own Games",
        explanation: "Kaulinan 'Tahu Bulat' dikembangkeun ku Own Games sarta suksés narik minat loba pamaén di Indonésia."
    },
    {
        question: "Tahu bulat biasana ditaburan ku bumbu di handap ieu, iwal...",
        options: ["Balado", "Kéju", "BBQ", "Sambel héjo seger"],
        answer: "Sambel héjo seger",
        explanation: "Tahu bulat biasana dibarengan ku bumbu kawas balado, kéju, atawa BBQ, tapi henteu biasa dibarengan sambel héjo seger."
    },
    {
        question: "Naha tahu bulat disebut 'digoréng dadakan'?",
        options: ["Karana digoréng sateuacan dijual", "Karana digoréng di bumi engké dibawa", "Karana ngan dijual peuting", "Karana henteu kudu digoréng pikeun didahar"],
        answer: "Karana digoréng sateuacan dijual",
        explanation: "Istilah 'digoréng dadakan' nunjukkeun yén tahu bulat digoréng langsung di tempat dagang pikeun ngajaga kerenyahan sarta kasegeranana nalika didahar."
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
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const finalScoreElement = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');



// Audio elements
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const bgMusic = document.getElementById('background-music');

// Game variables
let currentQuestion = null;
let score = 0;
let askedQuestions = []; // Untuk melacak pertanyaan yang sudah ditanyakan
let selectedOption = null;
let correctAnswer = null;

// Start background music as soon as possible
function startBackgroundMusic() {
    bgMusic.volume = 0.3;
    const playPromise = bgMusic.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log('Autoplay prevented, will try again after user interaction');
            // Try to play music on user interaction
            const playOnInteraction = () => {
                bgMusic.play().catch(e => console.log('Autoplay prevented:', e));
                document.removeEventListener('click', playOnInteraction);
                document.removeEventListener('keydown', playOnInteraction);
            };
            
            // Try to play immediately
            bgMusic.play().catch(e => {
                console.log('Autoplay prevented, waiting for interaction');
                // If autoplay is prevented, wait for user interaction
                document.addEventListener('click', playOnInteraction);
                document.addEventListener('keydown', playOnInteraction);
            });
        });
    }
}

// Player name variable
let playerName = 'Tamu';

// Start the quiz after name input
window.addEventListener('DOMContentLoaded', () => {
    startBackgroundMusic();
    
    // Show name input modal
    const nameModal = document.getElementById('name-modal');
    const playerNameInput = document.getElementById('player-name');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    
    // Focus on input when modal opens
    playerNameInput.focus();
    
    // Show error function
    const showError = (message) => {
        const errorElement = document.getElementById('name-error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
        playerNameInput.classList.add('error');
    };

    // Hide error function
    const hideError = () => {
        const errorElement = document.getElementById('name-error');
        errorElement.classList.remove('show');
        playerNameInput.classList.remove('error');
    };

    // Start quiz when clicking the button
    startQuizBtn.addEventListener('click', () => {
        const name = playerNameInput.value.trim();
        if (name !== '') {
            playerName = name;
            nameModal.style.display = 'none';
            hideError();
            showRandomQuestion();
        } else {
            showError('Mangga lebetkeun nami anjeun sateuacan ngamimitian!');
            playerNameInput.focus();
        }
    });

    // Hide error when user starts typing
    playerNameInput.addEventListener('input', () => {
        if (playerNameInput.value.trim() !== '') {
            hideError();
        }
    });
    
    // Also start on Enter key
    playerNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            startQuizBtn.click();
        }
    });
});

// Show current question
function showRandomQuestion() {
    // Reset state
    optionsElement.innerHTML = '';
    
    // Re-enable pointer events on options container
    optionsElement.style.pointerEvents = 'auto';
    
    // Get a random question that hasn't been asked yet
    const availableQuestions = questions.filter(q => !askedQuestions.includes(q.question));
    
    // If all questions have been asked, reset the asked questions
    if (availableQuestions.length === 0) {
        askedQuestions = [];
        showRandomQuestion();
        return;
    }
    
    // Get a random question
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[randomIndex];
    
    // Mark this question as asked
    if (currentQuestion.question) {
        askedQuestions.push(currentQuestion.question);
    }
    
    // Display the question
    questionElement.textContent = currentQuestion.question || '';
    
    // Set the correct answer
    correctAnswer = currentQuestion.answer;
    
    // Shuffle the options
    const shuffledOptions = [...(currentQuestion.options || [])].sort(() => Math.random() - 0.5);
    
    // Display the options
    shuffledOptions.forEach(option => {
        if (!option) return;
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', selectAnswer);
        optionsElement.appendChild(optionElement);
    });
}

// Select answer
function selectAnswer(e) {
    const selectedAnswer = e.target.textContent;
    const isCorrect = selectedAnswer === correctAnswer;
    
    // Disable all options to prevent multiple selections
    const optionButtons = document.querySelectorAll('.option');
    optionButtons.forEach(button => {
        button.style.pointerEvents = 'none';
    });
    
    // Check answer
    if (isCorrect) {
        // Play correct sound
        correctSound.currentTime = 0;
        correctSound.play().catch(e => console.log('Audio play failed:', e));
        
        // Show visual feedback
        e.target.classList.add('correct');
        
        // Show result after delay
        setTimeout(() => {
            // Play lunas sound when showing result at maximum volume
            const lunasSound = document.getElementById('lunas-sound');
            lunasSound.volume = 1.0; // Set to maximum volume (1.0 is 100%)
            lunasSound.currentTime = 0; // Rewind to start
            lunasSound.play().catch(e => console.log('Auto-play prevented:', e));
            
            // Clear the quiz screen
            quizScreen.classList.add('hidden');
            
            // Show the result screen
            showResult();
        }, 1000);
    } else {
        // Play wrong sound
        wrongSound.currentTime = 0;
        wrongSound.play().catch(e => console.log('Audio play failed:', e));
        
        // Show correct answer
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            if (option.textContent === correctAnswer) {
                option.classList.add('correct');
            }
        });
        e.target.classList.add('wrong');
        
        // Show new question after delay
        setTimeout(() => {
            // Clear the current question and options
            questionElement.textContent = '';
            optionsElement.innerHTML = '';
            
            // Show new random question
            showRandomQuestion();
        }, 2000);
    }
}

// Reset state
function resetState() {
    score = 0;
    askedQuestions = [];
    selectedOption = null;
    correctAnswer = null;
    
    // Clear the options container
    while (optionsElement.firstChild) {
        optionsElement.removeChild(optionsElement.firstChild);
    }
}



// Show result
function showResult() {
    // Hide quiz screen
    quizScreen.classList.add('hidden');
    
    // Show result screen
    resultScreen.classList.remove('hidden');
    
    // Reset for next game
    score = 0;
    askedQuestions = [];
    
    // Since we only show result on win, we can assume allCorrect is true
    const allCorrect = true;
    
    // Generate dynamic data
    const now = new Date();
    const pad = n => n.toString().padStart(2, '0');
    const days = ['Minggu', 'Senén', 'Salasa', 'Rebo', 'Kemis', 'Jumaah', 'Saptu'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    
    const dayName = days[now.getDay()];
    const dateStr = `${dayName}, ${pad(now.getDate())} ${months[now.getMonth()]} ${now.getFullYear()} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    
    // Generate random amount between 100 and 10000, then format with dots as thousand separators
    const randomAmount = Math.floor(Math.random() * 10000000) + 100;
    const formattedAmount = 'Rp Nuhun Kang/Téh';
    const amount = formattedAmount;
    const userName = playerName; // Use the player's name
    const txnNo = `IF-A5${Math.floor(100000 + Math.random()*900000)}`;
    const rrnNo = `TAHUBULAT${Math.floor(10 + Math.random()*90)}`;

    // Set receipt fields
    document.getElementById('receipt-date').textContent = dateStr;
    document.getElementById('receipt-amount').textContent = amount;
    document.getElementById('receipt-user').innerHTML = 'Dari <span class="receipt-user-name">' + userName + '</span>';
    document.getElementById('receipt-txn').innerHTML = 'No.Transaksi <span class="receipt-txn-no">' + txnNo + '</span>';
    document.getElementById('receipt-rrn').innerHTML = 'RRN <span class="receipt-rrn-no">' + rrnNo + '</span>';

    // Status and icon
    const statusElem = document.getElementById('receipt-status');
    const checkCircle = document.querySelector('.checkmark-circle');
    const checkmark = document.getElementById('checkmark-img');
    const footer = document.getElementById('receipt-footer');
    
    // The ping animation is now handled by CSS only
    
    if (allCorrect) {
        statusElem.textContent = 'Berhasil';
        checkCircle.style.background = '#4CAF50'; // Green for success
        checkmark.src = '../src/checked.png';
        checkmark.style.display = 'block';
        checkmark.style.animation = 'checkmark-animation 0.6s ease-in-out';
        footer.innerHTML = '<span style="color:#4CAF50;font-weight:600;font-size:1.2em">LUNAS</span><br><span style="font-size:0.96em">Buktina tunjukeun ka akang teteh kasep garelis anu boga tenan.</span>';
        
        // Start the heartbeat animation
        startHeartbeatAnimation();
    } else {
        statusElem.textContent = 'Belum Lunas';
        checkCircle.style.background = '#e74c3c';
        checkmark.src = '../src/wrong.png'; // Make sure you have a wrong.png in src/
        checkmark.style.display = 'block';
        checkmark.style.animation = 'checkmark-animation 0.6s ease-in-out';
        const motivasi = [
            'Tingkatkeun deui pangaweruh anjeun ngeunaan tahu bulat!',
            'Cobian deui, jawab sakabéh patarosan kalayan leres!',
            'Sakali deui, pasti bisa meunangkeun tahu bulat gratis!',
            'Ulah putus asa, cobian deui pikeun ngahontal 1 porsi tahu bulat!',
            'Pangaweruh anjeun ngeunaan tahu bulat kedah ditingkatkeun deui!',
            'Jawab sakabéh patarosan kalayan leres pikeun meunangkeun tahu bulat gratis!'
        ];
        footer.innerHTML = '<span style="color:#e74c3c;font-weight:600">Belum Lunas</span><br><span style="font-size:0.96em">'+motivasi[Math.floor(Math.random()*motivasi.length)]+'</span>';
    }
    // Hide old result message if present
    if (typeof resultMessage !== 'undefined') resultMessage.innerHTML = '';

}

// Restart quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultScreen.classList.add('hidden');
    startQuiz();
}

// Back to main menu function
function backToMenu() {
    currentQuestionIndex = 0;
    score = 0;
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

// Event Listeners
document.getElementById('restart-btn').addEventListener('click', restartQuiz);
document.getElementById('back-to-menu-btn').addEventListener('click', backToMenu);

// Start the quiz immediately
showRandomQuestion();

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
