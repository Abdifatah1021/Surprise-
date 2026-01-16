const giftBtn = document.getElementById('gift-button');
const giftSection = document.getElementById('gift-section');
const surpriseContent = document.getElementById('surprise-content');
const typingElement = document.getElementById('typing-text');
const slideshowSection = document.getElementById('slideshow-section');

const message = `Happy Birthday 🎂

I made this little surprise for you because you deserve something special.

You’re appreciated, you’re cared for, and you bring happiness to the people around you 💖
Today is a day to celebrate the amazing light you bring into this world. You have a special way of making everything around you brighter, and I am so happy to see you begin another year of life.

Your life is a beautiful story that is only getting better. As you start this new chapter, I hope your days are filled with deep joy, real magic, and moments that make your heart feel full. I wish for you to walk a path that is long, exciting, and always leads you toward your dreams.

I hope you always keep your sense of wonder and find hidden beauty in every corner of the world. Even when the road feels long, I know you have the strength to keep going and the grace to turn every challenge into a victory. May you always be surrounded by deep, honest love and by people who truly see how wonderful you are. I hope you find the courage to follow your heart and spend your time on things that bring you true peace.

The world is a much better place simply because you are in it. I hope your journey ahead is full of color, warmth, and endless beauty. May you always have the sunshine you need to stay happy and the quiet moments you need to grow.

Have the most wonderful birthday and a life full of love and adventure!

I hope today makes you smile.

HAPPY BIRTHDAY TO THIS BEAUTIFUL SOUL🎁`;

// 1. Open Gift & Start Typing
giftBtn.addEventListener('click', () => {
    giftSection.classList.add('hidden');
    surpriseContent.classList.remove('hidden');
    typeWriter(message, 0);
});

function typeWriter(text, i) {
    if (i < text.length) {
        typingElement.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1), 50);
    } else {
        // Show slideshow once text is done
        slideshowSection.classList.remove('hidden');
        setTimeout(() => { slideshowSection.style.opacity = 1; }, 100);
    }
}

// 2. Slideshow Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    if (index >= slides.length) currentSlide = 0;
    if (index < 0) currentSlide = slides.length - 1;
    slides[currentSlide].classList.add('active');
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentSlide++;
    showSlide(currentSlide);
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentSlide--;
    showSlide(currentSlide);
});

// 3. Heart Reaction Effect
document.getElementById('photo-display').addEventListener('click', (e) => {
    const heart = document.createElement('span');
    heart.innerHTML = '❤️';
    heart.className = 'floating-heart';
    heart.style.left = `${e.clientX - 10}px`;
    heart.style.top = `${e.clientY - 10}px`;
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 2000);
});

// 4. Background Balloons
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.innerHTML = '🎈';
    balloon.style.setProperty('--start-x', Math.random() * 100 + 'vw');
    balloon.style.setProperty('--end-x', Math.random() * 100 + 'vw');
    balloon.style.animationDuration = (Math.random() * 10 + 10) + 's';
    balloon.style.opacity = Math.random();
    document.getElementById('balloon-container').appendChild(balloon);
    
    setTimeout(() => balloon.remove(), 15000);
}

setInterval(createBalloon, 2000);