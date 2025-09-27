# Vercel Deployment Guide

## Prerequisites
- Node.js 18+ installed
- Vercel CLI installed (`npm i -g vercel`)

## Deployment Steps

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

## Project Structure for Vercel

- `api/contact.ts` - Serverless function for contact form
- `dist/public/` - Static files (HTML, CSS, JS)
- `vercel.json` - Vercel configuration

## API Endpoints

- `POST /api/contact` - Contact form submission

## Environment Variables

No environment variables are required for basic functionality.

## Build Configuration

The project uses:
- Vite for frontend building
- TypeScript for type safety
- Vercel serverless functions for API routes
