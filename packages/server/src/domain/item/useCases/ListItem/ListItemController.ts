import { Request, Response } from "express"

import { Controller } from "@infra/http/interface/Controller"
import { ok, clientError } from "@infra/http/interface/HttpResponse"

import { ListItemResponseDTO } from "./ListItemDTO"
import { ListItemUseCase } from "./ListItemUseCase"

export class ListItemController implements Controller {
  constructor(private listItemUseCase: ListItemUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const token = request.headers.authorization

      const caseResponse = await this.listItemUseCase.execute({
        token
      })

      const { body, statusCode } = ok<ListItemResponseDTO>(caseResponse)

      return response.status(statusCode).json(body)
    } catch (error) {
      const { body, statusCode } = clientError(error)

      return response.status(statusCode).json(body)
    }
  }
}
