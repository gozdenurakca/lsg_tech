import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import connectDB from "@/lib/db"
import User from "@/models/User"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const email = credentials?.email?.toLowerCase().trim()
        const password = credentials?.password || ""

        if (!email || !password) {
          throw new Error("Email ve şifre zorunludur")
        }

        await connectDB()

        const user = await User.findOne({ email })

        if (!user) {
          throw new Error("Kullanıcı bulunamadı")
        }

        // 🔴 Askıya alınmış kullanıcı kontrolü
        if (user.status === "suspended") {
          throw new Error(
            "Hesabınız askıya alınmıştır. Lütfen destek ile iletişime geçin."
          )
        }

        const isValid = await bcrypt.compare(password, user.password)

        if (!isValid) {
          throw new Error("Email veya şifre hatalı")
        }

        return {
          id: user._id.toString(),
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          role: user.role,
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as any).id
        token.role = (user as any).role
        token.name = user.name
        token.email = user.email
      }

      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as "admin" | "customer"
        session.user.name = token.name as string
        session.user.email = token.email as string
      }

      return session
    },
  },

  pages: {
    signIn: "/giris",
  },

  secret: process.env.NEXTAUTH_SECRET,
}
