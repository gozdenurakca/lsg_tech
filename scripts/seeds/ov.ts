import { features } from "process";

export const ovProducts = [

  // OV
  {
    name: "GeoTrust TrueBusinessID OV SSL",
    slug: "geotrust-truebusinessid-ov",
    category: "SSL",
    validation: "OV",
    productType: "Standard",
    brand: "GeoTrust",
    description: "GeoTrust kurumsal doğrulamalı SSL.",
    shortDescription: "Kurumsal OV SSL çözümü.",
    price: { oneYear: 1499, twoYear: 2699, threeYear: 3699 },
    specs: {
      Warranty: "$1,250,000",
      Encryption: "256-bit",
      Issuance: "1-3 gün"
    },
    rating: 4.8,
    reviewCount: 90,
    featured: true,
    inStock: true
  },

  {
  name: "Thawte SSL Web Server OV",
  slug: "thawte-ssl-webserver-ov",
  category: "SSL",
  validation: "OV",
  productType: "Standard",
  brand: "Thawte",
  description: "Thawte kurumsal doğrulamalı SSL sertifikası.",
  shortDescription: "Kurumsal OV SSL çözümü.",
  price: { oneYear: 1299, twoYear: 2399, threeYear: 3299 },
  specs: {
    Warranty: "$1,250,000",
    Encryption: "256-bit",
    Issuance: "1-3 gün"
  },
  rating: 4.7,
  reviewCount: 85,
  featured: false,
  inStock: true
},

{
  name: "DigiCert Basic OV SSL",
  slug: "digicert-basic-ov",
  category: "SSL",
  validation: "OV",
  productType: "Standard",
  brand: "DigiCert",
  description: "DigiCert kurumsal doğrulamalı temel SSL sertifikası.",
  shortDescription: "DigiCert OV giriş seviyesi.",
  price: { oneYear: 1899, twoYear: 3499, threeYear: 4899 },

  specs: {
    Warranty: "$1,250,000",
    Encryption: "256-bit",
    Issuance: "1-2 gün"
  },

    features: [
  "Sınırsız sertifika yeniden oluşturma ve değiştirme",
  "Otomatik SSL sertifika yaşam döngüsü yönetimi",
  "Uzman teknik destek",
  "Merkezi SSL yönetim paneli"
],

  rating: 4.9,
  reviewCount: 110,
  featured: true,
  inStock: true
},

{
  name: "DigiCert Secure Site OV SSL",
  slug: "digicert-secure-site-ov",
  category: "SSL",
  validation: "OV",
  productType: "Enterprise",
  brand: "DigiCert",
  description: "DigiCert Secure Site gelişmiş kurumsal SSL çözümü.",
  shortDescription: "Enterprise OV SSL çözümü.",
  price: { oneYear: 3499, twoYear: 6599, threeYear: 9299 },
  specs: {
    Warranty: "$1,500,000",
    Encryption: "256-bit",
    Issuance: "1 gün"
  },
  features: [
    "Otomatik SSL sertifika yaşam döngüsü yönetimi",
  "Öncelikli sertifika doğrulama ve aktivasyon",
  "Web sitesi güven mührü (Trust Seal)",
  "Alan adı itibar izleme",
  "Web sitesi güvenlik açığı taraması",
  "Gelişmiş SSL yönetim paneli"
  ],
  rating: 4.9,
  reviewCount: 140,
  featured: true,
  inStock: true
},

{
  name: "DigiCert Secure Site Pro OV SSL",
  slug: "digicert-secure-site-pro-ov",
  category: "SSL",
  validation: "OV",
  productType: "Enterprise",
  brand: "DigiCert",
  description: "DigiCert Secure Site Pro üst seviye kurumsal SSL.",
  shortDescription: "Premium OV SSL çözümü.",
  price: { oneYear: 4999, twoYear: 9399, threeYear: 13299 },
  specs: {
    Warranty: "$1,750,000",
    Encryption: "256-bit",
    Issuance: "1 gün"
  },
  features: [
  "Gelişmiş SSL sertifika yaşam döngüsü otomasyonu",
  "Öncelikli sertifika doğrulama ve aktivasyon",
  "Web sitesi güven mührü (Trust Seal)",
  "Alan adı itibar izleme",
  "Web sitesi güvenlik açığı taraması",
  "Certificate Transparency (CT) log izleme"
],
  rating: 4.9,
  reviewCount: 160,
  featured: true,
  inStock: true
},

{
  name: "Sectigo Single Domain OV SSL",
  slug: "sectigo-single-domain-ov",
  category: "SSL",
  validation: "OV",
  productType: "Standard",
  brand: "Sectigo",
  description: "Sectigo tek domain için kurumsal SSL sertifikası.",
  shortDescription: "Tek domain OV SSL.",
  price: { oneYear: 999, twoYear: 1899, threeYear: 2699 },
  specs: {
    Warranty: "$1,000,000",
    Encryption: "256-bit",
    Issuance: "1-3 gün"
  },
  features: [
  "7/24 uzman teknik destek",
  "Sınırsız sunucu lisansı",
  "30 gün para iade garantisi",
  "Tüm modern tarayıcılarla uyumluluk",
  "Yüksek tutarlı SSL garanti koruması",
  "Web sitesi güven mührü"
],
  rating: 4.6,
  reviewCount: 75,
  featured: false,
  inStock: true
},

{
  name: "Sectigo Multi-Domain OV SSL",
  slug: "sectigo-multi-domain-ov",
  category: "SSL",
  validation: "OV",
  productType: "Multi-Domain",
  brand: "Sectigo",
  description: "Birden fazla domain için kurumsal OV SSL.",
  shortDescription: "Multi-Domain OV SSL.",
  price: { oneYear: 2499, twoYear: 4599, threeYear: 6399 },
  specs: {
    Warranty: "$1,000,000",
    Encryption: "256-bit",
    Issuance: "1-3 gün"
  },
  features: [
  "7/24 uzman teknik destek",
  "Sınırsız sunucu kurulumu",
  "30 gün para iade garantisi",
  "Tüm modern tarayıcı ve mobil cihazlarla uyumluluk",
  "Yüksek tutarlı SSL garanti koruması",
  "Web sitesi güven mührü"
],
  rating: 4.7,
  reviewCount: 95,
  featured: true,
  inStock: true
},

// OV (WILDCARD)

{
  name: "Thawte SSL Web Server Wildcard OV",
  slug: "thawte-webserver-wildcard-ov",
  category: "SSL",
  validation: "OV",
  productType: "Wildcard",
  brand: "Thawte",
  description: "Thawte wildcard kurumsal SSL sertifikası.",
  shortDescription: "Wildcard OV SSL.",
  price: { oneYear: 3499, twoYear: 6599, threeYear: 9199 },
  specs: {
    Warranty: "$1,250,000",
    Encryption: "256-bit",
    Issuance: "1-3 gün"
  },
  rating: 4.7,
  reviewCount: 88,
  featured: false,
  inStock: true
},

{
  name: "DigiCert Basic Wildcard OV SSL",
  slug: "digicert-basic-wildcard-ov",
  category: "SSL",
  validation: "OV",
  productType: "Wildcard",
  brand: "DigiCert",
  description: "DigiCert wildcard OV SSL sertifikası.",
  shortDescription: "Wildcard OV SSL.",
  price: { oneYear: 4999, twoYear: 9399, threeYear: 13299 },
  specs: {
    Warranty: "$1,250,000",
    Encryption: "256-bit",
    Issuance: "1 gün"
  },
  rating: 4.9,
  reviewCount: 120,
  featured: true,
  inStock: true
},

{
  name: "DigiCert Secure Site Wildcard OV SSL",
  slug: "digicert-secure-site-wildcard-ov",
  category: "SSL",
  validation: "OV",
  productType: "Wildcard",
  brand: "DigiCert",
  description: "Secure Site wildcard kurumsal SSL çözümü.",
  shortDescription: "Enterprise wildcard OV SSL.",
  price: { oneYear: 6999, twoYear: 12999, threeYear: 18299 },
  specs: {
    Warranty: "$1,500,000",
    Encryption: "256-bit",
    Issuance: "1 gün"
  },
  rating: 4.9,
  reviewCount: 150,
  featured: true,
  inStock: true
},

{
  name: "DigiCert Secure Site Pro Wildcard OV SSL",
  slug: "digicert-secure-site-pro-wildcard-ov",
  category: "SSL",
  validation: "OV",
  productType: "Wildcard",
  brand: "DigiCert",
  description: "DigiCert Secure Site Pro wildcard kurumsal SSL.",
  shortDescription: "Premium wildcard OV SSL.",
  price: { oneYear: 8999, twoYear: 16999, threeYear: 23999 },
  specs: {
    Warranty: "$1,750,000",
    Encryption: "256-bit",
    Issuance: "1 gün"
  },
  rating: 5.0,
  reviewCount: 170,
  featured: true,
  inStock: true
},

{
  name: "Sectigo Wildcard OV SSL",
  slug: "sectigo-wildcard-ov",
  category: "SSL",
  validation: "OV",
  productType: "Wildcard",
  brand: "Sectigo",
  description: "Sectigo wildcard kurumsal SSL sertifikası.",
  shortDescription: "Wildcard OV SSL.",
  price: { oneYear: 2999, twoYear: 5599, threeYear: 7799 },
  specs: {
    Warranty: "$1,000,000",
    Encryption: "256-bit",
    Issuance: "1-3 gün"
  },
  rating: 4.7,
  reviewCount: 92,
  featured: false,
  inStock: true
},
]