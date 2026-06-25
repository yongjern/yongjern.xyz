# Yong Jie Ern — Personal Portfolio

Personal portfolio and résumé site built with **Next.js 14 (App Router)**,
**Tailwind CSS**, and **Framer Motion**.

Visual style: **Apple Liquid Glass** — desaturated aurora gradient background,
deep glassmorphism cards with top-edge bevel highlights, staggered
scroll-triggered entrance animations.

---

## 🗂 Project Structure

```
portfolio/
├── app/
│   ├── globals.css       ← Aurora + Glassmorphism CSS system
│   ├── layout.tsx        ← Root layout (fonts, metadata)
│   └── page.tsx          ← Home page (server component)
├── components/
│   ├── AuroraBackground.tsx  ← Fixed animated gradient blobs
│   ├── Navbar.tsx            ← Sticky glass navbar
│   ├── Hero.tsx              ← Full-screen hero
│   ├── Projects.tsx          ← Project / experience cards
│   ├── Skills.tsx            ← Categorised tech skill pills
│   ├── Resume.tsx            ← CV download CTA
│   └── Contact.tsx           ← Social / contact links
├── public/               ← Static assets (add your OG image here)
├── tailwind.config.ts
├── next.config.ts
└── tsconfig.json
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build
npm run start
```

---

## ☁️ Deploy to Vercel (one click)

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) → Import your repo.
3. Vercel auto-detects Next.js — click **Deploy**. Done.

No environment variables required for the static version.

---

## ✏️ Customisation Checklist

### 1 · Resume / CV link
Open `components/Resume.tsx` and update `CV_URL` near the top:
```ts
const CV_URL = "https://raw.githubusercontent.com/yongjern/yongjern/main/CV%20YJE.pdf";
//              ↑ replace with your final hosted URL
```

### 2 · Social links
Open `components/Contact.tsx` and update the `socials` array:
- YouTube channel URL
- Personal domain (already set to yongjern.xyz)
- GitHub profile
- Email address

### 3 · XPStore link
Open `components/Projects.tsx` and replace the placeholder `href` for XPStore:
```ts
href: "https://xpstore.example.com",  // ← your real URL
```

### 4 · OG / Social image
Drop a `1200×630` PNG named `og-image.png` into `/public/` and update
`app/layout.tsx` → `openGraph.images` to point to it.

### 5 · Favicon
Replace `/public/favicon.ico` (or add `icon.png` / `apple-icon.png`
to `/app/` — Next.js App Router picks these up automatically).

---

## 🎨 Design Tokens

| Token | Value | Usage |
|---|---|---|
| Aurora base | `#070a14` | Page background |
| Glass bg | `rgba(255,255,255,0.06)` | Card fill |
| Glass border | `rgba(255,255,255,0.12)` | Card outline |
| Top highlight | `rgba(255,255,255,0.16)` | Bevel inset shadow |
| Accent | `#a5b4fc` (soft indigo) | Gradient text, glow |
| Body font | Inter (Variable) | All copy |

Aurora blob colours (all desaturated, dark):
- Blob 1 `#1a2a6e` — midnight indigo (top-left)
- Blob 2 `#2e1860` — deep violet (right)
- Blob 3 `#0d3048` — dark teal (bottom)
- Blob 4 `#3b1f6a` — dusty purple (top-right, low opacity)

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `next@14` | Framework + App Router |
| `framer-motion@11` | Entrance & hover animations |
| `lucide-react` | Icons |
| `tailwindcss@3` | Utility CSS |

---

Built by Yong Jie Ern · [yongjern.xyz](https://yongjern.xyz)
