// នាំចូល (Import) មុខងារ និង Client ពី Zoom Video SDK 
import ZoomVideo from '@zoom/videosdk';

const client = ZoomVideo.createClient();

/**
 * មុខងារសម្រាប់ចាកចេញពីថ្នាក់រៀនអនឡាញ និងបិទឧបករណ៍ផ្សាយ
 */
async function leaveClassroom() {
    try {
        // ចាកចេញពី Session បច្ចុប្បន្ន
        await client.leave();
        console.log("បានចាកចេញពីថ្នាក់រៀនដោយជោគជ័យ។");
    } catch (error) {
        console.error("មានបញ្ហាក្នុងការចាកចេញពីថ្នាក់រៀន:", error);
    }
}

/**
 * មុខងារសម្រាប់ស្តាប់ និងចាប់យកព្រឹត្តិការណ៍ផ្សេងៗនៅក្នុងថ្នាក់រៀន (Event Listeners)
 * ដូចជា៖ មានសិស្សថ្មីចូលរួម, សិស្សចាកចេញ, ឬការបើក/បិទមីក្រូហ្វូន
 */
function setupClassroomEventListeners() {
    // ១. ចាប់ព្រឹត្តិការណ៍នៅពេលមានអ្នកចូលរួមថ្មី (User Joined)
    client.on('user-added', (payload) => {
        payload.forEach(user => {
            console.log(`👤 សិស្ស/គ្រូ ថ្មីបានចូលរួម៖ ${user.displayName}`);
        });
    });

    // ២. ចាប់ព្រឹត្តិការណ៍នៅពេលមានអ្នកចាកចេញ (User Left)
    client.on('user-removed', (payload) => {
        payload.forEach(user => {
            console.log(`🚶 សិស្ស/គ្រូ បានចាកចេញ៖ ${user.displayName}`);
        });
    });

    // ៣. ចាប់ព្រឹត្តិការណ៍នៅពេលមានការប្រែប្រួលស្ថានភាពវីដេអូ (Video Status Change)
    client.on('peer-video-state-change', (payload) => {
        console.log(`📹 ការផ្លាស់ប្តូរស្ថានភាពវីដេអូពីសមាជិក៖`, payload);
    });
}

// នាំចេញមុខងារដើម្បីយកទៅប្រើប្រាស់រួមគ្នាជាមួយ script5.js
export { leaveClassroom, setupClassroomEventListeners };
