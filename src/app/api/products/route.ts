import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Product from '@/models/Product'

export async function POST(req: Request) {
  await connectDB()

  const body = await req.json()

  const product = await Product.create(body)

  return NextResponse.json({
    ok: true,
    product
  })
}

export async function GET(request: NextRequest) {
  try {
    await connectDB()

    const { searchParams } = new URL(request.url)
const type = searchParams.get("type");

   const validation = searchParams.get('validation')
    const category = searchParams.get('category') 
    const featured = searchParams.get('featured') === 'true'
    const search = searchParams.get('search')

    const page = Number(searchParams.get('page')) || 1
    const limit = Number(searchParams.get('limit')) || 9
    const skip = (page - 1) * limit
    const tier = searchParams.get("tier")


const filter: any = {};

if (type) filter.productType = type;     
if (category) filter.category = category; 
if (validation) filter.validation = validation; 
if (featured) filter.featured = true;    
if (tier) filter.tier = tier

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
