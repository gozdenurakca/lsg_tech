import connectDB from '@/lib/db'
import Product from '@/models/Product'
import SSLProductGrid from './SSLProductGrid'

export default async function SSLComparisonServer() {
  await connectDB()

  const products = await Product.find({
    category: 'SSL',
  }).lean()

  const grouped = {
    OV: products.filter(p => p.validation === 'OV'),
    EV: products.filter(p => p.validation === 'EV'),
    DV: products.filter(p => p.validation === 'DV'),
  }

  return <SSLProductGrid groupedProducts={grouped} />
}
