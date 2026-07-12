/**
 * script.js
 * Automation script to join a Zoom meeting via https://zoom.us/join
 * Prerequisites: Run `npm install puppeteer` before executing.
 */

const puppeteer = require('puppeteer');

// Configuration
const ZOOM_JOIN_URL = 'https://zoom.us/join';
const MEETING_ID = '123 456 7890'; // Replace with your actual Meeting ID or Personal Link Name

async function joinZoomMeeting() {
    // Launch the browser in non-headless mode so you can see the action
    const browser = await puppeteer.launch({
        headless: false, 
        defaultViewport: null,
        args: ['--start-maximized']
    });

    try {
        const page = await browser.newPage();
        
        console.log(`Navigating to ${ZOOM_JOIN_URL}...`);
        await page.goto(ZOOM_JOIN_URL, { waitUntil: 'domcontentloaded' });

        // Wait for the Meeting ID input field to appear
        const inputSelector = '#join-confno';
        await page.waitForSelector(inputSelector, { visible: true });

        console.log(`Entering Meeting ID: ${MEETING_ID}`);
        // Focus and type the meeting ID into the input field
        await page.click(inputSelector);
        await page.type(inputSelector, MEETING_ID, { delay: 100 }); // slight delay simulates real typing

        // Wait for the Join button to become active/clickable
        const btnSelector = '#btnSubmit';
        await page.waitForSelector(btnSelector, { visible: true });

        console.log('Clicking the Join button...');
        // Click the join button and wait for navigation/protocol prompt to trigger
        await Promise.all([
            page.click(btnSelector),
            page.waitForNavigation({ waitUntil: 'networkidle2' }).catch(() => {
                // Zoom often triggers a protocol handler prompt (zoommtg://), 
                // which might halt standard HTTP navigation tracking. Catching error gracefully.
                console.log('Navigation triggered or Zoom app protocol prompt launched.');
            })
        ]);

        console.log('Successfully processed join request.');

    } catch (error) {
        console.error('An error occurred during execution:', error);
    } finally {
        // Optional: Keep the browser open for a few seconds to verify, then close
        setTimeout(async () => {
            // await browser.close(); 
        }, 5000);
    }
}

// Execute the function
joinZoomMeeting();
