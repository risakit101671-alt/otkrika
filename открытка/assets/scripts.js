(function() {
    const envelope = document.getElementById('envelopeBox');
    const letter = document.getElementById('letterBox');
    const openBtn = document.getElementById('openLetterBtn');
    const backBtn = document.getElementById('backToEnvelopeBtn');

    function openEnvelope() {
        if (!envelope || !letter) return;
        
        envelope.classList.add('hide-env');
        
        const onAnimationEnd = () => {
            envelope.style.display = 'none';
            envelope.classList.remove('hide-env');
            letter.classList.add('show');
            envelope.removeEventListener('animationend', onAnimationEnd);
        };
        
        envelope.addEventListener('animationend', onAnimationEnd, { once: true });
        
        // Fallback на случай, если анимация не сработает
        setTimeout(() => {
            if (envelope.style.display !== 'none') {
                envelope.style.display = 'none';
                letter.classList.add('show');
            }
        }, 450);
    }

    function backToEnvelope() {
        if (!envelope || !letter) return;
        
        letter.classList.remove('show');
        envelope.style.display = 'block';
        envelope.classList.remove('hide-env');
        
        // Плавная прокрутка к конверту
        setTimeout(() => {
            envelope.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }

    if (openBtn) openBtn.addEventListener('click', openEnvelope);
    if (backBtn) backBtn.addEventListener('click', backToEnvelope);
})();