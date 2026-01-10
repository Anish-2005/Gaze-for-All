## Gaze for All – Web App

Accessible, software-only gaze communication site built with Next.js App Router. Focused on fast value clarity, audience segmentation, strong trust signals, and mobile-first accessibility.

### Tech Stack
- Next.js 16 (App Router, TypeScript)
- Tailwind CSS (v4) + custom gradients
- Framer Motion for subtle animations
- lucide-react icons
- Umami analytics (events + scroll depth)

### Features
- Benefit-first hero with primary/secondary CTAs
- Audience segmentation (patients/families, hospitals, insurers/partners)
- Proof/trust: metrics, testimonials, partner logos, compliance badges
- Accessibility: focus-visible states, large tap targets, aria labels, FAQ list roles
- Mobile-first: responsive spacing/typography, `overflow-x-hidden` on body
- Custom SVG logo used as favicon and navbar brand (`public/logo.svg`)

### Project Structure
- `src/app/page.tsx` – home/landing
- `src/app/*/page.tsx` – secondary routes (problem, solution, how-it-works, product, business-model, impact, roadmap, how-to-use)
- `src/components/` – CTAButton, FeatureCard, Navbar, ThemeToggle, Section, BackToTop
- `public/logo.svg` – brand icon + favicon

### Setup
```bash
npm install
npm run dev
# visit http://localhost:3000
```

### Production Build
```bash
npm run build
npm run start
```

### Environment / Analytics
- Umami loader is referenced in `public/umami.js` and injected in `src/app/layout.tsx`. Set your Umami script URL and `websiteId` there.

### Accessibility Notes
- Buttons/CTAs meet 44px tap targets; focus rings are enabled.
- Semantic sections, aria-labels for icons/placeholders, FAQ uses list roles.
- `overflow-x-hidden` on body to prevent horizontal scroll on mobile.

### Theming
- Theme toggling stored in `localStorage` (`gfa-theme`) with system preference fallback; class `dark` set on `<html>` via inline script.

### Deployment
- Standard Next.js output; deploy on Vercel or any Node host. Ensure `public/logo.svg` is accessible for favicons and navbar, and configure Umami environment in production.
