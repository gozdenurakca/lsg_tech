import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from '../src/models/Product'


dotenv.config({ path: '.env.local' })

async function seedProducts() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI tanımlı değil.')
    }

    await mongoose.connect(process.env.MONGODB_URI)
    console.log('✅ MongoDB bağlandı')

    await Product.deleteMany({})
    console.log('Eski ürünler silindi')

    const products = [

  // =======================
  // DV
  // =======================

  {
    name: 'Sectigo Basic DV',
    slug: 'sectigo-basic-dv',
    category: 'SSL',
    validation: 'DV',
    productType: 'Standard',
    brand: 'Sectigo',
    description: 'Temel domain doğrulamalı SSL.',
    shortDescription: 'Hızlı kurulum ve temel şifreleme.',
    price: { oneYear: 299, twoYear: 538, threeYear: 717 },
    specs: {
      Warranty: '$50,000',
      Encryption: '256-bit',
      Issuance: '5-10 dakika'
    },
    rating: 4.7,
    reviewCount: 340,
    featured: false,
    inStock: true
  },

  {
    name: 'Sectigo Wildcard DV',
    slug: 'sectigo-wildcard-dv',
    category: 'SSL',
    validation: 'DV',
    productType: 'Wildcard',
    brand: 'Sectigo',
    description: 'Sınırsız subdomain koruması.',
    shortDescription: 'Wildcard ile tüm alt domainleri koruyun.',
    price: { oneYear: 999, twoYear: 1798, threeYear: 2397 },
    specs: {
      Warranty: '$50,000',
      Encryption: '256-bit',
      Issuance: '10 dakika'
    },
    rating: 4.9,
    reviewCount: 210,
    featured: true,
    inStock: true
  },

  {
    name: 'Sectigo Multi-Domain DV',
    slug: 'sectigo-multi-dv',
    category: 'SSL',
    validation: 'DV',
    productType: 'Multi-Domain',
    brand: 'Sectigo',
    description: 'Birden fazla domain için tek sertifika.',
    shortDescription: 'SAN destekli SSL çözümü.',
    price: { oneYear: 1299, twoYear: 2338, threeYear: 3117 },
    specs: {
      Warranty: '$50,000',
      Encryption: '256-bit',
      Issuance: '10 dakika'
    },
    rating: 4.8,
    reviewCount: 140,
    featured: false,
    inStock: true
  },

  // =======================
  // OV
  // =======================

  {
    name: 'Sectigo Basic OV',
    slug: 'sectigo-basic-ov',
    category: 'SSL',
    validation: 'OV',
    productType: 'Standard',
    brand: 'Sectigo',
    description: 'Organizasyon doğrulamalı giriş seviyesi SSL.',
    shortDescription: 'Kurumsal güven için başlangıç.',
    price: { oneYear: 699, twoYear: 1299, threeYear: 1799 },
    specs: {
      Warranty: '$500,000',
      Encryption: '256-bit',
      Issuance: '1-3 gün'
    },
    rating: 4.7,
    reviewCount: 112,
    featured: false,
    inStock: true
  },

  {
    name: 'Sectigo Secure Site OV',
    slug: 'sectigo-secure-ov',
    category: 'SSL',
    validation: 'OV',
    productType: 'Premium',
    brand: 'Sectigo',
    description: 'En çok tercih edilen OV çözümü.',
    shortDescription: 'Kurumsal siteler için ideal.',
    price: { oneYear: 999, twoYear: 1799, threeYear: 2499 },
    specs: {
      Warranty: '$1,000,000',
      Encryption: '256-bit',
      Issuance: '1-2 gün'
    },
    rating: 4.9,
    reviewCount: 231,
    featured: true,
    inStock: true
  },

  {
    name: 'Sectigo Secure Site Pro OV',
    slug: 'sectigo-pro-ov',
    category: 'SSL',
    validation: 'OV',
    productType: 'Enterprise',
    brand: 'Sectigo',
    description: 'Premium OV + gelişmiş güvenlik.',
    shortDescription: 'Enterprise seviyede koruma.',
    price: { oneYear: 1499, twoYear: 2699, threeYear: 3799 },
    specs: {
      Warranty: '$1,750,000',
      Encryption: '256-bit',
      Issuance: '1-2 gün'
    },
    rating: 5.0,
    reviewCount: 87,
    featured: false,
    inStock: true
  },

  // =======================
  // EV
  // =======================

  {
    name: 'DigiCert Basic EV',
    slug: 'digicert-basic-ev',
    category: 'SSL',
    validation: 'EV',
    productType: 'Standard',
    brand: 'DigiCert',
    description: 'Extended Validation giriş seviyesi.',
    shortDescription: 'Yüksek güvenli EV çözümü.',
    price: { oneYear: 1999, twoYear: 3599, threeYear: 4799 },
    specs: {
      Warranty: '$1,000,000',
      Encryption: '256-bit',
      Issuance: '3-5 gün'
    },
    rating: 4.8,
    reviewCount: 130,
    featured: false,
    inStock: true
  },

  {
    name: 'DigiCert Secure Site EV',
    slug: 'digicert-secure-ev',
    category: 'SSL',
    validation: 'EV',
    productType: 'Premium',
    brand: 'DigiCert',
    description: 'En çok tercih edilen EV çözümü.',
    shortDescription: 'Marka güveni için ideal.',
    price: { oneYear: 2499, twoYear: 4498, threeYear: 5997 },
    specs: {
      Warranty: '$1,750,000',
      Encryption: '256-bit',
      Issuance: '3-5 gün'
    },
    rating: 5.0,
    reviewCount: 210,
    featured: true,
    inStock: true
  },

  {
    name: 'DigiCert Secure Site Pro EV',
    slug: 'digicert-pro-ev',
    category: 'SSL',
    validation: 'EV',
    productType: 'Enterprise',
    brand: 'DigiCert',
    description: 'En üst seviye EV koruma.',
    shortDescription: 'Kurumsal üst segment.',
    price: { oneYear: 3499, twoYear: 6299, threeYear: 8499 },
    specs: {
      Warranty: '$2,000,000',
      Encryption: '256-bit',
      Issuance: '3-7 gün'
    },
    rating: 5.0,
    reviewCount: 75,
    featured: false,
    inStock: true
  }
]

    await Product.insertMany(products)
    console.log('🚀 Enterprise ürünler eklendi')

    process.exit(0)

  } catch (error) {
    console.error('Seed hatası:', error)
    process.exit(1)
  }
}

seedProducts()
