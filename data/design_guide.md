This is the technical design specification for the Lime Media clone.

## 1. Site Info
SITE_TYPE: Corporate Agency Website
HTML_LANG: en

## 2. Color Token Mapping

```
---DESIGN_MD_START---
## Visual Theme
A clean, modern corporate agency site utilizing a minimalist white and light grey palette, heavily contrasted with a vibrant lime green brand accent color and stark black typography.

## Colors
- background: hsl(0, 0%, 100%)
- foreground: hsl(0, 0%, 33%)
- muted-foreground: hsl(0, 0%, 50%)
- border: hsl(0, 0%, 85%)
- surface: hsl(0, 0%, 96%)
- primary: hsl(78, 75%, 48%)
- primary-foreground: hsl(0, 0%, 100%)
- primary-hover: hsl(78, 75%, 38%)
- secondary: hsl(0, 0%, 96%)
- secondary-foreground: hsl(207, 27%, 6%)
- secondary-hover: hsl(0, 0%, 90%)
- dark: hsl(207, 27%, 6%)
- dark-foreground: hsl(0, 0%, 100%)
- dark-muted: hsl(207, 10%, 60%)
- dark-border: hsl(207, 20%, 15%)
- accent: hsl(78, 75%, 48%)

## Page Background
solid hsl(0, 0%, 100%)

## Typography
- Headlines: Poppins — 400
- Body: Muli — 300

## Components
- Buttons: Sharp rectangular corners (0px border-radius). Solid filled with primary color, uppercase white text.
- Form Inputs: Sharp rectangular corners (0px border-radius). White background with a 1px solid light grey border (`border`), slightly thicker/colored border on focus.
---DESIGN_MD_END---
```

## 3. Navigation Spec

NAV_FULL_WIDTH: false
NAV_WIDTH: max-w-7xl
NAV_BACKGROUND: hsl(0, 0%, 100%)
NAV_BORDER_RADIUS: none
NAV_POSITION: relative
NAV_SHADOW: none
SCROLL_BEHAVIOR: none

Link style:
- fontSize: 14px
- fontWeight: 400
- textTransform: uppercase
- color: hsl(0, 0%, 33%)
- activeColor: hsl(0, 0%, 33%)
- hover effect: Links should have a subtle lime green (`border-primary`) bottom border on hover. The active link ("HOME") has a permanent bottom border in lime green (`border-b-2 border-primary`).

Logo:
- Size: h-[40px] w-auto
- Position: normal
- Badge: none

Dropdowns:
- "SERVICES": Includes a dropdown indicator (down chevron/arrow). Needs a standard hover dropdown panel.

CTA button: No CTA button in the navigation. Links only.

## 4. Section Plan

### Hero Section id="hero"
  theme: LIGHT
  background: bg-background
  text: text-foreground
  heading color: text-dark with text-accent highlights
  heading size: text-[55px] font-normal leading-tight
  body size: text-[18px] font-light
  layout: flex flex-col items-center justify-center text-center max-w-4xl mx-auto gap-6
  padding: py-32
  content: Main heading with a descriptive subtitle. The heading text is wrapped with decorative horizontal lines.
  backgroundImage: url("https://limemedia.co.za/wp-content/uploads/2022/01/architecture-featured.jpg")
  overlay: rgba(255, 255, 255, 0.9)
  buttons: none
  images: none
  special UI: The `<h1>` must be flanked above and below by a lime green horizontal line. Use a wrapper `div` with `border-t-4 border-b-4 border-primary py-4` or insert `div.w-full.h-1.bg-primary` before and after the text. Text mapping: `<span class="text-accent">Not A Traditional</span> <span class="text-dark">Agency</span>`.

