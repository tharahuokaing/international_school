document.addEventListener("DOMContentLoaded", function() {

    // ==========================================
    // មុខងារទី១: លាក់/បង្ហាញ ព័ត៌មានលម្អិតនៃកាតថ្នាក់សិក្សា
    // ==========================================
    const cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
        // បន្ថែមស្ទីលឱ្យដឹងថាអាចចុចបាន (Cursor pointer)
        card.style.cursor = "pointer";
        
        // ទាញយកធាតុ Paragraph (មាតិកាពណ៌នា) នៅក្នុងកាតនីមួយៗ
        const description = card.querySelector("p");
        
        // បង្កើតប៊ូតុង "មើលបន្ថែម" ដាក់ចូលទៅក្នុងកាត
        const toggleBtn = document.createElement("button");
        toggleBtn.innerText = " 🔽 មើលលម្អិត";
        toggleBtn.className = "text-xs font-bold text-blue-600 mt-3 block focus:outline-none";
        card.appendChild(toggleBtn);

        // កំណត់ស្ថានភាពដំបូង៖ លាក់សិន (Optional - បើចង់ឱ្យលាក់ពីដំបូង)
        // description.style.display = "none"; 

        card.addEventListener("click", function(e) {
            // ការពារមិនឱ្យជាន់គ្នាជាមួយការចុចប៊ូតុងផ្ទាល់
            if (description.style.display === "none") {
                description.style.display = "block";
                toggleBtn.innerText = " 🔼 លាក់វិញ";
                card.classList.add("bg-blue-50/50");
            } else {
                description.style.display = "none";
                toggleBtn.innerText = " 🔽 មើលលម្អិត";
                card.classList.remove("bg-blue-50/50");
            }
        });
    });


    // ==========================================
    // មុខងារទី២: បង្កើតប៊ូតុង "ត្រឡប់ទៅខាងលើ" (Back to Top)
    // ==========================================
    const backToTopBtn = document.createElement("button");
    backToTopBtn.innerHTML = "↑";
    // ដាក់ស្ទីលសោភ័ណភាពដោយប្រើ Tailwind CSS
    backToTopBtn.className = "fixed bottom-6 right-6 bg-blue-900 text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center font-bold text-lg opacity-0 transition-opacity duration-300 z-50 hover:bg-amber-500 hover:text-blue-950";
    document.body.appendChild(backToTopBtn);

    // ពិនិត្យមើលសកម្មភាព Scroll របស់អេក្រង់
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            // បង្ហាញប៊ូតុងមកវិញពេល Scroll ចុះក្រោមលើសពី 300px
            backToTopBtn.classList.remove("opacity-0", "pointer-events-none");
            backToTopBtn.classList.add("opacity-100");
        } else {
            // លាក់ប៊ូតុងវិញពេលនៅផ្នែកខាងលើ
            backToTopBtn.classList.remove("opacity-100");
            backToTopBtn.classList.add("opacity-0", "pointer-events-none");
        }
    });

    // ពេលចុចលើប៊ូតុង ឱ្យរមៀលទៅខាងលើបង្អស់ដោយរលូន
    backToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    console.log("script2.js: Additional interactive features loaded.");
});
