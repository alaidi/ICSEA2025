import { loadComponentContent,getCurrentLang } from '../componentLoader';

export const initFAQ = () => ({
    content: '',
    searchQuery: '',
    categories: ['General', 'Registration', 'Papers', 'Technical'],
    selectedCategory: 'all',
    faqs: [
        {
            id: 1,
            question: {
                en: 'How can I register for the conference?',
                ar: 'كيف يمكنني التسجيل في المؤتمر؟'
            },
            answer: {
                en: 'You can register through our online registration system. Click the "Register Now" button at the top of the page and follow the instructions.',
                ar: 'يمكنك التسجيل من خلال نظام التسجيل عبر الإنترنت. انقر على زر "سجل الآن" في أعلى الصفحة واتبع التعليمات.'
            },
            category: 'Registration',
            isOpen: false,
            helpful: 0,
            notHelpful: 0
        },
        {
            id: 2,
            question: {
                en: 'Is virtual attendance available?',
                ar: 'هل يتوفر حضور افتراضي؟'
            },
            answer: {
                en: 'Yes, we offer hybrid attendance options. Virtual attendees will have access to all sessions via our online platform.',
                ar: 'نعم، نقدم خيارات الحضور الهجين. سيتمكن الحاضرون افتراضياً من الوصول إلى جميع الجلسات عبر منصتنا الإلكترونية.'
            },
            category: 'General',
            isOpen: false,
            helpful: 0,
            notHelpful: 0
        },
        {
            id: 3,
            question: {
                en: 'What are the submission guidelines for papers?',
                ar: 'ما هي إرشادات تقديم الأوراق البحثية؟'
            },
            answer: {
                en: 'Papers should be submitted in IEEE format, with a maximum of 8 pages. All submissions must be original and will undergo peer review.',
                ar: 'يجب تقديم الأوراق البحثية بتنسيق IEEE، بحد أقصى 8 صفحات. يجب أن تكون جميع المشاركات أصلية وستخضع لمراجعة الأقران.'
            },
            category: 'Papers',
            isOpen: false,
            helpful: 0,
            notHelpful: 0
        },
        {
            id: 4,
            question: {
                en: 'Are there student discounts available?',
                ar: 'هل تتوفر خصومات للطلاب؟'
            },
            answer: {
                en: 'Yes, full-time students can receive a 50% discount on registration fees with valid student ID.',
                ar: 'نعم، يمكن للطلاب المتفرغين الحصول على خصم 50٪ على رسوم التسجيل مع بطاقة طالب سارية المفعول.'
            },
            category: 'Registration',
            isOpen: false,
            helpful: 0,
            notHelpful: 0
        },
        {
            id: 5,
            question: {
                en: 'What technical requirements are needed for virtual attendance?',
                ar: 'ما هي المتطلبات التقنية اللازمة للحضور الافتراضي؟'
            },
            answer: {
                en: 'You need a stable internet connection (minimum 5Mbps), a modern web browser, and a device with audio/video capabilities. We recommend using Chrome or Firefox for the best experience.',
                ar: 'تحتاج إلى اتصال إنترنت مستقر (5 ميجابت/ثانية كحد أدنى)، ومتصفح ويب حديث، وجهاز بإمكانيات صوت/فيديو. نوصي باستخدام Chrome أو Firefox للحصول على أفضل تجربة.'
            },
            category: 'Technical',
            isOpen: false,
            helpful: 0,
            notHelpful: 0
        },
        {
            id: 6,
            question: {
                en: 'What is the conference schedule?',
                ar: 'ما هو جدول المؤتمر؟'
            },
            answer: {
                en: 'The conference runs from December 31, 2024. A detailed schedule with specific session times will be published three months before the event.',
                ar: 'يقام المؤتمر في 31 ديسمبر 2024. سيتم نشر جدول مفصل بأوقات الجلسات المحددة قبل ثلاثة أشهر من الحدث.'
            },
            category: 'General',
            isOpen: false,
            helpful: 0,
            notHelpful: 0
        },
        {
            id: 7,
            question: {
                en: 'What is the paper submission deadline?',
                ar: 'ما هو الموعد النهائي لتقديم الأوراق البحثية؟'
            },
            answer: {
                en: 'The deadline for paper submissions is September 30, 2024. Late submissions will not be accepted.',
                ar: 'الموعد النهائي لتقديم الأوراق البحثية هو 30 سبتمبر 2024. لن يتم قبول المشاركات المتأخرة.'
            },
            category: 'Papers',
            isOpen: false,
            helpful: 0,
            notHelpful: 0
        },
        {
            id: 8,
            question: {
                en: 'Are there accommodation recommendations?',
                ar: 'هل هناك توصيات للإقامة؟'
            },
            answer: {
                en: 'Yes, we have partnered with several hotels near the venue offering special rates for conference attendees. Details will be sent after registration.',
                ar: 'نعم، لدينا شراكات مع العديد من الفنادق القريبة من مكان انعقاد المؤتمر تقدم أسعاراً خاصة للمشاركين. سيتم إرسال التفاصيل بعد التسجيل.'
            },
            category: 'General',
            isOpen: false,
            helpful: 0,
            notHelpful: 0
        }
    ],

    async init() {
        // Load component content
        this.content = await loadComponentContent('FAQ');
        
        // Load saved FAQ states from localStorage
        const savedStates = JSON.parse(localStorage.getItem('faqStates') || '{}');
        this.faqs = this.faqs.map(faq => ({
            ...faq,
            isOpen: savedStates[faq.id]?.isOpen || false,
            helpful: savedStates[faq.id]?.helpful || 0,
            notHelpful: savedStates[faq.id]?.notHelpful || 0
        }));
    },

    toggleFAQ(faqId) {
        this.faqs = this.faqs.map(faq => ({
            ...faq,
            isOpen: faq.id === faqId ? !faq.isOpen : false
        }));
        this.saveFAQStates();
    },

    saveFAQStates() {
        const states = {};
        this.faqs.forEach(faq => {
            states[faq.id] = {
                isOpen: faq.isOpen,
                helpful: faq.helpful,
                notHelpful: faq.notHelpful
            };
        });
        localStorage.setItem('faqStates', JSON.stringify(states));
    },
    //currentLang
    get currentLang() {
        return getCurrentLang()
    },

    rateFAQ(faqId, isHelpful) {
        this.faqs = this.faqs.map(faq => {
            if (faq.id === faqId) {
                return {
                    ...faq,
                    helpful: isHelpful ? faq.helpful + 1 : faq.helpful,
                    notHelpful: !isHelpful ? faq.notHelpful + 1 : faq.notHelpful
                };
            }
            return faq;
        });
        this.saveFAQStates();
    },

    get filteredFAQs() {
        return this.faqs.filter(faq => {
            const currentLang = this.$store.app.currentLang;
            const matchesSearch = this.searchQuery === '' || 
                faq.question[currentLang].toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                faq.answer[currentLang].toLowerCase().includes(this.searchQuery.toLowerCase());
            
            const matchesCategory = this.selectedCategory === 'all' || 
                faq.category === this.selectedCategory;

            return matchesSearch && matchesCategory;
        });
    }
}); 