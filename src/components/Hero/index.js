import { loadComponentContent } from '../componentLoader';

export const initHero = () => ({
    content: '',
    async init() {
        this.content = await loadComponentContent('Hero');
    },
    get currentLang() {
        return Alpine.store('app').currentLang
    }
});