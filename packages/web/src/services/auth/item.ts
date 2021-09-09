import { api } from "@services"
import { Item } from "types/auth"

export const GetItems = async (token: string): Promise<Item[]> => {
  const { data } = await api.get("/item", {
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  const { clients } = data

  return clients
}

export const CreateItem = async (
  item: Omit<Item, "id" & "userId">,
  token: string
) => {
  const { data } = await api.post(
    "/item",
    {
      ...item
    },
    {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  )

  return {
    data
  }
}

export const RemoveItem = async (
  itemId: string,
  userId: string,
  token: string
) => {
  await api.delete(`/item/${itemId}`, {
    data: {
      id: itemId
    },
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}
