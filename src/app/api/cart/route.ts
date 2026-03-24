import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import ProductModel from '@/models/Product'
import { ApiResponse, Cart, CartItem } from '@/types'

let cart: CartItem[] = []

// GET
export async function GET() {
  try {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0)

    return NextResponse.json({
      success: true,
      data: {
        items: cart,
        totalItems,
        totalPrice
      }
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Sepet yüklenirken bir hata oluştu'
    }, { status: 500 })
  }
}

// POST
export async function POST(request: NextRequest) {
  try {
    await connectDB()

    const body = await request.json()
    const { productSlug, years = 1, quantity = 1 } = body

    if (!productSlug) {
      return NextResponse.json({
        success: false,
        error: 'Ürün slug gerekli'
      }, { status: 400 })
    }

    // ✅ DB’den çekiyoruz
    const product = await ProductModel.findOne({ slug: productSlug }).lean()

    if (!product) {
      return NextResponse.json({
        success: false,
        error: 'Ürün bulunamadı'
      }, { status: 404 })
    }

    const existingItemIndex = cart.findIndex(
      item => item.productSlug === productSlug && item.years === years
    )

    if (existingItemIndex > -1) {
      cart[existingItemIndex].quantity += quantity
      cart[existingItemIndex].totalPrice =
        cart[existingItemIndex].pricePerUnit *
        cart[existingItemIndex].quantity
    } else {
      const cartItem: CartItem = {
        id: Date.now().toString(),
        productId: product._id.toString(),
        productName: product.name,
        productSlug: product.slug,
        years,
        quantity,
        pricePerUnit: product.price[years],
        totalPrice: product.price[years] * quantity
      }

      cart.push(cartItem)
    }

    return NextResponse.json({
      success: true,
      data: {
        items: cart,
        totalItems: cart.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: cart.reduce((sum, item) => sum + item.totalPrice, 0)
      },
      message: 'Ürün sepete eklendi'
    })

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Ürün eklenirken bir hata oluştu'
    }, { status: 500 })
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
