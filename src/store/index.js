export const initStore = {
    currentLang: localStorage.getItem('language') || 'ar',
    isDark: localStorage.theme === 'dark' || 
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
    
    init() {
        // Initial setup
        document.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr'
        document.documentElement.lang = this.currentLang
        document.documentElement.classList.toggle('dark', this.isDark)
    },

    toggleLanguage() {
        this.currentLang = this.currentLang === 'ar' ? 'en' : 'ar'

        localStorage.setItem('language', this.currentLang)
        document.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr'
        document.documentElement.lang = this.currentLang
    },

    toggleTheme() {
        console.log('toggle theme')
        this.isDark = !this.isDark
        // Update theme-related settings
        localStorage.theme = this.isDark ? 'dark' : 'light'
        document.documentElement.classList.toggle('dark', this.isDark)
    }
} 