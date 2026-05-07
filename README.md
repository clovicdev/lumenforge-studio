# ✨ Lumenforge Studio

> A high-performance creative agency website for **Immersive Digital Experiences**.

Lumenforge Studio is a polished, responsive Next.js site built for creative technology, 3D web experiences, and conversion-focused digital launches. It combines a cinematic Three.js hero, smooth Framer Motion animations, SEO-ready metadata, and a modern Tailwind interface with a clean Apple/Stripe-inspired feel.

![Next.js](https://img.shields.io/badge/Next.js-App%20Router-black?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-3D%20Hero-111111?style=for-the-badge&logo=threedotjs)

## 🚀 Features

- 🎨 **Premium creative direction**  
  A refined visual system with soft glass surfaces, strong contrast, bento layouts, and elegant spacing.

- 🌌 **Interactive 3D hero**  
  Built with Three.js and React Three Fiber, featuring an animated torus knot and deterministic particle field.

- ⚡ **Performance-minded architecture**  
  Uses the Next.js App Router, static rendering, stable layout dimensions, optimized fonts, and component islands for interactive pieces.

- 📱 **Fully responsive design**  
  Designed to scale from mobile screens to wide desktop layouts without horizontal overflow or awkward text wrapping.

- 🧲 **Conversion-focused sections**  
  Includes sticky navigation, hero CTAs, feature bento cards, case studies, proof metrics, and a high-contrast CTA footer.

- 🔎 **SEO-ready foundation**  
  Includes Metadata API usage, canonical URL, keywords, Open Graph tags, Twitter card metadata, robots rules, and JSON-LD schema markup.

- 🎞️ **Framer Motion animation**  
  Scroll-triggered entrance animations with reduced-motion support for accessibility.

- 🧩 **Modular content model**  
  Services and case studies are stored in a mock data file so content can be updated without digging through layout code.

## 🛠️ Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| 3D | Three.js + React Three Fiber |
| Motion | Framer Motion |
| Icons | Lucide React |
| SEO | Next.js Metadata API + JSON-LD |

## 📂 Project Structure

```txt
.
├── src
│   ├── app
│   │   ├── globals.css          # Global Tailwind theme, base styles, layout utilities
│   │   ├── layout.tsx           # Fonts, metadata, Open Graph, Twitter, robots
│   │   └── page.tsx             # Homepage sections and JSON-LD schema
│   ├── components
│   │   ├── bento-card.tsx       # Reusable feature cards with hover glow
│   │   ├── hero-scene.tsx       # React Three Fiber canvas scene
│   │   ├── motion-section.tsx   # Framer Motion scroll animation wrapper
│   │   └── navigation.tsx       # Sticky glass navigation
│   └── data
│       └── site.ts              # Mock services and case studies
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

## 📥 Download and Use

You can use this website as a starter template for your own creative agency, portfolio, SaaS, product launch, or WebGL landing page.

### 1. Download the project

If this project is on GitHub, clone it:

```bash
git clone https://github.com/your-username/lumenforge-studio.git
cd lumenforge-studio
```

Or download it manually:

1. Click the green **Code** button on GitHub.
2. Choose **Download ZIP**.
3. Unzip the folder.
4. Open the folder in your code editor.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the website locally

```bash
npm run dev
```

Then open:

```txt
http://localhost:3000
```

### 4. Customize the content

Update the services and case studies in:

```txt
src/data/site.ts
```

Update the homepage layout in:

```txt
src/app/page.tsx
```

Update SEO metadata in:

```txt
src/app/layout.tsx
```

### 5. Build for production

```bash
npm run build
```

### 6. Run the production version

```bash
npm run start
```

## 🧪 Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open the site:

```txt
http://localhost:3000
```

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

## 🔍 SEO Highlights

This project ships with a search-friendly foundation:

- ✅ Optimized title and description
- ✅ Primary keyword targeting: **Immersive Digital Experiences**
- ✅ Canonical URL
- ✅ Open Graph metadata
- ✅ Twitter card metadata
- ✅ JSON-LD `ProfessionalService` schema
- ✅ Indexable robots configuration
- ✅ Semantic heading hierarchy

## 🎛️ Customization

Update the agency content in:

```txt
src/data/site.ts
```

Adjust SEO and social metadata in:

```txt
src/app/layout.tsx
```

Edit the 3D visual in:

```txt
src/components/hero-scene.tsx
```

Refine colors, global styles, and theme tokens in:

```txt
src/app/globals.css
```

## ✅ Quality Checks

```bash
npm run lint
npm run build
```

Both commands should pass before shipping.

## 🌐 Ideal Use Cases

- Creative agency landing pages
- WebGL studio websites
- Product launch microsites
- Interactive brand experiences
- Portfolio-quality frontend showcases
- SEO-optimized service pages

## 💡 Notes

The current implementation uses mock content for services and case studies, making it easy to connect a CMS, API, or MDX content pipeline later.

---

Built with care for speed, search, motion, and a little bit of cinematic sparkle. ✨
