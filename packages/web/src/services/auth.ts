import { api } from "@services"
import { decode } from "jsonwebtoken"

type RegisterRequestProps = {
  name: string
  email: string
  password: string
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

export const getUserInformation = (token: string) => {
  return decode(token)
}
