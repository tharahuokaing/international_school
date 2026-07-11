នេះជាខ្លឹមសារសម្រាប់ឯកសារ `README.md` ពេញលេញ ដែលរៀបរាប់ពីគម្រោងគេហទំព័ររបស់ **HUOKAING THARA INTERNATIONAL School** រួមទាំងការបញ្ជាក់ពីមុខងារនៃរាល់ឯកសារ JavaScript (`script1.js` ដល់ `script10.js`) ដែលបានបង្កើត ដើម្បីងាយស្រួលយល់ពីទម្រង់ការងារ៖

### `README.md`

```markdown
# HUOKAING THARA INTERNATIONAL School - E-Learning Platform

គេហទំព័រផ្លូវការសម្រាប់កម្មវិធីសិក្សាតាមប្រព័ន្ធអនឡាញ ចាប់ពីថ្នាក់ទី១ ដល់ថ្នាក់ទី៦ របស់សាលាអន្តរជាតិ ហួរកៃ ថារ៉ា (HUOKAING THARA INTERNATIONAL School) ដោយអនុលោមតាមស្តង់ដារបច្ចេកទេស និងការណែនាំរបស់ក្រសួងអប់រំ យុវជន និងកីឡា។

## 🌐 គេហទំព័រផ្សាយផ្ទាល់ (Live Demo)
អាចចូលមើលទំព័រគំរូបានតាមរយៈ៖ [tharahuokaing.github.io/international_school](https://tharahuokaing.github.io/international_school)

## 📁 រចនាសម្ព័ន្ធឯកសារ (Project Structure)
គម្រោងនេះត្រូវបានរៀបចំឡើងដោយបំបែកដាច់ពីគ្នាដើម្បីងាយស្រួលគ្រប់គ្រង (Modular Structure)៖

```text
international_school/
├── index.html       # ទម្រង់រចនាសម្ព័ន្ធមាតិកាដើម (HTML5 & Tailwind CSS)
├── style.css        # ស្ទីលបន្ថែម ចលនា (Animations) និងការកំណត់ Font ខ្មែរ
├── script.js        # មុខងារមូលដ្ឋាន (Smooth Scroll & Nav Active State)
├── script1.js       # មុខងារចុចលើ "សេចក្តីជូនដំណឹង" រួចបង្ហាញ/Highlight កម្មវិធីសិក្សា
├── script2.js       # មុខងារលាក់/បង្ហាញព័ត៌មានកាត និងប៊ូតុង Back to Top
├── script3.js       # មុខងារបញ្ចូលព័ត៌មាន និងប្រសាសន៍នាយិកាសាលា (អ្នកគ្រូ ហង្ស សុីថា)
├── script4.js       # មុខងារបញ្ចូលព័ត៌មានទំនាក់ទំនង (Gmail & លេខទូរស័ព្ទ)
├── script5.js       # [Zoom SDK] មុខងារចាប់ផ្តើម និងចូលរួមថ្នាក់រៀន (Join Classroom)
├── script6.js       # [Zoom SDK] មុខងារចាកចេញ និងចាប់ព្រឹត្តិការណ៍សិស្សចូលរួម (Event Listeners)
├── script7.js       # [Zoom SDK] មុខងារគ្រប់គ្រង និងបង្ហាញផ្ទៃវីដេអូ (Video Rendering Canvas)
├── script8.js       # [Zoom SDK] មុខងារភ្ជាប់ប្រព័ន្ធសំឡេង និងបិទ/បើកមីក្រូហ្វូន (Audio & Mute)
├── script9.js       # [Zoom SDK] មុខងារប្រព័ន្ធឆាតផ្ញើសារក្នុងថ្នាក់រៀន (In-Class Chat)
└── script10.js      # [Zoom SDK] មុខងារចែករំលែកអេក្រង់បង្រៀន (Screen Sharing)

```

## 🚀 មុខងារសំខាន់ៗ (Key Features)

1. **Responsive Design:** បង្ហាញរូបរាងស្អាត និងច្បាស់ល្អទាំងនៅលើកុំព្យូទ័រ ថេប្លេត និងទូរស័ព្ទដៃ ដោយប្រើប្រាស់ Tailwind CSS។
2. **Interactive UI:** មានប៊ូតុងជំនួយការរមៀលអេក្រង់ (Smooth Scrolling), ការពង្រីកមើលព័ត៌មានលម្អិត, និងចលនាទាក់ទាញ (Animations)។
3. **Dynamic Injector:** ប្រើប្រាស់ JavaScript ដើម្បីបញ្ចូលផ្នែកសំខាន់ៗ (ព័ត៌មាននាយិកា, ព័ត៌មានទំនាក់ទំនង) ទៅក្នុងទំព័រដើមដោយស្វ័យប្រវត្តិ។
4. **Zoom Video SDK Integration:** ប្រព័ន្ធថ្នាក់រៀនអនឡាញកម្រិតខ្ពស់ ដែលគាំទ្រការផ្សាយវីដេអូ សំឡេង ការចែករំលែកអេក្រង់បង្រៀន និងប្រព័ន្ធឆាតសួរដេញដោល។

## 🛠️ របៀបដំឡើង និងដំណើរការ (Setup & Installation)

1. ទាញយក (Clone) គម្រោងនេះទៅកាន់ម៉ាស៊ីនរបស់អ្នក៖
```bash
git clone [https://github.com/tharahuokaing/international_school.git](https://github.com/tharahuokaing/international_school.git)

```


2. បើកទៅកាន់ថតគម្រោង៖
```bash
cd international_school

```


3. បើកឯកសារ `index.html` ជាមួយកម្មវិធីរុករក (Web Browser) ណាមួយជាការស្រេច។

*ចំណាំ៖ សម្រាប់រាល់ឯកសារ `script5.js` ដល់ `script10.js` ដែលប្រើប្រាស់ Zoom Video SDK គឺត្រូវការដំឡើងកញ្ចប់ `@zoom/videosdk` តាមរយៈ npm នៅក្នុងបរិស្ថានអភិវឌ្ឍន៍ (Development Environment) របស់អ្នក។*

## 📝 អាជ្ញាប័ណ្ណ (License)

គម្រោងនេះស្ថិតក្រោមអាជ្ញាប័ណ្ណ **MIT License**។

```

```
