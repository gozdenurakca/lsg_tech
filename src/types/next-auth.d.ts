import NextAuth from "next-auth"
import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: "admin" | "customer"
    } & DefaultSession["user"]
  }

  interface User {
    id: string
    role: "admin" | "customer"
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    role: "admin" | "customer"
  }
}
