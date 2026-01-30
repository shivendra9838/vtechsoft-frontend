# VTECHSOFT Frontend Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel (Recommended for Frontend)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Deploy to Vercel
```bash
cd d:\desktop\p\vtechsoft-frontend
vercel --prod
```

#### Step 3: Follow Prompts
- Link to existing Vercel account (or create one)
- Confirm project settings
- Deploy to production

### Option 2: Netlify

#### Step 1: Build the Project
```bash
cd d:\desktop\p\vtechsoft-frontend
npm run build
```

#### Step 2: Deploy to Netlify
- Go to [netlify.com](https://netlify.com)
- Drag and drop the `dist` folder
- Or connect to GitHub for automatic deployments

### Option 3: GitHub Pages

#### Step 1: Update vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/vtechsoft-frontend/', // Your repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
```

#### Step 2: Build and Deploy
```bash
npm run build
# Deploy dist folder to GitHub Pages
```

## 🔧 Environment Variables

### Required Environment Variables
- `VITE_API_URL`: Your backend URL (e.g., https://vtechsoft-backend.onrender.com)

### Set Environment Variables on Vercel
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add the variables above

## 📋 Pre-Deployment Checklist

### ✅ Before Deploying:
- [ ] Test all functionality locally
- [ ] Update API URL in environment variables
- [ ] Check all routes are working
- [ ] Test contact form functionality
- [ ] Verify blog posts and comments work
- [ ] Test user authentication
- [ ] Check responsive design

### ✅ After Deploying:
- [ ] Test all pages on live URL
- [ ] Check API connectivity
- [ ] Test contact form submission
- [ ] Verify blog functionality
- [ ] Test user registration/login
- [ ] Check mobile responsiveness

## 🌐 Live URLs After Deployment

### Frontend URLs:
- **Vercel**: `https://vtechsoft-frontend.vercel.app`
- **Netlify**: `https://your-project-name.netlify.app`
- **GitHub Pages**: `https://username.github.io/vtechsoft-frontend/`

## 🔗 Important Notes

1. **API URL**: Make sure to update the frontend API URL to point to your deployed backend
2. **CORS**: Backend must allow requests from your frontend domain
3. **Environment Variables**: Never commit sensitive data to version control
4. **HTTPS**: Both frontend and backend should use HTTPS in production

## 🛠️ Troubleshooting

### Common Issues:
- **404 Errors**: Check routing configuration
- **API Errors**: Verify CORS settings and API URL
- **Build Errors**: Check for missing dependencies
- **Environment Variables**: Ensure all required variables are set

### Debug Steps:
1. Check browser console for errors
2. Verify network requests in DevTools
3. Check deployment logs
4. Test API endpoints directly
