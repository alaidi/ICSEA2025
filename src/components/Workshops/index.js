//initWorkshops.js
import { loadComponentContent, getCurrentLang } from '../componentLoader';
export const initWorkshops = () => ({
    content: '',

    workshops: [
        {
            id: 1,
            en: {
                lang: 'en',
                duration: '4 hours',
                level: 'Beginner',
                title: 'Machine Learning Basics',
                description: 'Introduction to machine learning concepts and their applications in petroleum engineering.',
            },
            ar: {
                lang: 'ar',
                duration: '4 ساعات',
                level: 'مبتدئ',
                title: 'الأساسيات في التعلم الآلي',
                description: 'مقدمة عن مفاهيم التعلم الآلي وتطبيقاتها في هندسة البترول.',
            },
        },
        {
            id: 2,
            en: {
                lang: 'en',
                duration: '4 hours',
                level: 'Advanced',
                title: 'Advanced Data Analytics',
                description: 'Deep dive into advanced analytics techniques for oil and gas data analysis.',
            },
            ar: {
                lang: 'ar',
                duration: '4 ساعات',
                level: 'متقدم',
            title: 'تحليل البيانات المتقدم',
                description: 'تحليل البيانات المتقدم للبترول والغاز',
            },
        }

    ],
    get currentLang() {
        return getCurrentLang()
    },

    async init() {
        this.content = await loadComponentContent('Workshops');
    }

});