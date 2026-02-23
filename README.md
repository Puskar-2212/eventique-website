#  Eventique - Premium Event Management Website

A stunning, animation-rich website showcasing advanced web development techniques for event management services. Built as a demonstration project to explore modern web animations and interactive design.

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.3-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwind-css)

##  Live Demo

**[View Live Site](https://eventique-website.vercel.app)** _(Update with your actual Vercel URL)_

##  Preview

A premium event management website featuring:
- Interactive scroll-based animations
- WebGL shader backgrounds
- 3D transformations and effects
- Smooth parallax scrolling
- Mouse-interactive spider web animation

##  Features

###  Advanced Animations
- **Scroll Expansion Hero** - Dynamic image expansion on scroll
- **Spider Web Animation** - Interactive WebGL canvas that follows cursor
- **Shader Background** - Animated plasma waves in contact section
- **3D Card Effects** - Service cards with scroll-triggered 3D rotations
- **Circular Gallery** - Images expand in a circle pattern on scroll

###  Technical Highlights
- Built with **Next.js 15** and **React 18**
- **TypeScript** for type safety
- **Framer Motion** for smooth animations
- **WebGL** shaders for advanced visual effects
- **Tailwind CSS** for styling
- Fully responsive design
- Optimized performance

###  Sections
1. **Hero** - Scroll-based expansion animation
2. **About Us** - Interactive spider web background
3. **Services** - 3D animated service cards
4. **Portfolio** - Circular image gallery with scroll animations
5. **Contact** - Shader background with plasma effects

##  Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Puskar-2212/eventique-website.git

# Navigate to project directory
cd eventique-website

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
# Create optimized production build
pnpm build

# Start production server
pnpm start
```

##  Project Structure

```
eventique-website/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   │   ├── shader-background.tsx
│   │   ├── scroll-expansion-hero.tsx
│   │   ├── spider-cursor.tsx
│   │   └── scrolling-animation.tsx
│   ├── Navbar.tsx
│   ├── ServicesWithSpider.tsx
│   ├── GalleryWithAnimation.tsx
│   └── ContactWithShader.tsx
├── public/                  # Static assets
│   └── images/             # Image files
└── README.md
```

##  Color Palette

The website uses a sophisticated sage green theme:

- **Sage Green**: `#5a6f5f` - Primary brand color
- **Light Sage**: `#8b9d8a` - Secondary accents
- **Cream**: `#d4c5b9` - Text and highlights
- **Charcoal**: `#2d2d2d` - Dark backgrounds

##  Technologies Used

- **Framework**: Next.js 15.5
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 12.34
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Lucide React
- **Package Manager**: pnpm

##  Key Components

### Scroll Expansion Hero
Expands from a small preview to full-screen on scroll with smooth transitions.

### Spider Web Animation
WebGL-powered interactive animation that creates organic web patterns following the cursor.

### Shader Background
Custom GLSL shaders creating animated plasma waves with purple/blue gradients.

### 3D Gallery
Images arranged in a circular pattern that expand outward as you scroll.

##  Deployment

This project is deployed on **Vercel** for optimal Next.js performance.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Puskar-2212/eventique-website)

##  Author

**Puskar Koirala**

- GitHub: [@Puskar-2212](https://github.com/Puskar-2212)
- Website: [eventique-website.vercel.app](https://eventique-website.vercel.app)

##  License

This project is a demonstration/portfolio piece. Feel free to use it as inspiration for your own projects.

##  Acknowledgments

- Built with modern web technologies
- Inspired by premium event management aesthetics
- Created to showcase advanced animation techniques

##  Note

This is a **demonstration project** created for testing and showcasing advanced web animations and interactive design techniques. It is not a real event management service.

---

**Made with Love by Puskar**
