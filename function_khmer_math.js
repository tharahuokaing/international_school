document.addEventListener("DOMContentLoaded", function () {
    // === ១. រៀបចំផ្នែកកម្មវិធីសិក្សាភាសាខ្មែរ (Khmer Section) ===
    const khmerSection = document.getElementById("curriculum-khmer");
    if (khmerSection) {
        const gridContainer = khmerSection.querySelector(".grid") || khmerSection.querySelector("div");
        if (gridContainer) {
            gridContainer.className = "primary-curriculum-grid";
            gridContainer.innerHTML = `
                <!-- កាតថ្នាក់ទី១-២ -->
                <div class="grade-card card-khmer-amber">
                    <div class="grade-icon">🎒</div>
                    <h4 class="grade-title">ថ្នាក់ទី១ និង ទី២</h4>
                    <p class="grade-desc">ពង្រឹងមូលដ្ឋានគ្រឹះអក្សរសាស្ត្រខ្មែរ ដំបូង និងជំនាញទំនាក់ទំនងជាមូលដ្ឋាន។</p>
                    <div class="grade-btn-wrapper">
                        <a href="https://elearning.moeys.gov.kh/k1/khmer/" class="grade-btn btn-amber">ថ្នាក់ទី១</a>
                        <a href="https://elearning.moeys.gov.kh/k2/khmer/" class="grade-btn btn-amber">ថ្នាក់ទី២</a>
                    </div>
                    <a href="#" class="view-details-link">🔽 មើលលម្អិត</a>
                </div>

                <!-- កាតថ្នាក់ទី៣-៤ -->
                <div class="grade-card card-khmer-blue">
                    <div class="grade-icon">📘</div>
                    <h4 class="grade-title">ថ្នាក់ទី៣ និង ទី៤</h4>
                    <p class="grade-desc">អភិវឌ្ឍការគិតពិចារណា ការសិក្សាភាសាបរទេសកម្រិតដំបូង និងវិទ្យាសាស្ត្រសង្គមផ្សេងៗ។</p>
                    <div class="grade-btn-wrapper">
                        <a href="https://elearning.moeys.gov.kh/k3/khmer/" class="grade-btn btn-blue">ថ្នាក់ទី៣</a>
                        <a href="https://elearning.moeys.gov.kh/k4/khmer/" class="grade-btn btn-blue">ថ្នាក់ទី៤</a>
                    </div>
                    <a href="#" class="view-details-link">🔽 មើលលម្អិត</a>
                </div>

                <!-- កាតថ្នាក់ទី៥-៦ -->
                <div class="grade-card card-khmer-indigo">
                    <div class="grade-icon">🎓</div>
                    <h4 class="grade-title">ថ្នាក់ទី៥ និង ទី៦</h4>
                    <p class="grade-desc">ត្រៀមលក្ខណៈសម្រាប់ការផ្លាស់ប្តូរទៅកាន់មធ្យមសិក្សា ជាមួយមេរៀនស៊ីជម្រៅ និងបច្ចេកវិទ្យា។</p>
                    <div class="grade-btn-wrapper">
                        <a href="https://elearning.moeys.gov.kh/k5/khmer/" class="grade-btn btn-indigo">ថ្នាក់ទី៥</a>
                        <a href="https://elearning.moeys.gov.kh/k6/khmer/" class="grade-btn btn-indigo">ថ្នាក់ទី៦</a>
                    </div>
                    <a href="#" class="view-details-link">🔽 មើលលម្អិត</a>
                </div>
            `;
        }
    }

    // === ២. រៀបចំផ្នែកកម្មវិធីសិក្សាគណិតវិទ្យា (Math Section) ===
    const mathSection = document.getElementById("curriculum");
    if (mathSection) {
        const gridContainer = mathSection.querySelector(".grid") || mathSection.querySelector("div");
        if (gridContainer) {
            gridContainer.className = "primary-curriculum-grid";
            gridContainer.innerHTML = `
                <!-- កាតថ្នាក់ទី១-២ -->
                <div class="grade-card card-math-amber">
                    <div class="grade-icon">🎒</div>
                    <h4 class="grade-title">ថ្នាក់ទី១ និង ទី២</h4>
                    <p class="grade-desc">ពង្រឹងមូលដ្ឋានគ្រឹះគណិតវិទ្យាដំបូង និងជំនាញទំនាក់ទំនងជាមូលដ្ឋាន។</p>
                    <div class="grade-btn-wrapper">
                        <a href="https://elearning.moeys.gov.kh/k1/maths/" class="grade-btn btn-amber">ថ្នាក់ទី១</a>
                        <a href="https://elearning.moeys.gov.kh/k2/maths/" class="grade-btn btn-amber">ថ្នាក់ទី២</a>
                    </div>
                    <a href="#" class="view-details-link">🔽 មើលលម្អិត</a>
                </div>

                <!-- កាតថ្នាក់ទី៣-៤ -->
                <div class="grade-card card-math-blue">
                    <div class="grade-icon">📘</div>
                    <h4 class="grade-title">ថ្នាក់ទី៣ និង ទី៤</h4>
                    <p class="grade-desc">អភិវឌ្ឍការគិតពិចារណា ការសិក្សាភាសាបរទេសកម្រិតដំបូង និងវិទ្យាសាស្ត្រសង្គមផ្សេងៗ។</p>
                    <div class="grade-btn-wrapper">
                        <a href="https://elearning.moeys.gov.kh/k3/maths/" class="grade-btn btn-blue">ថ្នាក់ទី៣</a>
                        <a href="https://elearning.moeys.gov.kh/k4/maths/" class="grade-btn btn-blue">ថ្នាក់ទី៤</a>
                    </div>
                    <a href="#" class="view-details-link">🔽 មើលលម្អិត</a>
                </div>

                <!-- កាតថ្នាក់ទី៥-៦ -->
                <div class="grade-card card-math-indigo">
                    <div class="grade-icon">🎓</div>
                    <h4 class="grade-title">ថ្នាក់ទី៥ និង ទី៦</h4>
                    <p class="grade-desc">ត្រៀមលក្ខណៈសម្រាប់ការផ្លាស់ប្តូរទៅកាន់មធ្យមសិក្សា ជាមួយមេរៀនស៊ីជម្រៅ និងបច្ចេកវិទ្យា។</p>
                    <div class="grade-btn-wrapper">
                        <a href="https://elearning.moeys.gov.kh/k5/maths/" class="grade-btn btn-indigo">ថ្នាក់ទី៥</a>
                        <a href="https://elearning.moeys.gov.kh/k6/maths/" class="grade-btn btn-indigo">ថ្នាក់ទី៦</a>
                    </div>
                    <a href="#" class="view-details-link">🔽 មើលលម្អិត</a>
                </div>
            `;
        }
    }
});
