import { Request, Response } from "express"

import { createUserController } from "./useCases/CreateUser"
import { authUserController } from "./useCases/AuthUser"
import { refreshUserTokenController } from "./useCases/RefreshUserToken"
import { getUserController } from "./useCases/GetUser"

export const user = {
  create: async (request: Request, response: Response) => {
    return createUserController.handle(request, response)
  },

  login: async (request: Request, response: Response) => {
    return authUserController.handle(request, response)
  },

  refreshToken: async (request: Request, response: Response) => {
    return refreshUserTokenController.handle(request, response)
  },

  list: async (request: Request, response: Response) => {
    return getUserController.handle(request, response)
  }
}
