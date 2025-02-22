import { loadComponentContent,getCurrentLang } from '../componentLoader';
export function initHeader() {
    return {
        isOpen: false,
        isScrolled: false,
        languages: ['en', 'ar'],
        content:'',

        async init() {
            const language = localStorage.getItem('language')
            
            if (!language) {
                this.toggleLanguage('en')
                
            }
            const theme = localStorage.getItem('theme')
            if (!theme) {
                this.toggleTheme()
            }
            

            this.content = await loadComponentContent('Header');
            
            // Add scroll event listener
            window.addEventListener('scroll', () => {
                this.isScrolled = window.scrollY > 0
            })

            // Add resize event listener to close mobile menu
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 768) {
                    this.isOpen = false
                }
            })
        },

        toggleMenu() {
            this.isOpen = !this.isOpen
            // Prevent body scroll when menu is open
            document.body.style.overflow = this.isOpen ? 'hidden' : ''
        },

        // Get current language from store
        get currentLang() {
            return getCurrentLang()
        },

        // Get dark mode state from store
        get isDark() {
            return Alpine.store('app').isDark
        },

        // Theme toggle method
        toggleTheme() {
            Alpine.store('app').toggleTheme()
        },

        // Language switch method
        toggleLanguage(lang) {
            if (lang === undefined) {
                Alpine.store('app').toggleLanguage()
            } else {
                Alpine.store('app').toggleLanguage(lang)
            }
        }
    }
}