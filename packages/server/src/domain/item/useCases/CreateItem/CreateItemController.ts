import { Request, Response } from "express"

import { Controller } from "@infra/http/interface/Controller"
import { created, clientError } from "@infra/http/interface/HttpResponse"

import { CreateItemRequestDTO, CreateItemResponseDTO } from "./CreateItemDTO"
import { CreateItemUseCase } from "./CreateItemUseCase"

export class CreateItemController implements Controller {
  constructor(private createItemUseCase: CreateItemUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const token = request.headers.authorization

      const item = request.body as CreateItemRequestDTO

      const caseResponse = await this.createItemUseCase.execute({
        token,
        ...item
      })

      const { body, statusCode } = created<CreateItemResponseDTO>(caseResponse)

      return response.status(statusCode).json(body)
    } catch (error) {
      const { body, statusCode } = clientError(error)

      return response.status(statusCode).json(body)
    }
  }
}
