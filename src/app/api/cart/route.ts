import { NextRequest, NextResponse } from 'next/server'
import { getProductBySlug } from '@/src/lib/data/products'
import { ApiResponse, Cart, CartItem } from '@/src/types'

// Mock cart storage (in production, use database or session)
// In real app, this would be stored per user in database
let cart: CartItem[] = []

// GET /api/cart - Get cart contents
export async function GET() {
  try {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0)

    const response: ApiResponse<Cart> = {
      success: true,
      data: {
        items: cart,
        totalItems,
        totalPrice
      }
    }

    return NextResponse.json(response, { status: 200 })

  } catch (error) {
    console.error('API Error:', error)
    
    const response: ApiResponse<null> = {
      success: false,
      error: 'Sepet yüklenirken bir hata oluştu'
    }

    return NextResponse.json(response, { status: 500 })
  }
}

// POST /api/cart - Add item to cart
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { productSlug, years = 1, quantity = 1 } = body

    // Validate
    if (!productSlug) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Ürün slug gerekli'
      }
      return NextResponse.json(response, { status: 400 })
    }

    // Get product
    const product = getProductBySlug(productSlug)
    
    if (!product) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Ürün bulunamadı'
      }
      return NextResponse.json(response, { status: 404 })
    }

    // Check if already in cart
    const existingItemIndex = cart.findIndex(
      item => item.productSlug === productSlug && item.years === years
    )

    if (existingItemIndex > -1) {
      // Update quantity
      cart[existingItemIndex].quantity += quantity
      cart[existingItemIndex].totalPrice = 
        cart[existingItemIndex].pricePerUnit * cart[existingItemIndex].quantity
    } else {
      // Add new item
      const cartItem: CartItem = {
        id: Date.now().toString(),
        productId: product.id,
        productName: product.name,
        productSlug: product.slug,
        years: years as 1 | 2 | 3,
        quantity,
        pricePerUnit: product.price[years as 1 | 2 | 3],
        totalPrice: product.price[years as 1 | 2 | 3] * quantity
      }
      cart.push(cartItem)
    }

    const response: ApiResponse<Cart> = {
      success: true,
      data: {
        items: cart,
        totalItems: cart.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: cart.reduce((sum, item) => sum + item.totalPrice, 0)
      },
      message: 'Ürün sepete eklendi'
    }

    return NextResponse.json(response, { status: 200 })

  } catch (error) {
    console.error('API Error:', error)
    
    const response: ApiResponse<null> = {
      success: false,
      error: 'Ürün eklenirken bir hata oluştu'
    }

    return NextResponse.json(response, { status: 500 })
  }
}

// DELETE /api/cart - Clear cart or remove item
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const itemId = searchParams.get('itemId')

    if (itemId) {
      // Remove specific item
      cart = cart.filter(item => item.id !== itemId)
      
      const response: ApiResponse<Cart> = {
        success: true,
        data: {
          items: cart,
          totalItems: cart.reduce((sum, item) => sum + item.quantity, 0),
          totalPrice: cart.reduce((sum, item) => sum + item.totalPrice, 0)
        },
        message: 'Ürün sepetten kaldırıldı'
      }

      return NextResponse.json(response, { status: 200 })
    } else {
      // Clear entire cart
      cart = []
      
      const response: ApiResponse<Cart> = {
        success: true,
        data: {
          items: [],
          totalItems: 0,
          totalPrice: 0
        },
        message: 'Sepet temizlendi'
      }

      return NextResponse.json(response, { status: 200 })
    }

  } catch (error) {
    console.error('API Error:', error)
    
    const response: ApiResponse<null> = {
      success: false,
      error: 'Sepet işlemi sırasında bir hata oluştu'
    }

    return NextResponse.json(response, { status: 500 })
  }
}
