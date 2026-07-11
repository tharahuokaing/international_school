document.addEventListener("DOMContentLoaded", function() {
    
    // ១. បង្កើត Section ថ្មីសម្រាប់ព័ត៌មានទំនាក់ទំនង
    const contactSection = document.createElement("section");
    contactSection.id = "contact-info";
    contactSection.className = "bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-16";

    // ២. រៀបចំរចនាសម្ព័ន្ធមាតិកា (HTML Template)
    contactSection.innerHTML = `
        <h3 class="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <span class="w-2 h-6 bg-amber-500 rounded-full mr-3"></span>
            ព័ត៌មានទំនាក់ទំនង (Contact Information)
        </h3>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- លេខទូរស័ព្ទ -->
            <div class="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div class="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center text-xl mr-4 shadow-sm">
                    📞
                </div>
                <div>
                    <p class="text-xs text-gray-500 font-medium uppercase">លេខទូរស័ព្ទ / Phone</p>
                    <a href="tel:087204155" class="text-base font-bold text-gray-900 hover:text-blue-600 transition">087 204 155</a>
                </div>
            </div>

            <!-- អ៊ីមែល -->
            <div class="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xl mr-4 shadow-sm">
                    ✉️
                </div>
                <div>
                    <p class="text-xs text-gray-500 font-medium uppercase">អ៊ីមែល / Email</p>
                    <a href="mailto:tharahuokaing@gmail.com" class="text-base font-bold text-gray-900 hover:text-blue-600 transition">tharahuokaing@gmail.com</a>
                </div>
            </div>

            <!-- ហ្វេសប៊ុក (Facebook Page) -->
            <div class="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div class="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-xl mr-4 shadow-sm">
                    🌐
                </div>
                <div>
                    <p class="text-xs text-gray-500 font-medium uppercase">ហ្វេសប៊ុក / Facebook</p>
                    <a href="https://web.facebook.com/profile.php?id=61591794423722" target="_blank" rel="noopener noreferrer" class="text-base font-bold text-gray-900 hover:text-blue-600 transition">ហួកាំង ថារ៉ា (HUOKAING THARA INTERNATIONAL SCHOOL)</a>
                </div>
            </div>
        </div>
    `;

    // ៣. កំណត់ទីតាំងដាក់៖ ដាក់បញ្ចូលទៅក្នុង Main Content (ខាងក្រោមផ្នែកព័ត៌មាននាយិកាសាលា និងមុនផ្នែកសេចក្តីជូនដំណឹង)
    const announcementSection = document.getElementById("announcement");
    if (announcementSection && announcementSection.parentNode) {
        announcementSection.parentNode.insertBefore(contactSection, announcementSection);
        console.log("script4.js: Contact information added successfully.");
    }
});
