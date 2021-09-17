import { api } from "../api"
import { Client, Item, Order } from "../../types/auth"

export type getInfoResponse = {
  id: string
  name: string
  email: string
  createdAt: string
  updatedAt: string
  Client: Client[]
  Item: Item[]
  Order: Order[]
}

export const getInfo = async (token: string): Promise<getInfoResponse> => {
  const { data } = await api.get("/user", {
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  return {
    ...data.user
  }
}
