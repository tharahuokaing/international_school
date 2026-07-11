// នាំចូល (Import) ម៉ូឌុល និង Client ពី Zoom Video SDK
import ZoomVideo from '@zoom/videosdk';

const client = ZoomVideo.createClient();

/**
 * មុខងារសម្រាប់បង្ហាញវីដេអូរបស់អ្នកចូលរួម (Render Participant Video)
 * @param {Object} user - ព័ត៌មានរបស់អ្នកប្រើប្រាស់ (User Object) ដែលបានមកពី Event 'user-added' ឬ 'peer-video-state-change'
 * @param {HTMLCanvasElement} canvasElement - ធាតុ Canvas នៅក្នុង HTML សម្រាប់បង្ហាញរូបភាពវីដេអូ
 */
async function renderParticipantVideo(user, canvasElement) {
    try {
        const mediaStream = client.getMediaStream();

        // 1. ពិនិត្យមើលថាតើអ្នកប្រើប្រាស់នោះបានបើកកាមេរ៉ាដែរឬទេ
        if (user.bVideoOn) {
            // 2. ហៅមុខងារ Render វីដេអូទៅលើ Canvas ដែលបានកំណត់
            // កំណត់ទំហំបង្ហាញ (ឧទាហរណ៍៖ ទម្រង់ច្បាស់ 720p ក្នុងទំហំ 1280x720)
            await mediaStream.renderVideo(canvasElement, user.userId, 1280, 720, 0, 0, 3);
            console.log(`📹 កំពុងបង្ហាញវីដេអូរបស់៖ ${user.displayName}`);
        } else {
            console.log(`🚫 ${user.displayName} មិនបានបើកកាមេរ៉ានោះទេ។`);
        }
    } catch (error) {
        console.error("មានបញ្ហាក្នុងការ Render វីដេអូ៖", error);
    }
}

/**
 * មុខងារសម្រាប់បញ្ឈប់ការបង្ហាញវីដេអូ (Stop Rendering Video)
 * @param {HTMLCanvasElement} canvasElement - ធាតុ Canvas ដែលកំពុងបង្ហាញវីដេអូ
 * @param {string} userId - លេខសម្គាល់របស់អ្នកប្រើប្រាស់ (User ID)
 */
async function stopParticipantVideo(canvasElement, userId) {
    try {
        const mediaStream = client.getMediaStream();
        await mediaStream.stopVideo(canvasElement, userId);
        console.log(`🛑 បានបញ្ឈប់ការបង្ហាញវីដេអូសម្រាប់ User ID: ${userId}`);
    } catch (error) {
        console.error("មានបញ្ហាក្នុងការបញ្ឈប់វីដេអូ៖", error);
    }
}

export { renderParticipantVideo, stopParticipantVideo };
