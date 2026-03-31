# Public Assets Folder

This folder contains static assets that are served directly by Next.js.

## Folder Structure

```
public/
  images/
    hero/
      hero-1.jpg  - First carousel slide image
      hero-2.jpg  - Second carousel slide image
      hero-3.jpg  - Third carousel slide image
      hero-4.jpg  - Fourth carousel slide image
      hero-5.jpg  - Fifth carousel slide image
```

## How to Add Images

1. Place your hero carousel images in `public/images/hero/`
2. Name them exactly as: `hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`, `hero-4.jpg`, `hero-5.jpg`
3. Recommended image specifications:
   - Format: JPG or PNG
   - Dimensions: 1920x1080 or higher (16:9 aspect ratio)
   - File size: Optimized for web (< 500KB per image)
   - Quality: High resolution for crisp display

## Image Guidelines

- Use high-quality, relevant images that represent your church community
- Ensure images are properly licensed or owned by your organization
- Optimize images before uploading to reduce page load time
- Consider using tools like TinyPNG or ImageOptim for compression

## Accessing Images

Images in the public folder are accessed with paths starting from the root:
- `/images/hero/hero-1.jpg`
- `/images/hero/hero-2.jpg`
- etc.

No need to reference the `public` folder in the path - Next.js serves these files from the root automatically.
