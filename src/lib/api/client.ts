import { Product, Cart, ApiResponse } from '@/src/types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

// Generic fetch wrapper with error handling
async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    })

    const data: ApiResponse<T> = await response.json()
    
    if (!response.ok) {
      throw new Error(data.error || 'API request failed')
    }

    return data
  } catch (error) {
    console.error('API Error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }
  }
}

// Product APIs
export const productApi = {
  // Get all products
  getAll: async (params?: {
    category?: 'SSL' | 'Security'
    popular?: boolean
    search?: string
  }): Promise<ApiResponse<Product[]>> => {
    const queryParams = new URLSearchParams()
    if (params?.category) queryParams.append('category', params.category)
    if (params?.popular) queryParams.append('popular', 'true')
    if (params?.search) queryParams.append('search', params.search)

    const query = queryParams.toString()
    return fetchAPI<Product[]>(`/api/products${query ? `?${query}` : ''}`)
  },

  // Get single product by slug
  getBySlug: async (slug: string): Promise<ApiResponse<Product>> => {
    return fetchAPI<Product>(`/api/products/${slug}`)
  },
}

// Cart APIs
export const cartApi = {
  // Get cart
  get: async (): Promise<ApiResponse<Cart>> => {
    return fetchAPI<Cart>('/api/cart')
  },

  // Add to cart
  add: async (productSlug: string, years: 1 | 2 | 3 = 1, quantity: number = 1): Promise<ApiResponse<Cart>> => {
    return fetchAPI<Cart>('/api/cart', {
      method: 'POST',
      body: JSON.stringify({ productSlug, years, quantity })
    })
  },

  // Remove from cart
  remove: async (itemId: string): Promise<ApiResponse<Cart>> => {
    return fetchAPI<Cart>(`/api/cart?itemId=${itemId}`, {
      method: 'DELETE'
    })
  },

  // Clear cart
  clear: async (): Promise<ApiResponse<Cart>> => {
    return fetchAPI<Cart>('/api/cart', {
      method: 'DELETE'
    })
  }
}
