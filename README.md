# SciVox Next.js - Science Communication Website

This is a Next.js 15 website for SciVox, built with TypeScript, Tailwind CSS, and the App Router for better SEO and scalability.

## 🚀 Features

- **Next.js 15** with App Router (latest stable)
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Server-Side Rendering (SSR)** for better SEO
- **Dark/Light Theme** support with next-themes
- **Responsive Design** - Mobile-first approach
- **Image Optimization** with Next.js Image component
- **Production-Ready** features:
  - ✅ Error boundaries and error handling
  - ✅ Loading states and Suspense
  - ✅ SEO optimized (sitemap, robots.txt, metadata)
  - ✅ Security headers configured
  - ✅ Analytics ready (Google Analytics)
  - ✅ Performance optimizations
  - ✅ Environment variables setup
  - ✅ Code formatting (Prettier)
- **All Original Features** from the Vite React version

## 📁 Project Structure

```
scivox-nextjs/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── the-latest/        # Latest articles page
│   ├── topic/             # Topic pages
│   ├── post/              # Blog post pages
│   ├── author/             # Author pages
│   └── podcast/           # Podcast page
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx
│   └── ui/                # UI components (shadcn/ui)
├── lib/                   # Utility functions
└── hooks/                 # Custom React hooks
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Navigate to the project directory:
```bash
cd scivox-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors automatically
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🔄 Migration from Vite React

This Next.js version is a complete clone of the original Vite React application with the following improvements:

### Key Changes:

1. **Routing**: Converted from React Router to Next.js App Router
   - `react-router-dom` → Next.js `Link` and file-based routing
   - `useParams()` → Next.js `params` prop in page components

2. **Images**: Using Next.js `Image` component for optimization
   - Automatic image optimization
   - Lazy loading
   - Responsive images

3. **Theme**: Using `next-themes` instead of custom ThemeProvider
   - Better SSR support
   - No hydration mismatches

4. **Components**: All components marked with `"use client"` where needed
   - Server Components by default
   - Client Components only when necessary

5. **Styling**: Same Tailwind CSS setup
   - All original styles preserved
   - Same design system

## 🎨 UI Components

The project uses shadcn/ui components. Essential components are included:
- Toast notifications
- Tooltips
- Theme toggle

Additional UI components can be added as needed from the original codebase.

## 📦 Dependencies

All dependencies from the original project are included, plus:
- `next` - Next.js framework
- `next-themes` - Theme management
- `next/image` - Image optimization

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

Next.js can be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting

## 🔍 SEO & Production Features

### SEO Improvements
- ✅ Server-side rendering for better SEO
- ✅ Comprehensive metadata (Open Graph, Twitter Cards)
- ✅ Automatic sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt configuration (`/robots.txt`)
- ✅ Semantic HTML structure
- ✅ Fast initial page loads
- ✅ Image optimization with Next.js Image

### Production Features
- ✅ **Error Handling**: Error boundaries and error pages
- ✅ **Loading States**: Suspense boundaries and loading UI
- ✅ **Security**: Security headers (HSTS, XSS protection, etc.)
- ✅ **Performance**: Image optimization, compression, caching
- ✅ **Analytics**: Google Analytics integration ready
- ✅ **Monitoring**: Error tracking setup ready
- ✅ **Code Quality**: ESLint, Prettier, TypeScript

## 📚 Next Steps

1. **Set Environment Variables**: Copy `.env.example` to `.env.local` and configure
2. **Add API Integration**: Connect to your CMS or API
3. **Add ISR**: Use Incremental Static Regeneration for articles
4. **Add Search**: Implement search functionality
5. **Add Comments**: Integrate a commenting system
6. **Configure Analytics**: Add `NEXT_PUBLIC_GA_ID` for Google Analytics
7. **Set Up Monitoring**: Configure error tracking (Sentry, etc.)
8. **Deploy**: Follow the [Production Deployment Guide](./PRODUCTION.md)

## 🔒 Security

The project includes:
- Security headers (HSTS, XSS protection, etc.)
- Content Security Policy ready
- Secure image loading
- Environment variable protection

## 📊 Performance

Optimizations included:
- Image optimization with Next.js Image
- Code splitting
- Compression enabled
- Optimized package imports
- Efficient caching strategies

## 🤝 Contributing

This is a clone project. For the original Vite React version, see the parent directory.

## 📄 License

Same as the original project.

---

Built with ❤️ using Next.js 15

