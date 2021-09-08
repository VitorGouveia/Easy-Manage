import { Request, Response } from "express"

import { Controller } from "@infra/http/interface/Controller"
import { created, clientError } from "@infra/http/interface/HttpResponse"

import { CreateOrderResponseDTO } from "./CreateOrderDTO"
import { CreateOrderUseCase } from "./CreateOrderUseCase"

export class CreateOrderController implements Controller {
  constructor(private createOrderUseCase: CreateOrderUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const token = request.headers.authorization
      const data = request.body

      const caseResponse = await this.createOrderUseCase.execute({
        token,
        ...data
      })

      const { body, statusCode } = created<CreateOrderResponseDTO>(caseResponse)

      return response.status(statusCode).json(body)
    } catch (error) {
      const { body, statusCode } = clientError(error)

      return response.status(statusCode).json(body)
    }
  }
}
