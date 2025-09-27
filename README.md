# Code Craft - Professional Web Development Services

A modern, responsive website for Code Craft, a professional web development company.

## 🚀 Quick Deployment to Vercel

### Prerequisites
- Node.js 18+ installed
- Vercel CLI installed (`npm i -g vercel`)

### Deployment Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Copy static files to root:**
   ```bash
   # Windows
   xcopy /E /Y dist\public\* .
   
   # Mac/Linux
   cp -r dist/public/* .
   ```

4. **Deploy to Vercel:**
   ```bash
   vercel --prod
   ```

### Alternative: Use the deployment script

**Windows:**
```bash
deploy.bat
```

**Mac/Linux:**
```bash
chmod +x deploy.sh
./deploy.sh
```

## 📁 Project Structure

```
├── api/
│   └── contact.ts          # Vercel serverless function for contact form
├── assets/                 # Static assets (CSS, JS)
├── index.html             # Main HTML file
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies and scripts
└── vite.config.ts         # Vite configuration
```

## 🔧 API Endpoints

- `POST /api/contact` - Contact form submission

## 🛠️ Development

### Local Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Type Checking
```bash
npm run check
```

## 📝 Features

- ✅ Responsive design
- ✅ Contact form with validation
- ✅ Modern UI components
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Mobile-friendly

## 🎨 Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- Vercel (deployment)

## 📞 Contact

- Email: codecraft2k@gmail.com
- Phone: +91 9629590312, +91 9597755722
- Location: Coimbatore, Tamil Nadu

## 🚀 Deployment Status

This project is configured for Vercel deployment with:
- Static file serving
- Serverless API functions
- Proper routing configuration
- Environment variable support

The contact form works through the `/api/contact` endpoint and all static files are served correctly.
