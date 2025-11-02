// Slideshow functionality (unchanged)
const images = document.querySelectorAll('.slideshow img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

// Initialize first image as active
images[0].classList.add('active');

// Auto-advance every 1 second
setInterval(showNextImage, 1000);

// Typing effect for the parallax text (unchanged)
const typingText = document.getElementById('typing-text');
const phrases = [
    "Hi, Ms. Jullie Ann C. Javier",
    "Hi, Love",
    "Hi, Baby"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 2000;

function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, deletingSpeed);
        }
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeWriter, pauseTime);
        } else {
            setTimeout(typeWriter, typingSpeed);
        }
    }
}

typeWriter();

// Modal functionality
const readMoreBtn = document.getElementById('read-more-btn');
const modalOverlay = document.getElementById('modal-overlay');
const closeModalBtn = document.getElementById('close-modal');

readMoreBtn.addEventListener('click', () => {
    modalOverlay.classList.add('show');
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('show');
});

// Close modal when clicking outside the content
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('show');
    }
});