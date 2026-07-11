// script15.js - Focus Assistant & Big Hand-Raise Feature

function setupFocusAssistant() {
    // 1. Virtual Hand Raise Action
    const raiseHandBtn = document.getElementById('btn-raise-hand');
    if (raiseHandBtn) {
        raiseHandBtn.addEventListener('click', () => {
            raiseHandBtn.classList.toggle('bg-orange-500');
            raiseHandBtn.classList.toggle('bg-green-500');
            
            const isRaised = raiseHandBtn.classList.contains('bg-green-500');
            raiseHandBtn.textContent = isRaised ? '✋ លើកដៃរួចរាល់' : '✋ លើកដៃសួរ';
            
            console.log(`Student hand raise status: ${isRaised}`);
        });
    }

    // 2. Tab Distraction Alert System
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // Child switched tabs or minimized the lesson browser
            console.warn("Attention Alert: Grade 1 student left the classroom viewport.");
        }
    });
}

document.addEventListener('DOMContentLoaded', setupFocusAssistant);
