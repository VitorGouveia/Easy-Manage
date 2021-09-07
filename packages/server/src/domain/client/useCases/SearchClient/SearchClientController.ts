import { Request, Response } from "express"

import { Controller } from "@infra/http/interface/Controller"
import { ok, clientError } from "@infra/http/interface/HttpResponse"

import { SearchClientResponseDTO } from "./SearchClientDTO"
import { SearchClientUseCase } from "./SearchClientUseCase"

export class SearchClientController implements Controller {
  constructor(private searchClientUseCase: SearchClientUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const token = request.headers.authorization

      const query = request.query.query

      const caseResponse = await this.searchClientUseCase.execute({
        token,
        query: String(query)
      })

      const { body, statusCode } = ok<SearchClientResponseDTO>(caseResponse)

      return response.status(statusCode).json(body)
    } catch (error) {
      const { body, statusCode } = clientError(error)

      return response.status(statusCode).json(body)
    }
  }
}
