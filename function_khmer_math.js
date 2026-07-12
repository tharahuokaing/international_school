document.addEventListener("DOMContentLoaded", function () {
    // === ១. រៀបចំផ្នែកកម្មវិធីសិក្សាភាសាខ្មែរ (Khmer Section) ===
    const khmerSection = document.getElementById("curriculum-khmer");
    if (khmerSection) {
        const gridContainer = khmerSection.querySelector(".grid") || khmerSection.querySelector("div");
        if (gridContainer) {
            gridContainer.className = "grid grid-cols-1 md:grid-cols-3 gap-6 mt-6";
            gridContainer.innerHTML = `
                <!-- កាតថ្នាក់ទី១-២ -->
                <div class="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition">
                    <div class="text-3xl mb-3">🎒</div>
                    <h4 class="text-lg font-bold text-gray-900 mb-2">ថ្នាក់ទី១ និង ទី២</h4>
                    <p class="text-sm text-gray-600 mb-4">ពង្រឹងមូលដ្ឋានគ្រឹះអក្សរសាស្ត្រខ្មែរ ដំបូង និងជំនាញទំនាក់ទំនងជាមូលដ្ឋាន។</p>
                    <div class="flex gap-3 mb-3">
                        <a href="https://elearning.moeys.gov.kh/k1/khmer/" class="flex-1 text-center bg-amber-400 hover:bg-amber-500 text-blue-950 font-semibold py-2 px-4 rounded transition text-sm">ថ្នាក់ទី១</a>
                        <a href="https://elearning.moeys.gov.kh/k2/khmer/" class="flex-1 text-center bg-amber-400 hover:bg-amber-500 text-blue-950 font-semibold py-2 px-4 rounded transition text-sm">ថ្នាក់ទី២</a>
                    </div>
                    <a href="#" class="text-xs text-blue-600 hover:underline block text-center">🔽 មើលលម្អិត</a>
                </div>

                <!-- កាតថ្នាក់ទី៣-៤ -->
                <div class="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition">
                    <div class="text-3xl mb-3">📘</div>
                    <h4 class="text-lg font-bold text-gray-900 mb-2">ថ្នាក់ទី៣ និង ទី៤</h4>
                    <p class="text-sm text-gray-600 mb-4">អភិវឌ្ឍការគិតពិចារណា ការសិក្សាភាសាបរទេសកម្រិតដំបូង និងវិទ្យាសាស្ត្រសង្គមផ្សេងៗ។</p>
                    <div class="flex gap-3 mb-3">
                        <a href="https://elearning.moeys.gov.kh/k3/khmer/" class="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition text-sm">ថ្នាក់ទី៣</a>
                        <a href="https://elearning.moeys.gov.kh/k4/khmer/" class="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition text-sm">ថ្នាក់ទី៤</a>
                    </div>
                    <a href="#" class="text-xs text-blue-600 hover:underline block text-center">🔽 មើលលម្អិត</a>
                </div>

                <!-- កាតថ្នាក់ទី៥-៦ -->
                <div class="bg-white rounded-2xl p-6 border border-indigo-100 shadow-sm hover:shadow-md transition">
                    <div class="text-3xl mb-3">🎓</div>
                    <h4 class="text-lg font-bold text-gray-900 mb-2">ថ្នាក់ទី៥ និង ទី៦</h4>
                    <p class="text-sm text-gray-600 mb-4">ត្រៀមលក្ខណៈសម្រាប់ការផ្លាស់ប្តូរទៅកាន់មធ្យមសិក្សា ជាមួយមេរៀនស៊ីជម្រៅ និងបច្ចេកវិទ្យា។</p>
                    <div class="flex gap-3 mb-3">
                        <a href="https://elearning.moeys.gov.kh/k5/khmer/" class="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition text-sm">ថ្នាក់ទី៥</a>
                        <a href="https://elearning.moeys.gov.kh/k6/khmer/" class="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition text-sm">ថ្នាក់ទី៦</a>
                    </div>
                    <a href="#" class="text-xs text-blue-600 hover:underline block text-center">🔽 មើលលម្អិត</a>
                </div>
            `;
        }
    }

    // === ២. រៀបចំផ្នែកកម្មវិធីសិក្សាគណិតវិទ្យា (Math Section) ===
    const mathSection = document.getElementById("curriculum");
    if (mathSection) {
        // ក. ស្វែងរក Tag <h3> (កម្មវិធីសិក្សាកម្រិតបឋមសិក្សាគណិតវិទ្យា) នៅក្នុង Section នោះ
        const heading = mathSection.querySelector("h3");
        if (heading) {
            // ខ. បង្កើត Section ថ្មីសម្រាប់វគ្គកម្មវិធីសិក្សាគណិតវិទ្យា (មុនកម្រិតបឋមសិក្សា)
            const mathCourseSection = document.createElement("section");
            mathCourseSection.id = "math-pre-curriculum";
            mathCourseSection.className = "bg-blue-50/50 rounded-2xl p-6 border border-blue-100 my-8";
            mathCourseSection.innerHTML = `
                <h4 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span class="w-2 h-7 bg-blue-600 rounded-full mr-3"></span>
                    វគ្គកម្មវិធីសិក្សាគណិតវិទ្យា (មុនកម្រិតបឋមសិក្សា)
                </h4>
                <div class="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div class="flex-1">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="text-2xl">🔢</span>
                            <h5 class="text-lg font-bold text-gray-900">ថ្នាក់ត្រៀមគណិតវិទ្យា</h5>
                        </div>
                        <p class="text-sm text-gray-600 leading-relaxed">
                            រៀនស្គាល់លេខ ការរាប់ចំនួនជាមូលដ្ឋាន រូបធរណីមាត្រសាមញ្ញ និងការគណនាកម្រិតដំបូង ដើម្បីបង្កើនភាពជឿជាក់ និងត្រៀមខ្លួនរួចជាស្រេចមុនចូលរៀនថ្នាក់ទី១។
                        </p>
                    </div>
                    <div class="w-full md:w-auto shrink-0">
                        <a href="https://elearning.moeys.gov.kh/course/search.php?context=2&q=%E1%9E%82%E1%9E%8E%E1%9E%B7%E1%9E%8F%E1%9E%9C%E1%9E%B7%E1%9E%91%E1%9F%92%E1%9E%99%E1%9E%B6" class="block text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition shadow-sm">
                            ចូលរៀនថ្នាក់ត្រៀមគណិតវិទ្យា
                        </a>
                    </div>
                </div>
            `;
            // គ. បញ្ចូល Section ថ្មីនេះ ទៅខាងក្រោយ (បន្ទាប់ពី) Tag <h3> នៃកម្មវិធីសិក្សាគណិតវិទ្យា
            heading.insertAdjacentElement('afterend', mathCourseSection);
        }

        // ឃ. រៀបចំក្រឡាចត្រង្គថ្នាក់ទី១-៦ គណិតវិទ្យា
        const gridContainer = mathSection.querySelector(".grid") || mathSection.querySelector("div");
        if (gridContainer) {
            gridContainer.className = "grid grid-cols-1 md:grid-cols-3 gap-6 mt-6";
            gridContainer.innerHTML = `
                <!-- កាតថ្នាក់ទី១-២ -->
                <div class="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm hover:shadow-md transition">
                    <div class="text-3xl mb-3">🎒</div>
                    <h4 class="text-lg font-bold text-gray-900 mb-2">ថ្នាក់ទី១ និង ទី២</h4>
                    <p class="text-sm text-gray-600 mb-4">ពង្រឹងមូលដ្ឋានគ្រឹះគណិតវិទ្យាដំបូង និងជំនាញទំនាក់ទំនងជាមូលដ្ឋាន។</p>
                    <div class="flex gap-3 mb-3">
                        <a href="https://elearning.moeys.gov.kh/k1/maths/" class="flex-1 text-center bg-amber-400 hover:bg-amber-500 text-blue-950 font-semibold py-2 px-4 rounded transition text-sm">ថ្នាក់ទី១</a>
                        <a href="https://elearning.moeys.gov.kh/k2/maths/" class="flex-1 text-center bg-amber-400 hover:bg-amber-500 text-blue-950 font-semibold py-2 px-4 rounded transition text-sm">ថ្នាក់ទី២</a>
                    </div>
                    <a href="#" class="text-xs text-blue-600 hover:underline block text-center">🔽 មើលលម្អិត</a>
                </div>

                <!-- កាតថ្នាក់ទី៣-៤ -->
                <div class="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-md transition">
                    <div class="text-3xl mb-3">📘</div>
                    <h4 class="text-lg font-bold text-gray-900 mb-2">ថ្នាក់ទី៣ និង ទី៤</h4>
                    <p class="text-sm text-gray-600 mb-4">អភិវឌ្ឍការគិតពិចារណា ការសិក្សាភាសាបរទេសកម្រិតដំបូង និងវិទ្យាសាស្ត្រសង្គមផ្សេងៗ。</p>
                    <div class="flex gap-3 mb-3">
                        <a href="https://elearning.moeys.gov.kh/k3/maths/" class="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition text-sm">ថ្នាក់ទី៣</a>
                        <a href="https://elearning.moeys.gov.kh/k4/maths/" class="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition text-sm">ថ្នាក់ទី៤</a>
                    </div>
                    <a href="#" class="text-xs text-blue-600 hover:underline block text-center">🔽 មើលលម្អិត</a>
                </div>

                <!-- កាតថ្នាក់ទី៥-៦ -->
                <div class="bg-white rounded-2xl p-6 border border-indigo-100 shadow-sm hover:shadow-md transition">
                    <div class="text-3xl mb-3">🎓</div>
                    <h4 class="text-lg font-bold text-gray-900 mb-2">ថ្នាក់ទី៥ និង ទី៦</h4>
                    <p class="text-sm text-gray-600 mb-4">ត្រៀមលក្ខណៈសម្រាប់ការផ្លាស់ប្តូរទៅកាន់មធ្យមសិក្សា ជាមួយមេរៀនស៊ីជម្រៅ និងបច្ចេកវិទ្យា។</p>
                    <div class="flex gap-3 mb-3">
                        <a href="https://elearning.moeys.gov.kh/k5/maths/" class="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition text-sm">ថ្នាក់ទី៥</a>
                        <a href="https://elearning.moeys.gov.kh/k6/maths/" class="flex-1 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition text-sm">ថ្នាក់ទី៦</a>
                    </div>
                    <a href="#" class="text-xs text-blue-600 hover:underline block text-center">🔽 មើលលម្អិត</a>
                </div>
            `;
        }
    }
});
