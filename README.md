# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS 4
- **Smooth Animations**: Framer Motion for page transitions and micro-interactions
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Dark Theme**: Beautiful dark mode with glass morphism effects
- **Performance Optimized**: GPU acceleration, lazy loading, and optimized animations
- **SEO Ready**: Meta tags, sitemap, robots.txt

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/        # Header, Footer
│   │   ├── sections/      # Hero, About, Projects, Skills, Certifications, Contact
│   │   ├── shared/        # Reusable components
│   │   └── ui/            # Base UI components (Button, Card, Badge)
│   ├── data/              # Projects, certifications, skills data
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── App.tsx            # Main application component
├── public/                # Static assets (images, icons, PDFs)
└── dist/                  # Build output (generated)
```

## 🛠️ Development

### Prerequisites
- Node.js 20+
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 📊 Featured Projects

1. **G-Note** - PWA + Chrome Extension for note-taking with Google Drive sync
2. **Graphos AI Studio** - AI content detection and humanization platform
3. **LocalizeAI** - Localization testing tool for developers
4. **AI Scraper** - Smart web data extractor powered by Gemini AI

## 🎨 Customization

### Update Projects
Edit `src/data/projects.ts` to add/modify projects.

### Update Skills
Edit `src/data/projects.ts` (skills object) to update skill categories.

### Update Certifications
Edit `src/data/certifications.ts` to add certifications.

### Change Theme Colors
Edit `src/index.css` to modify color variables and gradients.

## 📝 License

MIT License - Feel free to use this template for your own portfolio!

## 👤 Author

**Joe Alves**
- GitHub: [@joealves517](https://github.com/joealves517)
- Email: alvesoscar517@gmail.com
- Portfolio: [joealves517.github.io/Portfolio](https://joealves517.github.io/Portfolio/)
