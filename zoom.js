document.getElementById('joinBtn').addEventListener('click', function(e) {
    e.preventDefault(); // Stop the default anchor behavior
    
    const meetingIdInput = document.getElementById('meetingIdInput').value.trim();
    
    // Remove any spaces the user might have typed (e.g., "123 456 7890" -> "1234567890")
    const cleanMeetingId = meetingIdInput.replace(/\s+/g, '');

    if (!cleanMeetingId) {
        alert('Please enter a valid Meeting ID.');
        return;
    }

    // Using Zoom's official universal web link structure:
    // When opened on a phone, Zoom's landing page automatically triggers the app deep link.
    // If the app is missing, the page offers a direct button to the Google Play Store / App Store.
    const zoomUrl = `https://zoom.us/j/${cleanMeetingId}`;
    
    // Redirect the browser to Zoom's gateway
    window.location.href = zoomUrl;
});
