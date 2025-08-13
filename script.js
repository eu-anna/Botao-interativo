const lightSwitch = document.getElementById('lightSwitch');
const lamp = document.querySelector('.lamp');
const body = document.body;
const statusText = document.getElementById('statusText');
const messageText = document.getElementById('messageText');
const starfield = document.getElementById('starfield');
const stars = [];
const title = document.querySelector('h1');

lightSwitch.addEventListener('change', function() {
    if(this.checked) {
        // Luz acesa
        lamp.classList.remove('off');
        body.style.backgroundColor = '#f5f5f5'; // fundo branco
        statusText.textContent = 'Luz Acesa';
        messageText.style.display = 'none';
        title.style.display = 'block';
        removeStars();
        lamp.style.animation = "swing 2s infinite ease-in-out, fadeIn 1s ease-in-out";
    } else {
        // Luz apagada
        lamp.classList.add('off');
        body.style.backgroundColor = '#000'; // fundo preto
        statusText.textContent = 'Luz Apagada';
        messageText.style.display = 'block';
        title.style.display = 'none';
        createStars();
    }
});

function createStars() {
    removeStars();
    const starCount = Math.floor(window.innerWidth * window.innerHeight / 1500);
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * window.innerWidth}px`;
        star.style.top = `${Math.random() * window.innerHeight}px`;
        star.style.setProperty('--duration', `${Math.random() * 1 + 0.5}s`);
        starfield.appendChild(star);
        stars.push(star);
    }
}

function removeStars() {
    stars.forEach(star => starfield.removeChild(star));
    stars.length = 0;
}
