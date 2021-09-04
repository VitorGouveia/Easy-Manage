import { createContext, FC, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { setCookie, parseCookies, destroyCookie } from "nookies"

import { SignInRequest, getUserInformation, LogInRequest } from "@services"

type SignInData = {
  name: string
  email: string
  password: string
}

type LogInData = {
  email: string
  password: string
}

type RefreshToken = {
  id: string
  expiresIn: number
  createdAt: string
}

type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  isAuthenticated: boolean
  user: User
  refreshToken: RefreshToken
  signIn: ({}: SignInData) => Promise<void>
  logIn: ({}: LogInData) => Promise<void>
  clean: () => void
}

export const AuthContext = createContext({} as AuthContextType)

export const Auth: FC = ({ children }) => {
  const [refreshToken, setRefreshToken] = useState<RefreshToken | null>(null)
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

  const logIn = async ({ email, password }: LogInData) => {
    const { data } = await LogInRequest({
      email,
      password
    })

    const { accessToken, refreshToken, user } = data

    setRefreshToken(refreshToken)
    setUser(user)

    setCookie(undefined, "fastgas.token", accessToken, {
      maxAge: 60 * 60 * 24 // 24 hrs
    })

    push("/")
  }

  const clean = () => {
    setRefreshToken(null)
    setUser(null)
    destroyCookie(undefined, "fastgas.token")
  }
  console.log(user)

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, refreshToken, signIn, logIn, clean }}
    >
      {children}
    </AuthContext.Provider>
  )
}
