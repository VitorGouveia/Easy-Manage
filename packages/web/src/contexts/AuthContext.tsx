import { createContext, FC, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { setCookie, parseCookies } from "nookies"

import { SignInRequest, getUserInformation } from "@services"

type SignInData = {
  name: string
  email: string
  password: string
}

type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User
  signIn: ({}: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export const Auth: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const { push } = useRouter()
  const isAuthenticated = !!user

  useEffect(() => {
    const { "fastgas.token": token } = parseCookies()

    if (token) {
      const { name, email, id } = getUserInformation(token) as User
      setUser({
        name,
        email,
        id
      })
    }
  }, [])

  const signIn = async ({ name, email, password }: SignInData) => {
    /* call API */
    const { data } = await SignInRequest({
      name,
      email,
      password
    })

    const { accessToken, user } = data

    setCookie(undefined, "fastgas.token", accessToken, {
      maxAge: 60 * 60 * 24 // 24 hrs
    })

    setUser(user)

    push("/")
  }

  // const logIn = async ({ email, password }: SignInData) => {}

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}
