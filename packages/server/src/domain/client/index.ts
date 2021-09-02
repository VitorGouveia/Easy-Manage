import { Request, Response } from "express"

import { createClientController } from "./useCases/CreateClient"

export const client = {
  create: async (request: Request, response: Response) => {
    return createClientController.handle(request, response)
  }
}
