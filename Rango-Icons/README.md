# Rango Icons

**Premium glass-style icon collection with matching animations** - modern, glowing
app-tile icons in three color themes, now with short looping animations for web,
apps and Framer Motion UIs.

![icons](https://img.shields.io/badge/static%20icons-4122-gold) ![animated](https://img.shields.io/badge/animated%20svgs-4122-orange) ![framer](https://img.shields.io/badge/framer%20motion%20components-1374-purple) ![license](https://img.shields.io/badge/license-MIT-black)

## Highlights

- **1374 unique designs x 3 themes = 4122 static icon files**
- **4122 animated SVG files** - one looping animation twin for every icon
- **1374 Framer Motion React components** - drop-in animated components with `theme` + `anim` props
- Premium 3D glass-tile style: dark rounded base, theme gradient glyph, soft glow, glass sheen
- 100% vector **SVG 512x512**, consistent stroke system, rounded caps
- Organized in **25 categories**

## Themes

| Theme | Suffix | Look |
|---|---|---|
| Gold & Black | `-gold` | Rich gold gradient glyphs on black glass |
| Orange | `-orange` | Warm amber gradient glyphs on dark bronze glass |
| Purple | `-purple` | Violet gradient glyphs on deep purple glass |

## Folder structure

```
Rango-Icons/
  README.md
  LICENSE
  catalog.json                      <- machine-readable index (incl. per-icon animation preset)
  PREVIEW.html                      <- open in a browser: live animated sample grid
  assets/icons/<category>/          <- static icons      rango-<name>-<theme>.svg
  assets/animation/<category>/      <- animated SVGs     rango-<name>-<theme>.svg
  assets/animation/framer-motion/   <- React components  <Category>/Rango<Name>.jsx + index.js
```

## Animation presets

Every icon ships with one default preset (assigned to fit the glyph - rotational
icons spin, the rest cycle through the set). Each animation is a short seamless
loop between 1.5s and 3.4s, GPU-friendly (transform/opacity only).

| Preset | Motion |
|---|---|
| `pulse` | Gentle heartbeat scale loop |
| `bounce` | Playful vertical hop |
| `shine` | Glass glare sweeps across the tile |
| `float` | Slow levitation drift |
| `wiggle` | Quick side-to-side shake |
| `pop` | Springy scale pop |
| `tilt` | Soft rocking tilt |
| `fade` | Breathing opacity pulse |
| `spin` | Smooth 360 rotation (rotational glyphs: suns, gears, loaders, charts...) |

All animated icons also breathe with a soft glow pulse for extra life.

## Using animated SVGs

Works anywhere SVG works - the animation is embedded CSS inside the file:

```html
<img src="assets/animation/security/rango-lock-gold.svg" width="96" alt="Lock" />
```

Or paste the file contents inline in HTML/JSX - it animates automatically.

## Using the Framer Motion components

```jsx
import { RangoLock, RangoRocket } from "./assets/animation/framer-motion/index.js";

<RangoLock size={96} theme="gold" anim="pulse" />
<RangoRocket size={64} theme="purple" anim="float" onClick={launch} />
```

Install once with `npm i framer-motion` (React 18+). Components accept:
`size` (px), `theme` (`gold | orange | purple`), `anim` (any preset, defaults to
the smart per-icon preset), plus any standard svg/element props.

## Categories

| Folder | Title | Designs |
|---|---|---|
| `arrows-navigation` | Arrows & Navigation | 130 |
| `charts-data` | Charts & Data | 44 |
| `communication` | Communication | 52 |
| `devices-tech` | Devices & Tech | 73 |
| `ecommerce` | E-commerce | 32 |
| `editing-tools` | Editing Tools | 39 |
| `education-books` | Education & Books | 12 |
| `files-documents` | Files & Documents | 66 |
| `finance` | Finance | 52 |
| `food-drink` | Food & Drink | 35 |
| `gestures` | Gestures & Hands | 10 |
| `health-medical` | Health & Medical | 29 |
| `home-objects` | Home & Objects | 22 |
| `letters-numbers` | Letters & Numbers | 143 |
| `location-travel` | Location & Travel | 27 |
| `media` | Media | 68 |
| `safety-symbols` | Safety Symbols | 10 |
| `security` | Security | 49 |
| `social-users` | Social & Users | 23 |
| `sports-fitness` | Sports & Fitness | 27 |
| `symbols-shapes` | Symbols, Shapes & Marks | 145 |
| `time-date` | Time & Date | 48 |
| `transport` | Transport | 32 |
| `ui-actions` | UI & Actions | 139 |
| `weather-nature` | Weather & Nature | 67 |

## Naming convention

- Static: `assets/icons/<category>/rango-<name>-<theme>.svg`
- Animated: `assets/animation/<category>/rango-<name>-<theme>.svg`
- Component: `assets/animation/framer-motion/<category>/Rango<Name>.jsx`

## License

MIT - free for personal and commercial use. See `LICENSE`.
