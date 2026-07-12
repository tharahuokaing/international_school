/**
 * script.js
 * Automatically populates the Zoom Meeting ID and attempts to join the meeting.
 * Target URL: https://zoom.us/join
 */

/**
 * Joins a Zoom meeting by injecting the meeting ID into the input field
 * and clicking the join button.
 * 
 * @param {string} meetingId - The Zoom Meeting ID or Personal Link Name.
 */
function joinZoomMeeting(meetingId) {
    if (!meetingId) {
        console.error("Zoom Join Error: Meeting ID is required.");
        return;
    }

    // 1. Locate the input field for the Meeting ID
    // The input uses 'join-confno' as its id attribute on Zoom's join page
    const idInput = document.getElementById('join-confno') || document.querySelector('input[type="text"]');
    
    // 2. Locate the Join button
    // The button typically uses 'btnSubmit' or is the primary action button
    const joinButton = document.getElementById('btnSubmit') || document.querySelector('.btn-join') || document.querySelector('button[type="submit"]');

    if (!idInput) {
        console.error("Zoom Join Error: Could not find the Meeting ID input field on this page.");
        return;
    }

    // 3. Populate the meeting ID
    idInput.value = meetingId;

    // Trigger input events so the page's internal framework (like React/Vue) registers the change
    idInput.dispatchEvent(new Event('input', { bubbles: true }));
    idInput.dispatchEvent(new Event('change', { bubbles: true }));

    console.log(`Meeting ID "${meetingId}" inserted successfully.`);

    // 4. Trigger the click event to join
    if (joinButton) {
        // Optional: Small delay to ensure framework updates before clicking
        setTimeout(() => {
            joinButton.click();
            console.log("Join button clicked automatically.");
        }, 100);
    } else {
        // Fallback: Try submitting the parent form if the button isn't found directly
        const form = idInput.closest('form');
        if (form) {
            form.submit();
            console.log("Form submitted automatically.");
        } else {
            console.warn("Zoom Join Warning: Could not find the Join button or form to click automatically. Please click 'Join' manually.");
        }
    }
}

// --- Example Usage ---
// Uncomment the line below to test it in your console on https://zoom.us/join
// joinZoomMeeting("123 456 7890");
