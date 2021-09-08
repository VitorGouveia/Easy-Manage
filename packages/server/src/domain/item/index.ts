import { Request, Response } from "express"

import { createItemController } from "./useCases/CreateItem"

export const item = {
  create: async (request: Request, response: Response) => {
    return createItemController.handle(request, response)
  }
}
