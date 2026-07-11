// នាំចូល (Import) ម៉ូឌុល និង Client ពី Zoom Video SDK
import ZoomVideo from '@zoom/videosdk';

const client = ZoomVideo.createClient();
let chatClient;

/**
 * មុខងារសម្រាប់ចាប់ផ្តើមប្រព័ន្ធឆាត (Initialize Chat Service)
 */
function initChatService() {
    try {
        // ទាញយក Chat Client ពី Zoom Session
        chatClient = client.getChatClient();
        console.log("💬 ប្រព័ន្ធផ្ញើសារក្នុងថ្នាក់រៀនត្រូវបានបើកដំណើរការ។");
        
        // ចាប់ផ្តើមស្តាប់រាល់សារដែលហូរចូល (Listen for incoming messages)
        setupChatEventListener();
    } catch (error) {
        console.error("មានបញ្ហាក្នុងការចាប់ផ្តើមប្រព័ន្ធឆាត៖", error);
    }
}

/**
 * មុខងារសម្រាប់ផ្ញើសារទៅកាន់គ្រប់គ្នាក្នុងថ្នាក់ (Send Message to Everyone)
 * @param {string} text - អត្ថបទសារដែលត្រូវផ្ញើ
 */
async function sendGroupMessage(text) {
    try {
        if (chatClient) {
            await chatClient.sendToAll(text);
            console.log(`📤 បានផ្ញើសារ៖ ${text}`);
        }
    } catch (error) {
        console.error("មិនអាចផ្ញើសារបាន៖", error);
    }
}

/**
 * មុខងារសម្រាប់ស្តាប់ និងចាប់យកសារថ្មីៗដែលផ្ញើចូលមក
 */
function setupChatEventListener() {
    if (client) {
        client.on('chat-on-message', (payload) => {
            console.log(`📥 សារថ្មីពី [${payload.sender.displayName}]: ${payload.message}`);
            // ត្រង់នេះអ្នកអាចសរសេរកូដបន្ថែមដើម្បីបង្ហាញសារទៅលើអេក្រង់ HTML UI បាន
        });
    }
}

export { initChatService, sendGroupMessage };
