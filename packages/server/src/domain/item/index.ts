import { Request, Response } from "express"

import { createItemController } from "./useCases/CreateItem"
import { updateItemController } from "./useCases/UpdateItem"

export const item = {
  create: async (request: Request, response: Response) => {
    return createItemController.handle(request, response)
  },

  update: async (request: Request, response: Response) => {
    return updateItemController.handle(request, response)
  }
}
