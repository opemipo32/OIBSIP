# Temperature Converter

A small interactive tool that converts a temperature between Celsius,
Fahrenheit and Kelvin — enter a value, pick its unit, and see all three
at once.

**Entry point:** `index.html`

---

## 📁 File Structure

```
temperature-converter/
├── index.html     # Markup: input, unit toggle, button, results panel
├── style.css       # All styling
└── script.js       # Conversion logic + validation
```

All three files must stay **directly inside the same folder**, with these
exact names. `index.html` loads `style.css` and `script.js` by relative
path — if either file is missing, renamed, or given a suffix like
`script(1).js` (which browsers sometimes do when a file of the same name
already exists in your downloads folder), the page will load but the
Convert button won't work.

---

## ▶️ How to Run It

No build step, no server, no install required.

1. Download all three files into a **new, empty folder** (to avoid
   filename collisions with older downloads).
2. Double-click `index.html` — it opens directly in any browser.
3. Type a number, pick a unit, click **Convert**.

### How to check it's actually working
Open your browser's dev tools (`F12` or right-click → Inspect) and look at
the **Console** tab before clicking Convert. A clean console with no red
errors means `script.js` loaded correctly. If you see a `404` for
`script.js`, that file isn't sitting next to `index.html` — see the file
structure note above.

---

## ✨ How It Works

| Step | What happens |
|---|---|
| Type a value | Plain text input, accepts numbers and decimals |
| Pick a unit | Segmented °C / °F / K toggle — this is the unit of the value you typed |
| Click Convert | JavaScript intercepts the form submit (`event.preventDefault()`), reads the value and unit, and runs the conversion — the page never reloads |
| See results | All three units always show in a panel below the button — before you convert, they sit as greyed-out placeholders (`—`); after converting, they fill in with real numbers, and the row matching your input unit is highlighted |

**Conversion formulas used** (everything converts through Celsius as a common base):
- `°F = °C × 9/5 + 32`
- `°C = (°F − 32) × 5/9`
- `K = °C + 273.15`

---

## ✅ Validation & Edge Cases

- **Empty or non-numeric input** (e.g. blank, `abc`, `12x`) → shows an
  inline error message, the input outlines in red, and the results panel
  resets to placeholders. No conversion is attempted.
- **Below absolute zero** — anything that works out to less than
  −273.15°C (equivalent to −459.67°F or 0K) shows a friendly error instead
  of a nonsense result, since that temperature can't physically exist.
  For example, `-300` with °C selected triggers this; `-273.15` itself is
  the exact boundary and is still treated as valid.

---

## 🎨 Design

Palette and type pairing match the rest of this portfolio (`ink`, `amber`,
`teal`; Space Grotesk + Inter), so this tool fits alongside the other
projects if linked from there later.

---

## ✅ Checklist Coverage — Task 3

- [x] Numeric input with validation (rejects non-numeric/empty input)
- [x] Unit selector for the input value (°C / °F / K toggle)
- [x] All output units shown simultaneously, auto-converted from one input
- [x] Convert button triggers the calculation on click
- [x] Result display area with correct unit labels, always visible
- [x] Absolute zero edge case handled with a clear message
- [x] Clean, centred UI with clear labels
- [x] Fully responsive (tested at desktop and mobile widths)

**Built by Ajayi Opemipo Andrew.**