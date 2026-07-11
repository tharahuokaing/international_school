// Function to add the Bank link to the navigation bar
function addBankNavigationLink() {
    // 1. Inject the running LED animation styles if they don't exist yet
    if (!document.getElementById('led-animation-styles')) {
        const style = document.createElement('style');
        style.id = 'led-animation-styles';
        style.innerHTML = `
            @keyframes led-flow {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .animate-led {
                background: linear-gradient(90deg, #ff007f, #7f00ff, #00f0ff, #ff007f);
                background-size: 300% 300%;
                animation: led-flow 4s linear infinite;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        `;
        document.head.appendChild(style);
    }

    // 2. Find the navigation container
    const navContainer = document.querySelector('nav ul') || document.querySelector('nav');
    
    if (!navContainer) {
        console.error("Navigation container not found.");
        return;
    }

    // 3. Create the new list item element for the Bank link
    const bankNavItem = document.createElement('li');
    bankNavItem.className = 'flex items-center space-x-2 mx-2'; 

    // 4. Create the anchor tag
    const bankLink = document.createElement('a');
    bankLink.href = 'https://tharahuokaing.github.io/bank1/';
    // Removed text-color utilities so the LED gradient can take effect
    bankLink.className = 'flex items-center transition-colors duration-200 font-bold';
    
    // 5. Create the bank image/icon element
    const bankImg = document.createElement('img');
    bankImg.src = 'bank.jpg'; 
    bankImg.alt = 'Bank Icon';
    bankImg.className = 'w-5 h-5 mr-1 object-contain'; 

    // 6. Create a span for the text to isolate the LED text effect
    const bankTextSpan = document.createElement('span');
    bankTextSpan.className = 'animate-led';
    bankTextSpan.textContent = ' ធនាគារ';

    // 7. Assemble the elements
    bankLink.appendChild(bankImg);
    bankLink.appendChild(bankTextSpan); // Appending the animated span instead of a raw text node
    bankNavItem.appendChild(bankLink);

    // 8. Insert it near "ទំព័រដើម"
    if (navContainer.firstChild) {
        navContainer.insertBefore(bankNavItem, navContainer.firstChild.nextSibling);
    } else {
        navContainer.appendChild(bankNavItem);
    }
}

// Run the function once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', addBankNavigationLink);
