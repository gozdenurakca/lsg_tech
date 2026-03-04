# 🚀 HIZLI BAŞLANGIÇ KILAVUZU

## ✅ Gereksinimler

- **Node.js** 16.0 veya üzeri ([İndir](https://nodejs.org/))
- Terminal veya Command Prompt
- Kod editörü (VS Code önerilir)

---

## 📦 Kurulum (3 Adım)

### 1️⃣ Proje Klasörüne Git

```bash
cd TRLSG-READY
```

### 2️⃣ Bağımlılıkları Yükle

```bash
npm install
```

⏱️ **Bu 2-3 dakika sürebilir** (internet hızına bağlı)

### 3️⃣ Projeyi Başlat

```bash
npm run dev
```

✅ **Hazır!** Tarayıcıda aç: **http://localhost:3000**

---

## 🎯 İlk Bakışta Ne Var?

### Ana Sayfa (http://localhost:3000)
- Hero section
- İstatistikler
- Ürün kartları
- Navbar & Footer

### API Endpoints
- **http://localhost:3000/api/products** - Tüm ürünler
- **http://localhost:3000/api/products/dv-ssl** - Tek ürün
- **http://localhost:3000/api/cart** - Sepet

---

## 📁 Proje Yapısı

```
TRLSG-READY/
├── app/
│   ├── layout.tsx          # Ana şablon (SEO, Navbar, Footer)
│   ├── page.tsx            # Ana sayfa
│   ├── globals.css         # Global stiller
│   └── api/
│       ├── products/       # Ürün API'si
│       └── cart/           # Sepet API'si
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── Footer.tsx      # Footer
│   └── ui/
│       └── Button.tsx      # Buton component
│
├── lib/
│   ├── data/
│   │   └── products.ts     # Mock ürün verisi
│   └── api/
│       └── client.ts       # API client fonksiyonları
│
├── types/
│   └── index.ts            # TypeScript type'lar
│
└── Config dosyaları
    ├── package.json
    ├── tailwind.config.js
    ├── tsconfig.json
    └── next.config.js
```

---

## 🎨 Tailwind CSS Kullanımı

### Hazır Renkler

```jsx
className="bg-primary"          // Mavi
className="bg-secondary"        // Yeşil
className="text-dark"           // Koyu yazı
className="text-gray"           // Gri yazı
```

### Hazır Components

```jsx
className="btn-primary"         // Ana buton
className="btn-secondary"       // İkincil buton
className="card"                // Kart container
className="section-container"   // Sayfa container
```

### Responsive

```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
// Mobile: 1 kolon
// Tablet (md): 2 kolon
// Desktop (lg): 3 kolon
```

---

## 🔌 API Kullanımı

### Frontend'de API Çağırma

```typescript
import { productApi, cartApi } from '@/lib/api/client'

// Tüm ürünleri al
const response = await productApi.getAll()
console.log(response.data) // Product[]

// SSL ürünlerini al
const sslProducts = await productApi.getAll({ category: 'SSL' })

// Tek ürün al
const product = await productApi.getBySlug('dv-ssl')

// Sepete ekle
const cart = await cartApi.add('dv-ssl', 1, 1)
```

### curl ile Test

```bash
# Tüm ürünler
curl http://localhost:3000/api/products

# SSL ürünleri
curl http://localhost:3000/api/products?category=SSL

# Tek ürün
curl http://localhost:3000/api/products/dv-ssl

# Sepete ekle
curl -X POST http://localhost:3000/api/cart \
  -H "Content-Type: application/json" \
  -d '{"productSlug":"dv-ssl","years":1,"quantity":1}'
```

---

## 🛠️ Geliştirme Komutları

```bash
# Development server (hot reload)
npm run dev

# Production build
npm run build

# Production server çalıştır
npm run start

# Kod kalitesi kontrolü
npm run lint
```

---

## 📝 Yeni Sayfa Eklemek

### 1. Sayfa Dosyası Oluştur

```bash
# app/hakkimizda/page.tsx
```

```typescript
export default function HakkimizdaPage() {
  return (
    <main className="pt-20 min-h-screen">
      <div className="section-container py-20">
        <h1 className="text-4xl font-bold mb-6">Hakkımızda</h1>
        <p className="text-lg text-gray">...</p>
      </div>
    </main>
  )
}
```

### 2. Otomatik Route

✅ `/hakkimizda` route'u otomatik oluştu!

---

## 🎯 Sık Karşılaşılan Sorunlar

### Port zaten kullanımda

```bash
# Başka bir port kullan
npm run dev -- -p 3001
```

### node_modules silindi

```bash
npm install
```

### Cache temizle

```bash
rm -rf .next
npm run dev
```

### TypeScript hatası

```bash
npm run build
# Hataları gösterir
```

---

## 📚 Daha Fazla Bilgi

- **API Dokümantasyonu:** `API_DOCS.md`
- **README:** `README.md`
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs

---

## 🎉 İlk Değişikliğini Yap!

### 1. app/page.tsx'i aç

### 2. Hero başlığını değiştir:

```typescript
<h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
  Kendi Başlığın Buraya
</h1>
```

### 3. Kaydet ve tarayıcıda gör! (Hot reload)

---

## 💡 İpuçları

1. **VS Code kullan** - Auto-complete için
2. **Tailwind IntelliSense** extension kur
3. **Console'u aç** (F12) - Hataları görmek için
4. **API_DOCS.md**'ye bak - Tüm endpoint'ler orada

---

## 🚀 Sonraki Adımlar

1. Ürün detay sayfası ekle
2. Sepet UI'ı yap
3. Ürün listeleme sayfası
4. Admin paneli
5. Database entegrasyonu (PostgreSQL)
6. Payment integration (İyzico)

---

## 📞 Yardım

Sorun mu var? 
1. Terminal'deki hata mesajını oku
2. Google'da ara
3. API_DOCS.md'ye bak
4. README.md'ye bak

**Başarılar! 🎉**
