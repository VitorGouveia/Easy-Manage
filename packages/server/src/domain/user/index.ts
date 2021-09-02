import { Request, Response } from "express"

import { createUserController } from "./useCases/CreateUser"

export const user = {
  create: async (request: Request, response: Response) => {
    return createUserController.handle(request, response)
  }
}
