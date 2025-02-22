# ICSEA2025 Conference Website

## Overview
The official website for the First International Conference on Sustainable Engineering and Computer Science Applications (ICSEA2025). This website is built using modern web technologies and provides a bilingual experience in English and Arabic.

## Features
- 🌐 Bilingual Support (English/Arabic)
- 🌙 Dark Mode Support
- ⏱️ Conference Countdown Timer
- 📱 Responsive Design
- 🎯 Interactive Topics Section
- ❓ FAQ System
- 📝 Registration System
- 📅 Schedule Display
- 🔍 SEO Optimized
- 📄 Dynamic Content Loading
- 🔄 RTL/LTR Layout Support

## Technologies Used
- HTML5
- CSS3 (Tailwind CSS)
- JavaScript
- Alpine.js
- Vite
- Tailwind RTL Plugin
- PostCSS

## Project Structure
```
icsea2025-conference/
├── src/
│   ├── components/
│   │   ├── About/
│   │   ├── Committees/
│   │   ├── Countdown/
│   │   ├── FAQ/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── Publications/
│   │   ├── Schedule/
│   │   ├── Speakers/
│   │   ├── Topics/
│   │   └── Workshops/
│   ├── utils/
│   │   ├── componentLoader.js
│   │   └── language.js
│   ├── translations/
│   │   └── index.js
│   ├── styles/
│   │   └── main.css
│   └── main.js
├── public/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   └── site.webmanifest
├── index.html
├── committees.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/your-username/icsea2025-conference.git
cd icsea2025-conference
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

5. Preview production build
```bash
npm run preview
```

## Development Guidelines

### Adding New Components
1. Create a new directory in `src/components/`
2. Add component files:
   - `index.js` - Component logic
   - `index.html` - Component template
3. Register the component in `src/main.js`

### Styling Guidelines
- Use Tailwind CSS utility classes
- Custom styles should be added to `src/styles/`
- Follow the established color scheme and design system
- Ensure RTL support for Arabic layout

### Translation Guidelines
1. Add new translations in `src/translations/index.js`
2. Include both English and Arabic versions
3. Use the translation system in components:
```javascript
x-text="currentLang === 'ar' ? 'Arabic Text' : 'English Text'"
```

### Component Structure
```javascript
export const initComponent = () => ({
    content: '',
    async init() {
        this.content = await loadComponentContent('ComponentName');
    }
});
```

## Deployment
The website uses GitHub Pages for deployment. To deploy:

```bash
npm run deploy
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Contact
- Website: [icsea2025.istikshaf.org](https://icsea2025.istikshaf.org)
- Email: info@icsea2025.istikshaf.org

## Acknowledgments
- [Tailwind CSS](https://tailwindcss.com)
- [Alpine.js](https://alpinejs.dev)
- [Vite](https://vitejs.dev)
