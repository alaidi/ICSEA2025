import { loadComponentContent, getCurrentLang } from '../componentLoader';
export function initFooter() {
    return {
        content:'',

        async init() {
            this.content = await loadComponentContent('Footer');
        },

        get currentLang() {
            return getCurrentLang()
        }

      
    }
} 