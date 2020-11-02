//Определение реального размера vh
window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01; // реальный 1vh
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});