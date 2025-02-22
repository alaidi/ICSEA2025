import { loadComponentContent, getCurrentLang } from '../componentLoader';

export const initCommittees = () => ({
    content: '',
    committees: [
        {
            id: 'supreme',
            en: {
                title: 'Supreme Committee',
                members: [
                    'Prof Dr Haider Thiab Salem',
                    'Assist. Prof. Dr. Abdul Hadi Mohammed Alaidi',
                ],
                responsibilities: [
                    'Setting the general direction of the conference.',
                    'Supervising all sub-committees.',
                    'Making strategic decisions related to the conference.'
                ],
                structure: 'University leadership, including the President of the University and the Dean of the College of Education.'
            },
            ar: {
                title: 'اللجنة العليا',
                members: [
                    'ا.د. حيدر ذياب سالم',
                    'أ.م.د.  عبد الهادي محمد ادخيل',
                ],
                responsibilities: [
                    'تحديد التوجه العام للمؤتمر.',
                    'الإشراف على جميع اللجان الفرعية.',
                    'اتخاذ القرارات الاستراتيجية المتعلقة بالمؤتمر.'
                ],
                structure: 'قيادة الجامعة، بما في ذلك رئيس الجامعة وعميد كلية التربية.'
            }
        },
        {
            id: 'scientific',
            en: {
                title: 'Scientific Committee',
                members: [
                    'Assist. Prof. Dr. Abdul Hadi Mohammed Alaidi',
                ],
                responsibilities: [
                    'Reviewing and evaluating submitted research papers.',
                    'Selecting accepted papers for presentation during the conference.',
                    'Providing scientific recommendations on the quality of the conference\'s scientific content.'
                ],
                structure: 'A selection of academics and experts in chemistry and sustainable industries.'
            },
            ar: {
                title: 'اللجنة العلمية',
                members: [
                    'أ.م.د. عبد الهادي محمد ادخيل',
                ],
                responsibilities: [
                    'مراجعة وتقييم الأوراق البحثية المقدمة.',
                    'اختيار الأوراق المقبولة للعرض خلال المؤتمر.',
                    'تقديم التوصيات العلمية حول جودة المحتوى العلمي للمؤتمر.'
                ],
                structure: 'مجموعة من الأكاديميين والخبراء في الكيمياء والصناعات المستدامة.'
            }
        },
        {
            id: 'preparatory',
            en: {
                title: 'Preparatory Committee',
                members: [
                    'Assist. Prof. Dr. Abdul Hadi Mohammed Alaidi',
                ],
                responsibilities: [
                    'Supervising the logistical preparations for the conference.',
                    'Coordinating session and workshop schedules.',
                    'Communicating with participants and speakers.'
                ],
                structure: 'Members of the academic and administrative staff of the college.'
            },
            ar: {
                title: 'اللجنة التحضيرية',
                members: [
                    'أ.م.د. عبد الهادي محمد ادخيل',
                ],
                responsibilities: [
                    'الإشراف على التحضيرات اللوجستية للمؤتمر.',
                    'تنسيق جداول الجلسات وورش العمل.',
                    'التواصل مع المشاركين والمتحدثين.'
                ],
                structure: 'أعضاء من الهيئة الأكاديمية والإدارية للكلية.'
            }
        },
        {
            id: 'technical',
            en: {
                title: 'Technical Committee',
                members: [
                    'Assist. Prof. Dr. Abdul Hadi Mohammed Alaidi',
                ],
                responsibilities: [
                    'Providing technical and technological support during the conference.',
                    'Managing audiovisual equipment.',
                    'Ensuring the smooth flow of presentations and sessions.'
                ],
                structure: 'A team of specialists in information technology and technical support.'
            },
            ar: {
                title: 'اللجنة التقنية',
                members: [
                    'أ.م.د. عبد الهادي محمد ادخيل',
                ],
                responsibilities: [
                    'تقديم الدعم التقني والتكنولوجي خلال المؤتمر.',
                    'إدارة المعدات السمعية والبصرية.',
                    'ضمان سير العروض والجلسات بسلاسة.'
                ],
                structure: 'فريق من المتخصصين في تكنولوجيا المعلومات والدعم التقني.'
            }
        },
        {
            id: 'organizing',
            en: {
                title: 'Organizing Committee',
                members: [
                    'Assist. Prof. Dr. Abdul Hadi Mohammed Alaidi',
                ],
                responsibilities: [
                    'Managing media coverage of the conference locally and internationally.',
                    'Handling advertisements and communication with the press and media outlets.',
                    'Publishing conference updates on social media platforms and the website.'
                ],
                structure: 'Members specialized in media and public relations.'
            },
            ar: {
                title: 'اللجنة المنظمة',
                members: [
                    'أ.م.د. عبد الهادي محمد ادخيل',
                ],
                responsibilities: [
                    'إدارة التغطية الإعلامية للمؤتمر محلياً ودولياً.',
                    'التعامل مع الإعلانات والتواصل مع الصحافة ووسائل الإعلام.',
                    'نشر تحديثات المؤتمر على منصات التواصل الاجتماعي والموقع الإلكتروني.'
                ],
                structure: 'أعضاء متخصصون في الإعلام والعلاقات العامة.'
            }
        },
        {
            id: 'reception',
            en: {
                title: 'Reception Committee',
                members: [
                    'Assist. Prof. Dr. Abdul Hadi Mohammed Alaidi',
                ],
                responsibilities: [
                    'Welcoming and registering conference participants.',
                    'Providing information and assistance to attendees.',
                    'Managing the registration desk and conference materials distribution.'
                ],
                structure: 'Staff members dedicated to participant services and hospitality.'
            },
            ar: {
                title: 'لجنة الاستقبال',
                members: [
                    'أ.م.د. عبد الهادي محمد ادخيل',
                ],
                responsibilities: [
                    'استقبال وتسجيل المشاركين في المؤتمر.',
                    'تقديم المعلومات والمساعدة للحاضرين.',
                    'إدارة مكتب التسجيل وتوزيع مواد المؤتمر.'
                ],
                structure: 'أعضاء مخصصون لخدمات المشاركين والضيافة.'
            }
        }
    ],

    get currentLang() {
        return getCurrentLang()
    },

    async init() {
        this.content = await loadComponentContent('Committees');
    }
});
