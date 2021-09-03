import { Request, Response } from "express"

import { Controller } from "@infra/http/interface/Controller"
import { ok, clientError } from "@infra/http/interface/HttpResponse"

import {
  RemoveClientRequestDTO,
  RemoveClientResponseDTO
} from "./RemoveClientDTO"
import { RemoveClientUseCase } from "./RemoveClientUseCase"

export class RemoveClientController implements Controller {
  constructor(private removeClientUseCase: RemoveClientUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data: RemoveClientRequestDTO = request.body

      const caseResponse = await this.removeClientUseCase.execute(data)

      const { body, statusCode } = ok<RemoveClientResponseDTO>(caseResponse)

      return response.status(statusCode).json(body)
    } catch (error) {
      const { body, statusCode } = clientError(error)

      return response.status(statusCode).json(body)
    }
  }
}
