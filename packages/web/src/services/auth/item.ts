import { api } from "@services"
import { Item } from "types/auth"

export const GetItems = async (token: string): Promise<Item[]> => {
  const {} = await api.get("/item")
}
