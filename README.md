# Rugshan's Portfolio

A modern portfolio website built with Astro and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Built with Astro and Tailwind CSS
- **Responsive Design**: Works perfectly on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: AOS (Animate On Scroll) integration
- **SEO Optimized**: Meta tags, sitemap, and structured data
- **Fast Performance**: Static site generation for optimal speed

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rugshan/rugshan.github.io.git
   cd rugshan.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:4321`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions.

### Manual Deployment

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   - Push your changes to the `main` branch
   - GitHub Actions will automatically build and deploy the site
   - Your site will be available at `https://rugshan.github.io`

### GitHub Pages Configuration

- **Source**: GitHub Actions
- **Branch**: main
- **Domain**: rugshan.github.io

## 📁 Project Structure

```
src/
├── components/     # Astro components
├── layouts/        # Page layouts
├── pages/          # Route pages
└── styles/         # Global styles

public/
├── images/         # Static images
└── favicon.ico     # Favicon files
```

## 🎨 Customization

### Colors
The site uses a custom color palette defined in `src/layouts/Layout.astro`:
- Primary colors: Blue shades
- Dark mode: Custom dark palette

### Content
Update the following files to customize your content:
- `src/components/Hero.astro` - Hero section
- `src/components/Experience.astro` - Work experience and education
- `src/components/Projects.astro` - Project showcase
- `src/components/Skills.astro` - Skills and technologies
- `src/components/Certifications.astro` - Certifications
- `src/components/Interests.astro` - Personal interests
- `src/components/Contact.astro` - Contact information

## 📝 License

This project is open source and available under the [MIT License](LICENSE.txt).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!