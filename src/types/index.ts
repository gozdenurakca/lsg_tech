export interface Product {
  id: string
  slug: string
  name: string
  category: 'SSL' | 'Security'
  type: string
  brand: string
  description: string
  shortDescription: string
  price: {
    1: number
    2: number
    3: number
  }
  originalPrice: number
  discount: number
  features: string[]
  specs?: {
    [key: string]: string
  }
  rating: number
  reviewCount: number
  inStock: boolean
  popular: boolean
}

export interface CartItem {
  id: string
  productId: string
  productName: string
  productSlug: string
  years: 1 | 2 | 3
  quantity: number
  pricePerUnit: number
  totalPrice: number
}

export interface Cart {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}