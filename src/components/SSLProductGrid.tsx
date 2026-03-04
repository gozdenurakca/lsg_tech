'use client'

import { useState } from 'react'
import Link from 'next/link'

type Product = {
  _id: string
  name: string
  slug: string
  shortDescription: string
  featured?: boolean
  specs?: Record<string, string>
}

type Props = {
  groupedProducts: {
    OV: Product[]
    EV: Product[]
    DV: Product[]
  }
}

export default function SSLProductGrid({ groupedProducts }: Props) {
  const [activeTab, setActiveTab] = useState<'OV' | 'EV' | 'DV'>('OV')

  const products = groupedProducts[activeTab] || []

  return (
    <section className="py-32 bg-gradient-to-b from-[#f6f8fb] to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TITLE ================= */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            TLS/SSL Sertifika Karşılaştırması
          </h2>
          <p className="text-slate-600 mt-4 text-lg">
            Kurumsal güven seviyesine göre doğru sertifikayı seçin.
          </p>
        </div>

        {/* ================= VALIDATION TABS ================= */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-2 flex gap-2">
            {(['OV', 'EV', 'DV'] as const).map(type => (
              <button
                key={type}
                onClick={() => setActiveTab(type)}
                className={`px-10 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === type
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'text-slate-600 hover:bg-blue-50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">

          {products.map((product) => (
            <div
              key={product._id}
              className={`
                relative flex flex-col justify-between
                rounded-3xl bg-white p-12
                border transition-all duration-500
                hover:-translate-y-3 hover:shadow-2xl
                ${
                  product.featured
                    ? 'border-blue-900 shadow-2xl scale-105 z-10'
                    : 'border-slate-200'
                }
              `}
            >
              {/* FEATURED BADGE */}
              {product.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-900 text-white text-xs font-bold px-6 py-2 rounded-full shadow-md tracking-wide">
                  ÖNERİLEN
                </div>
              )}

              {/* CARD CONTENT */}
              <div>

                <h3 className="text-2xl font-bold mb-5">
                  {product.name}
                </h3>

                <p className="text-slate-600 mb-10 min-h-[60px]">
                  {product.shortDescription}
                </p>

                {/* ENTERPRISE INFO BLOCK */}
                <div className="space-y-5 mb-12 border-t pt-8">

                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Şifreleme</span>
                    <span className="font-semibold">
                      {product.specs?.['Encryption'] || '256-bit'}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Garanti</span>
                    <span className="font-semibold">
                      {product.specs?.['Warranty'] || '$50,000'}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Yayın Süresi</span>
                    <span className="font-semibold">
                      {product.specs?.['Issuance'] || '1-3 Gün'}
                    </span>
                  </div>

                </div>

              </div>

              {/* CTA */}
              <Link
                href={`/ssl/${product.slug}`}
                className={`
                  block text-center py-4 rounded-xl font-semibold transition-all duration-300
                  ${
                    product.featured
                      ? 'bg-blue-900 text-white hover:bg-blue-800'
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }
                `}
              >
                Detayları Gör
              </Link>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
