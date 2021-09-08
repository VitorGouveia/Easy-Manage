import { Request, Response } from "express"

import { Controller } from "@infra/http/interface/Controller"
import { ok, clientError } from "@infra/http/interface/HttpResponse"

import { RemoveItemResponseDTO } from "./RemoveItemDTO"
import { RemoveItemUseCase } from "./RemoveItemUseCase"

export class RemoveItemController implements Controller {
  constructor(private removeItemUseCase: RemoveItemUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const id = request.params.itemId

      const caseResponse = await this.removeItemUseCase.execute({ id })

      const { body, statusCode } = ok<RemoveItemResponseDTO>(caseResponse)

      return response.status(statusCode).json(body)
    } catch (error) {
      const { body, statusCode } = clientError(error)

      return response.status(statusCode).json(body)
    }
  }
}
