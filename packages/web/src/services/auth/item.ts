import { api } from "@services"
import { Item } from "types/auth"

export const GetItems = async (token: string): Promise<Item[]> => {
  const { data } = await api.get("/item", {
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  const { items } = data

  return items
}

export const CreateItem = async (item: Omit<Item, "id">, token: string) => {
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

export const UpdateItem = async (id: string, token: string, item: Item) => {
  await api.patch(
    `/item/${id}`,
    {
      ...item
    },
    {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  )
}
