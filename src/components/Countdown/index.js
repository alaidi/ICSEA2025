import { loadComponentContent, getCurrentLang } from '../componentLoader';

export function initCountdown() {
    return {
        content: '',
       
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
        conferenceDate: new Date('2025-04-22T00:00:00'),
        
        async init() {
            this.content = await loadComponentContent('Countdown');

            this.updateCountdown()
            setInterval(() => this.updateCountdown(), 1000)
        },
        
        updateCountdown() {
            const now = new Date()
            const difference = this.conferenceDate - now

            this.days = Math.floor(difference / (1000 * 60 * 60 * 24))
                .toString()
                .padStart(2, '0')
            this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                .toString()
                .padStart(2, '0')
            this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
                .toString()
                .padStart(2, '0')
            this.seconds = Math.floor((difference % (1000 * 60)) / 1000)
                .toString()
                .padStart(2, '0')
        },
        get currentLang() {
            return getCurrentLang()
        }
      
    }
} 