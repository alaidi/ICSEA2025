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
                        'Welcome speech by the President of Al-Ain University',
                        'Opening address by the Dean of the College of Petroleum Engineering',
                        'Presentation of conference objectives and themes'
                    ]
                },
                keynotePresentations: {
                    time: '9:30 - 11:30 AM',
                    speakers: [
                        {
                            name: 'Professor Kamaruzzaman Bin Sopin',
                            topic: 'Artificial Intelligence for Energy Optimization in the Petroleum Industry'
                        },
                        {
                            name: 'Professor Ahmed Al-Amiery', 
                            topic: 'Corrosion Prediction and Prevention Using AI: Advancing Maintenance Strategies in Oil Infrastructure'
                        }
                    ]
                },
                sessionOne: {
                    time: '11:30 AM - 1:00 PM',
                    theme: 'The Role of AI in Improving Oil Exploration and Production',
                    items: [
                        'Case Study: AI Applications in Enhancing Drilling Models',
                        'Open Discussion (20 minutes)'
                    ]
                },
                lunchBreak: {
                    time: '1:00 - 2:30 PM'
                },
                sessionTwo: {
                    time: '2:30 - 4:00 PM',
                    theme: 'AI in Corrosion Management and Equipment Longevity',
                    items: [
                        'Research Paper: Techniques for Smart Corrosion Mitigation'
                    ]
                },
                workshop: {
                    time: '4:30 - 6:00 PM',
                    title: 'AI in Oil and Gas Field Management'
                }
            },
            dayTwo: {
                keynotePresentations: {
                    time: '9:00 - 11:00 AM',
                    speakers: [
                        {
                            name: 'Dr. Ebrahim Mohmoudi',
                            topic: 'AI Applications in Polymers for Petroleum Engineering: A Game-Changer for Materials Innovation'
                        }
                    ]
                },
                sessionThree: {
                    time: '11:00 AM - 1:00 PM',
                    theme: 'Digital Transformation and Environmental Sustainability',
                    items: [
                        'Research Paper: AI for Carbon Emission Reduction in Oil Facilities'
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
                    title: 'Future Innovations in Smart Field Management'
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
                        'كلمة ترحيبية من رئيس جامعة العين',
                        'كلمة افتتاحية من عميد كلية هندسة البترول',
                        'عرض أهداف ومحاور المؤتمر'
                    ]
                },
                keynotePresentations: {
                    time: '٩:٣٠ - ١١:٣٠ صباحاً',
                    speakers: [
                        {
                            name: 'البروفيسور كمارالزمان بن سوبين',
                            topic: 'الذكاء الاصطناعي لتحسين الطاقة في صناعة البترول'
                        },
                        {
                            name: 'البروفيسور أحمد العامري',
                            topic: 'التنبؤ بالتآكل والوقاية منه باستخدام الذكاء الاصطناعي: تطوير استراتيجيات الصيانة في البنية التحتية النفطية'
                        }
                    ]
                },
                sessionOne: {
                    time: '١١:٣٠ صباحاً - ١:٠٠ مساءً',
                    theme: 'دور الذكاء الاصطناعي في تحسين استكشاف وإنتاج النفط',
                    items: [
                        'دراسة حالة: تطبيقات الذكاء الاصطناعي في تحسين نماذج الحفر',
                        'نقاش مفتوح (٢٠ دقيقة)'
                    ]
                },
                lunchBreak: {
                    time: '١:٠٠ - ٢:٣٠ مساءً'
                },
                sessionTwo: {
                    time: '٢:٣٠ - ٤:٠٠ مساءً',
                    theme: 'الذكاء الاصطناعي في إدارة التآكل وعمر المعدات',
                    items: [
                        'ورقة بحثية: تقنيات التخفيف الذكي من التآكل'
                    ]
                },
                workshop: {
                    time: '٤:٣٠ - ٦:٠٠ مساءً',
                    title: 'الذكاء الاصطناعي في إدارة حقول النفط والغاز'
                }
            },
            dayTwo: {
                keynotePresentations: {
                    time: '٩:٠٠ - ١١:٠٠ صباحاً',
                    speakers: [
                        {
                            name: 'الدكتور إبراهيم محمودي',
                            topic: 'تطبيقات الذكاء الاصطناعي في البوليمرات لهندسة البترول: نقلة نوعية في ابتكار المواد'
                        }
                    ]
                },
                sessionThree: {
                    time: '١١:٠٠ صباحاً - ١:٠٠ مساءً',
                    theme: 'التحول الرقمي والاستدامة البيئية',
                    items: [
                        'ورقة بحثية: الذكاء الاصطناعي لتقليل انبعاثات الكربون في المنشآت النفطية'
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
                    title: 'الابتكارات المستقبلية في إدارة الحقول الذكية'
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