### About Us id="about"
  theme: LIGHT
  background: bg-background
  text: text-foreground
  heading color: text-dark with text-accent highlights
  heading size: text-[40px] font-normal
  body size: text-[18px] font-light
  layout: flex flex-col items-center justify-center text-center max-w-5xl mx-auto gap-4
  padding: py-24
  content: An icon followed by a heading and a paragraph.
  backgroundImage: none
  overlay: none
  buttons: none
  images: none
  special UI: Add a lime green (`text-primary`) vector icon of a group of people (3 figures) above the heading. Heading mapping: `<span class="text-dark">About</span> <span class="text-accent">Us</span>`.

### Where We Excel id="services"
  theme: LIGHT
  background: bg-surface
  text: text-foreground
  heading color: text-dark with text-accent highlights
  heading size: text-[40px] font-normal
  body size: text-[18px] font-light
  layout: flex flex-col items-center justify-center text-center w-full gap-12
  padding: py-24
  content: Heading and subtitle at the top, followed by a 4-column grid of services.
  backgroundImage: none
  overlay: none
  buttons: none
  images: none
  special UI: Heading mapping: `<span class="text-dark">Where We</span> <span class="text-accent">Excel</span>`.
  grid layout: `<div class="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-6xl mx-auto mt-12">`
  grid items: 
  - Item 1: Heading "Lead Generation" (text-sm font-normal text-dark), Icon below it (lime green Target/Bullseye).
  - Item 2: Heading "Social", Icon below it (lime green Desktop & Mobile devices).
  - Item 3: Heading "Google Ads", Icon below it (lime green Google Ads triangle logo).
  - Item 4: Heading "Consulting", Icon below it (lime green Handshake).

### Clients We Work With id="clients"
  theme: LIGHT
  background: bg-background
  text: text-foreground
  heading color: text-dark
  heading size: text-[40px] font-normal
  body size: text-[18px] font-light
  layout: flex flex-col items-center justify-center text-center max-w-4xl mx-auto gap-4
  padding: py-24
  content: Icon, heading, and subtitle text.
  backgroundImage: none
  overlay: none
  buttons: none
  images: none
  special UI: Add a lime green vector icon of an Office Building above the heading. Entire heading is text-dark.

### Contact Us id="contact"
  theme: LIGHT
  background: bg-background
  text: text-foreground
  heading color: text-dark with text-accent highlights
  heading size: text-[40px] font-normal
  body size: text-[18px] font-light
  layout: flex flex-col items-center justify-center text-center w-full gap-6
  padding: py-24
  content: Icon, heading, and a contact form.
  backgroundImage: url("https://limemedia.co.za/wp-content/uploads/2022/01/contactus.jpg")
  overlay: rgba(255, 255, 255, 0.95)
  buttons: 
  - Solid button "SUBMIT" — bg-primary text-white w-full rounded-none px-6 py-4 uppercase font-normal text-[15px]
  images: none
  special UI: Add a lime green open Envelope icon above the heading. Heading mapping: `<span class="text-accent">Get In Touch</span> <span class="text-dark">With Us</span>`.
  form structure: `<form class="w-full max-w-3xl mx-auto flex flex-col gap-4 text-left mt-8">`. Inputs should have `p-4 border border-border text-sm`. Fields needed: "Name", "Email Address", "Contact Number", and a `<textarea>` for "Message" (h-48). Below the textarea, place a mock reCAPTCHA box (border, light bg, checkbox, text "I'm not a robot", recaptcha logo on right), followed by the SUBMIT button.

## 5. Favicon
https://limemedia.co.za/wp-content/uploads/2022/09/limemedia.png

## 6. Footer
Style: bg-dark
Text color: text-dark-muted
Columns: 1
Link Groups: none
Social Icons: none
Layout: Extremely simple footer. Single line of centered text: "Copyright 2026 Lime Holdings (Pty) Ltd - All Rights Reserved." text-[13px] text-white/70 py-10.

## 7. Files
MODIFY: src/components/layout/Navigation.astro, src/components/layout/Footer.astro, src/layouts/BaseLayout.astro, src/styles/global.css
CREATE: src/components/home/Hero.astro, src/components/home/About.astro, src/components/home/Services.astro, src/components/home/Clients.astro, src/components/home/Contact.astro