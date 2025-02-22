import './styles/main.css'
import Alpine from 'alpinejs'
import { initStore } from './store'
import { initHeader } from './components/Header/index'
import { initSpeakers } from './components/Speakers/index'
import { initSchedule } from './components/Schedule/index'
import { initFAQ } from './components/FAQ/index'
//import { initNewsletter } from './components/Newsletter/index'
//import { initChat } from './components/Chat'
import { initCountdown } from './components/Countdown/index'
import { initTopics } from './components/Topics/index'
import { initHero } from './components/Hero/index'
import { translations } from './translations'
import { initWorkshops } from './components/Workshops/index'
import { initFooter } from './components/Footer/index'
import { initObjectives } from './components/Objectives'
import { initCommittees } from './components/Committees'
import { initAbout } from './components/About'
import { initPublications } from './components/Publications'
// Initialize Alpine store
window.Alpine = Alpine
Alpine.store('app', initStore)
// Make Alpine available on the window object

// Register components
Alpine.data('initHeader', initHeader)
Alpine.data('initSpeakers', initSpeakers)
Alpine.data('initSchedule', initSchedule)
Alpine.data('initFAQ', initFAQ)
//Alpine.data('initNewsletter', initNewsletter)
//Alpine.data('initChat', initChat)
Alpine.data('initCountdown', initCountdown)
Alpine.data('initTopics', initTopics)
Alpine.data('initHero', initHero)
Alpine.data('initWorkshops', initWorkshops)
Alpine.data('initFooter', initFooter)
Alpine.data('objectives', initObjectives)
Alpine.data('committees', initCommittees)
Alpine.data('about', initAbout)
Alpine.data('publications', initPublications)
Alpine.start()

// Countdown Timer Logic
document.addEventListener('DOMContentLoaded', () => {
    const conferenceDate = new Date('2024-12-31T00:00:00')
    
    function updateCountdown() {
        const now = new Date()
        const difference = conferenceDate - now

        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        // Check if elements exist before updating
        const daysElement = document.getElementById('days')
        const hoursElement = document.getElementById('hours')
        const minutesElement = document.getElementById('minutes')
        const secondsElement = document.getElementById('seconds')

        if (daysElement) daysElement.textContent = days.toString().padStart(2, '0')
        if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0')
        if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0')
        if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0')
    }

    // Initial update
    updateCountdown()
    
    // Update every second
    setInterval(updateCountdown, 1000)
})

// Make translations available globally if needed
window.translations = translations