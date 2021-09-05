import { Request, Response } from "express"

import { createClientController } from "./useCases/CreateClient"
import { removeClientController } from "./useCases/RemoveClient"
import { updateClientController } from "./useCases/UpdateClient"
import { listClientController } from "./useCases/ListClient"

export const client = {
  create: async (request: Request, response: Response) => {
    return createClientController.handle(request, response)
  },

  delete: async (request: Request, response: Response) => {
    return removeClientController.handle(request, response)
  },

  update: async (request: Request, response: Response) => {
    return updateClientController.handle(request, response)
  },

  list: async (request: Request, response: Response) => {
    return listClientController.handle(request, response)
  }
}
