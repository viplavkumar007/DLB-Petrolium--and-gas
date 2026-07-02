# DLB Petroleum Oil & Gas Corporation Pvt. Ltd. — Website

Production-ready single-page corporate website built with React + Vite + Tailwind CSS + Framer Motion.

## Tech Stack
- React 18 (JavaScript only, no TypeScript)
- Vite
- Tailwind CSS
- Framer Motion

## Project Structure
All page content (text, contact info, services, certifications, etc.) lives in a single file:
```
src/data/siteContent.js
```
Edit this file to update any copy on the site without touching components.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the dev server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

3. Build for production:
   ```bash
   npm run build
   ```
   Output is generated in the `dist/` folder.

4. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Deployment

### Vercel
1. Push this project to a GitHub repository.
2. Go to vercel.com/new and import the repository.
3. Vercel auto-detects the Vite framework — no extra configuration is needed (a `vercel.json` is included for SPA routing).
4. Click **Deploy**.

### Netlify
1. Push this project to a GitHub repository.
2. Go to app.netlify.com → **Add new site** → **Import an existing project**.
3. Build command: `npm run build`
4. Publish directory: `dist`
   (Both are already configured in `netlify.toml`.)
5. Click **Deploy site**.

## Legal Documents
The Certificate of Incorporation, Memorandum of Association, and Articles of Association are stored in `public/documents/` and are previewed in-browser via the Certifications section's document modal.

## Lead Routing
Enquiry and book-connection submissions prepare an email to `dlbpetrolium@gmail.com`. Only buttons explicitly labeled for WhatsApp, including the floating WhatsApp button, deep-link to `wa.me` with a pre-filled message configured in `src/lib/whatsapp.js` and `src/data/siteContent.js` (`contact.whatsappDefaultMessage`).

## Notes
- Gallery images currently use Unsplash source queries as placeholders — replace with real photography in `src/data/siteContent.js` (`galleryItems`) and `src/sections/Hero.jsx` / `About.jsx` background images when available.
- Replace `public/favicon.ico` with a proper favicon-sized export of the logo for best results across browsers.
