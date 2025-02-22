export function initChat() {
    return {
        isOpen: false,
        messages: [],
        newMessage: '',
        isTyping: false,
        userInfo: {
            name: '',
            email: '',
            submitted: false
        },
        chatHistory: [],

        init() {
            // Load chat history from localStorage
            this.chatHistory = JSON.parse(localStorage.getItem('chatHistory') || '[]')
            
            // Initial greeting message
            this.messages = [{
                id: 1,
                text: 'Hello! How can I help you with the AI-PE Conference?',
                sender: 'bot',
                timestamp: new Date()
            }]

            // Add click outside listener
            document.addEventListener('click', (e) => {
                if (this.isOpen && !e.target.closest('.chat-widget')) {
                    this.minimizeChat()
                }
            })
        },

        async submitUserInfo() {
            if (!this.userInfo.name || !this.validateEmail(this.userInfo.email)) {
                return false
            }
            this.userInfo.submitted = true
            this.addMessage({
                text: `Welcome ${this.userInfo.name}! How can I assist you today?`,
                sender: 'bot'
            })
            return true
        },

        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return re.test(email)
        },

        async sendMessage() {
            if (!this.newMessage.trim()) return
            
            if (!this.userInfo.submitted) {
                if (!await this.submitUserInfo()) {
                    return
                }
            }

            this.addMessage({
                text: this.newMessage,
                sender: 'user'
            })

            const userMessage = this.newMessage
            this.newMessage = ''
            this.isTyping = true

            // Simulate bot thinking
            await new Promise(resolve => setTimeout(resolve, 1000))

            this.addMessage({
                text: await this.getBotResponse(userMessage),
                sender: 'bot'
            })

            this.isTyping = false
            this.saveChat()
        },

        addMessage(message) {
            this.messages.push({
                id: this.messages.length + 1,
                text: message.text,
                sender: message.sender,
                timestamp: new Date()
            })
            this.scrollToBottom()
        },

        async getBotResponse(message) {
            // Enhanced response logic with keywords
            const keywords = {
                registration: ['register', 'sign up', 'join'],
                schedule: ['schedule', 'program', 'agenda', 'when'],
                papers: ['paper', 'submit', 'publication'],
                venue: ['where', 'location', 'place'],
                fees: ['cost', 'price', 'fee']
            }

            message = message.toLowerCase()
            
            for (const [topic, words] of Object.entries(keywords)) {
                if (words.some(word => message.includes(word))) {
                    return this.getTopicResponse(topic)
                }
            }

            return "I'm not sure about that. Would you like to speak with a conference organizer? You can email us at support@conference.com"
        },

        getTopicResponse(topic) {
            const responses = {
                registration: 'You can register for the conference through our online portal. Early bird registration is available until [date]. Would you like me to guide you through the process?',
                schedule: 'The conference is scheduled for [dates]. We have two tracks running simultaneously. Would you like to see the detailed schedule?',
                papers: 'Paper submissions are open until [date]. All papers should follow the IEEE format and will be published in a Scopus-indexed journal. Would you like the submission guidelines?',
                venue: 'The conference will be held at the University of Al-Ain, Iraq. We also offer virtual attendance options. Would you like directions to the venue?',
                fees: 'The registration fees are: Regular: $XXX, Student: $XXX, Virtual Attendance: $XXX. Early bird discounts are available until [date].'
            }
            return responses[topic]
        },

        minimizeChat() {
            this.isOpen = false
        },

        scrollToBottom() {
            setTimeout(() => {
                const chatMessages = document.querySelector('.chat-messages')
                if (chatMessages) {
                    chatMessages.scrollTop = chatMessages.scrollHeight
                }
            }, 100)
        },

        saveChat() {
            const chatSession = {
                userInfo: this.userInfo,
                messages: this.messages,
                timestamp: new Date()
            }
            this.chatHistory.push(chatSession)
            localStorage.setItem('chatHistory', JSON.stringify(this.chatHistory))
        },

        formatTime(date) {
            return new Date(date).toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
            })
        }
    }
} 