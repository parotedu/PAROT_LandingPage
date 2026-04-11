// --- Language Dictionaries ---
const translations = {
    en: {
        // Navigation
        brand: "PAROT",
        nav_about: "About",
        nav_sectors: "Sectors",
        nav_founders: "Founders",
        nav_partners: "Partners",
        nav_contact: "Contact",
        lang_btn: "AR",
        
        // Hero
        hero_badge: "Innovating the Future",
        hero_title_1: "Transforming Vision into",
        hero_title_2: "Digital Reality",
        hero_subtitle: "A cutting-edge Software Company redefining technology through pioneering solutions in AI, IoT, and Business Software.",
        hero_btn_explore: "Explore Our Story",
        hero_btn_sectors: "Our Sectors",
        
        // About
        about_tag: "Our History",
        about_title: "From a Vision to an Industry Catalyst.",
        about_year_text: "The Year It Started",
        about_p1: "We started our journey in 2024 as a university graduation project. What began as a concept rapidly evolved into a movement.",
        about_p2: "It originated as an innovative, AI-integrated educational system specifically designed to completely transform the perspective and methodology of learning.",
        about_p3: "Today, PAROT stands as a testament to the power of youth, ambition, and advanced technology, delivering sophisticated solutions to a dynamic global market.",
        
        // Sectors
        sectors_tag: "What We Do",
        sectors_title: "Our Core Sectors",
        sectors_software: "Software",
        sectors_software_desc: "Developing robust, scalable, and modern applications tailored to the specific needs of businesses and consumers.",
        sectors_ai: "Artificial Intelligence",
        sectors_ai_desc: "Integrating intelligent machine learning models and AI systems to automate logic and solve complex problems seamlessly.",
        sectors_iot: "Internet of Things (IoT)",
        sectors_iot_desc: "Bridging the physical and digital worlds with interconnected devices that provide real-time data and remote control.",
        sectors_business: "Business Solutions",
        sectors_business_desc: "Empowering enterprises with comprehensive ERPs, CRMs, and management tools that streamline operations and increase revenue.",
        
        // Founders
        founders_tag: "Leadership",
        founders_title: "Meet the Founders",
        founder_ceo_title: "Chief Executive Officer",
        founder_ceo_desc: "Driving the vision and strategic direction of PAROT with a relentless pursuit of innovation.",
        founder_coo_title: "Chief Operating Officer",
        founder_coo_desc: "Ensuring operational excellence and executing business strategies with precision.",
        founder_cto_title: "Chief Technology Officer",
        founder_cto_desc: "Architecting robust and scalable technology infrastructures to power our forward-thinking products.",
        
        // Partners & Footer
        partners_title: "Our Partners",
        footer_copyright: "© 2026 PAROT. All rights reserved.",
        
        // Contact
        contact_tag: "Get In Touch",
        contact_title: "Contact Us",
        contact_email_tag: "Email Address",
        contact_phone_tag: "Phone & WhatsApp"
    },
    ar: {
        // Navigation
        brand: "باروت",
        nav_about: "عن الشركة",
        nav_sectors: "قطاعاتنا",
        nav_founders: "المؤسسون",
        nav_partners: "شركاؤنا",
        nav_contact: "تواصل معنا",
        lang_btn: "EN",
        
        // Hero
        hero_badge: "نبتكر المستقبل",
        hero_title_1: "نحول الرؤية إلى",
        hero_title_2: "واقع رقمي",
        hero_subtitle: "شركة برمجيات رائدة تعيد صياغة التكنولوجيا من خلال حلول مبتكرة في الذكاء الاصطناعي، إنترنت الأشياء، وبرمجيات الأعمال.",
        hero_btn_explore: "اكتشف قصتنا",
        hero_btn_sectors: "قطاعاتنا",
        
        // About
        about_tag: "تاريخنا",
        about_title: "من رؤية إلى محفز صناعي.",
        about_year_text: "عام البداية",
        about_p1: "بدأت رحلتنا في عام 2024 كمشروع تخرج جامعي. وما بدأ كمفهوم تطور سريعاً ليصبح حركة.",
        about_p2: "نشأت الفكرة كنظام تعليمي مبتكر مدمج بالذكاء الاصطناعي، مصمم خصيصاً لتغيير منظور ومنهجية التعلم بالكامل.",
        about_p3: "اليوم، تقف «باروت» كدليل على قوة الشباب والطموح والتكنولوجيا المتقدمة، حيث تقدم حلولاً متطورة لسوق عالمي ديناميكي.",
        
        // Sectors
        sectors_tag: "ماذا نقدم",
        sectors_title: "قطاعاتنا الأساسية",
        sectors_software: "البرمجيات",
        sectors_software_desc: "تطوير تطبيقات قوية وقابلة للتطوير وحديثة مصممة خصيصاً لتلبية احتياجات الشركات والمستهلكين.",
        sectors_ai: "الذكاء الاصطناعي",
        sectors_ai_desc: "دمج نماذج التعلم الآلي الذكية وأنظمة الذكاء الاصطناعي لأتمتة العمليات وحل المشكلات المعقدة بسلاسة.",
        sectors_iot: "إنترنت الأشياء (IoT)",
        sectors_iot_desc: "ربط العالمين المادي والرقمي بأجهزة مترابطة توفر بيانات في الوقت الفعلي وتحكماً عنُ بعد.",
        sectors_business: "حلول الأعمال",
        sectors_business_desc: "تمكين المؤسسات باستخدام أنظمة تخطيط موارد المؤسسات (ERP) وإدارة علاقات العملاء (CRM) الشاملة وأدوات الإدارة التي تبسط العمليات وتزيد الإيرادات.",
        
        // Founders
        founders_tag: "القيادة",
        founders_title: "تعرف على المؤسسين",
        founder_ceo_title: "الرئيس التنفيذي (CEO)",
        founder_ceo_desc: "دفع الرؤية والتوجه الاستراتيجي لشركة باروت من خلال السعي الدؤوب نحو الابتكار.",
        founder_coo_title: "مدير العمليات (COO)",
        founder_coo_desc: "ضمان التميز التشغيلي وتنفيذ استراتيجيات الأعمال بدقة متناهية.",
        founder_cto_title: "المدير التقني (CTO)",
        founder_cto_desc: "هندسة بنيات تقنية قوية وقابلة للتطوير لدعم منتجاتنا المستقبلية.",
        
        // Partners & Footer
        partners_title: "شركاؤنا",
        footer_copyright: "© 2026 باروت. جميع الحقوق محفوظة.",
        
        // Contact
        contact_tag: "ابقى على تواصل",
        contact_title: "تواصل معنا",
        contact_email_tag: "البريد الإلكتروني",
        contact_phone_tag: "الهاتف و الواتساب"
    }
};

let currentLang = 'en';

// --- Functions ---

function setLanguage(lang) {
    currentLang = lang;
    
    // Update HTML dir and lang
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update Toggle Button Text
    const langText = document.getElementById('lang-text');
    if(langText) {
        langText.innerText = translations[lang]['lang_btn'];
    }

    // Update all translatable elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
}

function toggleLanguage() {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
}

// --- Initialization & Event Listeners ---

// Remove Preloader after exactly 2 seconds
setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hidden');
        // Remove from DOM after transition completes
        setTimeout(() => preloader.remove(), 600);
    }
}, 2000);

document.addEventListener('DOMContentLoaded', () => {
    // 1. Language Toggle Setup
    const langBtn = document.getElementById('lang-toggle');
    if(langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
    
    // Initial Load (Default is EN)
    // Note: The HTML is heavily constructed around EN by default.
    // If you want to default to Arabic, you'd call setLanguage('ar') here.
    
    // 2. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if(mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 3. Navbar Scroll Effect (Glassmorphism enhancer)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('py-2');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.add('py-4');
            navbar.classList.remove('py-2');
        }
    });

    // 4. Scroll Reveal Animations setup using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
});
