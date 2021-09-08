import { Request, Response } from "express"

import { Controller } from "@infra/http/interface/Controller"
import { ok, clientError } from "@infra/http/interface/HttpResponse"

import { UpdateItemResponseDTO } from "./UpdateItemDTO"
import { UpdateItemUseCase } from "./UpdateItemUseCase"

export class UpdateItemController implements Controller {
  constructor(private updateItemUseCase: UpdateItemUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const token = request.headers.authorization
      const itemId = request.params.itemId

      const item = request.body

      const caseResponse = await this.updateItemUseCase.execute({
        token,
        itemId,
        ...item
      })

      const { body, statusCode } = ok<UpdateItemResponseDTO>(caseResponse)

      return response.status(statusCode).json(body)
    } catch (error) {
      const { body, statusCode } = clientError(error)

      return response.status(statusCode).json(body)
    }
  }
}
