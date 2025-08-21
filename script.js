(function() {
  const menuDropdown = document.getElementById('menuDropdown');
  const phoneDropdown = document.getElementById('phoneDropdown');
  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');

  // Hamburger toggle
  document.getElementById('hamburger').addEventListener('click', () => {
    menuDropdown.classList.toggle('open');
    phoneDropdown.classList.remove('open');
  });

  // Phone dropdown toggle
  document.getElementById('phoneBtn').addEventListener('click', () => {
    phoneDropdown.classList.toggle('open');
    menuDropdown.classList.remove('open');
  });

  // Close dropdowns on outside click
  window.addEventListener('click', e => {
    if (!e.target.closest('#hamburger') && !e.target.closest('#menuDropdown')) menuDropdown.classList.remove('open');
    if (!e.target.closest('#phoneBtn') && !e.target.closest('#phoneDropdown')) phoneDropdown.classList.remove('open');
    if (!e.target.closest('.lang-dropdown')) langMenu.classList.remove('open');
  });

  // Language dropdown
  langBtn.addEventListener('click', () => langMenu.classList.toggle('open'));
  langMenu.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
      const selectedLang = li.getAttribute('data-lang');
      langBtn.textContent = li.textContent.split(' ')[0]; // keep emoji/flag
      langMenu.classList.remove('open');
      loadLanguage(selectedLang);

      // Save selected language
      localStorage.setItem('selectedLang', selectedLang);
    });
  });



  // Translation data embedded
  const translations = {
    eng: {
      "first_steps": "First Steps",
  "survey": "Survey",
  "knowledge_base": "Knowledge Base",
  "help": "Help",
  "welcome": "Welcome to the app for foreigners",
  "faq": "FAQ",
  "assistant_placeholder": "How can I help you? (write or ask a question)",
    "police": "Police", "number": "997",
    "cityHall": "City Hall", "number": "24 367 15 00",
    "municipalPolice": "Municipal Police", "number": "24 367 15 86",
    "immigrantsCenter": "Center for Immigrants", "number": "24 367 16 50",



  "quick_questionnaire_title": "Quick questionnaire",
  "question_foreigner": "Are you a foreigner?",
  "answer_yes": "Yes",
  "answer_no": "No",
  "question_purpose": "Purpose of your visit",
  "purpose_tourist": "Tourist",
  "purpose_stay": "I want to stay (e.g. job)",
  "question_children": "Number of children",
  "children_0": "0",
  "children_1": "1",
  "children_2": "2",
  "children_more": "More than 2",
  "question_education": "Education",
  "education_basic": "Basic",
  "education_professional": "Professional",
  "education_medium": "Medium",
  "education_bachelor": "1st degree (Bachelor)",
  "education_master": "2nd degree (Master)",
  "education_doctoral": "3rd degree (Doctoral)",
  "submit_button": "Submit",



 
  "first_steps_title": "First steps",
  "communication": "Communication",
  "public_transport": "Public transport",
  "city_bike": "city bike",
  "pkm_timetable": "PKM timetable",
  "km_timetable": "KM timetable",
  "own_transport": "Own transport",
  "driving_license": "driving license",
  "traffic_law": "traffic law",
  "vehicle_registration": "vehicle registration",
  "stay": "Stay",
  "pesel": "PESEL",
  "residence_card": "residence card",
  "citizenship": "citizenship",
  "visa": "visa",
  "polish_phone": "Polish telephone number",
  "insurance": "insurance",
  "finances": "finances (bank account)",
  "security": "security",
  "work_business": "Work & Business",
  "looking_for_job": "I'm looking for a job",
  "work_permit": "Work permit",
  "employment_office": "employment office",
  "central_work_db": "central work database",
  "national_court_register": "National Court Register",
  "ceidg": "CEIDG",
  "own_business": "own business",
  "apartment": "Apartment",
  "purchase_apartment": "purchase of an apartment",
  "rent": "rent",
  "social_housing": "social housing",
  "collective_accommodation": "collective accommodation",
  "education": "Education",
  "kids": "kids",
  "nursery": "Nursery",
  "kindergarten": "kindergarten",
  "primary": "primary",
  "secondary": "secondary",
  "adult_education": "adult education",
  "adults": "adults",
  "health_social": "Health & Social",
  "legal_aid": "legal aid",
  "primary_care": "selection of primary care clinic",
  "treatment_nfz": "where to get treatment - National Health Fund",
  "insurance2": "insurance",
  "pug": "PUG",
  "pharmacy": "Pharmacy",
  "prescription": "prescription",
  "free_time": "Free time",
  "calendar_events": "calendar of events",
  "plock_arta": "PŁOCK ARTA",
  "pokis": "POKIS",
  "mosir": "MOSIR",
  "mdk": "MDK",
  "skd": "SKD",
  "plock_library": "Płock Library",
  "sport": "Sport",
  "culture": "culture",
  "recreation": "recreation",
  "religion": "religion",
  "uta": "University of the Third Age"
    },


    pl: {
  "first_steps": "Pierwsze kroki",
  "survey": "Ankieta",
  "knowledge_base": "Baza wiedzy",
  "help": "Pomoc",
  "welcome": "Witamy w aplikacji dla obcokrajowców",
  "faq": "FAQ",
  "assistant_placeholder": "W czym mogę pomóc? (napisz lub zapytaj)",
    "police": "Policja", "number": "997",
    "cityHall": "Urząd Miasta", "number": "24 367 15 00",
    "municipalPolice": "Straż Miejska", "number": "24 367 15 86",
    "immigrantsCenter": "Centrum dla Imigrantów", "number": "24 367 16 50",
  



  "quick_questionnaire_title": "Szybka ankieta",
  "question_foreigner": "Czy jesteś obcokrajowcem?",
  "answer_yes": "Tak",
  "answer_no": "Nie",
  "question_purpose": "Cel Twojej wizyty",
  "purpose_tourist": "Turysta",
  "purpose_stay": "Chcę zostać (np. praca)",
  "question_children": "Liczba dzieci",
  "children_0": "0",
  "children_1": "1",
  "children_2": "2",
  "children_more": "Więcej niż 2",
  "question_education": "Wykształcenie",
  "education_basic": "Podstawowe",
  "education_professional": "Zawodowe",
  "education_medium": "Średnie",
  "education_bachelor": "Stopień 1 (Licencjat)",
  "education_master": "Stopień 2 (Magister)",
  "education_doctoral": "Stopień 3 (Doktor)",
  "submit_button": "Wyślij",






  "first_steps_title": "Pierwsze kroki",
  "communication": "Komunikacja",
  "public_transport": "Transport publiczny",
  "city_bike": "rower miejski",
  "pkm_timetable": "Rozkład PKM",
  "km_timetable": "Rozkład KM",
  "own_transport": "Własny transport",
  "driving_license": "Prawo jazdy",
  "traffic_law": "Prawo ruchu drogowego",
  "vehicle_registration": "Rejestracja pojazdu",
  "stay": "Pobyt",
  "pesel": "PESEL",
  "residence_card": "Karta pobytu",
  "citizenship": "Obywatelstwo",
  "visa": "Wiza",
  "polish_phone": "Polski numer telefonu",
  "insurance": "Ubezpieczenie",
  "finances": "Finanse (konto bankowe)",
  "security": "Bezpieczeństwo",
  "work_business": "Praca i biznes",
  "looking_for_job": "Szukam pracy",
  "work_permit": "Pozwolenie na pracę",
  "employment_office": "Urząd pracy",
  "central_work_db": "Centralna baza pracy",
  "national_court_register": "Krajowy Rejestr Sądowy",
  "ceidg": "CEIDG",
  "own_business": "Własna działalność",
  "apartment": "Mieszkanie",
  "purchase_apartment": "Zakup mieszkania",
  "rent": "Wynajem",
  "social_housing": "Mieszkania socjalne",
  "collective_accommodation": "Zakwaterowanie zbiorowe",
  "education": "Edukacja",
  "kids": "Dzieci",
  "nursery": "Żłobek",
  "kindergarten": "Przedszkole",
  "primary": "Szkoła podstawowa",
  "secondary": "Szkoła średnia",
  "adult_education": "Edukacja dla dorosłych",
  "adults": "Dorośli",
  "health_social": "Zdrowie i sprawy społeczne",
  "legal_aid": "Pomoc prawna",
  "primary_care": "Wybór podstawowej opieki zdrowotnej",
  "treatment_nfz": "Gdzie uzyskać leczenie - NFZ",
  "insurance2": "Ubezpieczenie",
  "pug": "PUG",
  "pharmacy": "Apteka",
  "prescription": "Recepta",
  "free_time": "Czas wolny",
  "calendar_events": "Kalendarz wydarzeń",
  "plock_arta": "PŁOCK ARTA",
  "pokis": "POKIS",
  "mosir": "MOSIR",
  "mdk": "MDK",
  "skd": "SKD",
  "plock_library": "Biblioteka Płock",
  "sport": "Sport",
  "culture": "Kultura",
  "recreation": "Rekreacja",
  "religion": "Religia",
  "uta": "Uniwersytet Trzeciego Wieku"
},
    ua: {
      "first_steps": "Перші кроки",
  "survey": "Опитування",
  "knowledge_base": "База знань",
  "help": "Допомога",
  "welcome": "Ласкаво просимо до додатку для іноземців",
  "faq": "FAQ",
  "assistant_placeholder": "Чим можу допомогти? (напишіть або запитайте)",
    "police": "Поліція", "number": "997",
    "cityHall": "Міська Рада", "number": "24 367 15 00",
    "municipalPolice": "Муніципальна поліція", "number": "24 367 15 86",
    "immigrantsCenter": "Центр для іммігрантів", "number": "24 367 16 50",



  "quick_questionnaire_title": "Швидке опитування",
  "question_foreigner": "Ви іноземець?",
  "answer_yes": "Так",
  "answer_no": "Ні",
  "question_purpose": "Мета вашого візиту",
  "purpose_tourist": "Турист",
  "purpose_stay": "Я хочу залишитися (наприклад, робота)",
  "question_children": "Кількість дітей",
  "children_0": "0",
  "children_1": "1",
  "children_2": "2",
  "children_more": "Більше 2",
  "question_education": "Освіта",
  "education_basic": "Базова",
  "education_professional": "Професійна",
  "education_medium": "Середня",
  "education_bachelor": "Ступінь 1 (Бакалавр)",
  "education_master": "Ступінь 2 (Магістр)",
  "education_doctoral": "Ступінь 3 (Доктор)",
  "submit_button": "Надіслати",






  "first_steps_title": "Перші кроки",
  "communication": "Комунікація",
  "public_transport": "Громадський транспорт",
  "city_bike": "міський велосипед",
  "pkm_timetable": "Розклад PKM",
  "km_timetable": "Розклад KM",
  "own_transport": "Власний транспорт",
  "driving_license": "Водійські права",
  "traffic_law": "Правила дорожнього руху",
  "vehicle_registration": "Реєстрація транспортного засобу",
  "stay": "Перебування",
  "pesel": "PESEL",
  "residence_card": "Карта перебування",
  "citizenship": "Громадянство",
  "visa": "Віза",
  "polish_phone": "Польський номер телефону",
  "insurance": "Страхування",
  "finances": "Фінанси (банківський рахунок)",
  "security": "Безпека",
  "work_business": "Робота та бізнес",
  "looking_for_job": "Шукаю роботу",
  "work_permit": "Дозвіл на роботу",
  "employment_office": "Бюро праці",
  "central_work_db": "Центральна база праці",
  "national_court_register": "Національний судовий реєстр",
  "ceidg": "CEIDG",
  "own_business": "Власний бізнес",
  "apartment": "Квартира",
  "purchase_apartment": "Купівля квартири",
  "rent": "Оренда",
  "social_housing": "Соціальне житло",
  "collective_accommodation": "Колективне житло",
  "education": "Освіта",
  "kids": "Діти",
  "nursery": "Дитячий садок",
  "kindergarten": "Дитячий садок",
  "primary": "Початкова школа",
  "secondary": "Середня школа",
  "adult_education": "Освіта для дорослих",
  "adults": "Дорослі",
  "health_social": "Здоров'я та соціальні питання",
  "legal_aid": "Юридична допомога",
  "primary_care": "Вибір поліклініки",
  "treatment_nfz": "Де отримати лікування - NFZ",
  "insurance2": "Страхування",
  "pug": "PUG",
  "pharmacy": "Аптека",
  "prescription": "Рецепт",
  "free_time": "Вільний час",
  "calendar_events": "Календар подій",
  "plock_arta": "PŁOCK ARTA",
  "pokis": "POKIS",
  "mosir": "MOSIR",
  "mdk": "MDK",
  "skd": "SKD",
  "plock_library": "Бібліотека Плоцька",
  "sport": "Спорт",
  "culture": "Культура",
  "recreation": "Відпочинок",
  "religion": "Релігія",
  "uta": "Університет третього віку"


},
    ru: {
      "first_steps": "Первые шаги",
  "survey": "Опрос",
  "knowledge_base": "База знаний",
  "help": "Помощь",
  "welcome": "Добро пожаловать в приложение для иностранцев",
  "faq": "FAQ",
  "assistant_placeholder": "Чем могу помочь? (напишите или спросите)",
    "police": "Полиция", "number": "997",
    "cityHall": "Городская администрация", "number": "24 367 15 00",
    "municipalPolice": "Муниципальная полиция", "number": "24 367 15 86",
    "immigrantsCenter": "Центр для иммигрантов", "number": "24 367 16 50",




  "quick_questionnaire_title": "Краткая анкета",
  "question_foreigner": "Вы иностранец?",
  "answer_yes": "Да",
  "answer_no": "Нет",
  "question_purpose": "Цель вашего визита",
  "purpose_tourist": "Турист",
  "purpose_stay": "Я хочу остаться (например, работа)",
  "question_children": "Количество детей",
  "children_0": "0",
  "children_1": "1",
  "children_2": "2",
  "children_more": "Более 2",
  "question_education": "Образование",
  "education_basic": "Базовое",
  "education_professional": "Профессиональное",
  "education_medium": "Среднее",
  "education_bachelor": "1-я степень (Бакалавр)",
  "education_master": "2-я степень (Магистр)",
  "education_doctoral": "3-я степень (Доктор)",
  "submit_button": "Отправить",






  "first_steps_title": "Первые шаги",
  "communication": "Коммуникация",
  "public_transport": "Общественный транспорт",
  "city_bike": "городской велосипед",
  "pkm_timetable": "Расписание PKM",
  "km_timetable": "Расписание KM",
  "own_transport": "Собственный транспорт",
  "driving_license": "Водительское удостоверение",
  "traffic_law": "Правила дорожного движения",
  "vehicle_registration": "Регистрация транспортного средства",
  "stay": "Проживание",
  "pesel": "PESEL",
  "residence_card": "Вид на жительство",
  "citizenship": "Гражданство",
  "visa": "Виза",
  "polish_phone": "Польский номер телефона",
  "insurance": "Страхование",
  "finances": "Финансы (банковский счет)",
  "security": "Безопасность",
  "work_business": "Работа и бизнес",
  "looking_for_job": "Ищу работу",
  "work_permit": "Разрешение на работу",
  "employment_office": "Бюро занятости",
  "central_work_db": "Центральная база вакансий",
  "national_court_register": "Национальный судебный реестр",
  "ceidg": "CEIDG",
  "own_business": "Собственный бизнес",
  "apartment": "Квартира",
  "purchase_apartment": "Покупка квартиры",
  "rent": "Аренда",
  "social_housing": "Социальное жилье",
  "collective_accommodation": "Коллективное проживание",
  "education": "Образование",
  "kids": "Дети",
  "nursery": "Ясли",
  "kindergarten": "Детский сад",
  "primary": "Начальная школа",
  "secondary": "Средняя школа",
  "adult_education": "Образование для взрослых",
  "adults": "Взрослые",
  "health_social": "Здоровье и социальная помощь",
  "legal_aid": "Юридическая помощь",
  "primary_care": "Выбор поликлиники",
  "treatment_nfz": "Где пройти лечение - Национальный фонд здоровья",
  "insurance2": "Страхование",
  "pug": "PUG",
  "pharmacy": "Аптека",
  "prescription": "Рецепт",
  "free_time": "Свободное время",
  "calendar_events": "Календарь событий",
  "plock_arta": "PŁOCK ARTA",
  "pokis": "POKIS",
  "mosir": "MOSIR",
  "mdk": "MDK",
  "skd": "SKD",
  "plock_library": "Библиотека Плоцка",
  "sport": "Спорт",
  "culture": "Культура",
  "recreation": "Отдых",
  "religion": "Религия",
  "uta": "Университет третьего возраста"

  
},
  };

// Load language
  function loadLanguage(lang) {
    const data = translations[lang];

    document.querySelectorAll('[data-key]').forEach(el => {
      const key = el.getAttribute('data-key');

      // Label child (phone dropdown)
      const label = el.querySelector('.label');
      if (label) {
        label.textContent = data[key] || label.textContent;
      }
      // Input with placeholder
      else if (el.tagName === 'INPUT' && el.hasAttribute('data-placeholder')) {
        const placeholderKey = el.getAttribute('data-placeholder');
        el.placeholder = data[placeholderKey] || el.placeholder;
      }
      // All other elements
      else {
        el.textContent = data[key] || el.textContent;
      }
    });
  }

  // On page load, apply saved language or default
  const savedLang = localStorage.getItem('selectedLang') || 'eng';
  loadLanguage(savedLang);

})();
