import { loadComponentContent, getCurrentLang } from '../componentLoader';

export const initCommittees = () => ({
    content: '',
    committees: [
        {
            id: 'supreme',
            en: {
                title: 'Supreme Committee',
                members: [
                    'Prof. Dr. Shafiq S. Shafiq',
                    'Assist. Prof. Dr. Atheer Y. Udah',
                    'Assist. Prof. Dr. Haydar A. Marhoon',
                    'Prof. Dr. Firas F. Hussain',
                    'Prof. Dr. Muhammad A. Al-Tahan',
                    'Assist. Prof. Dr. Rafid S. Al-Jiboori',
                    'Prof. Dr. Hussein B. Marhoon'
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
                    'ا.د. شفيق شاكر شفيق المولى',
                    'أ.م.د.  اثير يوسف عودة',
                    'أ.م.د.حيدر عبدالإمير مرهون الخفاجي',
                    'أ.د. فراس فائق كاظم',
                    'أ.د. محمد أ. الطحان',
                    'أ.م.د. رافد صكبان الجبوري',
                    'أ.د. حسين ب. مرهون'
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
                    'Assist. Prof. Dr. Haydar A. Marhoon/ Al Ain Iraqi University',
                    'Prof. Dr. Firas Faeq Kazem / Al Ain Iraqi University',
                    'Prof. Dr. Kamaruzzaman Bin Sopin / University of Petronas, Malaysia',
                    'Prof. Dr. Ahmed A. Al-Amiery / Al Ain Iraqi University',
                    'Prof. Dr. Hussein A. Kazem / Sohar University, Oman',
                    'Prof. Dr. Mohd Sobri Takriff / University of Sharjah, UAE',
                    'Assist. Prof. Dr. Taha Ahmed Alawi/ Al-Nahrain University',
                    'Prof. Dr. Ahmed Esmat Abdel Moneim / Helwan University, Egypt',
                    'Prof. Dr. Emad A. Yousif / Al-Nahrain University',
                    'Prof. Dr. Ahmed A. Ahmed / Al-Mustansiriya University',
                    'Assist. Prof. Dr. Wan Nor Roslam Wan Isahak / National University of Malaysia (UKM), Malaysia',
                    'Dr. Ebrahim Mohmoudi / National University of Malaysia (UKM), Malaysia',
                    'Prof. Dr. Jalila Ben Salah Abbes / University of Monastir, Tunisia',
                    'Prof. Dr. Jamel Jbeli / University of Monastir, Tunisia'
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
                    'أ.م.د. حيدر أ. مرهون / جامعة العين العراقية',
                    'أ.د. فراس فائق كاظم / جامعة العين العراقية',
                    'أ.د. قمر الزمان بن سوبين / جامعة بتروناس، ماليزيا',
                    'أ.د. أحمد أ. العامري / جامعة العين العراقية',
                    'أ.د. حسين أ. كاظم / جامعة صحار، عمان',
                    'أ.د. محمد صبري تكريف / جامعة الشارقة، الإمارات',
                    'أ.م.د. طه أحمد علوي / جامعة النهرين',
                    'أ.د. أحمد عصمت عبد المنعم / جامعة حلوان، مصر',
                    'أ.د. عماد أ. يوسف / جامعة النهرين',
                    'أ.د. أحمد أ. أحمد / الجامعة المستنصرية',
                    'أ.م.د. وان نور رسلام وان إسحاق / الجامعة الوطنية الماليزية',
                    'د. إبراهيم محمودي / الجامعة الوطنية الماليزية',
                    'أ.د. جليلة بن صالح عباس / جامعة المنستير، تونس',
                    'أ.د. جمال جبلي / جامعة المنستير، تونس'
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
                    'Prof. Dr. Firas Faeq Kazem',
                    'Prof. Dr. Mohammed Abdul Ameer Abdulnabi',
                    'Prof. Dr. Raed Saei Jassim',
                    'Assist. Prof. Dr. Rafid Sabkan',
                    'Dr. Sarmad Kazem Thiyab',
                    'Assist. Prof. Dr.  Abdul Hadi Mohammed Dakhil',
                    'Dr. Aed Hamid',
                    'Assist. Prof. Dr. Najeh Youssef Al-Ali',
                    'Prof. Dr. Ahmed Al-Amiri',
                    'Dr. Lina Mohammed Shaker',
                    'Assist. Prof. Dr. Hassan Abdul Hadi',
                    'Fraqad Ali Hadi Issa',
                    'Ghanem Mdeeh Farman'
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
                    'أ.د. فراس فائق كاظم',
                    'أ.د. محمد عبد الأمير عبد النبي',
                    'أ.د. رائد ساعي جاسم',
                    'أ.م.د. رافد سبكان',
                    'د. سرمد كاظم ذياب',
                    'أ.م.د. عبد الهادي محمد دخيل',
                    'د. عائد حميد',
                    'أ.م.د. ناجح يوسف العلي',
                    'أ.د. أحمد العامري',
                    'د. لينا محمد شاكر',
                    'أ.م.د. حسن عبد الهادي',
                    'فرقد علي هادي عيسى',
                    'غانم مديح فرمان'
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
                    'Assist. Prof. Dr. Abdul Hadi Mohammed Idkell',
                    'Dr. Hasnaa Mohammed Hassan',
                    'Dr. Lina Mohammed Shaker',
                    'Hussein Fadhel',
                    'Mo\'mmal Abbas'
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
                    'أ.م.د. عبد الهادي محمد دخيل',
                    'د. حسناء محمد حسن',
                    'د. لينا محمد شاكر',
                    'حسين فاضل',
                    'مؤمل عباس'
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
                    'Prof. Dr. Firas Faeq Kazem',
                    'Dr. Asaad Shakir Hamid',
                    'Dr. Ahmed Saqr Ahmed',
                    'Dr. Mohammed Yassin Subaih',
                    'Assist. Prof. Dr. Sarmad Kazem Thiyab',
                    'Dr. Mortadha Dhughim Abdullah',
                    'Asst. Lecturer Ahmed Ameen Hassan'
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
                    'أ.د. فراس فائق كاظم',
                    'د. أسعد شاكر حميد',
                    'د. أحمد صقر أحمد',
                    'د. محمد ياسين صبيح',
                    'أ.م.د. سرمد كاظم ذياب',
                    'د. مرتضى ضغيم عبد الله',
                    'م.م. أحمد أمين حسن'
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
                    'Dr. Asaad Shakir Hamid',
                    'Dr. Mortadha Dhughim Abdullah',
                    'Dr. Maytham Adi Mohammed Saleh',
                    'Asst. Lecturer Baqir Kazem Kashash'
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
                    'د. أسعد شاكر حميد',
                    'د. مرتضى ضغيم عبد الله',
                    'د. ميثم عدي محمد صالح',
                    'م.م. باقر كاظم كشاش'
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