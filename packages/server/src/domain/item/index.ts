import { Request, Response } from "express"

import { createItemController } from "./useCases/CreateItem"
import { updateItemController } from "./useCases/UpdateItem"
import { removeItemController } from "./useCases/RemoveItem"
import { listItemControler } from "./useCases/ListItem"

export const item = {
  create: async (request: Request, response: Response) => {
    return createItemController.handle(request, response)
  },

  update: async (request: Request, response: Response) => {
    return updateItemController.handle(request, response)
  },

  delete: async (request: Request, response: Response) => {
    return removeItemController.handle(request, response)
  },

  list: async (request: Request, response: Response) => {
    return listItemControler.handle(request, response)
  }
}
