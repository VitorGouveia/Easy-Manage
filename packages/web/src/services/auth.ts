import { api } from "@services"
import { decode } from "jsonwebtoken"

type RegisterRequestProps = {
  name: string
  email: string
  password: string
}

type LoginRequestProps = {
  email: string
  password: string
}

type LoginResponseProps = {
  data: {
    accessToken: string
    refreshToken: {
      id: string
      expiresIn: number
      createdAt: string
    }
    message: string
    user: {
      email: string
      name: string
      id: string
      createdAt: string
      updatedAt: string
    }
  }
}

type RegisterResponseProps = {
  data: {
    accessToken: string
    message: string
    user: {
      email: string
      name: string
      id: string
    }
  }
}

export const SignInRequest = async ({
  name,
  email,
  password
}: RegisterRequestProps): Promise<RegisterResponseProps> => {
  const { data }: RegisterResponseProps = await api({
    method: "POST",
    url: "/user",
    data: {
      name,
      email,
      password
    }
  })

  return {
    data
  }
}

export const getUserInformation = async (token: string) => {
  const { data }: LoginResponseProps = await api({
    method: "POST",
    url: "/login",
    headers: {
      authorization: `Bearer ${token}`
    },
    data: {
      email: "",
      password: ""
    }
  })

  const { accessToken, user, refreshToken } = data

  return {
    refreshToken,
    accessToken,
    user
  }
}

export const LogInRequest = async ({
  email,
  password
}: LoginRequestProps): Promise<LoginResponseProps> => {
  const { data }: LoginResponseProps = await api({
    method: "POST",
    url: "/login",
    data: {
      email,
      password
    }
  })

  return {
    data
  }
}

type Client = {
  id: string
  name: string
  phoneNumber: string
  city: string
  street: string
  houseNumber: string
  opts: string
}

type GetClientsData = {
  data: {
    message: string
    clients: Client[]
  }
}

export const GetClients = async (token: string) => {
  const { data }: GetClientsData = await api({
    method: "GET",
    url: "/client",
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  const { clients } = data

  return {
    clients
  }
}
