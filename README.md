# Ta Minh Khang — Fullstack Developer

> I build full-stack web applications with C# / ASP.NET Core on the backend and React + TypeScript on the frontend.

A single-page, scroll-based personal portfolio for **Ta Minh Khang** — a fullstack developer focused on the .NET and React ecosystems, with a passion for bringing AI capabilities into real products.

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Ant Design](https://img.shields.io/badge/Ant%20Design-5-1677FF?logo=antdesign&logoColor=white)](https://ant.design/)
[![CI](https://github.com/Aquarius2301/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Aquarius2301/Portfolio/actions/workflows/ci.yml)

---

## 🔗 Live Demo

> **_Replace this placeholder with your deployed URL after going live on Render._** <br>
> **https://your-render-url.onrender.com**

---

## ✨ Features

- **Light / Dark theme** — toggle in the header; preference is saved to `localStorage` and defaults to your OS setting (`prefers-color-scheme`).
- **Responsive navigation** — sticky header with a horizontal menu on desktop that collapses into an Ant Design `Drawer` hamburger menu on mobile.
- **Smooth scrolling** — anchor links glide to each section.
- **Frosted-glass UI** — gradient background with blurred glass cards for a modern look.
- **PDF certificate viewer** — view certifications inline in a modal, no download required.
- **Copyable email & CV download** — one-click email copy and a direct CV download button.

---

## 🛠 Tech Stack

| Area     | Technologies                                                                 |
| -------- | ----------------------------------------------------------------------------- |
| Frontend | React 18, TypeScript, Vite, Ant Design (antd v5), react-icons                 |
| Backend (shown in projects) | C#, ASP.NET Core, Entity Framework Core, SQL Server, JWT, Clean Architecture, CQRS |
| Tooling  | Git, npm, Postman, VS Code, Swagger                                           |

Styling is plain CSS (`Background.css`, `Glass.css`) for visual effects, combined with Ant Design design tokens. No CSS framework, router, or i18n library is used — the site is a single scroll page.

---

## 📁 Project Structure

```text
Portfolio/
├── index.html                     # App entry HTML (title: "Ta Minh Khang — Fullstack Developer")
├── vite.config.ts                 # Vite + React plugin config
├── tsconfig.json                  # TypeScript config (strict mode)
├── .github/workflows/ci.yml       # CI & Deploy: build on push/PR, deploy hook to Render on main
├── public/
│   ├── CV_TaMinhKhang_SoftwareDeveloper.pdf
│   └── GoogleCertificate.pdf
└── src/
    ├── main.tsx                   # Mounts <App/>, imports antd reset CSS, enables smooth scroll
    ├── App.tsx                    # Root layout, ConfigProvider theming, section order
    ├── theme.ts                   # Light/dark Ant Design ThemeConfig
    ├── components/
    │   ├── SiteHeader.tsx         # Sticky nav + theme switch + mobile drawer
    │   ├── SiteFooter.tsx         # Footer credit
    │   ├── Hero.tsx               # Landing headline + CTA buttons
    │   ├── About.tsx              # Intro paragraph + Skills
    │   ├── Projects.tsx           # Project cards with tags & GitHub links
    │   ├── Education.tsx          # Education & Experience timelines
    │   ├── Certifications.tsx     # Cert list + PDF modal viewer
    │   ├── Contact.tsx            # Email / LinkedIn / GitHub / CV download
    │   ├── Background.tsx/.css     # Gradient background layer
    │   └── Glass.css              # Frosted-glass card styles
    ├── data/
    │   ├── content.ts             # Single source of truth for all site copy
    │   └── skillIcons.tsx         # Maps skill labels → react-icons
    └── utils/
        └── scroll.ts              # scrollToSection() smooth-scroll helper
```

---

## 🧭 Sections

1. **Hero** — name headline, role summary, and quick links to Projects / Contact.
2. **About me** — short bio plus a categorized **Skills** list (Languages, Backend, Frontend, Tools).
3. **Project** — featured projects with summaries, highlights, tech tags, and GitHub links:
   - **My Blog** (2025–2026) — full-stack social blogging platform (ASP.NET Core + EF Core + JWT + React + TanStack Query + Gemini API).
   - **AI Workspace** (2026–now) — Jira-like team/project management platform (.NET 8 Clean Architecture/CQRS + React 19 + Gemini API + Kanban).
4. **Education & Experience** — timelines for FPT University and an internship at Act Brain Vietnam.
5. **Certifications** — degree and Google Certified Gemini Educator, viewable as PDFs.
6. **Contact** — email (copyable), LinkedIn, GitHub, and a CV download.

---

## 🚀 Getting Started

Requirements: **Node.js 24+** (matches the CI environment).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Type-check and build for production (output in dist/)
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## ✏️ Customizing Content

All displayed text lives in one place — **`src/data/content.ts`** — so you can update your profile, skills, projects, education, certifications, and contact links without touching any components. Skill icons are mapped in **`src/data/skillIcons.tsx`**.

---

## 🌐 Deployment

This project is configured for **Render** with CI/CD via GitHub Actions (`.github/workflows/ci.yml`):

- On every push/pull request to `main`, the workflow runs `npm ci` + `npm run build` (TypeScript type-check + Vite build).
- When the build passes on `main`, it invokes a **Render Deploy Hook** to publish the site.

To enable deployment:

1. Create a Static Site on [Render](https://render.com) and copy its Deploy Hook URL.
2. In your GitHub repo, add a secret named **`RENDER_DEPLOY_HOOK`** with that URL.
3. Push to `main` — the workflow builds and deploys automatically.

---

## 📬 Contact

- **Email:** [khangta67@gmail.com](mailto:khangta67@gmail.com)
- **LinkedIn:** [linkedin.com/in/minh-khang-ta-dev](https://www.linkedin.com/in/minh-khang-ta-dev/)
- **GitHub:** [@Aquarius2301](https://github.com/Aquarius2301)
- **CV:** [Download PDF](/CV_TaMinhKhang_SoftwareDeveloper.pdf)

---

<p align="center">© 2026 Ta Minh Khang · Built with React + Ant Design</p>
