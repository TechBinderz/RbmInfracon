# RBM Infracon Limited — Corporate Website

Official website for **RBM Infracon Limited**, a premier EPC contractor with 30+ years of experience in Engineering, Procurement, Construction, and O&M services across India and the Middle East.

**Live:** [https://www.rbminfracon.com](https://www.rbminfracon.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 8 (Rolldown bundler) |
| UI library | Material UI v6 (MUI) |
| Routing | React Router DOM v7 |
| SEO | react-helmet-async v3 |
| Animations | Swiper, react-slick, react-countup |
| Maps | Google Maps Embed API |

---

## Key Features

### Performance
- **Route-level code splitting** via `React.lazy()` + `Suspense` — every page loads as a separate chunk
- **Vendor chunk splitting** — React, MUI, and third-party libraries bundled separately for optimal caching
- **Rolldown (Vite 8)** replaces esbuild for both dev pre-bundling and production builds

### SEO
- Per-page `<title>`, `<meta description>`, canonical URL, Open Graph, and Twitter Card tags via a shared `SEOHead` component
- Global JSON-LD `Organization` / `LocalBusiness` schema injected in `App.tsx`
- `robots.txt` and `sitemap.xml` covering all 30+ routes
- Fallback meta tags in `index.html` for crawlers that don't execute JavaScript

### Cross-platform Build
- Build script uses Node.js `fs.copyFileSync` instead of Unix `cp` — works on Windows and Linux equally

---

## Project Structure

```
src/
├── app/
│   ├── common/
│   │   ├── SEOHead.tsx          # Reusable per-page SEO component
│   │   └── PrivacyPolicy.tsx
│   └── layout/
│       ├── App.tsx              # Root layout + JSON-LD schema
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── router/
│           ├── Routes.tsx       # All routes with React.lazy() imports
│           └── Feature.tsx      # Suspense boundary + scroll-to-top
├── features/
│   ├── home/
│   ├── about/                   # BoardOfDirectors, CurrentProjects, ExecutedProjects, Awards
│   ├── services/                # 16 service sub-pages
│   ├── careers/
│   ├── investors/
│   ├── news/
│   └── contactus/
├── assets/
└── theme/
    └── theme.ts                 # MUI theme configuration
public/
├── robots.txt
├── sitemap.xml
└── rmb_logo_icon.svg
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Install dependencies
```bash
npm install
```

### Development server
```bash
npm run dev
```

### Production build
```bash
npm run build
```
Outputs to `dist/`. Automatically copies `index.html` → `404.html` for SPA routing on static hosts.

### Preview production build
```bash
npm run preview
```

---

## SEO Implementation

All pages use the shared `SEOHead` component:

```tsx
<SEOHead
  title="Page Title"
  description="Page-specific meta description."
  path="/route-path"
/>
```

The component automatically generates:
- `<title>Page Title | RBM Infracon Limited</title>`
- `<meta name="description">`
- `<link rel="canonical" href="https://www.rbminfracon.com/route-path">`
- Open Graph (`og:title`, `og:description`, `og:url`, `og:image`)
- Twitter Card tags

---

## CJS Interop Note (Vite 8 / Rolldown)

Vite 8 replaced esbuild with Rolldown, which handles CommonJS `__esModule` interop differently. Packages `react-slick` and `react-countup` require a defensive default-export pattern:

```ts
import _Slider from "react-slick";
const Slider = ((_Slider as any).default ?? _Slider) as typeof _Slider;
```

Both packages are also listed under `optimizeDeps.include` in `vite.config.ts` to ensure correct pre-bundling.

---

## Deployment

The site is deployed at **https://www.rbminfracon.com**. Deploy by uploading the contents of the `dist/` folder to any static host (Nginx, Apache, AWS S3, Vercel, Netlify, etc.).

Ensure the server is configured to serve `index.html` for all routes (SPA fallback). The included `404.html` handles this automatically on GitHub Pages-style hosts.
