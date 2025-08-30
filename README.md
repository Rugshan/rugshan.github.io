# Rugshan Gnanandram - Portfolio

A modern, responsive portfolio website built with **Astro** and **Tailwind CSS**.

🌐 **Live Site**: https://rugshan.github.io/

## 🚀 Features

- **Modern Stack**: Built with Astro for performance and Tailwind CSS for styling
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: AOS (Animate On Scroll) library for engaging animations
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Fast Performance**: Static site generation with optimized assets
- **Professional Sections**: Home, About, Experience, Projects, Skills, Interests, Contact

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- **Deployment**: GitHub Pages with GitHub Actions
- **Icons**: Custom SVG icons and emojis
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Experience.astro
│   ├── Projects.astro
│   ├── Skills.astro
│   ├── Interests.astro
│   └── Contact.astro
├── layouts/             # Page layouts
│   └── Layout.astro
├── pages/               # Astro pages
│   └── index.astro
└── styles/              # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Rugshan/rugshan.github.io.git
cd rugshan.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.mjs`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... more shades
  }
}
```

### Content
Update the content in each component file:
- `src/components/Hero.astro` - Hero section content
- `src/components/About.astro` - About section
- `src/components/Experience.astro` - Work experience and education
- `src/components/Projects.astro` - Project showcase
- `src/components/Skills.astro` - Skills and expertise
- `src/components/Interests.astro` - Personal interests
- `src/components/Contact.astro` - Contact information

### Images
Place your images in the `public/images/` directory and reference them in your components.

## 📦 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions. The workflow is configured in `.github/workflows/deploy.yml`.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The built files will be in the `dist/` directory

3. Deploy to your preferred hosting service

## 🔧 Configuration

### Astro Configuration
The Astro configuration is in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://rugshan.github.io',
  integrations: [
    tailwind(),
    sitemap()
  ]
});
```

### Tailwind Configuration
Custom Tailwind settings are in `tailwind.config.mjs`:

```javascript
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Custom colors, animations, etc.
    }
  }
}
```

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

Dark mode is implemented using Tailwind's `dark:` prefix and CSS custom properties. The theme preference is stored in localStorage and respects the user's system preference.

## ⚡ Performance

- Static site generation for fast loading
- Optimized images and assets
- Minimal JavaScript for better performance
- CSS purging to reduce bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

<!-- - **Email**: PLACEHOLDER -->
- **LinkedIn**: [linkedin.com/in/rugshan](https://www.linkedin.com/in/rugshan/)
- **GitHub**: [github.com/Rugshan](https://github.com/Rugshan)

---

Built with ❤️ using Astro and Tailwind CSS