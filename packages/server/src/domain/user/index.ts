import { Request, Response } from "express"

import { createUserController } from "./useCases/CreateUser"
import { authUserController } from "./useCases/AuthUser"

export const user = {
  create: async (request: Request, response: Response) => {
    return createUserController.handle(request, response)
  },

  login: async (request: Request, response: Response) => {
    return authUserController.handle(request, response)
  }
}
