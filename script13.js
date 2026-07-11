// script13.js - Interactive Khmer Alphabet Board for Grade 1

function setupAlphabetAudioBoard() {
    // Find the alphabet grid container on the webpage
    const alphabetGrid = document.querySelector('.alphabet-grid');
    if (!alphabetGrid) return;

    // Attach click events to all individual letter elements/buttons inside the grid
    const letters = alphabetGrid.querySelectorAll('.letter-card');
    
    letters.forEach(letter => {
        letter.addEventListener('click', () => {
            // Retrieve the letter character identifier (e.g., "ka", "kha") from data attribute
            const soundId = letter.getAttribute('data-sound');
            if (!soundId) return;
            
            // Play the corresponding audio file cleanly
            const audio = new Audio(`audio/khmer_${soundId}.mp3`);
            audio.play().catch(err => console.log("Audio file path not found:", err));
            
            // Visual feedback loop for kids
            letter.classList.add('ring-4', 'ring-blue-400', 'duration-100');
            setTimeout(() => letter.classList.remove('ring-4', 'ring-blue-400'), 200);
        });
    });
}

document.addEventListener('DOMContentLoaded', setupAlphabetAudioBoard);
