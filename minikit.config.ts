const ROOT_URL = process.env.NEXT_PUBLIC_URL || 'https://your-app.vercel.app';

export const minikitConfig = {
  accountAssociation: {
    // Will be filled after deploying to Vercel and using base.dev/preview
    header: "",
    payload: "",
    signature: ""
  },
  miniapp: {
    version: "1",
    name: "Nuwa Scanner",
    subtitle: "Real World Social Scanner",
    description: "World's first RWS scanner on Base. Upload a photo and find digital identities across social platforms instantly.",
    screenshotUrls: [`${ROOT_URL}/screenshot-1.png`, `${ROOT_URL}/screenshot-2.png`],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#1E1B4B",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["social", "search", "identity", "web3", "rws"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "Find anyone, anywhere, instantly",
    ogTitle: "Nuwa Scanner - Real World Social Search",
    ogDescription: "Upload a face pic and discover digital identities across 500+ platforms",
    ogImageUrl: `${ROOT_URL}/og-image.png`,
  },
} as const;

export default minikitConfig;
