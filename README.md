# 🧊 Ilmora (علم) — Islamic Knowledge & Daily Deen Companion

> A serene, distraction-free sanctuary for the modern believer. Built with the **Liquid Glass Design System** and packaged as a first-class **Progressive Web App (PWA)** with 100% offline access to 339 MB of curated Islamic knowledge.

[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![PWA Ready](https://img.shields.io/badge/PWA-Installable_%26_Offline-10B981?logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)

---

## ✨ Features & Sacred Knowledge Datasets

Ilmora integrates **100% of the curated Islamic knowledge datasets** (over 339 MB) with zero bundle bloat via dynamic Vite code-splitting and an intelligent offline caching Service Worker.

### 📖 1. Holy Quran (القرآن الكريم)
- **114 Surahs & 30 Juz**: Complete Quranic text with revelation order, type (Meccan/Medinan), and verse counts.
- **Multilingual Translations**: Side-by-side toggles for English (Saheeh International), Bengali (মুহিউদ্দীন খান), and Urdu (احمد علی).
- **Verse-by-Verse Audio**: Sheikh Mishary Rashid Alafasy high-fidelity recitation with playback tracking.
- **Sacred Typography**: Classical Arabic typography using `Scheherazade New` and `Amiri` with adjustable font size presets (Normal, Large, Huge).
- **One-Tap Bookmarking**: Save any Ayah directly to your personal offline collection.

### 📜 2. Canonical Hadith Library (مكتبة الحديث)
- **9 Canonical Sunni Collections**:
  - *Sahih al-Bukhari* (صحيح البخاري)
  - *Sahih Muslim* (صحيح مسلم)
  - *Sunan Abi Dawud* (سنن أبي داود)
  - *Jami` at-Tirmidhi* (جامع الترمذي)
  - *Sunan an-Nasa'i* (سنن النسائي)
  - *Sunan Ibn Majah* (سنن ابن ماجه)
  - *Muwatta Malik* (موطأ مالك)
  - *Musnad Ahmad* (مسند أحمد)
  - *Sunan ad-Darimi* (سنن الدارمي)
- **410 Chapters & 40,000+ Traditions**: Complete Arabic text, narrator sanad chains, English translations, and Urdu translations with live search and breadcrumb navigation.

### 👑 3. Chronicles of the 25 Prophets (قصص الأنبياء)
- **Chronological Era Timeline**: From Prophet Adam (AS) to the final Messenger Muhammad (SAW).
- **Deep Theological Chapters**: Comprehensive narrative chapters enriched with clickable Quranic and Hadith scriptural reference modals.
- **Interactive Features (Per Prophet)**:
  - 👶 **Kids Mode**: Simplified, beautifully written storytelling chapters for young learners.
  - 🏆 **Moral Lessons**: Key ethical and spiritual takeaways with multilingual support.
  - 💡 **Interactive Quiz**: Knowledge checks with score tracking and instant answer explanations.
  - *(Tabs automatically adapt and only display when content is available for each prophet).*

### 🕋 4. Prayer Times & Astronomical Qibla Compass
- **20 Global Metropolitan Hubs**: Live solar calculations for Makkah, Madinah, Jerusalem, Cairo, Istanbul, London, New York, Dhaka, Jakarta, and more.
- **Daily Liturgical Schedule**: Fajr, Sunrise, Dhuhr, Asr, Maghrib, and Isha.
- **Prohibited Prayer Intervals**: Automatic calculation of sunrise, solar noon (Zawal), and sunset prohibited intervals.
- **Night Prayers**: Midnight and Last Third (Tahajjud) calculation windows.
- **Animated Qibla Dial**: Real-time compass rose oriented toward the Holy Kaaba with precise degree bearing.

### 🤲 5. Duas, Adhkar & Digital Tasbeeh
- **1,000+ Authentic Supplications**: Organized across 44 categories (Morning & Evening, Protection, Healing, Forgiveness, Travel, Family, Hardship, etc.).
- **Fullscreen Digital Tasbeeh Counter**:
  - Interactive tap counter with haptic feedback simulation and circular progress ring.
  - Presets: *SubhanAllah*, *Alhamdulillah*, *Allahu Akbar*, *Astaghfirullah*, *La ilaha illallah*.
  - Configurable target cycles: 33, 99, 100, or custom infinity counts.

### 🌟 6. 99 Names of Allah (أسماء الله الحسنى)
- **Complete Asmaul Husna**: Arabic script, transliteration, theological meaning, and explanation.
- **9-Language Selector**: English, Bengali (বাংলা), Arabic (العربية), Urdu (اردو), Indonesian, Turkish, French, Spanish, and German.
- **3D Flashcard Flip Mode**: Interactive flashcard deck to memorize and test your knowledge of Allah's divine attributes.

### 🪙 7. Real-Time Zakat Calculator
- **Global Nisab Benchmarks**: Live gold (87.48g) and silver (612.36g) Nisab standards.
- **18 Global Currencies**: USD, BDT, EUR, GBP, SAR, AED, INR, PKR, CAD, AUD, TRY, MYR, IDR, KWD, QAR, BHD, OMR, and JPY.
- **Comprehensive Asset Calculator**: Cash/Bank holdings, Gold/Silver grams, investments, business inventory, minus immediate short-term liabilities with 2.5% calculation.

### 🛡️ 8. Ruqyah Spiritual Healing (الرقية الشرعية)
- **6 Emergency Recitation Programs**: Brief, medium, and comprehensive healing programs derived from the Holy Quran and prophetic Sunnah.
- **13 Educational Guides**: Authentic rulings on Evil Eye (Ayn), Envy (Hasad), Sihr, Hijamah, and spiritual protection.

### 🔖 9. Saved Items & Bookmarks Library
- Persistent local device storage for verses, hadiths, and duas. Filterable by category with one-click jump links.

---

## 🧊 Liquid Glass Design System

Ilmora is engineered from the ground up to follow the **Liquid Glass Design System** specifications:

- **Ultra-Dark Canvas**: Base canvas (`#050811`) floats behind every translucent layer to create a "deep space" floating aesthetic.
- **Multi-Blob Ambient Background**: Fixed multi-blob system utilizing `mix-blend-screen`, `blur-[140-160px]`, and an SVG fractal noise grain overlay.
- **Three-Tier Glass Surfaces**:
  - `.glass-panel`: Structural glass for navigation docks, sticky headers, and full-screen reader modals with top rim lights.
  - `.glass-card`: Content cards with `backdrop-blur-[60px]`, inset edge lighting, and ambient elevation.
  - `.glass-hover`: Smooth hover lift (`-6px`) with enhanced rim reflections.
  - `.glass-shimmer`: Interactive light-sweep animation on hover.
- **Fluid Typography**:
  - Display: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) with `clamp(40px, 8vw, 80px)` fluid headings and two-tone gradient splits.
  - Body: [Inter](https://fonts.google.com/specimen/Inter) for crystal-clear readability.
  - Classical Script: [Amiri](https://fonts.google.com/specimen/Amiri) and [Scheherazade New](https://fonts.google.com/specimen/Scheherazade+New).
- **Custom Liquid Glass Dropdowns (`GlassSelect`)**: Custom frosted select menus with search filtering, sublabel badges, and checkmark indicators, eliminating native OS dropdowns.
- **Global WebKit Custom Scrollbar**: Sleek emerald-accented scrollbars across all desktop and mobile scroll containers.

---

## 📱 Progressive Web App (PWA)

Ilmora functions as a standalone native-feeling application on desktop and mobile:

- **1-Click Installation**: Installable directly from the browser on Windows, macOS, Android, and iOS.
- **Offline Cache**: Intelligent Service Worker (`sw.js`) caches the application shell and static assets, serving downloaded Quran and Hadith content even with no internet connection.
- **Mobile Shortcuts**: Jump directly into Quran, Prayer Times, Hadiths, Duas, or Zakat from the OS app icon.
- **Responsive Navigation**: Adaptive desktop sidebar and floating macOS-style mobile bottom dock.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Bundler & Tooling** | [Vite 8](https://vite.dev/) + [ESLint 10](https://eslint.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Vanilla CSS design tokens |
| **Routing** | [React Router v8](https://reactrouter.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Offline Storage** | Service Worker Cache API + LocalStorage |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:Tahsin005/ilmora.git
   cd ilmora
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Lint and type-check**:
   ```bash
   npm run lint
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

6. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 📁 Project Architecture

```
ilmora/
├── public/                     # Static assets & PWA files
│   ├── favicon.svg             # Liquid Glass vector emblem
│   ├── pwa-192x192.png         # PWA home screen icon
│   ├── pwa-512x512.png         # PWA splash icon
│   ├── pwa-maskable-512x512.png# Adaptive maskable PWA icon
│   ├── manifest.webmanifest    # W3C Web App Manifest
│   └── sw.js                   # Service Worker (offline caching)
├── src/
│   ├── components/
│   │   ├── common/             # Reusable UI (AmbientBackground, GlassSelect, ScrollReveal)
│   │   └── layout/             # Layout, Sidebar, Header, MobileNav
│   ├── context/                # Settings & Bookmarks context providers
│   ├── data-source/            # 339 MB curated Quran, Hadith, Prophets, and API datasets
│   ├── hooks/                  # Custom hooks (useSettings, useBookmarks, usePWA)
│   ├── pages/                  # Route views (Dashboard, Quran, Hadith, Prophets, Prayer, etc.)
│   ├── services/               # Content loaders, Islamic API, and currency services
│   ├── index.css               # Liquid Glass design system tokens & WebKit scrollbars
│   ├── main.tsx                # Application root & Service Worker registration
│   └── registerServiceWorker.ts# PWA registration and update listeners
├── index.html                  # HTML entry point with PWA metadata
└── vite.config.ts              # Vite configuration with Tailwind CSS v4
```

---

## 📄 License

This project is open-source and intended for educational, spiritual, and non-commercial benefit. Canonical texts (Quran, Hadith, Tafsir) belong to the public Islamic heritage.
