export type User = {
  id: string
  name: string
  email: string
  createdAt: string
  updatedAt: string
}

export type RefreshToken = {
  id: string
  expiresIn: number
  createdAt: string
}

export type Client = {
  id: string
  name: string
  phoneNumber: string
  city: string
  street: string
  houseNumber: string
  opts: string
}

export type Item = {
  id: string
  userId: string
  name: string
  description: string
  price: number
  discount: number
  quantity: number
}

export type Order = {
  id: string
  quantity: number
  user: User
  client: Client
  item: Item
}
