import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import connectDB from '@/lib/db'
import User from '@/models/User'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const firstName = String(body.firstName || '').trim()
    const lastName = String(body.lastName || '').trim()
    const email = String(body.email || '').trim().toLowerCase()
    const password = String(body.password || '')
    const phone = String(body.phone || '').trim()
    const companyName = String(body.companyName || '').trim()

    if (!firstName || !lastName || !email || !password || !phone) {
      return NextResponse.json({ message: 'Eksik alan var' }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json(
        { message: 'Şifre en az 8 karakter olmalıdır.' },
        { status: 400 }
      )
    }

    await connectDB()

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json(
        { message: 'Bu email zaten kayıtlı' },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,
      companyName: companyName || undefined,
      role: 'customer',
    })

    return NextResponse.json({ message: 'Kayıt başarılı' }, { status: 201 })
  } catch (error) {
    console.error('REGISTER_ERROR:', error)
    return NextResponse.json({ message: 'Sunucu hatası' }, { status: 500 })
  }
}
