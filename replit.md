# Replit.md

## Overview

This is a personal link-in-bio page, similar to Linktree or Bento. It serves as a simple landing page where users can share multiple links to their portfolio, social media profiles, and contact information from a single URL. The project is a static website built with vanilla HTML, CSS, and JavaScript.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Static Site Approach**
- The project uses a pure static site architecture with no build tools or frameworks
- Single HTML page (`index.html`) serves as the main entry point
- Styling handled through a dedicated CSS file (`style.css`) with a dark theme design
- JavaScript (`script.js`) provides a placeholder for future interactivity like click tracking or animations

**Design System**
- Uses Inter font from Google Fonts for typography
- Dark color scheme with slate-based colors (`#0f172a` background, `#f8fafc` text)
- Mobile-first responsive design with max-width container (480px)
- Card-based link layout with hover states

**Component Structure**
- Profile header: Avatar image, name, and tagline
- Links container: Multiple link cards with consistent styling
- Footer: Copyright information

### No Backend Required

This is a client-side only application. All content is static HTML with no server-side processing, database, or API calls needed.

## External Dependencies

### Fonts
- **Google Fonts (Inter)**: Primary typeface loaded via external CDN
  - Weights: 400, 500, 600
  - Preconnect hints used for performance optimization

### Assets
- **avatar.png**: Profile image (currently referenced but may need to be added to the repository)

### No Third-Party Libraries
The project intentionally avoids JavaScript frameworks or CSS libraries, keeping the bundle size minimal and load times fast for a simple link page.