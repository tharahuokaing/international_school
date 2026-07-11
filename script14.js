// script14.js - Grade 1 Math Drag & Drop Quiz Handler

function setupMathQuiz() {
    const dropZones = document.querySelectorAll('.math-drop-zone');
    const dragItems = document.querySelectorAll('.math-drag-item');

    dragItems.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.innerText);
        });
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault(); // Required to allow dropping
        });

        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggedValue = e.dataTransfer.getData('text/plain');
            const correctAnswer = zone.getAttribute('data-answer');

            if (draggedValue === correctAnswer) {
                zone.textContent = draggedValue;
                zone.className = 'math-drop-zone bg-green-200 border-green-500 text-center text-xl font-bold rounded';
                // Trigger star award globally from script12 if available
                if (typeof awardStar === 'function') awardStar();
            } else {
                zone.classList.add('animate-shake', 'bg-red-100');
                setTimeout(() => zone.classList.remove('animate-shake', 'bg-red-100'), 500);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', setupMathQuiz);
