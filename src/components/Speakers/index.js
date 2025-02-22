import { loadComponentContent, getCurrentLang } from '../componentLoader';

export const initSpeakers = () => ({
    content: '',
    speakers: [
        {
            id: 1,
            name: 'Professor Kamaruzzaman Bin Sopin',
            role: 'University of Petronas, Malaysia',
            image: '/assets/images/speaker1.jpg',
            bio: 'Professor Sopin specializes in AI\'s role in optimizing energy systems, reducing wastage, and achieving sustainable energy goals in petroleum engineering.',
            lectureTitle: 'Artificial Intelligence for Energy Optimization in the Petroleum Industry',
            social: {
                url: 'https://www.utp.edu.my/directories/Pages/academic.aspx?persondetail=3997',
            }
        },
        {
            id: 2,
            name: 'Professor Ahmed Al-Amiery',
            role: 'Al-Ayen University, Iraq',
            image: '/assets/images/speaker2.jpg',
            bio: 'Professor Al-Amiery specializes in innovative AI-based strategies for predicting and mitigating corrosion in oil pipelines and facilities, aiming to enhance safety and operational efficiency.',
            lectureTitle: 'Corrosion Prediction and Prevention Using AI: Advancing Maintenance Strategies in Oil Infrastructure',
            social: {
                url: 'https://twas.org/directory/al-amiery-ahmed',
            }
        },
        {
            id: 3,
            name: 'Dr. Ebrahim Mohmoudi',
            role: 'University Kebangsaan Malaysia',
            image: '/assets/images/speaker3.jpg',
            bio: 'Dr. Mohmoudi specializes in cutting-edge AI-driven advancements in polymer technologies, particularly focusing on enhanced oil recovery and sustainable material solutions.',
            lectureTitle: 'AI Applications in Polymers for Petroleum Engineering: A Game-Changer for Materials Innovation',
            social: {
                url: 'https://ukmsarjana.ukm.my/main/muatturun_cv/SzAyMzQ2Nw==',
            }
        }
    ],
    selectedSpeaker: null,
    isModalOpen: false,
    get currentLang() {
        return getCurrentLang()
    },

  
    async init() {
        // Load the HTML content
        this.content = await loadComponentContent('Speakers');
        
        // Add keyboard event listener for modal
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isModalOpen) {
                this.closeModal();
            }
        });

        // Initialize image loading for all speakers
        this.speakers.forEach(speaker => this.loadImage(speaker));
    },

    showSpeakerDetails(speaker) {
        this.selectedSpeaker = speaker;
        this.isModalOpen = true;
        document.body.style.overflow = 'hidden';
    },

    closeModal() {
        this.isModalOpen = false;
        document.body.style.overflow = '';
    },

    loadImage(speaker) {
        const img = new Image();
        img.src = speaker.image;
        img.onload = () => {
            speaker.imageLoaded = true;
        };
    }
}); 