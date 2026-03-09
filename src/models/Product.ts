import mongoose, { Schema, Document } from 'mongoose'

export interface IProduct extends Document {
  name: string
  slug: string
  category: 'SSL' | 'Security'
  validation: 'DV' | 'OV' | 'EV'
  productType: 'Standard' | 'Wildcard' | 'Multi-Domain' | 'Code Signing'
  tier: 'Basic' | 'Business' | 'Premium' | 'Enterprise'
  brand: string

  description: string
  shortDescription: string

  price: {
    oneYear: number
    twoYear: number
    threeYear: number
  }

  originalPrice?: number
  discount?: number

  warranty: string
  issuanceTime: string
  browserCompatibility: string

  domainSupport: {
    standard: boolean
    wildcard: boolean
    multiDomainLimit?: number
  }

  encryption: {
    encryptionLevel: string
    signatureAlgorithm: string
    keyStrength: string
  }

  siteSeal: string
  supportLevel: string

  features: string[]
  specs: Record<string, string>

  rating: number
  reviewCount: number
  inStock: boolean
  featured?: boolean
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    validation: { type: String, required: true },
    productType: { type: String, required: true },
    tier: {
  type: String,
  enum: ['Basic', 'Premium', 'Enterprise'],
  default: 'Basic'
},
    brand: { type: String, required: true },

    description: { type: String, required: true },
    shortDescription: { type: String, required: true },

    price: {
      oneYear: { type: Number, required: true },
      twoYear: { type: Number},
      threeYear: { type: Number},
    },

    originalPrice: Number,
    discount: Number,

    warranty: String,
    issuanceTime: String,
    browserCompatibility: String,

    domainSupport: {
      standard: Boolean,
      wildcard: Boolean,
      multiDomainLimit: Number,
    },

    encryption: {
      encryptionLevel: String,
      signatureAlgorithm: String,
      keyStrength: String,
    },

    siteSeal: String,
    supportLevel: String,

    features: [String],
    specs: { type: Map, of: String },

    rating: Number,
    reviewCount: Number,
    inStock: { type: Boolean, default: true },
    featured: Boolean,
  },
  { timestamps: true }
)

export default mongoose.models.Product ||
  mongoose.model<IProduct>('Product', ProductSchema)
