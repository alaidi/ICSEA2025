import { loadComponentContent, getCurrentLang } from '../componentLoader';

export const initPublications = () => ({
    content: '',
    publications: {
        en: {
            title: 'Publication',
            description: 'Selected articles from the conference will be published in:',
            journal: {
                name: 'International Journal of Corrosion and Scale Inhibition',
                url: 'https://ijcsi.pro/',
                logo: '/assets/images/ijcsi_logo.jpg'
            },
            features: [
                'Q1 Journal',
                'Indexed in Scopus',
            ],
            button: {
                text: 'Submit your article',
                url: '#'
            }
        },
        ar: {
            title: 'نشر المقالات المختارة',
            description: 'سيتم نشر المقالات المختارة من المؤتمر في:',
            journal: {
                name: 'International Journal of Corrosion and Scale Inhibition',
                url: 'https://ijcsi.pro/',
                logo: '/assets/images/ijcsi_logo.jpg'
            },
            features: [
                'مفهرسة في Scopus',
                'Q1 Journal',
            ],
            button: {
                text: 'إرشادات التقديم',
                url: 'https://ijcsi.pro/about/submissions'
            }
        }
    },
    
    get currentLang() {
        return getCurrentLang()
    },

    async init() {
        this.content = await loadComponentContent('Publications');
    }
}); 