document.addEventListener("DOMContentLoaded", function() {
    
    // ១. កំណត់មុខងារ Smooth Scroll សម្រាប់ប៊ូតុង "ស្វែងយល់ពីថ្នាក់រៀន"
    const exploreBtn = document.getElementById("exploreBtn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", function() {
            const curriculumSection = document.getElementById("curriculum");
            if (curriculumSection) {
                curriculumSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    // ២. បន្ថែម Active State ងាយស្រួលមើលនៅលើ Navigation links (Optional)
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(item => item.classList.remove("text-amber-400"));
            this.classList.add("text-amber-400");
        });
    });

    console.log("HUOKAING THARA INTERNATIONAL School platform initialized successfully.");
});
