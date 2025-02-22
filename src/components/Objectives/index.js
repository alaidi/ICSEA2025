import { loadComponentContent, getCurrentLang } from '../componentLoader';

export const initObjectives = () => ({
    content: '',
    objectives: [
        {
            id: 1,
            en: 'Showcase the latest AI-powered innovations and technologies in drilling, extraction, and field management.',
            ar: 'عرض أحدث الابتكارات والتقنيات المدعومة بالذكاء الاصطناعي في مجالات الحفر والاستخراج وإدارة الحقول.'
        },
        {
            id: 2,
            en: 'Explore modern AI applications to enhance operational efficiency and reduce costs in the oil sector.',
            ar: 'استكشاف تطبيقات الذكاء الاصطناعي الحديثة لتحسين الكفاءة التشغيلية وتقليل التكاليف في قطاع النفط.'
        },
        {
            id: 3,
            en: 'Promote scientific research and academic collaboration in AI and petroleum engineering.',
            ar: 'تعزيز البحث العلمي والتعاون الأكاديمي في مجال الذكاء الاصطناعي وهندسة البترول.'
        },
        {
            id: 4,
            en: 'Highlight corrosion management techniques and improve equipment lifespan and efficiency.',
            ar: 'تسليط الضوء على تقنيات إدارة التآكل وتحسين عمر المعدات وكفاءتها.'
        },
        {
            id: 5,
            en: 'Discuss opportunities and challenges in integrating AI into the oil industry.',
            ar: 'مناقشة الفرص والتحديات في دمج الذكاء الاصطناعي في صناعة النفط.'
        },
        {
            id: 6,
            en: 'Encourage innovation and sustainability in the energy sector by leveraging AI for digital transformation.',
            ar: 'تشجيع الابتكار والاستدامة في قطاع الطاقة من خلال الاستفادة من الذكاء الاصطناعي للتحول الرقمي.'
        },
        {
            id: 7,
            en: 'Bridge academia and industry professionals to develop effective technological solutions for the oil and gas sector.',
            ar: 'الربط بين الأكاديميين والمهنيين في الصناعة لتطوير حلول تكنولوجية فعالة لقطاع النفط والغاز.'
        },
        {
            id: 8,
            en: 'Raise awareness of digital transformation\'s importance in enhancing facility security and reducing carbon emissions.',
            ar: 'رفع الوعي بأهمية التحول الرقمي في تعزيز أمن المنشآت وتقليل انبعاثات الكربون.'
        }
    ],
    
    get currentLang() {
        return getCurrentLang()
    },

    async init() {
        this.content = await loadComponentContent('Objectives');
    }
}); 