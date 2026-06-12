# Skerman Portfolio

This is my personal portfolio website built with [Next.js](https://nextjs.org). It showcases my projects, skills, and experience as a Data Analyst / aspiring Data Engineer with a strong mathematical background.

---

## 🚀 Live Site

The site is currently deployed and hosted on **DigitalOcean**.

---

## 🧰 Tech Stack

- Next.js (Pages Router)
- React
- JavaScript / TypeScript (if applicable)
- CSS / Tailwind (if applicable)
- Hosted on DigitalOcean

---

## 📸 Screenshots

### Home Page
> Add screenshot here
![Home Page](./screenshots/home.png)

### Projects Section
> Add screenshot here
![Projects](./screenshots/projects.png)

### Mobile View
> Add screenshot here
![Mobile View](./screenshots/mobile.png)

---

## ✨ Features

- Responsive design (mobile + desktop)
- Clean portfolio layout for recruiters
- Projects showcase with links to GitHub / demos
- Fast performance with Next.js optimisations
- Custom UI components and layout

---


## 🏗️ Architecture / Deployment

Simple flow:

User → Domain → Nginx (reverse proxy) → Next.js application → DigitalOcean VPS

### Components

- **Domain**: Routes traffic to the server
- **Nginx**: Reverse proxy and SSL termination
- **Next.js application**: Server-rendered React application (Node.js)
- **DigitalOcean VPS**: Hosting environment

## 🧩 System Diagram

```text
                 ┌────────────────────┐
                 │      Domain        │
                 │  (yourwebsite.com) │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │       Nginx        │
                 │  Reverse Proxy +   │
                 │   SSL Handling     │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │   Next.js App      │
                 │ (React Frontend +  │
                 │  Server Rendering) │
                 └─────────┬──────────┘
                           │
                           ▼
                 ┌────────────────────┐
                 │ DigitalOcean VPS   │
                 │ (Ubuntu Server)    │
                 └────────────────────┘
```

## ⚙️ Getting Started (Local Development)

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---

## 📦 Deployment

The application is deployed on a DigitalOcean VPS.

---

## 📁 Project Structure

- `/pages` – application routes
- `/components` – reusable UI components
- `/public` – static assets (images, icons, etc.)
- `/styles` – global and component styles

---

## 📌 Notes

This project is actively being improved as part of my portfolio for data engineering roles. Future improvements may include:
- Better SEO optimisation
- Improved mobile UI polish
- Additional project case studies