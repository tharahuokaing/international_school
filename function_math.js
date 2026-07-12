document.addEventListener("DOMContentLoaded", function () {
    const curriculumSection = document.getElementById("curriculum");

    if (curriculumSection) {
        const heading = curriculumSection.querySelector("h3");

        if (heading) {
            const mathCourseSection = document.createElement("section");
            mathCourseSection.id = "math-pre-curriculum";
            mathCourseSection.className = "math-section-container";

            mathCourseSection.innerHTML = `
                <h3 class="math-main-heading">
                    <span class="math-heading-indicator"></span> 
                    វគ្គកម្មវិធីសិក្សាគណិតវិទ្យា (មុនកម្រិតបឋមសិក្សា)
                </h3>
                <div class="math-card">
                    <div class="math-card-icon">🔢</div>
                    <h4 class="math-card-title">ថ្នាក់ត្រៀមគណិតវិទ្យា</h4>
                    <p class="math-card-description">
                        រៀនស្គាល់លេខ ការរាប់ចំនួនជាមូលដ្ឋាន រូបធរណីមាត្រសាមញ្ញ និងការគណនាកម្រិតដំបូង ដើម្បីបង្កើនភាពជឿជាក់ និងត្រៀមខ្លួនរួចជាស្រេចមុនចូលរៀនថ្នាក់ទី១។
                    </p>
                    <div class="math-btn-wrapper">
                        <a href="https://elearning.moeys.gov.kh/" class="math-primary-btn">
                            ចូលរៀនថ្នាក់ត្រៀមគណិតវិទ្យា
                        </a>
                    </div>
                </div>
            `;

            heading.insertAdjacentElement('afterend', mathCourseSection);
        }
    }
});
