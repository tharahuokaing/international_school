document.addEventListener("DOMContentLoaded", function() {
    
    // ១. បង្កើត Section ថ្មីសម្រាប់ព័ត៌មាននាយិកាសាលា
    const principalSection = document.createElement("section");
    principalSection.id = "principal-info";
    principalSection.className = "bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 mb-16";

    // ២. រៀបចំរចនាសម្ព័ន្ធមាតិកា (HTML Template)
    principalSection.innerHTML = `
        <div class="flex flex-col md:flex-row items-center gap-6">
            <!-- រូបតំណាង ឬ Profile (អាចប្តូរ src ទៅជាលីងរូបភាពពិតប្រាកដបាន) -->
            <div class="w-24 h-24 md:w-32 md:h-32 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center shadow-inner flex-shrink-0">
                <span class="text-3xl md:text-4xl">👩‍🏫</span>
            </div>
            
            <!-- ព័ត៌មានលម្អិត -->
            <div class="text-center md:text-left">
                <span class="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">គណៈគ្រប់គ្រងសាលា</span>
                <h3 class="text-xl font-bold text-gray-900 mt-2 mb-1">អ្នកគ្រូ ហង្ស សុីថា</h3>
                <p class="text-sm font-medium text-amber-600 mb-3">នាយិកាសាលា (School Principal)</p>
                <p class="text-sm text-gray-600 leading-relaxed">
                    "ស្វាគមន៍មកកាន់ HUOKAING THARA INTERNATIONAL SCHOOL សម្រាប់ការសិក្សាតាមប្រព័ន្ធអនឡាញ។ យើងប្ដេជ្ញាចិត្តយ៉ាងមុតមាំក្នុងការដឹកនាំ និងផ្តល់នូវការអប់រំប្រកបដោយគុណភាព វិន័យ និងគុណធម៌ខ្ពស់ ដើម្បីតម្រង់ទិសបុត្រធីតារបស់លោកអ្នកឱ្យក្លាយជាទំពាំងស្នងឫស្សីដ៏ល្អក្នុងសម័យឌីជីថល។"
                </p>
            </div>
        </div>
    `;

    // ៣. កំណត់ទីតាំងដាក់៖ ដាក់បញ្ចូលទៅក្នុង Main Content (មុនផ្នែកសេចក្តីជូនដំណឹង)
    const announcementSection = document.getElementById("announcement");
    if (announcementSection && announcementSection.parentNode) {
        announcementSection.parentNode.insertBefore(principalSection, announcementSection);
        console.log("script3.js: Principal info added successfully.");
    }
});
