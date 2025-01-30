import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Replace with your actual domain
const domain = 'https://zodiac-passion-match.netlify.app';

// Define all routes
const routes = [
  '/',
  '/about',
  '/aphrodisiacs',
  '/compatibility-chart',
  '/gifts',
  '/contact',
  '/privacy',
  '/secret-crush',
  '/love-spell'
];

// Add dynamic zodiac sign routes
const zodiacSigns = [
  'aries', 'taurus', 'gemini', 'cancer', 
  'leo', 'virgo', 'libra', 'scorpio', 
  'sagittarius', 'capricorn', 'aquarius', 'pisces'
];

zodiacSigns.forEach(sign => {
  routes.push(`/sign/${sign}`);
  routes.push(`/aphrodisiacs/${sign}`);
});

// Generate sitemap XML
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${domain}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

// Write sitemap to public directory
fs.writeFileSync(
  path.join(__dirname, '../public/sitemap.xml'),
  sitemap.trim()
);

console.log('Sitemap generated successfully!');