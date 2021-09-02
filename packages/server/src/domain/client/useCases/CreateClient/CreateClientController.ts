import { Request, Response } from "express"

import { Controller } from "@infra/http/interface/Controller"
import { ok, clientError } from "@infra/http/interface/HttpResponse"

import {
  CreateClientRequestDTO,
  CreateClientResponseDTO
} from "./CreateClientDTO"
import { CreateClientUseCase } from "./CreateClientUseCase"

import { Client } from "@client/entities"

export class CreateClientController implements Controller {
  constructor(private createClientUseCase: CreateClientUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const clientData: Omit<Client, "id" & "userId"> = request.body
      const token = request.headers.authorization

      const data: CreateClientRequestDTO = {
        client: { ...clientData },

        token
      }
      const caseResponse = await this.createClientUseCase.execute(data)

      const { body, statusCode } = ok<CreateClientResponseDTO>(caseResponse)

      return response.status(statusCode).json(body)
    } catch (error) {
      const { body, statusCode } = clientError(error)

      return response.status(statusCode).json(body)
    }
  }
}
