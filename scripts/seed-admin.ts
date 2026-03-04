import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import User from '../models/User'

dotenv.config({ path: '.env.local' })

async function seedAdmin() {
  await mongoose.connect(process.env.MONGODB_URI!)

  const hashedPassword = await bcrypt.hash('admin123', 10)

  await User.create({
    name: 'Admin',
    email: 'admin@trlsg.com',
    password: hashedPassword,
    role: 'admin',
  })

  console.log('Admin oluşturuldu')
  process.exit(0)
}

seedAdmin()
