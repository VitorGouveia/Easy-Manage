import { Request, Response } from "express"

import { Controller } from "@infra/http/interface/Controller"
import { ok, clientError } from "@infra/http/interface/HttpResponse"

import { GetUserResponseDTO } from "./GetUserDTO"
import { GetUserUseCase } from "./GetUserUseCase"

export class GetUserController implements Controller {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const token = request.headers.authorization

      const caseResponse = await this.getUserUseCase.execute({ token })

      const { body, statusCode } = ok<GetUserResponseDTO>(caseResponse)

      return response.status(statusCode).json(body)
    } catch (error) {
      const { body, statusCode } = clientError(error)

      return response.status(statusCode).json(body)
    }
  }
}
