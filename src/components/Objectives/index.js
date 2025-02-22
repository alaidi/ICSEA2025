import { loadComponentContent, getCurrentLang } from '../componentLoader';

export const initObjectives = () => ({
    content: '',
    objectives: [
        {
            id: 1,
            en: 'Foster innovation in sustainable engineering, focusing on green technologies, smart infrastructure, and renewable energy solutions.',
            ar: 'تعزيز الابتكار في الهندسة المستدامة، مع التركيز على التقنيات الخضراء والبنية التحتية الذكية وحلول الطاقة المتجددة.'
        },
        {
            id: 2,
            en: 'Advance the integration of artificial intelligence and machine learning in developing sustainable solutions for environmental challenges.',
            ar: 'تطوير دمج الذكاء الاصطناعي والتعلم الآلي في تطوير حلول مستدامة للتحديات البيئية.'
        },
        {
            id: 3,
            en: 'Explore cutting-edge computer science applications for environmental monitoring, smart cities, and green computing.',
            ar: 'استكشاف تطبيقات علوم الحاسوب المتقدمة للمراقبة البيئية والمدن الذكية والحوسبة الخضراء.'
        },
        {
            id: 4,
            en: 'Promote Industry 4.0 technologies for sustainable manufacturing, smart factories, and eco-friendly production processes.',
            ar: 'تعزيز تقنيات الثورة الصناعية الرابعة للتصنيع المستدام والمصانع الذكية وعمليات الإنتاج الصديقة للبيئة.'
        },
        {
            id: 5,
            en: 'Facilitate knowledge exchange between academia and industry in sustainable engineering practices and green technology innovations.',
            ar: 'تسهيل تبادل المعرفة بين الأوساط الأكاديمية والصناعة في ممارسات الهندسة المستدامة وابتكارات التكنولوجيا الخضراء.'
        },
        {
            id: 6,
            en: 'Address challenges in implementing sustainable transportation systems and smart mobility solutions.',
            ar: 'معالجة التحديات في تنفيذ أنظمة النقل المستدام وحلول التنقل الذكي.'
        },
        {
            id: 7,
            en: 'Showcase innovative approaches to sustainable resource management, waste reduction, and circular economy practices.',
            ar: 'عرض الأساليب المبتكرة لإدارة الموارد المستدامة وتقليل النفايات وممارسات الاقتصاد الدائري.'
        },
        {
            id: 8,
            en: 'Examine the ethical implications and social impact of AI and emerging technologies in sustainable development.',
            ar: 'دراسة الآثار الأخلاقية والتأثير الاجتماعي للذكاء الاصطناعي والتقنيات الناشئة في التنمية المستدامة.'
        }
    ],

    get currentLang() {
        return getCurrentLang();
    },

    async init() {
        this.content = await loadComponentContent('Objectives');
    }
});
