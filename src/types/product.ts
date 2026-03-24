export type Product = {
  _id: string
  name: string
  slug: string
  brand: string
  validation: "DV" | "OV" | "EV"

  shortDescription: string
  featured?: boolean

  specs?: Record<string, string>

  price?: {
    oneYear?: number
    twoYear?: number
    threeYear?: number
  }
}