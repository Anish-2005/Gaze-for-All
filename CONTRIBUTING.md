# Contributing to Gaze for All Web

Thank you for contributing.

This project is a Next.js + TypeScript web app focused on accessibility and clinical-grade UX quality.

## Development Setup

1. Fork and clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start local development:
   ```bash
   npm run dev
   ```

## Branch and Commit Guidelines

- Create a feature branch from `main`:
  - `feat/<short-description>`
  - `fix/<short-description>`
  - `chore/<short-description>`
- Keep commits focused and atomic.
- Use clear commit messages (imperative style), for example:
  - `feat: improve mobile navbar hierarchy`
  - `fix: prevent horizontal overflow on product cards`

## Code Quality Requirements

Before opening a PR, run:

```bash
npx tsc --noEmit
npm run build
```

If you changed lint-relevant code, also run:

```bash
npm run lint
```

## UX and Accessibility Standards

All contributions should preserve or improve:

- Mobile responsiveness (360 / 390 / 430 / 768 / 1024+)
- Keyboard accessibility and visible focus states
- Readable spacing, hierarchy, and contrast
- Reduced-motion support where animation is used

## Pull Request Checklist

- [ ] Changes are scoped and intentional
- [ ] Type check passes
- [ ] Build passes
- [ ] No horizontal scroll regressions on mobile
- [ ] New/updated UI is responsive and accessible
- [ ] README/docs updated (if behavior changed)

## Reporting Issues

Please include:

- Environment (OS, Node version, browser)
- Steps to reproduce
- Expected result vs actual result
- Screenshots/video for UI issues

## Code of Conduct

Be respectful and constructive in all discussions and reviews.
