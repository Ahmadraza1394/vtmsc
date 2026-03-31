# Church Website

A modern, production-ready church/community website built with Next.js 15 (App Router), JavaScript, and Tailwind CSS.

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/
    (site)/          # Main site routes
      layout.js      # Site layout with navbar and footer
      page.js        # Home page
      about/
      sermons/
      gallery/
      give/
      contact/
      blogs/
      policy/
  components/
    layout/          # Layout components
      Navbar.js
      Footer.js
      Container.js
    ui/              # Reusable UI components
      Section.js
      Heading.js
  lib/
    utils.js         # Utility functions
  styles/
    globals.css      # Global styles
```

## Theme Colors

The project uses a centralized color system defined in `tailwind.config.js`:

- **Brand Primary**: `#6F9A37` - Use as `bg-brand-primary` or `text-brand-primary`
- **Background Light**: `#F5F7F0` - Use as `bg-background-light`
- **Banner**: `#90221A` - Use as `bg-banner`
- **Background Main**: `#FFFFFF` - Use as `bg-background-main`

**Important**: Only use these theme colors throughout the project. Do not use random colors.

## Pages

- Home (`/`)
- About (`/about`)
- Sermons (`/sermons`)
- Gallery (`/gallery`)
- Give (`/give`)
- Contact (`/contact`)
- Blogs (`/blogs`)
- Policy (`/policy`)

## Deployment

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy automatically

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Future Development

The project is structured to support:

- Blogs CMS
- Sermons CMS
- Admin dashboard
- API routes
- Dynamic content
- Figma design implementation

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
