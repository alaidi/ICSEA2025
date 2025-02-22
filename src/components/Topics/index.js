import { loadComponentContent, getCurrentLang } from '../componentLoader';

export const initTopics = () => ({
    content: '',
    topics: [
        {
            id: 1,
            icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
            ar: {
                title: "الهندسة المستدامة",
                items: [
                    "تطوير البنية التحتية الخضراء والذكية",
                    "تقنيات وتطبيقات الطاقة المتجددة",
                    "الإدارة المستدامة للمياه والنفايات",
                    "تخفيض البصمة الكربونية في العمليات الصناعية",
                    "المواد الصديقة للبيئة في البناء والتصنيع",
                    "الشبكات الذكية وكفاءة الطاقة",
                    "الاقتصاد الدائري وإدارة الموارد المستدامة",
                    "تقييم الأثر البيئي باستخدام الذكاء الاصطناعي وإنترنت الأشياء"
                ]
            },
            en: {
                title: "Sustainable Engineering",
                items: [
                    "Green and Smart Infrastructure Development",
                    "Renewable Energy Technologies and Applications",
                    "Sustainable Water and Waste Management",
                    "Carbon Footprint Reduction in Industrial Processes",
                    "Eco-Friendly Materials in Construction and Manufacturing",
                    "Smart Grids and Energy Efficiency",
                    "Circular Economy and Sustainable Resource Management",
                    "Environmental Impact Assessment using AI and IoT"
                ]
            }
        },
        {
            id: 2,
            icon: 'M13 10V3L4 14h7v7l9-11h-7z',
            ar: {
                title: "الذكاء الاصطناعي والتعلم الآلي للاستدامة",
                items: [
                    "حلول الذكاء الاصطناعي للتخفيف من تغير المناخ",
                    "التعلم الآلي لتحسين الطاقة",
                    "الذكاء الاصطناعي في التخطيط الحضري المستدام والمدن الذكية",
                    "أنظمة إدارة النفايات وإعادة التدوير القائمة على الذكاء الاصطناعي",
                    "التحليلات التنبؤية للمراقبة البيئية",
                    "الذكاء الاصطناعي لإدارة سلسلة التوريد الخضراء",
                    "تقنية التوأم الرقمي للهندسة المستدامة"
                ]
            },
            en: {
                title: "Artificial Intelligence and Machine Learning for Sustainability",
                items: [
                    "AI-driven Solutions for Climate Change Mitigation",
                    "Machine Learning for Energy Optimization",
                    "AI in Sustainable Urban Planning and Smart Cities",
                    "AI-based Waste Management and Recycling Systems",
                    "Predictive Analytics for Environmental Monitoring",
                    "AI for Green Supply Chain Management",
                    "Digital Twin Technology for Sustainable Engineering"
                ]
            }
        },
        {
            id: 3,
            icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
            ar: {
                title: "تطبيقات علوم الحاسوب المستدامة",
                items: [
                    "البلوكتشين لسلاسل التوريد المستدامة والآمنة",
                    "الحوسبة الطرفية والسحابية لكفاءة الطاقة",
                    "الحوسبة منخفضة الطاقة ومراكز البيانات الخضراء",
                    "الأمن السيبراني للأنظمة المستدامة",
                    "حلول إنترنت الأشياء الذكية للاستدامة",
                    "البيانات الضخمة للمراقبة البيئية واتخاذ القرارات"
                ]
            },
            en: {
                title: "Sustainable Computer Science Applications",
                items: [
                    "Blockchain for Sustainable and Secure Supply Chains",
                    "Edge and Cloud Computing for Energy Efficiency",
                    "Low-Power Computing and Green Data Centers",
                    "Cybersecurity for Sustainable Systems",
                    "Smart IoT Solutions for Sustainability",
                    "Big Data for Environmental Monitoring and Decision Making"
                ]
            }
        },
        {
            id: 4,
            icon: 'M13 10V3L4 14h7v7l9-11h-7z',
            ar: {
                title: "النقل والتنقل المستدام",
                items: [
                    "الذكاء الاصطناعي وإنترنت الأشياء في النقل الذكي والأخضر",
                    "المركبات الكهربائية ودمج الطاقة المتجددة",
                    "الخدمات اللوجستية المستدامة وتحسين سلسلة التوريد",
                    "إدارة المرور الذكية لخفض الانبعاثات"
                ]
            },
            en: {
                title: "Sustainable Transportation and Mobility",
                items: [
                    "AI and IoT in Smart and Green Transportation",
                    "Electric Vehicles and Renewable Energy Integration",
                    "Sustainable Logistics and Supply Chain Optimization",
                    "Intelligent Traffic Management for Emission Reduction"
                ]
            }
        },
        {
            id: 5,
            icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
            ar: {
                title: "الحوسبة المتمحورة حول الإنسان والاستدامة",
                items: [
                    "الذكاء الاصطناعي الأخلاقي للتنمية المستدامة",
                    "تفاعل الإنسان والحاسوب للتقنيات الخضراء",
                    "الأثر الاجتماعي للذكاء الاصطناعي في التنمية المستدامة"
                ]
            },
            en: {
                title: "Human-Centered Computing and Sustainability",
                items: [
                    "Ethical AI for Sustainable Development",
                    "Human-Computer Interaction for Green Technologies",
                    "Social Impact of AI in Sustainable Development"
                ]
            }
        },
        {
            id: 6,
            icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
            ar: {
                title: "الثورة الصناعية الرابعة والتصنيع المستدام",
                items: [
                    "التصنيع الذكي والمستدام",
                    "الروبوتات المتعاونة في التصنيع الأخضر",
                    "التصنيع بالإضافة والطباعة ثلاثية الأبعاد المستدامة",
                    "إنترنت الأشياء الصناعي للاستدامة",
                    "تحليلات البيانات الضخمة في التصنيع",
                    "الصيانة التنبؤية للمعدات الصناعية",
                    "تحسين استهلاك الطاقة في المصانع الذكية"
                ]
            },
            en: {
                title: "Industry 4.0 and Sustainable Manufacturing",
                items: [
                    "Smart and Sustainable Manufacturing",
                    "Collaborative Robots in Green Manufacturing",
                    "Sustainable Additive Manufacturing and 3D Printing",
                    "Industrial IoT for Sustainability",
                    "Big Data Analytics in Manufacturing",
                    "Predictive Maintenance of Industrial Equipment",
                    "Energy Optimization in Smart Factories"
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
