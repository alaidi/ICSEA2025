import { loadComponentContent, getCurrentLang } from '../componentLoader';

export const initAbout = () => ({
    content: '',
    about: {
        en: {
            title: 'About the Conference',
            paragraphs: [
                'The First International Conference on Sustainable Engineering and Computer Science Applications (ICSECSA 2025) focuses on cutting-edge research and technological advancements in engineering and computer sciences. The conference aims to explore sustainable solutions, artificial intelligence applications, and emerging innovations that contribute to the development of smart and efficient systems.',
                'This event will provide a platform for researchers, academics, and industry professionals to discuss the latest trends, challenges, and opportunities in sustainable engineering, AI-driven solutions, and computational sciences, fostering interdisciplinary collaboration and knowledge exchange.'
            ]
        },
        ar: {
            title: 'عن المؤتمر',
            paragraphs: [
                'يركز المؤتمر الدولي الأول لتطبيقات الهندسة المستدامة وعلوم الحاسوب (ICSECSA 2025) على أحدث الأبحاث والتطورات التكنولوجية في مجالات الهندسة وعلوم الحاسوب. يهدف المؤتمر إلى استكشاف الحلول المستدامة، وتطبيقات الذكاء الاصطناعي، والابتكارات الناشئة التي تسهم في تطوير أنظمة ذكية وفعالة.',
                'سيكون هذا الحدث منصة للباحثين والأكاديميين والمتخصصين في الصناعة لمناقشة أحدث الاتجاهات والتحديات والفرص في الهندسة المستدامة، والحلول المدعومة بالذكاء الاصطناعي، وعلوم الحوسبة، وتعزيز التعاون متعدد التخصصات وتبادل المعرفة.'
            ]
        }
    },

    get currentLang() {
        return getCurrentLang();
    },

    async init() {
        this.content = await loadComponentContent('About');
    }
});
