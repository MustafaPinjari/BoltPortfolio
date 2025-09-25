# MustafaPinjari-Advanced-Portfolio

An ultra-advanced parallax developer portfolio built with Next.js 14, featuring cinematic animations, 3D elements, and performance-first architecture.

## 🚀 Features

### Core Functionality
- **Cinematic Hero Section** with Three.js 3D elements and multi-layer parallax
- **Interactive About Section** with animated timeline and skill visualizations
- **Projects Showcase** with masonry grid and detailed case study modals
- **Resume Section** with PDF download and inline preview
- **Testimonials Carousel** with 3D rotating effects
- **Contact Form** with validation and smooth animations
- **Dark/Light Mode** with smooth transitions
- **Mobile-First Responsive** design

### Technical Excellence
- **Next.js 14** with App Router and Server Components
- **Performance Optimized** (90+ Lighthouse scores)
- **SEO Ready** with proper meta tags and structure
- **Accessibility First** with reduced motion support
- **TypeScript** for type safety
- **Framer Motion + GSAP** for premium animations
- **Lenis Smooth Scrolling** for natural feel

## 🎨 Design System

### Color Palette
```css
--palette-bg: #0f172a;      /* Deep navy background */
--palette-accent: #0ea5a3;   /* Teal accent */
--palette-muted: #94a3b8;    /* Muted text */
--palette-text: #ffffff;     /* White text */
--palette-card: #1e293b;     /* Card background */
--palette-border: #334155;   /* Border color */
```

### Typography
- **Primary Font**: Inter (system fallback)
- **Monospace**: JetBrains Mono
- **Responsive scales** from mobile to desktop
- **Consistent line heights** (1.5 body, 1.2 headings)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion + Lenis + GSAP
- **3D Graphics**: Three.js with React Three Fiber
- **UI Components**: shadcn/ui
- **Content**: JSON-based projects data
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Vercel (optimized for edge)

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/mustafapinjari/advanced-portfolio.git
cd advanced-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── sections/         # Page sections
│   ├── ui/              # Reusable UI components
│   └── theme-provider.tsx
├── data/                 # Static data
│   └── projects.json    # Projects data
├── lib/                 # Utility functions
└── public/             # Static assets
```

## 🎯 Content Strategy

### Projects Data
Update `data/projects.json` with your projects:
```json
{
  "id": 1,
  "title": "Your Project",
  "description": "Brief description",
  "image": "project-image-url",
  "technologies": ["React", "Next.js"],
  "liveUrl": "https://your-project.com",
  "githubUrl": "https://github.com/you/project",
  "category": "Web App",
  "featured": true,
  "details": {
    "overview": "Detailed overview...",
    "challenge": "What challenges you solved...",
    "solution": "How you solved them...",
    "results": ["Achievement 1", "Achievement 2"]
  }
}
```

### Personal Information
Update the following files:
- `components/sections/hero-section.tsx` - Name, title, description
- `components/sections/contact-section.tsx` - Contact information
- `app/layout.tsx` - SEO metadata
- `components/sections/about-section.tsx` - Biography and skills

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Manual Build
```bash
npm run build
npm start
```

## 📈 Performance Features

- **Image Optimization** with Next.js Image component
- **Code Splitting** with dynamic imports
- **Lazy Loading** for below-fold content
- **Prefetching** for navigation links
- **Edge Runtime** for optimal delivery
- **AVIF/WebP** image formats
- **Reduced Motion** support for accessibility

## 🎨 Customization

### Colors
Modify the color palette in `app/globals.css`:
```css
:root {
  --palette-bg: #your-bg-color;
  --palette-accent: #your-accent-color;
  /* ... other colors */
}
```

### Animations
Adjust animation settings in component files:
- Framer Motion variants
- GSAP timelines
- CSS transitions

### Content
- Update project data in `data/projects.json`
- Modify section content in component files
- Replace placeholder images with your own

## 📱 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 90+, Safari 14+, Edge 90+
- **Mobile**: iOS 14+, Android 10+
- **Progressive Enhancement**: Graceful degradation for older browsers
- **Reduced Motion**: Respects user preferences

## 🔧 Environment Variables

Create `.env.local` for any API keys:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
# Add other environment variables as needed
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support and questions:
- Email: mustafa.pinjari@example.com
- GitHub Issues: Create an issue in this repository
- Documentation: Check the component files for implementation details

---

**Built with ❤️ by Mustafa Pinjari**# BoltPortfolio
