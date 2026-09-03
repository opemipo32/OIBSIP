# Ajayi Opemipo Andrew — Personal Portfolio

A responsive personal portfolio site built to showcase front-end skills,
practice projects, and a way to get in touch — my digital résumé.

**Entry point:** `index.html`

---

## 📁 File Structure

```
html-portfolio-1/
├── index.html                      # Main portfolio (hero, about, skills, projects, contact)
├── assets/
│   ├── css/
│   │   └── style.css               # Shared stylesheet for the whole site
│   └── images/
│       ├── Myself.jpeg             # Profile photo
│       ├── Logo.jpg                # OpeNest Hostels logo
│       ├── OpeNest-Hostels.jpg     # Project thumbnail
│       ├── Movie-Ranking.jpg       # Project thumbnail
│       ├── Birthday_Invite.jpg     # Project thumbnail
│       ├── standard-self-con.jpg   # OpeNest room photo
│       ├── shared-self-con.jpg     # OpeNest room photo
│       └── premium-self-con.jpg    # OpeNest room photo
└── public/
    ├── about.html                  # Extended "About Me"
    ├── contact.html                # Contact details
    ├── Resume.html                 # Full résumé
    ├── OpeNest-Hostels.html        # Practice project: business landing page
    ├── movie-ranking.html          # Practice project: content/list page
    └── birthday-invite.html        # Practice project: single-purpose event page
```

Keep this folder structure intact — pages in `public/` reference images with
`../assets/images/...` and the stylesheet with `../assets/css/style.css`.

---

## ▶️ How to View It

No build step, no server required.

1. Download the whole `html-portfolio-1` folder, keeping every file and
   subfolder together.
2. Double-click `index.html` — it opens directly in any browser.
3. Use the nav bar or the project cards to reach the résumé and the three
   practice project pages.

---

## ✨ Sections (`index.html`)

| Section | Purpose |
|---|---|
| **Sticky nav** | Smooth-scroll links to each section, plus a Résumé link and a "Let's Talk" button |
| **Hero** | Name, role title, profile photo, quick stats, two CTAs |
| **About** | Short bio, background story, and quick facts (location, education, career path) |
| **Skills** | Two grids — core web skills, and transferable skills from a prior career in data/ops |
| **Projects** | Three cards (title, description, tags, live preview link, GitHub placeholder) |
| **Contact** | Email, phone, location, social icon placeholders, and a static contact form |

---

## 🎨 Design System

**Palette** — a personal brand identity, kept distinct from client work like OpeNest:

| Swatch | Name | Hex | Used for |
|---|---|---|---|
| ⬛ | Ink | `#1B1B2F` | Headings, dark sections, nav text |
| 🟧 | Amber | `#E8A33D` | CTAs, accents, highlights |
| 🟦 | Teal | `#3E7C8A` | Icons, tags, secondary accents |
| 🟨 | Bg | `#FAF9F6` | Page background |

**Typography**
- **Display:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) — headings, stats, nav brand
- **Body:** [Inter](https://fonts.google.com/specimen/Inter) — paragraphs, nav, buttons

---

## 🧱 Tech Stack

- HTML5 (semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- CSS3 only — Grid + Flexbox, no frameworks, no JavaScript required
- `scroll-behavior: smooth` on `<html>` powers the in-page nav scrolling
- Fonts loaded from Google Fonts CDN

---

## 📱 Responsiveness

| Breakpoint | Behaviour |
|---|---|
| `≤ 900px` | Hero/about stack to one column; card and skill grids drop to 2 columns |
| `≤ 640px` | Nav wraps and centers; all grids drop to a single column; footer stacks |

Tested at 1400px (desktop) and 390px (mobile) with no overlapping elements.

---

## ✅ Checklist Coverage — Task 2

- [x] Hero section: name, role title, professional photo
- [x] About Me: background + interests, in 2–3 sentences
- [x] Skills section: visual grid of technical + transferable skills
- [x] Projects section: 3 cards with title, description, live link, GitHub placeholder
- [x] Contact section: email, phone, location, social icon placeholders, contact form
- [x] Smooth scroll navigation between sections
- [x] Consistent colour palette and font pairing throughout
- [x] Fully responsive on desktop and mobile

---

## 📝 Notes

- The three practice project pages (`OpeNest-Hostels.html`, `movie-ranking.html`,
  `birthday-invite.html`) are kept close to their original raw form — they're
  genuine early exercises, restyled just enough to feel part of the same site
  without losing what they were built to practice.
- The full home address originally in `contact.html` was trimmed to
  state/country level for the published site — worth keeping in mind before
  publishing personal contact pages publicly.

**Built by Ajayi Opemipo Andrew.**