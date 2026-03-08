# Panduan Deploy Nuwa Scanner ke Vercel

## Langkah Cepat (10 Menit)

### 1. Push ke GitHub

```bash
git init
git add .
git commit -m "Nuwa Scanner Mini App"
git branch -M main
git remote add origin https://github.com/USERNAME_KAMU/nuwa-mini-app.git
git push -u origin main
```

### 2. Deploy ke Vercel

1. Buka [vercel.com](https://vercel.com) → Login
2. Klik **"Add New Project"**
3. Import repository GitHub kamu
4. Settings:
   - Framework: **Next.js** ✅
   - Root Directory: Kosongkan (atau `./nuwa-mini-app` kalau di subfolder)
5. Klik **Deploy**
6. Tunggu selesai (2-3 menit)
7. Copy URL kamu (contoh: `nuwa-scanner.vercel.app`)

### 3. Matikan Deployment Protection

⚠️ **PENTING!** Kalau skip step ini, account association gagal!

1. Vercel Dashboard → Settings → Deployment Protection
2. Toggle **"Vercel Authentication"** jadi **OFF**
3. Save

### 4. Set Environment Variable

1. Vercel Dashboard → Settings → Environment Variables
2. Add new:
   - Name: `NEXT_PUBLIC_URL`
   - Value: `https://nuwa-scanner.vercel.app` (ganti dengan URL kamu)
3. Save → Redeploy

### 5. Create Account Association

1. Buka [base.dev/preview?tab=account](https://base.dev/preview?tab=account)
2. Paste URL Vercel kamu tanpa `https://`: `nuwa-scanner.vercel.app`
3. Klik **Submit**
4. Klik **Verify**
5. Login dengan Base Account kamu
6. Copy seluruh object `accountAssociation` yang muncul

### 6. Update minikit.config.ts

1. Buka file `minikit.config.ts`
2. Ganti bagian `accountAssociation` yang kosong dengan hasil copy tadi:

```typescript
accountAssociation: {
  header: "eyJmaBBiOjE3...",  // Paste hasil dari base.dev
  payload: "eyJkb21haW...",
  signature: "MHhmNGQz..."
}
```

3. Push ke GitHub:
```bash
git add .
git commit -m "Add account association"
git push
```

Vercel otomatis deploy ulang!

### 7. Preview & Test

1. Buka [base.dev/preview](https://base.dev/preview)
2. Paste URL kamu
3. Cek:
   - ✅ Embed muncul
   - ✅ Button "Launch Nuwa Scanner" bisa diklik
   - ✅ App terbuka dengan benar
4. Tab "Account" → Verify association ✅
5. Tab "Metadata" → Cek semua field lengkap ✅

### 8. Publish ke Base App!

1. Buka Base app
2. Buat post baru
3. Paste URL kamu: `https://nuwa-scanner.vercel.app`
4. Rich embed muncul otomatis
5. Post! 🎉

## ✅ Checklist

- [ ] Push ke GitHub
- [ ] Deploy ke Vercel
- [ ] Matikan Deployment Protection
- [ ] Set environment variable `NEXT_PUBLIC_URL`
- [ ] Generate account association di base.dev
- [ ] Update `minikit.config.ts`
- [ ] Push update ke GitHub
- [ ] Test di base.dev/preview
- [ ] Post di Base app

## 🎨 Tambahan: Upload Gambar

Buat gambar dengan ukuran ini dan taruh di folder `/public/`:

- `icon.png` - 512x512px
- `splash.png` - 1080x1920px  
- `hero.png` - 1200x630px
- `og-image.png` - 1200x630px
- `embed-image.png` - 1200x630px
- `screenshot-1.png` - 1080x1920px
- `screenshot-2.png` - 1080x1920px

Bisa buat di Canva atau Figma!

## ❓ Troubleshooting

**"Account association failed"**
→ Pastikan Deployment Protection OFF di Vercel

**"Manifest not found"**
→ Cek URL sudah benar dan app sudah deployed

**"Button tidak muncul di embed"**
→ Cek metadata `fc:miniapp` di `app/layout.tsx`

**"App tidak load"**
→ Cek console di browser, pastikan `sdk.actions.ready()` dipanggil

## 💡 Tips

- Gunakan domain custom kalau mau lebih profesional
- Test di berbagai device sebelum publish
- Join Base Discord untuk support: discord.com/invite/buildonbase

---

Selamat! Mini App kamu live di Base! 🚀
