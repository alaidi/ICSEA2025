import { loadComponentContent, getCurrentLang } from '../componentLoader';

export const initTopics = () => ({
    content: '',
    topics: [
        {
            id: 1,
            icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
            ar: {
                title: "دور الذكاء الاصطناعي في تحسين استكشاف وإنتاج النفط",
                items: [
                    "تحسين نماذج الحفر",
                    "تحليل البيانات الضخمة للحقول النفطية",
                    "التنبؤ بالمخاطر واكتشاف الأخطاء باستخدام الذكاء الاصطناعي",
                    "تحسين آبار النفط والغاز باستخدام تقنيات الذكاء الاصطناعي"
                ]
            },
            en: {
                title: "The Role of AI in Improving Oil Exploration and Production",
                items: [
                    "Enhancing drilling models",
                    "Analyzing big data for oil fields",
                    "Risk prediction and error detection using AI",
                    "Improving oil and gas wells with AI techniques"
                ]
            }
        },
        {
            id: 2,
            icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
            ar: {
                title: "تقنيات الذكاء الاصطناعي لتحسين العمليات",
                items: [
                    "منهجيات ذكية للاستخلاص المعزز للنفط",
                    "تعزيز الكفاءة التشغيلية وخفض التكاليف"
                ]
            },
            en: {
                title: "AI Techniques for Operational Improvement",
                items: [
                    "Smart methodologies for enhanced oil recovery (EOR)",
                    "Boosting operational efficiency and reducing costs"
                ]
            }
        },
        {
            id: 3,
            icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
            ar: {
                title: "إدارة التآكل في معدات النفط والغاز باستخدام الذكاء الاصطناعي",
                items: [
                    "تطبيقات الذكاء الاصطناعي في التنبؤ وإدارة التآكل",
                    "تقنيات متقدمة لمكافحة التآكل وتحسين عمر المعدات"
                ]
            },
            en: {
                title: "Corrosion Management in Oil and Gas Equipment Using AI",
                items: [
                    "AI applications in corrosion prediction and management",
                    "Advanced techniques for combating corrosion and improving equipment lifespan"
                ]
            }
        },
        {
            id: 4,
            icon: 'M13 10V3L4 14h7v7l9-11h-7z',
            ar: {
                title: "دور التكنولوجيا الحديثة في تمديد عمر المعدات وتحسين الكفاءة",
                items: [
                    "استدامة الطاقة في دعم التحول الرقمي في قطاع النفط",
                    "استخدام الذكاء الاصطناعي لتعزيز أمن المنشآت النفطية",
                    "الحلول التقنية لخفض انبعاثات الكربون"
                ]
            },
            en: {
                title: "The Role of Modern Technology in Extending Equipment Lifespan and Enhancing Efficiency",
                items: [
                    "Energy sustainability in supporting digital transformation in the oil sector",
                    "Using AI to enhance the security of oil facilities",
                    "Technical solutions for reducing carbon emissions"
                ]
            }
        },
        {
            id: 5,
            icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
            ar: {
                title: "التحديات والفرص المستقبلية لتطبيقات الذكاء الاصطناعي في قطاع النفط",
                items: [
                    "تحديات دمج الذكاء الاصطناعي مع الأنظمة التقليدية",
                    "فرص تحسين كفاءة الإنتاج وخفض التكاليف"
                ]
            },
            en: {
                title: "Future Challenges and Opportunities for AI Applications in the Oil Sector",
                items: [
                    "Challenges in integrating AI with traditional systems",
                    "Opportunities to improve production efficiency and reduce costs"
                ]
            }
        },
        {
            id: 6,
            icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
            ar: {
                title: "التآكل",
                items: [
                    "إدارة التآكل في البنية التحتية النفطية باستخدام الذكاء الاصطناعي",
                    "نماذج التنبؤ بالتآكل وتأثيرها على المعدات"
                ]
            },
            en: {
                title: "Corrosion",
                items: [
                    "Managing corrosion in oil infrastructure using AI",
                    "Corrosion prediction models and their impact on equipment"
                ]
            }
        },
        {
            id: 7,
            icon: 'M13 10V3L4 14h7v7l9-11h-7z',
            ar: {
                title: "الابتكارات في التحول الرقمي",
                items: [
                    "استخدام الذكاء الاصطناعي لتطوير حلول مبتكرة في قطاع النفط",
                    "تعزيز الكفاءة التشغيلية وتحقيق الاستدامة"
                ]
            },
            en: {
                title: "Innovations in Digital Transformation",
                items: [
                    "Using AI to develop innovative solutions in the oil sector",
                    "Enhancing operational efficiency and achieving sustainability"
                ]
            }
        },
        {
            id: 8,
            icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
            ar: {
                title: "الحلول البيئية وخفض انبعاثات الكربون",
                items: [
                    "تقنيات الذكاء الاصطناعي لدعم الاستدامة وتقليل الآثار البيئية"
                ]
            },
            en: {
                title: "Environmental Solutions and Carbon Emission Reduction",
                items: [
                    "AI techniques to support sustainability and reduce environmental impacts"
                ]
            }
        },
        {
            id: 9,
            icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
            ar: {
                title: "التكامل بين الأوساط الأكاديمية والصناعة",
                items: [
                    "استراتيجيات التعاون بين الجامعات وشركات النفط والغاز لتطوير تقنيات مبتكرة"
                ]
            },
            en: {
                title: "Academia-Industry Integration",
                items: [
                    "Strategies for collaboration between universities and oil and gas companies to develop innovative technologies"
                ]
            }
        }
    ],
    get currentLang() {
        return getCurrentLang()
    },

    async init() {
        this.content = await loadComponentContent('Topics');
    }
});