import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Product from '@/models/Product'

export async function GET(request: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(request.url)

    const type = searchParams.get('type') 
    const category = searchParams.get('category') 
    const featured = searchParams.get('featured') === 'true'
    const search = searchParams.get('search')

    const page = Number(searchParams.get('page')) || 1
    const limit = Number(searchParams.get('limit')) || 9
    const skip = (page - 1) * limit

    const filter: any = {}

    if (type) {
      filter.type = type
    }

    if (category) {
      filter.category = category
    }

    if (featured) {
      filter.popular = true
    }

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { brand: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ]
    }

    const [products, total] = await Promise.all([
      Product.find(filter)
        .select('-__v')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),

      Product.countDocuments(filter)
    ])

    return NextResponse.json({
      success: true,
      data: products,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    })

  } catch (error) {
    console.error('API Error:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Ürünler yüklenirken bir hata oluştu',
      },
      { status: 500 }
    )
  }
}
