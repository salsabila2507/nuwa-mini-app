# Nuwa Scanner - Base Mini App

World's First Real World Social Scanner on Base. Upload a face pic and discover digital identities across 500+ platforms instantly.

![Nuwa Scanner](https://img.shields.io/badge/Built%20for-Base-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## 🌟 Features

- **Face Recognition Search**: Upload a photo and find matching profiles
- **Name Search**: Search by name, username, or identifier
- **500+ Platforms**: Scan across Instagram, TikTok, LinkedIn, Twitter, and more
- **Privacy First**: Encrypted uploads, no data storage
- **Instant Results**: AI-powered scanning in seconds
- **Base Mini App**: Optimized for Base app ecosystem

## 🚀 Quick Deploy to Vercel

### Prerequisites

- GitHub account
- Vercel account (free tier works)
- Base app account

### Step 1: Deploy to Vercel

1. **Push to GitHub first**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Nuwa Scanner Mini App"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/nuwa-mini-app.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure:
     - Framework Preset: **Next.js**
     - Root Directory: **./nuwa-mini-app** (if in subfolder, otherwise leave blank)
     - Environment Variables: Skip for now
   - Click **Deploy**

3. **Get your Vercel URL**:
   - After deployment, copy your URL (e.g., `nuwa-scanner.vercel.app`)

### Step 2: Update Environment Variables

1. In Vercel Dashboard:
   - Go to your project → Settings → Environment Variables
   - Add: `NEXT_PUBLIC_URL` = `https://your-app.vercel.app`
   - Click **Save**
   - Redeploy from Deployments tab

### Step 3: Disable Deployment Protection

⚠️ **IMPORTANT**: Required for Base account association!

1. In Vercel Dashboard:
   - Settings → Deployment Protection
   - Toggle **"Vercel Authentication"** to **OFF**
   - Click **Save**

### Step 4: Create Account Association

1. Go to [base.dev/preview?tab=account](https://base.dev/preview?tab=account)
2. Paste your Vercel URL: `your-app.vercel.app`
3. Click **Submit**
4. Click **Verify** button
5. Follow the on-screen instructions to sign with your Base Account
6. Copy the entire `accountAssociation` object

### Step 5: Update Manifest

1. Open `minikit.config.ts`
2. Replace the empty `accountAssociation` object with your copied values:

   ```typescript
   accountAssociation: {
     header: "eyJmaBBiOjE3MzE4LCJ...", // Your actual values
     payload: "eyJkb21haW4iOiJ4Bw...",
     signature: "MHhmNGQzN2M2OTk4..."
   }
   ```

3. Push changes:
   ```bash
   git add .
   git commit -m "Add account association"
   git push
   ```

Vercel will auto-deploy!

### Step 6: Preview Your App

1. Go to [base.dev/preview](https://base.dev/preview)
2. Enter your app URL
3. Verify:
   - ✅ Embed preview displays correctly
   - ✅ Launch button works
   - ✅ Account association verified (Account tab)
   - ✅ Metadata complete (Metadata tab)

### Step 7: Publish to Base

1. Open Base app
2. Create a new post
3. Paste your app URL
4. The rich embed will appear automatically
5. Post it! 🎉

Your Mini App is now live on Base!

## 📁 Project Structure

```
nuwa-mini-app/
├── app/
│   ├── .well-known/
│   │   └── farcaster.json/
│   │       └── route.ts          # Manifest endpoint
│   ├── api/
│   │   └── webhook/
│   │       └── route.ts          # Webhook handler
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main app page
├── public/                       # Static assets (add images here)
├── minikit.config.ts             # Mini App configuration
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Customization

### Update Branding

1. **Colors**: Edit `tailwind.config.js`:
   ```javascript
   colors: {
     'nuwa-purple': '#8B5CF6',  // Change to your brand color
     'nuwa-blue': '#3B82F6',
     'nuwa-dark': '#1E1B4B',
   }
   ```

2. **App Name & Description**: Edit `minikit.config.ts`:
   ```typescript
   name: "Your App Name",
   subtitle: "Your Tagline",
   description: "Your description..."
   ```

### Add Images

1. Create/download these images (recommended sizes):
   - `icon.png` - 512x512px (app icon)
   - `splash.png` - 1080x1920px (splash screen)
   - `hero.png` - 1200x630px (hero image)
   - `og-image.png` - 1200x630px (social share)
   - `embed-image.png` - 1200x630px (embed preview)
   - `screenshot-1.png`, `screenshot-2.png` - 1080x1920px

2. Place them in `/public/` folder

3. Update URLs in `minikit.config.ts` if needed

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🛠️ Tech Stack

- **Next.js 14.2**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Farcaster MiniApp SDK**: Base Mini App integration
- **Lucide React**: Icons

## 📝 Features Roadmap

- [ ] Real Nuwa API integration
- [ ] Search results display
- [ ] Multiple platform filters
- [ ] Share results feature
- [ ] Save search history
- [ ] Base Account integration for premium features
- [ ] Nuwa Stones reward system

## 🤝 Contributing

Contributions welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

MIT License - feel free to use this for your own projects!

## 🔗 Links

- [Base Documentation](https://docs.base.org/mini-apps)
- [Nuwa World](https://nuwa.world)
- [Base Build](https://base.dev)

## 💬 Support

Need help? 
- Check [Base Docs](https://docs.base.org/mini-apps)
- Join [Base Discord](https://discord.com/invite/buildonbase)

---

**Built with ❤️ for the Base ecosystem**

*Note: This is a demo/template. Actual search functionality requires Nuwa API integration.*
