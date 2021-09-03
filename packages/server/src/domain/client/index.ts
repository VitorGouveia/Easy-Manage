import { Request, Response } from "express"

import { createClientController } from "./useCases/CreateClient"
import { removeClientController } from "./useCases/RemoveClient"

export const client = {
  create: async (request: Request, response: Response) => {
    return createClientController.handle(request, response)
  },

  delete: async (request: Request, response: Response) => {
    return removeClientController.handle(request, response)
  }
}
