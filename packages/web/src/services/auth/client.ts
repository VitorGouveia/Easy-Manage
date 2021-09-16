import { api } from "@services"
import { Client } from "../../types/auth"

export const GetClients = async (token: string): Promise<Client[]> => {
  const { data } = await api.get("/client", {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  const { clients } = data

  return clients
}

export const SearchClients = async (
  query: string,
  token: string
): Promise<Client[]> => {
  const { data } = await api.get(`/client/search/?query=${query}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })

  const { clients } = data

  return clients
}

type CreateClientResponse = {
  data: {
    client: Client
    message: string
  }
}

export const CreateClient = async (
  client: Omit<Client, "id">,
  token: string
): Promise<CreateClientResponse> => {
  const { data } = await api.post(
    "/client",
    {
      ...client
    },
    {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  ) as CreateClientResponse

  return {
    data
  }
}

export const RemoveClient = async (
  clientId: string,
  userId: string,
  token: string
) => {
  await api.delete(`/client/${clientId}`, {
    data: {
      id: userId
    },
    headers: {
      authorization: `Bearer ${token}`
    }
  })
}

export const UpdateClient = async (
  id: string,
  token: string,
  client: Client
) => {
  await api.patch(
    `/client/${id}`,
    {
      ...client
    },
    {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  )
}
