// script12.js - Grade 1 Reward Stars & Badges System

function initializeRewardSystem() {
    // 1. Inject reward container into the document body
    const rewardContainer = document.createElement('div');
    rewardContainer.id = 'grade1-rewards';
    rewardContainer.className = 'fixed bottom-4 right-4 bg-white shadow-lg rounded-full px-4 py-2 flex items-center space-x-2 border border-yellow-400 z-50 transition-all transform hover:scale-105';
    
    // 2. Star Icon
    const starIcon = document.createElement('span');
    starIcon.textContent = '⭐';
    starIcon.className = 'text-xl animate-bounce';
    
    // 3. Counter Text
    const counterText = document.createElement('span');
    counterText.id = 'star-count';
    counterText.className = 'font-bold text-gray-700 text-sm';
    counterText.textContent = 'ផ្កាយរបស់ខ្ញុំ: 0';
    
    rewardContainer.appendChild(starIcon);
    rewardContainer.appendChild(counterText);
    document.body.appendChild(rewardContainer);
}

// Function for teachers/system to award a star
function awardStar() {
    const counterText = document.getElementById('star-count');
    if (!counterText) return;
    
    // Extract current number and increment it
    let currentStars = parseInt(counterText.textContent.replace(/[^0-9]/g, ''), 10) || 0;
    currentStars++;
    counterText.textContent = `ផ្កាយរបស់ខ្ញុំ: ${currentStars}`;
    
    // Simple visual celebration pop effect
    const container = document.getElementById('grade1-rewards');
    container.classList.add('bg-yellow-100', 'scale-110');
    setTimeout(() => {
        container.classList.remove('bg-yellow-100', 'scale-110');
    }, 300);
}

document.addEventListener('DOMContentLoaded', initializeRewardSystem);
