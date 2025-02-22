import { loadComponentContent, getCurrentLang } from '../componentLoader';

export const initAbout = () => ({
    content: '',
    about: {
        en: {
            title: 'About the Conference',
            paragraphs: [
                'The conference highlights the latest innovations and advanced AI-driven technologies in the field of petroleum engineering. It aims to explore the role of artificial intelligence in enhancing drilling, extraction, and field management operations, improving equipment efficiency, and extending their lifespan.',
                'Furthermore, it seeks to discuss opportunities and challenges in integrating artificial intelligence with traditional oil and gas industries, achieving energy sustainability, and enhancing operational efficiency.'
            ]
        },
        ar: {
            title: 'عن المؤتمر',
            paragraphs: [
                'يسلط المؤتمر الضوء على أحدث الابتكارات والتقنيات المتقدمة المدعومة بالذكاء الاصطناعي في مجال هندسة البترول. يهدف إلى استكشاف دور الذكاء الاصطناعي في تعزيز عمليات الحفر والاستخراج وإدارة الحقول، وتحسين كفاءة المعدات، وإطالة عمرها.',
                'علاوة على ذلك، يسعى إلى مناقشة الفرص والتحديات في دمج الذكاء الاصطناعي مع صناعات النفط والغاز التقليدية، وتحقيق استدامة الطاقة، وتعزيز الكفاءة التشغيلية.'
            ]
        }
    },
    
    get currentLang() {
        return getCurrentLang()
    },

    async init() {
        this.content = await loadComponentContent('About');
    }
}); 