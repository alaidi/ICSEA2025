import { loadComponentContent } from '../componentLoader'

export const initNewsletter = () => ({
    content: '',
    async init() {
        this.content = await loadComponentContent('Newsletter');
    }
}) 