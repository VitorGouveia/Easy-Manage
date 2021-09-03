import { Request, Response } from "express"

import { Controller } from "@infra/http/interface/Controller"
import { ok, clientError } from "@infra/http/interface/HttpResponse"

import {
  UpdateClientRequestDTO,
  UpdateClientResponseDTO
} from "./UpdateClientDTO"
import { UpdateClientUseCase } from "./UpdateClientUseCase"

export class UpdateClientController implements Controller {
  constructor(private updateClientUseCase: UpdateClientUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const id = request.params.id
      const client = request.body

      const data: UpdateClientRequestDTO = {
        id,
        client
      }

      const caseResponse = await this.updateClientUseCase.execute(data)

      const { body, statusCode } = ok<UpdateClientResponseDTO>(caseResponse)

      return response.status(statusCode).json(body)
    } catch (error) {
      const { body, statusCode } = clientError(error)

      return response.status(statusCode).json(body)
    }
  }
}
