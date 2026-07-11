document.addEventListener("DOMContentLoaded", function() {
    
    // ១. ទាញយក Element សំខាន់ៗមកប្រើប្រាស់
    const announcementLink = document.querySelector('a[href="#announcement"]');
    const curriculumSection = document.getElementById("curriculum");
    const cards = document.querySelectorAll(".card");

    // ២. បង្កើតមុខងារពិសេសពេលចុចលើ "សេចក្តីជូនដំណឹង"
    if (announcementLink && curriculumSection) {
        announcementLink.addEventListener("click", function(event) {
            // ការពារកុំឱ្យវាលោត (Jump) ទៅចុះក្រោមភ្លាមៗពេក
            event.preventDefault(); 
            
            // រមៀលអេក្រង់ទៅកាន់ផ្នែកសេចក្តីជូនដំណឹងដោយរលូន (Smooth Scroll)
            const announcementSection = document.getElementById("announcement");
            if (announcementSection) {
                announcementSection.scrollIntoView({ behavior: "smooth" });
            }

            // បន្ថែម Effect highlight ឬបង្ហាញកម្មវិធីសិក្សាឱ្យកាន់តែច្បាស់
            // ប្តូរពណ៌ផ្ទៃខាងក្រោយ ឬបន្ថែមការរំញ័រ (Highlight Animation) ទៅលើកាតកម្មវិធីសិក្សា
            cards.forEach((card, index) => {
                setTimeout(() => {
                    // បន្ថែមថ្នាក់ CSS របស់ Tailwind ដើម្បីឱ្យមានចលនាទាក់ទាញ
                    card.classList.add("ring-4", "ring-amber-400", "scale-105");
                    
                    // ដក Effect នោះចេញវិញក្រោយពេល ១.៥ វិនាទី
                    setTimeout(() => {
                        card.classList.remove("ring-4", "ring-amber-400", "scale-105");
                    }, 1500);
                }, index * 200); // ឱ្យវាបង្ហាញចលនាម្តងមួយៗដេញគ្នា (Staggered Effect)
            });
        });
    }

    // ៣. មុខងារសម្រាប់ប៊ូតុង "ស្វែងយល់ពីថ្នាក់រៀន" (រក្សាទុកដដែល)
    const exploreBtn = document.getElementById("exploreBtn");
    if (exploreBtn && curriculumSection) {
        exploreBtn.addEventListener("click", function() {
            curriculumSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});
