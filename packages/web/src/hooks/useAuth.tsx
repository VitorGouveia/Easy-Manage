import { useContext } from "react"

import { AuthContext } from "@contexts"

export const useAuth = () => {
  const authProvider = useContext(AuthContext)

  return authProvider
}
