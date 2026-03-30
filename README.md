# 🏦 Modern Bank Landing
**A high-performance Fintech landing page built with React 19, TypeScript, and Tailwind CSS v4.**

[![Deploy to GitHub Pages](https://github.com/Peterbgood/modern-bank-landing/actions/workflows/deploy.yml/badge.svg)](https://github.com/Peterbgood/modern-bank-landing/actions)

### 🔗 [Live Demo](https://peterbgood.github.io/modern-bank-landing/)

---

## 🚀 Overview
This project is a professional-grade frontend prototype designed to demonstrate modern web development patterns, responsive design, and automated CI/CD workflows. It features a modular component architecture and a sleek "glassmorphic" UI tailored for the financial services industry.

## 🛠️ Tech Stack
* **Framework:** [React 19](https://react.dev/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (Using the new `@theme` engine)
* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict mode for type safety)
* **Routing:** [React Router 7](https://reactrouter.com/) (Client-side routing with dynamic basename)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Deployment:** GitHub Actions (Automated build and deploy pipeline)

## ✨ Key Features
* **Responsive UI:** Fully optimized for mobile, tablet, and desktop views.
* **Type-Safe Routing:** Implemented `BrowserRouter` with environment-aware `basename` logic to handle GitHub Pages sub-directory hosting.
* **CI/CD Pipeline:** Automated deployment workflow that builds the project and deploys to GitHub Pages on every push to `main`.
* **Modular Components:** Reusable UI elements (Buttons, Cards, Nav) built with a focus on DRY (Don't Repeat Yourself) principles.

## 🔧 Engineering Highlights

### Dynamic Routing Logic
To solve the common "blank page" issue on GitHub Pages, I implemented a dynamic basename check in `main.tsx`:
```typescript
const BASE_URL: string = import.meta.env.DEV ? '/' : '/modern-bank-landing';
