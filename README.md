# AI-PE Conference 2024 Website

## Overview
The official website for the AI-PE Conference 2024, focusing on Artificial Intelligence applications in Petroleum Engineering. This website is built using modern web technologies and provides a bilingual experience in English and Arabic.

## Features
- 🌐 Bilingual Support (English/Arabic)
- 🌙 Dark Mode
- ⏱️ Conference Countdown Timer
- 📱 Responsive Design
- 🎯 Interactive Topics Section
- ❓ FAQ System
- 📝 Registration System
- 📅 Schedule Display
- 🔍 SEO Optimized

## Technologies Used
- HTML5
- CSS3 (Tailwind CSS)
- JavaScript
- Alpine.js
- Vite

## Project Structure 
ai-pe-conference/
├── src/
│ ├── components/
│ │ ├── Hero/
│ │ ├── Topics/
│ │ ├── Countdown/
│ │ ├── FAQ/
│ │ └── ...
│ ├── utils/
│ │ ├── language.js
│ │ ├── alpineMixins.js
│ │ └── componentLoader.js
│ ├── styles/
│ │ └── buttons.css
│ └── main.js
├── public/
│ ├── images/
│ └── favicon/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository

``` 
npm install
npm run dev
```



## Development

### Adding New Components
1. Create a new directory in `src/components/`
2. Add `index.js` and `index.html` files
3. Register the component in `main.js`

### Styling
- Use Tailwind CSS utility classes
- Custom styles in `src/styles/`
- Follow the established design system

### Translations
- Add new translations in both English and Arabic
- Use the language utility functions
- Test RTL layout for Arabic

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Contact
- Website: [alaidi.net](https://alaidi.net)
- Email: alaidi@uowasit.edu.iq
- Twitter: [@yourhandle](https://twitter.com/aboulheja)

## Acknowledgments
- [Tailwind CSS](https://tailwindcss.com)
- [Alpine.js](https://alpinejs.dev)
- [Vite](https://vitejs.dev)