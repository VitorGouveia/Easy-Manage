import { Request, Response } from "express"

import { createOrderController } from "./useCases/CreateOrder"

export const order = {
  create: async (request: Request, response: Response) => {
    return createOrderController.handle(request, response)
  }
}
