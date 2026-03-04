import { NextRequest, NextResponse } from 'next/server'
import { getProductBySlug } from '@/src/lib/data/products'
import { ApiResponse, Product } from '@/src/types'

// GET /api/products/[slug]
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params

    const product = getProductBySlug(slug)

    if (!product) {
      const response: ApiResponse<null> = {
        success: false,
        error: 'Ürün bulunamadı'
      }
      return NextResponse.json(response, { status: 404 })
    }

    const response: ApiResponse<Product> = {
      success: true,
      data: product
    }

    return NextResponse.json(response, { status: 200 })

  } catch (error) {
    console.error('API Error:', error)
    
    const response: ApiResponse<null> = {
      success: false,
      error: 'Ürün yüklenirken bir hata oluştu'
    }

    return NextResponse.json(response, { status: 500 })
  }
}
