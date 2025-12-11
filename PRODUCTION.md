# Production Deployment Guide

## 🚀 Pre-Deployment Checklist

### 1. Environment Variables
- [ ] Copy `.env.example` to `.env.local` for local development
- [ ] Set up production environment variables in your hosting platform
- [ ] Configure `NEXT_PUBLIC_SITE_URL` with your production domain
- [ ] Add analytics IDs (Google Analytics, etc.) if needed

### 2. Build & Test
```bash
# Type check
npm run type-check

# Lint
npm run lint

# Build for production
npm run build

# Test production build locally
npm run start
```

### 3. Performance Optimization
- [ ] Optimize images (already configured with Next.js Image)
- [ ] Enable CDN for static assets
- [ ] Configure caching headers
- [ ] Set up monitoring (Sentry, LogRocket, etc.)

### 4. SEO
- [ ] Verify sitemap.xml is accessible at `/sitemap.xml`
- [ ] Verify robots.txt is accessible at `/robots.txt`
- [ ] Submit sitemap to Google Search Console
- [ ] Test Open Graph tags with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test Twitter cards with [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### 5. Security
- [ ] Review security headers (already configured)
- [ ] Set up HTTPS/SSL certificate
- [ ] Configure CORS if needed
- [ ] Review and update dependencies: `npm audit`

### 6. Analytics & Monitoring
- [ ] Set up Google Analytics (add `NEXT_PUBLIC_GA_ID`)
- [ ] Set up error monitoring (Sentry, etc.)
- [ ] Set up performance monitoring
- [ ] Configure uptime monitoring

## 📦 Deployment Platforms

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy automatically on push

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables

### Self-Hosted
1. Build: `npm run build`
2. Start: `npm run start`
3. Use PM2 or similar for process management
4. Set up reverse proxy (Nginx)

## 🔧 Post-Deployment

1. **Verify all routes work**
2. **Test error pages** (404, 500)
3. **Check loading states**
4. **Verify analytics tracking**
5. **Test on mobile devices**
6. **Run Lighthouse audit**

## 📊 Monitoring

- Monitor Core Web Vitals
- Track error rates
- Monitor API response times
- Set up alerts for downtime

## 🔄 Updates

- Keep dependencies updated: `npm update`
- Review security advisories: `npm audit`
- Test updates in staging before production

