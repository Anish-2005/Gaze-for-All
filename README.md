# 🌟 Gaze for All

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

> **Note:** This is an informational website showcasing the Gaze for All concept. The software is currently a work in progress and not yet available for production use.

## 📖 Overview

Gaze for All is an innovative informational website dedicated to promoting accessible, software-only gaze communication technology. Our mission is to empower individuals with limited mobility, particularly in healthcare settings, by enabling them to communicate and interact using only their eye movements.

This website serves as a comprehensive resource for understanding the problem, exploring our proposed solution, and learning about the potential impact of gaze-based communication technology.

## 🎯 Key Features

### 🏥 Healthcare-Focused Solutions
- **For Hospitals**: Streamlined implementation guides and integration options
- **Patient-Centric Design**: Intuitive interfaces designed with end-users in mind
- **Accessibility First**: WCAG 2.1 AA compliant design and development practices

### 📊 Comprehensive Information Hub
- **Problem Statement**: Clear explanation of communication barriers faced by patients
- **Solution Overview**: Detailed breakdown of our gaze-tracking technology
- **Business Model**: Sustainable monetization strategies for healthcare adoption
- **Impact Assessment**: Projected benefits and real-world applications
- **Roadmap**: Development timeline and future enhancements

### 🎨 Modern Web Experience
- **Mobile-First Design**: Responsive layout optimized for all devices
- **Dark/Light Theme Toggle**: User preference-based theming with system fallback
- **Smooth Animations**: Subtle Framer Motion animations for enhanced UX
- **Fast Performance**: Optimized Next.js 16 with App Router for lightning-fast loading

## 🖼️ Screenshots

### Homepage Hero
![Homepage Hero](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Homepage+Hero+Section)
*Benefit-focused landing page with clear value proposition and call-to-actions*

### How It Works
![How It Works](https://via.placeholder.com/800x400/10B981/FFFFFF?text=How+It+Works+Diagram)
*Interactive explanation of the gaze communication process*

### For Hospitals Page
![For Hospitals](https://via.placeholder.com/800x400/F59E0B/FFFFFF?text=For+Hospitals+Section)
*Dedicated resources and information for healthcare institutions*

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router and TypeScript
- **Styling**: Tailwind CSS v4 with custom gradients and responsive design
- **Animations**: Framer Motion for smooth, accessible animations
- **Icons**: Lucide React for consistent, scalable iconography
- **Analytics**: Umami for privacy-focused, lightweight analytics
- **Deployment**: Optimized for Vercel and other Node.js hosting platforms

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm installed
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/gaze-for-all.git
   cd gaze-for-all
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env.local

   # Edit .env.local with your configuration
   # Add your Umami analytics URL and website ID
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Homepage/landing page
│   ├── accessibility/       # Accessibility information
│   ├── business-model/      # Business model details
│   ├── for-hospitals/       # Hospital-specific resources
│   ├── how-it-works/        # Technical explanation
│   ├── how-to-use/          # User guide
│   ├── impact/              # Impact assessment
│   ├── privacy/             # Privacy policy
│   ├── problem/             # Problem statement
│   ├── product/             # Product overview
│   ├── roadmap/             # Development roadmap
│   ├── solution/            # Solution details
│   └── terms/               # Terms of service
├── components/
│   ├── BackToTop.tsx        # Scroll-to-top functionality
│   ├── CTAButton.tsx        # Call-to-action buttons
│   ├── FeatureCard.tsx      # Feature showcase cards
│   ├── Footer.tsx           # Site footer
│   ├── Navbar.tsx           # Navigation header
│   ├── Section.tsx          # Reusable section wrapper
│   └── ThemeToggle.tsx      # Dark/light theme switcher
└── lib/
    └── analytics.ts         # Umami analytics integration
public/
├── logo.svg                 # Brand logo and favicon
└── umami.js                 # Analytics script
```

## 🎨 Customization

### Theming
The website supports both light and dark themes:
- User preference stored in `localStorage` (`gfa-theme`)
- System preference detection as fallback
- CSS class `dark` applied to `<html>` element

### Branding
- Logo: Update `public/logo.svg` for custom branding
- Colors: Modify Tailwind config in `tailwind.config.ts`
- Typography: Customize font families in `globals.css`

## 📊 Analytics

Umami analytics is integrated for privacy-focused tracking:
- Page views and user interactions
- Scroll depth measurement
- Custom events for CTA clicks

Configure your Umami instance in `src/app/layout.tsx` and `.env.local`.

## ♿ Accessibility

Gaze for All prioritizes accessibility:
- **WCAG 2.1 AA Compliance**: Comprehensive accessibility standards
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators and logical tab order
- **Color Contrast**: High contrast ratios for readability
- **Mobile Accessibility**: Large tap targets (44px minimum)

## 🤝 Contributing

We welcome contributions to improve the informational content and user experience:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain accessibility standards
- Test on multiple devices and browsers
- Update documentation for any new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚧 Work in Progress

**Important Notice:** Gaze for All is currently in the conceptual and development phase. This website serves as an informational platform to share our vision and gather feedback. The actual gaze communication software is under active development and not yet available for use.

### Current Status
- ✅ Website design and content
- ✅ Information architecture
- 🔄 Technical implementation planning
- ⏳ Software development
- ⏳ Testing and validation
- ⏳ Healthcare partner integrations

### Roadmap Highlights
- Q2 2026: Prototype development
- Q3 2026: Clinical trials planning
- Q4 2026: Beta release for select hospitals
- 2027: Full commercial launch

---

*Built with ❤️ for accessibility and innovation in healthcare communication.*
