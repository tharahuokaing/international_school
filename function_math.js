document.addEventListener("DOMContentLoaded", function () {
    // ១. ស្វែងរក Section កម្មវិធីសិក្សាកម្រិតបឋមសិក្សាដែលមានស្រាប់
    const curriculumSection = document.getElementById("curriculum");

    if (curriculumSection) {
        // ២. ស្វែងរក Tag <h3> (កម្មវិធីសិក្សាកម្រិតបឋមសិក្សាគណិតវិទ្យា) ដែលនៅក្នុង Section នោះ
        const heading = curriculumSection.querySelector("h3");

        if (heading) {
            // ៣. បង្កើត Section ថ្មីសម្រាប់វគ្គកម្មវិធីសិក្សាគណិតវិទ្យា
            const mathCourseSection = document.createElement("section");
            mathCourseSection.id = "math-pre-curriculum";
            mathCourseSection.className = "mb-16";

            // ៤. បន្ថែមមាតិកា (HTML Content) សម្រាប់ថ្នាក់ត្រៀមគណិតវិទ្យា
            mathCourseSection.innerHTML = `
                <h3 class="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                    <span class="w-2 h-7 bg-emerald-500 rounded-full mr-3"></span> 
                    វគ្គកម្មវិធីសិក្សាគណិតវិទ្យា (មុនកម្រិតបឋមសិក្សា)
                </h3>
                <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition duration-300 hover:shadow-md">
                    <div class="text-3xl mb-4">🔢</div>
                    <h4 class="text-lg font-bold text-gray-900 mb-3">ថ្នាក់ត្រៀមគណិតវិទ្យា</h4>
                    <p class="text-sm text-gray-600 leading-relaxed mb-4">
                        រៀនស្គាល់លេខ ការរាប់ចំនួនជាមូលដ្ឋាន រូបធរណីមាត្រសាមញ្ញ និងការគណនាកម្រិតដំបូង ដើម្បីបង្កើនភាពជឿជាក់ និងត្រៀមខ្លួនរួចជាស្រេចមុនចូលរៀនថ្នាក់ទី១។
                    </p>
                    <div class="flex flex-wrap gap-2">
                        <a href="https://elearning.moeys.gov.kh/course/search.php?q=%E1%9E%82%E1%9E%8E%E1%9E%B7%E1%9E%8F%E1%9E%9C%E1%9E%B7%E1%9E%91%E1%9F%92%E1%9E%99%E1%9E%B6&areaids=core_course-course" class="inline-block bg-emerald-600/40 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider transition-all duration-200 shadow-inner">
                            ចូលរៀនថ្នាក់ត្រៀមគណិតវិទ្យា
                        </a>
                    </div>
                </div>
            `;

            // ៥. បញ្ចូល Section ថ្មីនេះ ទៅខាងក្រោយ (បន្ទាប់ពី) Tag <h3> នោះតែម្តង
            heading.insertAdjacentElement('afterend', mathCourseSection);
        }
    }
});
