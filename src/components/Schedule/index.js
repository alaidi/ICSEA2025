import { loadComponentContent, getCurrentLang } from '../componentLoader'

export const initSchedule = () => ({
    content: '',
    activeDay: 'dayOne',
    schedule: {
        en: {
            dayOne: {
                openingSession: {
                    time: '9:00 - 9:30 AM',
                    items: [
                        'Registration and reception of participants',
                        'Welcome speech by the President of University of Engineering and Technology',
                        'Presentation of conference objectives and themes'
                    ]
                },
                keynotePresentations: {
                    time: '9:30 - 11:30 AM',
                    speakers: [
                        {
                            name: 'Professor ',
                            topic: 'Artificial Intelligence for Energy Optimization in the Industry'
                        },
                        {
                            name: 'Professor ',
                            topic: 'Corrosion Prediction and Prevention Using AI: Advancing Maintenance Strategies in Infrastructure'
                        }
                    ]
                },
                sessionOne: {
                    time: '11:30 AM - 1:00 PM',
                    theme: 'The Role of AI in Improving Industry',
                    items: [
                        'Case Study: AI Applications in Enhancing Drilling Models in Industry',
                        'Open Discussion (20 minutes)'
                    ]
                },
                lunchBreak: {
                    time: '1:00 - 2:30 PM'
                },
                sessionTwo: {
                    time: '2:30 - 4:00 PM',
                    theme: 'AI in Digital Corrosion Mitigation',
                    items: [
                        'Research Paper: Techniques for Digital Corrosion Mitigation'
                    ]
                },
                workshop: {
                    time: '4:30 - 6:00 PM',
                    title: 'AI in Innovative Industry'
                }
            },
            dayTwo: {
                keynotePresentations: {
                    time: '9:00 - 11:00 AM',
                    speakers: [
                        {
                            name: 'Dr. ',
                            topic: 'AI Applications in Software development'
                        }
                    ]
                },
                sessionThree: {
                    time: '11:00 AM - 1:00 PM',
                    theme: 'Digital Innovation in Industry',
                    items: [
                        'Research Paper: AI in Industry'
                    ]
                },
                lunchBreak: {
                    time: '1:00 - 2:30 PM'
                },
                closingSession: {
                    time: '2:30 - 4:00 PM',
                    items: [
                        'Presentation of conference results and recommendations',
                        'Honoring researchers and participants'
                    ]
                },
                workshop: {
                    time: '4:30 - 6:00 PM',
                    title: 'Future Innovations in Smart Industry'
                },
                conclusion: {
                    time: '6:00 PM',
                    items: [
                        'Announcement of accepted research for publication',
                        'Distribution of attendance certificates'
                    ]
                }
            }
        },
        ar: {
            dayOne: {
                openingSession: {
                    time: '٩:٠٠ - ٩:٣٠ صباحاً',
                    items: [
                        'تسجيل واستقبال المشاركين',
                        'كلمة ترحيبية من رئيس جامعة العلوم والتكنولوجيا',
                        'كلمة افتتاحية من عميد كلية هندسة',
                        'عرض أهداف ومحاور المؤتمر'
                    ]
                },
                keynotePresentations: {
                    time: '٩:٣٠ - ١١:٣٠ صباحاً',
                    speakers: [
                        {
                            name: 'البروفيسور ',
                            topic: 'الذكاء الاصطناعي لتحسين الطاقة في صناعة'
                        },
                        {
                            name: 'البروفيسور ',
                            topic: 'التنبؤ بالتآكل والوقاية منه باستخدام الذكاء الاصطناعي: تطوير استراتيجيات الصيانة في البنية التحتية'
                        }
                    ]
                },
                sessionOne: {
                    time: '١١:٣٠ صباحاً - ١:٠٠ مساءً',
                    theme: 'دور الذكاء الاصطناعي في تحسين صناعة',
                    items: [
                        'دراسة حالة: تطبيقات الذكاء الاصطناعي في تحسين نماذج الحفر في صناعة',
                        'نقاش مفتوح (٢٠ دقيقة)'
                    ]
                },
                lunchBreak: {
                    time: '١:٠٠ - ٢:٣٠ مساءً'
                },
                sessionTwo: {
                    time: '٢:٣٠ - ٤:٠٠ مساءً',
                    theme: 'الذكاء الاصطناعي في إدارة التآكل وعمر المعدات الصناعية',
                    items: [
                        'ورقة بحثية: تقنيات التخفيف الذكي من التآكل في صناعة'
                    ]
                },
                workshop: {
                    time: '٤:٣٠ - ٦:٠٠ مساءً',
                    title: 'الذكاء الاصطناعي في صناعة'
                }
            },
            dayTwo: {
                keynotePresentations: {
                    time: '٩:٠٠ - ١١:٠٠ صباحاً',
                    speakers: [
                        {
                            name: 'الدكتور ',
                            topic: 'تطبيقات الذكاء الاصطناعي في تطوير البرمجيات'
                        }
                    ]
                },
                sessionThree: {
                    time: '١١:٠٠ صباحاً - ١:٠٠ مساءً',
                    theme: 'الابتكار الرقمي في صناعة',
                    items: [
                        'ورقة بحثية: الذكاء الاصطناعي في صناعة'
                    ]
                },
                lunchBreak: {
                    time: '١:٠٠ - ٢:٣٠ مساءً'
                },
                closingSession: {
                    time: '٢:٣٠ - ٤:٠٠ مساءً',
                    items: [
                        'عرض نتائج وتوصيات المؤتمر',
                        'تكريم الباحثين والمشاركين'
                    ]
                },
                workshop: {
                    time: '٤:٣٠ - ٦:٠٠ مساءً',
                    title: 'الابتكارات المستقبلية في صناعة'
                },
                conclusion: {
                    time: '٦:٠٠ مساءً',
                    items: [
                        'إعلان الأبحاث المقبولة للنشر',
                        'توزيع شهادات الحضور'
                    ]
                }
            }
        }
    },
    get currentLang() {
        return getCurrentLang()
    },
    async init() {
        const baseContent = await loadComponentContent('Schedule');
        this.content = { ...this.content, ...baseContent };
    }
})
