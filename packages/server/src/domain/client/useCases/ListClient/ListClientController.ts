import { Request, Response } from "express"

import { Controller } from "@infra/http/interface/Controller"
import { ok, clientError } from "@infra/http/interface/HttpResponse"

import { ListClientResponseDTO } from "./ListClientDTO"
import { ListClientUseCase } from "./ListClientUseCase"

export class ListClientController implements Controller {
  constructor(private listClientUseCase: ListClientUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const token = request.headers.authorization

      const caseResponse = await this.listClientUseCase.execute({ token })

      const { body, statusCode } = ok<ListClientResponseDTO>(caseResponse)

      return response.status(statusCode).json(body)
    } catch (error) {
      const { body, statusCode } = clientError(error)

      return response.status(statusCode).json(body)
    }
  }
}
