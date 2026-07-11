// Function to add the Bank link to the navigation bar
function addBankNavigationLink() {
    // 1. Find the navigation container (adjust the selector if your nav uses a different class or ID)
    const navContainer = document.querySelector('nav ul') || document.querySelector('nav');
    
    if (!navContainer) {
        console.error("Navigation container not found.");
        return;
    }

    // 2. Create the new list item element for the Bank link
    const bankNavItem = document.createElement('li');
    bankNavItem.className = 'flex items-center space-x-2 mx-2'; // Matches Tailwind spacing

    // 3. Create the anchor tag
    const bankLink = document.createElement('a');
    bankLink.href = 'https://tharahuokaing.github.io/bank1/';
    bankLink.className = 'flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200';
    
    // 4. Create the bank image/icon element
    const bankImg = document.createElement('img');
    bankImg.src = 'bank_logo.jpg'; // ⚠️ Replace with your actual bank icon/logo image path
    bankImg.alt = 'Bank Icon';
    bankImg.className = 'w-5 h-5 mr-1 object-contain'; // Sets size and right margin

    // 5. Create the text element
    const bankText = document.createTextNode(' ធនាគារ');

    // 6. Assemble the elements
    bankLink.appendChild(bankImg);
    bankLink.appendChild(bankText);
    bankNavItem.appendChild(bankLink);

    // 7. Insert it near "ទំព័រដើម" (Assuming "ទំព័រដើម" is the first child element)
    if (navContainer.firstChild) {
        // Inserts right after the first item (e.g., after ទំព័រដើម)
        navContainer.insertBefore(bankNavItem, navContainer.firstChild.nextSibling);
    } else {
        // Fallback: just append if the nav is empty
        navContainer.appendChild(bankNavItem);
    }
}

// Run the function once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', addBankNavigationLink);
