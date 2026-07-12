document.addEventListener("DOMContentLoaded", function () {
    // ១. ស្វែងរក Section កម្មវិធីសិក្សាកម្រិតបឋមសិក្សាដែលមានស្រាប់ (តាមរយៈ ID #curriculum)
    const curriculumSection = document.getElementById("curriculum");

    if (curriculumSection) {
        // ២. បង្កើត Section ថ្មីសម្រាប់វគ្គកម្មវិធីសិក្សាភាសាខ្មែរ
        const khmerCourseSection = document.createElement("section");
        khmerCourseSection.id = "khmer-pre-curriculum";
        khmerCourseSection.className = "mb-16";

        // ៣. បន្ថែមមាតិកា (HTML Content) ទៅក្នុង Section ថ្មីនោះ
        khmerCourseSection.innerHTML = `
            <h3 class="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span class="w-2 h-7 bg-amber-500 rounded-full mr-3"></span> 
                វគ្គកម្មវិធីសិក្សាភាសាខ្មែរ (មុនកម្រិតបឋមសិក្សា)
            </h3>
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition duration-300 hover:shadow-md">
                <div class="text-3xl mb-4">📖</div>
                <h4 class="text-lg font-bold text-gray-900 mb-3">ថ្នាក់ត្រៀមភាសាខ្មែរ</h4>
                <p class="text-sm text-gray-600 leading-relaxed mb-4">
                    ពង្រឹងមូលដ្ឋានគ្រឹះនៃការអាន ការសរសេរតួអក្សរ និងការបញ្ចេញសំឡេងព្យញ្ជនៈ ស្រៈ ឱ្យបានត្រឹមត្រូវ មុននឹងឈានចូលសិក្សាកម្រិតបឋមសិក្សា។
                </p>
                <div class="flex flex-wrap gap-2">
                    <a href="https://elearning.moeys.gov.kh/" class="inline-block bg-amber-600/40 text-amber-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider transition-all duration-200 shadow-inner">
                        ចូលរៀនថ្នាក់ត្រៀម
                    </a>
                </div>
            </div>
        `;

        // ៤. បញ្ចូល Section ថ្មីនេះ ទៅខាងមុខ (មុន) Section #curriculum
        curriculumSection.parentNode.insertBefore(khmerCourseSection, curriculumSection);
    }
});
