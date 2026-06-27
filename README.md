# Mohamed Amalki — Portfolio Website

A modern, professional portfolio website built with React and Tailwind CSS.

## 🚀 Tech Stack

- **React 18** — Component-based UI
- **Tailwind CSS** — Utility-first styling
- **React Icons** — Icon library (Feather + Font Awesome)
- **Google Fonts** — Inter + JetBrains Mono

## 📁 Folder Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Training.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolioData.js   ← Edit content here
│   ├── hooks/
│   │   └── useInView.js
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## ⚙️ Installation & Local Development

### Prerequisites
- Node.js v16+ and npm

### Steps

```bash
# 1. Clone or download the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## ✏️ Customization

All content is centralized in **`src/data/portfolioData.js`** — edit skills, projects, experience, training, and languages there without touching component files.

### Add your profile photo
1. Add your image to `public/` (e.g., `photo.jpg`)
2. In `About.jsx`, replace the `<span className="text-3xl ...">MA</span>` placeholder with:
```jsx
<img src="/photo.jpg" alt="Mohamed Amalki" className="w-full h-full object-cover" />
```

### Update LinkedIn link
Search for `linkedin.com/in/mohamed-amalki` across all files and replace with your real LinkedIn URL.

### Add real project links
In `src/data/portfolioData.js`, update the `demo` and `github` fields in the `projects` array.

## 🌐 Deploy on Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
npm run build
vercel --prod
```

### Option 2 — GitHub + Vercel (recommended)
1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Vercel auto-detects Create React App — click **Deploy**
4. Done! Your site is live in ~1 minute.

### Option 3 — Netlify
```bash
npm run build
# Drag and drop the `build/` folder to netlify.com/drop
```

## 🎨 Design Tokens

| Token | Value |
|---|---|
| Background | `#0A0F1E` (deep navy) |
| Card bg | `#0D1B2A` |
| Cyan accent | `#00D4FF` |
| Purple accent | `#7C3AED` |
| Text primary | `#F8FAFC` |
| Text muted | `#64748B` |
| Font body | Inter |
| Font mono | JetBrains Mono |

## 📄 License

MIT — feel free to use and customize.
