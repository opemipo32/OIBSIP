# OpeNest Hostels — Landing Page

A static, responsive landing page for **OpeNest Hostels**, a fictional student
housing brand offering self-contained hostel rooms. Built as a front-end
training project to practice semantic HTML5 and modern CSS3 layout.

**Live site structure:** `index.html` (home) → `about.html` (developer bio)

---

## 📁 File Structure

```
OpeNest-Hostels/
├── index.html              # Main landing page
├── about.html               # About-the-developer page
├── style.css                 # All styling (shared across pages)
├── Logo.jpg                    # Brand logo
├── standard_self-con.jpg    # Standard room photo
├── shared_self-con.jpg      # Shared room photo
└── premium_self-con.jpg     # Premium room photo
```

All files must stay in the **same folder** — `index.html` and `style.css`
reference the images by relative path (e.g. `src="Logo.jpg"`).

---

## ▶️ How to View It

No build step, no server required.

1. Download the whole folder, keeping every file together.
2. Double-click `index.html` — it opens directly in any browser.
3. Click **About** in the footer to view `about.html`.

---

## ✨ Sections (`index.html`)

| Section | Purpose |
|---|---|
| **Sticky nav** | Logo + 5 links (About, Services, Why Us, Rooms, Contact) + "Book a Room" button |
| **Hero** | Headline, subheadline, two CTAs, founding stats, illustrated skyline graphic |
| **About / Our Story** | Founding story pulled from the brand's own copy |
| **Services** | Hostel development, facility management, land partnerships |
| **Why Choose Us** | Honest pricing, self-contained comfort, reliable water & power |
| **Rooms & Pricing** | Standard / Shared / Premium room cards with photo, description, price |
| **Testimonials** | Two sample tenant quotes |
| **CTA banner** | Final "Ready to move in?" prompt |
| **Footer** | Quick links, contact details, social placeholders, copyright |

---

## 🎨 Design System

**Palette** — pulled directly from the logo and room illustrations:

| Swatch | Name | Hex | Used for |
|---|---|---|---|
| 🟦 | Navy | `#2B3550` | Primary text, footer, buttons |
| ⬛ | Navy Dark | `#1D2438` | Headings, dark backgrounds |
| 🟧 | Terracotta | `#C1502E` | CTAs, accents, highlights |
| 🟩 | Sage | `#4C7A5C` | Icons, secondary accents |
| 🟨 | Cream | `#F1E9DC` | Section backgrounds |

**Typography**
- **Display:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (serif) — headings, prices, quotes
- **Body:** [Inter](https://fonts.google.com/specimen/Inter) (sans-serif) — paragraphs, nav, buttons

**Signature element:** a hand-built SVG "skyline" in the hero, echoing the
little house/leaf/lightning-bolt icon in the OpeNest logo.

---

## 🧱 Tech Stack

- HTML5 (semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- CSS3 only — **no JavaScript, no frameworks**
- Layout: CSS Grid (`.grid`, `.hero-inner`, `.footer-inner`) and Flexbox (`.header-inner`, `.hero-actions`)
- Fonts loaded from Google Fonts CDN

---

## 📱 Responsiveness

Two breakpoints handle mobile and tablet:

| Breakpoint | Behaviour |
|---|---|
| `≤ 900px` | Hero and About sections stack to one column; card grids drop to 2 columns |
| `≤ 640px` | Nav wraps and centers; all grids drop to a single column; footer stacks and centers |

Tested at 1400px (desktop) and 390px (mobile) with no overlapping elements.

---

## ✅ Checklist Coverage

- [x] Sticky navigation bar with 5 links
- [x] Hero with headline, subheadline, CTA buttons
- [x] 5+ distinct content sections (About, Services, Why Us, Rooms, Testimonials)
- [x] Footer with contact/social placeholder links
- [x] Consistent 5-colour palette across all sections
- [x] Fully responsive (Grid + Flexbox, no breakage on mobile)
- [x] `box-sizing: border-box` reset — no unintended overlap
- [x] Two type families, clear size scale (0.75rem → 3.4rem)

---

## 🙋 About This Project

Read `about.html` for the story behind the build — it explains what this
project was meant to practice and who built it.
